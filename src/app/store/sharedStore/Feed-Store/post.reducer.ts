import { createReducer, on } from '@ngrx/store';
import { Post } from './post.model';
import * as PostActions from './post.action';
import { initialState, PostsState } from './post.state';

 const _postReducerHelper = createReducer(
  initialState,

  on(PostActions.loadPosts, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null
  })),

  on(PostActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
    loading: false,
    loaded: true
  })),

  on(PostActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  })),

  on(PostActions.addPost, (state) => ({
    ...state,
    loading: true
  })),

  on(PostActions.addPostSuccess, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post],
    loading: false,
    loaded: true
  })),

  on(PostActions.addPostFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  }))
);

export const postReducer = (state: any, action: any) => {
    return _postReducerHelper(state, action);
};