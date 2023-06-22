import { UserProfile, CloseButton } from 'components';
import { CommentEntity } from 'types';

type Props = {
  comment: CommentEntity;
  onDelete: (commentId: number | string) => Promise<void>;
};

export const Comment = ({ comment, onDelete }: Props): JSX.Element => {
  const { user, body, id } = comment;

  return (
    <section>
      <div className="flex items-center justify-between">
        <UserProfile user={user} />
        <CloseButton onClose={async (): Promise<void> => onDelete(id)} />
      </div>
      <p className="bg-secondary shadow-lg p-4 pt-8 -mt-8 ml-6 mr-3 min-h-[100px]">
        {body}
      </p>
    </section>
  );
};
