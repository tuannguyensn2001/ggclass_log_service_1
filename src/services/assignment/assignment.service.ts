import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Assignment, AssignmentDocument } from 'src/schemas/assignment';
import { Model } from 'mongoose';

@Injectable()
export class AssignmentService {
  constructor(
    @InjectModel(Assignment.name)
    private assignmentModel: Model<AssignmentDocument>,
  ) {}

  async getAll(): Promise<Assignment[]> {
    return this.assignmentModel.find().exec();
  }
}
