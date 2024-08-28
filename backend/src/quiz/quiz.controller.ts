import { Controller, Post, Body } from '@nestjs/common';
import { OpenaiService } from '../openai/openai.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('generate')
  async generateQuiz(@Body('document') document: string) {
    const questions = await this.openaiService.generateQuiz(document);
    return { questions };
  }
}
