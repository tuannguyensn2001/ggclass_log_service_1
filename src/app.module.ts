import { Module } from '@nestjs/common';
import { AssignmentModule } from './services/assignment/assignment.module';

@Module({
  imports: [AssignmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
