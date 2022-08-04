import { Module } from '@nestjs/common';
import { AssignmentController } from './assignment.controller';

@Module({
  controllers: [AssignmentController],
})
export class AssignmentModule {}
