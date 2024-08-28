import { IsString } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  document: string;
}
