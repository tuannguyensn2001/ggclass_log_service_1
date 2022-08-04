/* eslint-disable */
import { Timestamp } from '../../google/protobuf/timestamp';
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'assignment';

export interface LogAssignment {
  id: string;
  assignmentId: number;
  action: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface GetLogAssignmentByAssignmentRequest {
  assignmentId: number;
}

export interface GetLogAssignmentByAssignmentResponse {
  data: LogAssignment[];
}

function createBaseLogAssignment(): LogAssignment {
  return {
    id: '',
    assignmentId: 0,
    action: '',
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const LogAssignment = {
  encode(
    message: LogAssignment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(50).string(message.id);
    }
    if (message.assignmentId !== 0) {
      writer.uint32(16).int64(message.assignmentId);
    }
    if (message.action !== '') {
      writer.uint32(26).string(message.action);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogAssignment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogAssignment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.id = reader.string();
          break;
        case 2:
          message.assignmentId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.action = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogAssignment {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      assignmentId: isSet(object.assignmentId)
        ? Number(object.assignmentId)
        : 0,
      action: isSet(object.action) ? String(object.action) : '',
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
    };
  },

  toJSON(message: LogAssignment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.assignmentId !== undefined &&
      (obj.assignmentId = Math.round(message.assignmentId));
    message.action !== undefined && (obj.action = message.action);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogAssignment>, I>>(
    object: I,
  ): LogAssignment {
    const message = createBaseLogAssignment();
    message.id = object.id ?? '';
    message.assignmentId = object.assignmentId ?? 0;
    message.action = object.action ?? '';
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseGetLogAssignmentByAssignmentRequest(): GetLogAssignmentByAssignmentRequest {
  return { assignmentId: 0 };
}

export const GetLogAssignmentByAssignmentRequest = {
  encode(
    message: GetLogAssignmentByAssignmentRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.assignmentId !== 0) {
      writer.uint32(8).int64(message.assignmentId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetLogAssignmentByAssignmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLogAssignmentByAssignmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assignmentId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLogAssignmentByAssignmentRequest {
    return {
      assignmentId: isSet(object.assignmentId)
        ? Number(object.assignmentId)
        : 0,
    };
  },

  toJSON(message: GetLogAssignmentByAssignmentRequest): unknown {
    const obj: any = {};
    message.assignmentId !== undefined &&
      (obj.assignmentId = Math.round(message.assignmentId));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetLogAssignmentByAssignmentRequest>, I>,
  >(object: I): GetLogAssignmentByAssignmentRequest {
    const message = createBaseGetLogAssignmentByAssignmentRequest();
    message.assignmentId = object.assignmentId ?? 0;
    return message;
  },
};

function createBaseGetLogAssignmentByAssignmentResponse(): GetLogAssignmentByAssignmentResponse {
  return { data: [] };
}

export const GetLogAssignmentByAssignmentResponse = {
  encode(
    message: GetLogAssignmentByAssignmentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.data) {
      LogAssignment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetLogAssignmentByAssignmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLogAssignmentByAssignmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(LogAssignment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLogAssignmentByAssignmentResponse {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => LogAssignment.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetLogAssignmentByAssignmentResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? LogAssignment.toJSON(e) : undefined,
      );
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetLogAssignmentByAssignmentResponse>, I>,
  >(object: I): GetLogAssignmentByAssignmentResponse {
    const message = createBaseGetLogAssignmentByAssignmentResponse();
    message.data = object.data?.map((e) => LogAssignment.fromPartial(e)) || [];
    return message;
  },
};

export interface LogAssignmentService {
  GetLogAssignmentByAssignment(
    request: GetLogAssignmentByAssignmentRequest,
  ): Promise<GetLogAssignmentByAssignmentResponse>;
}

export class LogAssignmentServiceClientImpl implements LogAssignmentService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetLogAssignmentByAssignment =
      this.GetLogAssignmentByAssignment.bind(this);
  }
  GetLogAssignmentByAssignment(
    request: GetLogAssignmentByAssignmentRequest,
  ): Promise<GetLogAssignmentByAssignmentResponse> {
    const data = GetLogAssignmentByAssignmentRequest.encode(request).finish();
    const promise = this.rpc.request(
      'assignment.LogAssignmentService',
      'GetLogAssignmentByAssignment',
      data,
    );
    return promise.then((data) =>
      GetLogAssignmentByAssignmentResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
