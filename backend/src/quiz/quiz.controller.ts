import { Controller, Post, Body } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post('generate')
  async generateQuiz(@Body() createQuizDto: CreateQuizDto) {
    return await this.quizService.generateQuiz(createQuizDto.document);
  }
}
