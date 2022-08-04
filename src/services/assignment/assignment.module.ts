import { Module } from '@nestjs/common';
import { AssignmentController } from './assignment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Assignment, AssignmentSchema } from 'src/schemas/assignment';
import { AssignmentService } from './assignment.service';

@Module({
  controllers: [AssignmentController],
  imports: [
    MongooseModule.forFeature([
      { name: Assignment.name, schema: AssignmentSchema },
    ]),
  ],
  providers: [AssignmentService],
})
export class AssignmentModule {}
