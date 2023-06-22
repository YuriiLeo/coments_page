import { useMemo } from 'react';
import clsx from 'clsx';

import { getInitialsFromUserName } from 'utils/helpers';

type Props = {
  user: {
    userName: string;
  };
  className?: string;
};

export const Avatar = ({ user, className }: Props): JSX.Element => {
  const initials = useMemo(
    () => getInitialsFromUserName(user.userName),
    [user.userName],
  );

  return (
    <div
      className={clsx(
        'flex justify-center items-center rounded-full text-lg w-16 h-16',
        className,
      )}
    >
      {initials}
    </div>
  );
};
