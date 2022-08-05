import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Assignment, AssignmentDocument } from 'src/schemas/assignment';
import { Model } from 'mongoose';
import { RabbitmqService } from 'src/providers/rabbitmq/rabbitmq.service';

@Injectable()
export class AssignmentService implements OnModuleInit {
  constructor(
    @InjectModel(Assignment.name)
    private assignmentModel: Model<AssignmentDocument>,
    private rabbitMQService: RabbitmqService,
  ) {}

  async getAll(): Promise<Assignment[]> {
    return this.assignmentModel.find().exec();
  }

  async create(
    assignment: Pick<Assignment, 'assignmentId' | 'action'>,
  ): Promise<Assignment> {
    return await this.assignmentModel.create({
      assignmentId: assignment.assignmentId,
      action: assignment.action,
    });
  }

  onModuleInit() {
    this.rabbitMQService.bindExchange('logs', 'direct', 'assignment', (msg) => {
      const assignment: Pick<Assignment, 'assignmentId' | 'action'> =
        JSON.parse(msg.content.toString());
      this.create(assignment);
    });
  }
}
