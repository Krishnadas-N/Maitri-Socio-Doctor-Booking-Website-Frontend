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
