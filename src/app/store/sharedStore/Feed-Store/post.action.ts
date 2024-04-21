import { createAction, props } from '@ngrx/store';
import { AddPost, Post, } from './post.model';

export const loadPosts = createAction('[Post] Load Posts');

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);

export const addPost = createAction(
  '[Post] Add Post',
  props<{ post: AddPost  }>()
);

export const addPostSuccess = createAction(
  '[Post] Add Post Success',
  props<{ post: Post }>()
);

export const addPostFailure = createAction(
  '[Post] Add Post Failure',
  props<{ error: any }>()
);



export const likePost = createAction('[Post] Like Post', props<{ postId: string }>());
export const likePostSuccess = createAction('[Post] Like Post Success', props<{ post: Post }>());
export const likePostFailure = createAction('[Post] Like Post Failure', props<{ error: any }>());

export const commentOnPost = createAction('[Post] Comment on Post', props<{ postId: string, comment: string }>());
export const commentOnPostSuccess = createAction('[Post] Comment on Post Success', props<{ postId: string, comment: string }>());
export const commentOnPostFailure = createAction('[Post] Comment on Post Failure', props<{ error: any }>());

export const deleteComment = createAction('[Post] Delete Comment', props<{ postId: string, commentId: string }>());
export const deleteCommentSuccess = createAction('[Post] Delete Comment Success', props<{ postId: string, commentId: string }>());
export const deleteCommentFailure = createAction('[Post] Delete Comment Failure', props<{ error: any }>());