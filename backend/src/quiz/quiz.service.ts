import { Injectable } from '@nestjs/common';
import { OpenAiService } from '../openai/openai.service';

@Injectable()
export class QuizService {
  constructor(private readonly openAiService: OpenAiService) {}

  async generateQuiz(document: string): Promise<{ questions: string[] }> {
    // Generate 5 questions using OpenAI
    const questions = await this.openAiService.generateQuestions(document);
    return { questions };
  }
}
