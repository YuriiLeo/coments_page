import { UserEntity } from './User';

export interface CommentEntity {
  id: number | string;
  body: string;
  postId: number;
  user: UserEntity;
}
