import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AssignmentDocument = Assignment & Document;

@Schema({
  timestamps: true,
  collection: 'logassignments',
})
export class Assignment {
  @Prop()
  _id: string;

  @Prop()
  assignmentId: number;

  @Prop()
  action: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const AssignmentSchema = SchemaFactory.createForClass(Assignment);
