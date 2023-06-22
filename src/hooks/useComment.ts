import { useEffect } from 'react';

import { CommentEntity } from 'types';
import * as DummyJsonApi from 'services/api/dummyJson';
import { useCommentContext } from 'context';
import { useLocalStorage } from './useLocalStorage';
import { COMMENT_LIST_KEY } from 'utils/consts';

type ReturnData = {
  comments: CommentEntity[] | undefined;

  onCreateCommentItem: (comment: CommentEntity) => Promise<CommentEntity>;
  onDeleteCommentItem: (commentId: number | string) => Promise<void>;
};

export const useComment = (): ReturnData => {
  const { comments, updateComments } = useCommentContext();
  const localStorage = useLocalStorage<CommentEntity[] | undefined>(COMMENT_LIST_KEY, undefined);

  const onCreateCommentItem = async (comment: CommentEntity): Promise<CommentEntity> => {
    await DummyJsonApi.addNewComment({ body: comment.body, postId: comment.postId, userId: comment.user.id });

    const updatedComments = comments ? [...comments, comment] : [comment];

    updateComments(updatedComments)
    localStorage.setValue(updatedComments);

    return comment;
  }

  const onDeleteCommentItem = async (commentId: number | string): Promise<void> => {
    await DummyJsonApi.deleteComment(commentId);

    const updatedComments = comments?.filter(
      (commentItem) => commentItem.id !== commentId,
    ) ?? [];

    updateComments(updatedComments);
    localStorage.setValue(updatedComments);
  };

  useEffect(() => {
    const fetchAllComments = async (): Promise<void> => {
      const response = await DummyJsonApi.getAllComments();

      updateComments(response);
      localStorage.setValue(response);
    }

    const persistedComments = localStorage.readValue();

    if (!persistedComments) {
      fetchAllComments();
    }

    if (!comments) {
      updateComments(persistedComments);
    }

  }, [comments, updateComments, localStorage]);

  return {
    comments,

    onCreateCommentItem,
    onDeleteCommentItem,
  };
};
