import {
  useState,
  createContext,
  useContext,
  PropsWithChildren,
  useCallback,
} from 'react';

import { CommentEntity } from 'types';

type State = {
  comments: CommentEntity[] | undefined;
  updateComments: (comments: CommentEntity[] | undefined) => void;
};

const initialState: State = {
  comments: undefined,

  updateComments: (_comments: CommentEntity[] | undefined) => {
    // nothing
  },
};

const CommentContext = createContext<State>(initialState);

export const CommentProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [comments, setComments] = useState<CommentEntity[] | undefined>(
    initialState.comments,
  );

  const updateComments = useCallback(
    (comments: CommentEntity[] | undefined): void => {
      setComments(comments);
    },
    [],
  );

  return (
    <CommentContext.Provider
      value={{
        comments,

        updateComments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useCommentContext = (): State => useContext(CommentContext);
