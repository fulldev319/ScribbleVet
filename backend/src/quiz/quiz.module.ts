import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { OpenAiService } from '../openai/openai.service';

@Module({
  providers: [QuizService, OpenAiService],
  controllers: [QuizController],
})
export class QuizModule {}
