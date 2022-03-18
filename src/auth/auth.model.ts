import { prop } from '@typegoose/typegoose/lib/prop';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface AuthModel extends Base {}
export class AuthModel extends TimeStamps {
  @prop({ unique: true })
  email: string;

  @prop()
  passwordHash: string;
}
