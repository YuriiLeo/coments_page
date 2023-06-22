import { CommentEntity } from 'types';
import { Comment } from './Comment';

type Props = {
  comments: CommentEntity[] | undefined;

  onDeleteCommentItem: (commentId: number | string) => Promise<void>;
};

export const CommentList = ({
  comments,
  onDeleteCommentItem,
}: Props): JSX.Element => {
  return comments && comments.length > 0 ? (
    <div className="flex flex-col gap-3">
      {comments.map((comment) => (
        <Comment
          key={`comment-${comment.id}`}
          comment={comment}
          onDelete={onDeleteCommentItem}
        />
      ))}
    </div>
  ) : (
    <p className="text-center text-xl font-bold">Be the first to comment!</p>
  );
};
