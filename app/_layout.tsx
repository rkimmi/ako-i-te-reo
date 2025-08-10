import { Stack } from "expo-router";
import { ServiceProvider } from "./services/ServiceProvider";

export default function RootLayout() {
  return (
    <ServiceProvider>
      <Stack />
    </ServiceProvider>
  );
}
