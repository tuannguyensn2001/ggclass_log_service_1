import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';

@Controller('assignment.proto')
export class AssignmentController {
  @GrpcMethod('LogAssignmentService', 'GetLogAssignmentByAssignment')
  async GetLogAssignmentByAssignment(data: any, metadata: Metadata, call: any) {
    console.log(data);
    return {
      data: [
        {
          id: 1,
          assignmentId: 1,
        },
      ],
    };
  }
}
