import OpenAI from 'openai';

export class OpenAiApiService {
    client: OpenAI;

    constructor() {
        this.client = new OpenAI({
            apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true, // TODO: Remove this and use backend API
        });
    }

    // TODO pass kinds per config
    // TODO Seperate flashcard prompts and api service
    private getFlashcardInstructions(): string {
        return `
Parse the following unstructured text into a structured flashcard format for language learning:

Extract:
1. The main word or phrase (title). Can be in any language.
2. All meanings/definitions with their grammatical categories

Categories to use: verb, noun, adjective, locative, particle, other

Respond with valid JSON only:
{
  "title": "string",
  "meanings": [
    {
      "kind": "verb|noun|adjective|locative|particle|other",
      "meaning": "string"
    }
  ],
}`;
    }
    public async generateResponse(text: string) {
        return await this.client.responses.create({
            model: 'gpt-4o',
            instructions: this.getFlashcardInstructions(),
            input: text,
        });
    }
}