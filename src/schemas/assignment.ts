import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type AssignmentDocument = Assignment & Document;

@Schema({
  timestamps: true,
})
export class Assignment extends Document {
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
