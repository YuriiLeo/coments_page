// API docs for more details https://dummyjson.com/docs/
import axios from 'axios';

import { CommentEntity } from "types";

const request = axios.create({
    baseURL: 'https://dummyjson.com',
});

// Comments
export const getAllComments = async (): Promise<CommentEntity[]> => {
    const { data } = await request.get<{ comments: CommentEntity[] }>('/comments?limit=5');

    return data.comments ?? []; // TODO uncomment
};

export const addNewComment = async (dto: {
    body: string;
    postId: number;
    userId: number
}): Promise<CommentEntity> => {
    const { data } = await request.post<CommentEntity>('/comments/add', dto);

    return data;
};

export const deleteComment = async (commentId: number | string): Promise<CommentEntity & { isDeleted: boolean; deleteOn: Date }> => {
    const tempId = typeof commentId === 'string' ? 1 : commentId; // TODO add support uuid

    const { data } = await request.delete<CommentEntity & { isDeleted: boolean; deleteOn: Date }>(`/comments/${tempId}`);

    return data;
};
