import { CreateComment, CommentList } from 'components';
import { useComment } from 'hooks';

export const HomePage = (): JSX.Element => {
  const { comments, onDeleteCommentItem } = useComment();

  return (
    <div className="wrapper py-8">
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-3/6 flex flex-col gap-10">
          <CommentList
            comments={comments}
            onDeleteCommentItem={onDeleteCommentItem}
          />
          <div className="ml-6">
            <CreateComment />
          </div>
        </div>
      </div>
    </div>
  );
};
