import { Avatar } from './Avatar';
import { UserEntity } from 'types';

type Props = {
  user: UserEntity;
};

export const UserProfile = ({ user }: Props): JSX.Element => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar
        user={{ userName: user.username }}
        className="bg-primary text-white z-10"
      />
      <p className="bg-primary text-black px-4 py-1 -ml-4 min-w-[160px]">
        {user.username}
      </p>
    </div>
  );
};
