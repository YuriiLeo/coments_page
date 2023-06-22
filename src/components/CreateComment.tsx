import { Form, FormProps } from 'react-final-form';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef } from 'react';

import { Button, FormTextArea } from 'components';
import {
  composeValidators,
  required,
  minLength,
  maxLength,
} from 'utils/form-validators';
import { useUser, useComment, useLocalStorage } from 'hooks';
import { CommentEntity } from 'types';
import { COMMENT_DRAFT_KEY } from 'utils/consts';

type FormValues = {
  comment: string;
};

export const CreateComment = (): JSX.Element => {
  const { currentUser } = useUser();
  const { onCreateCommentItem } = useComment();
  const draftCommentStorage = useLocalStorage<
    { commentMessage: string } | undefined
  >(COMMENT_DRAFT_KEY, undefined);

  const draftCommentRef = useRef<string | null>(null);

  const onSubmit = async (
    { comment }: FormValues,
    formApi: FormProps<FormValues>['form'],
  ): Promise<void> => {
    const newComment: CommentEntity = {
      id: uuidv4(),
      body: comment,
      postId: 3, // TODO implement in future
      user: currentUser,
    };

    await onCreateCommentItem(newComment);

    draftCommentStorage.removeValue();
    formApi?.reset();
  };

  const getValidationRules = ({
    comment,
  }: FormValues): Record<keyof FormValues, string | undefined> => {
    const errors = {
      comment: composeValidators(
        required,
        minLength(3),
        maxLength(255),
      )(comment),
    };

    return errors;
  };

  useEffect(() => {
    const onBeforeUnload = (event: BeforeUnloadEvent): void => {
      event.preventDefault();

      if (draftCommentRef.current) {
        return draftCommentStorage.setValue({
          commentMessage: draftCommentRef.current,
        });
      }
      return draftCommentStorage.removeValue();
    };

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [draftCommentStorage]);

  return (
    <Form<FormValues>
      initialValues={{
        comment: draftCommentStorage.readValue()?.commentMessage,
      }}
      onSubmit={onSubmit}
      validate={getValidationRules}
      render={({
        values,
        handleSubmit,
        submitting,
        hasValidationErrors,
      }): JSX.Element => {
        draftCommentRef.current = values.comment;

        return (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <FormTextArea
                name="comment"
                placeholder="Type your comment here..."
                hideError
              />
              <Button
                type="submit"
                className="w-1/6 ml-auto -mt-5 -mr-5 btn-shadow"
                disabled={submitting || hasValidationErrors}
              >
                Send
              </Button>
            </div>
          </form>
        );
      }}
    ></Form>
  );
};
