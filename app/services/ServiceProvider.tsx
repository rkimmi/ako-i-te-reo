import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { OpenAiApiService } from './open-ai-api.service';

interface ServiceContextType {
  openAiService: OpenAiApiService;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const openAiService = useMemo(() => new OpenAiApiService(), []);

  return (
    <ServiceContext.Provider value={{ openAiService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useServices must be used within a ServiceProvider');
  }
  return context;
};