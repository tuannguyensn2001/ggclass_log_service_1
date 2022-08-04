import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  GetLogAssignmentByAssignmentRequest,
  GetLogAssignmentByAssignmentResponse,
  LogAssignment,
  LogAssignmentService,
} from 'src/proto_build/src/proto/assignment';
import { AssignmentService } from 'src/services/assignment/assignment.service';
import { Assignment } from 'src/schemas/assignment';

@Controller('assignment.proto')
export class AssignmentController implements LogAssignmentService {
  constructor(private service: AssignmentService) {}

  @GrpcMethod('LogAssignmentService', 'GetLogAssignmentByAssignment')
  async GetLogAssignmentByAssignment(
    request: GetLogAssignmentByAssignmentRequest,
  ): Promise<GetLogAssignmentByAssignmentResponse> {
    console.log('has request');
    const result = await this.service.getAll();
    const response: LogAssignment[] = result.map((item) => {
      return {
        id: item._id,
        assignmentId: item.assignmentId,
        action: item.action,
        createdAt: null,
        updatedAt: null,
      };
    });

    return {
      data: response,
    };
  }

  // @GrpcMethod('LogAssignmentService', 'GetLogAssignmentByAssignment')
  // async GetLogAssignmentByAssignment(data: any, metadata: Metadata, call: any) {
  //   console.log(data);
  //   return {
  //     data: [
  //       {
  //         id: 1,
  //         assignmentId: 1,
  //       },
  //     ],
  //   };
  // }
}
