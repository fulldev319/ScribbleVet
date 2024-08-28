import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenaiService {
  private openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }

  async generateQuiz(document: string): Promise<string[]> {
    const response = await this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Generate 5 yes/no questions based on the following document:\n\n${document}`,
      max_tokens: 150,
      temperature: 0.5,
    });

    return response.data.choices[0].text.trim().split('\n').filter(Boolean);
  }
}
