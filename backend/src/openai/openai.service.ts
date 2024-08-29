import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenAiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateQuestions(document: string): Promise<string[]> {
    const prompt = `Generate 5 yes/no questions based on the following text:\n\n${document}`;

    try {
      const response = await this.openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt,
        max_tokens: 150,
        temperature: 0.7,
      });

      // Parse the response into questions
      const questions = response.choices[0].text
        .split('\n')
        .filter((q) => q.trim() !== '');

      return questions.slice(0, 5); // Ensure only 5 questions are returned
    } catch (error) {
      console.error('Error generating questions:', error);
      throw new Error('Failed to generate questions.');
    }
  }
}
