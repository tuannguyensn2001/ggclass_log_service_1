import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';
import {
  GetLogAssignmentByAssignmentRequest,
  GetLogAssignmentByAssignmentResponse,
  LogAssignmentService,
} from 'src/proto_build/src/proto/assignment';

@Controller('assignment.proto')
export class AssignmentController implements LogAssignmentService {
  @GrpcMethod('LogAssignmentService', 'GetLogAssignmentByAssignment')
  async GetLogAssignmentByAssignment(
    request: GetLogAssignmentByAssignmentRequest,
  ): Promise<GetLogAssignmentByAssignmentResponse> {
    return {
      data: [
        {
          id: 'abc',
          assignmentId: 123,
          action: '123',
          createdAt: null,
          updatedAt: null,
        },
      ],
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
