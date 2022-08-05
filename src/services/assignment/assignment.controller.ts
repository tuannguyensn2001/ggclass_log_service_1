import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  GetLogAssignmentByAssignmentRequest,
  GetLogAssignmentByAssignmentResponse,
  LogAssignment,
  LogAssignmentService,
} from 'src/proto_build/src/proto/assignment';
import { AssignmentService } from 'src/services/assignment/assignment.service';

@Controller('assignment.proto')
export class AssignmentController implements LogAssignmentService {
  constructor(private service: AssignmentService) {}

  @GrpcMethod('LogAssignmentService', 'GetLogAssignmentByAssignment')
  async GetLogAssignmentByAssignment(
    request: GetLogAssignmentByAssignmentRequest,
  ): Promise<GetLogAssignmentByAssignmentResponse> {
    const result = await this.service.getAll();
    const response: LogAssignment[] = result.map((item) => {
      return {
        id: item._id,
        assignmentId: item.assignmentId,
        action: item.action,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    return {
      data: response,
    };
  }
}
