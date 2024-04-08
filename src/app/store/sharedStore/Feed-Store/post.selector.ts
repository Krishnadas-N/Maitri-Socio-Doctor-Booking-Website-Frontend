import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../GlobalStore/app.state';
import { PostsState } from './post.state';

// Selectors
export const selectPostsState =  (state: AppState) => state.posts;

export const selectPosts = createSelector(
  selectPostsState,
  (state: PostsState) => state.posts
);

export const selectPostsLoading = createSelector(
  selectPostsState,
  (state: PostsState) => state.loading
);

export const selectPostsLoaded = createSelector(
  selectPostsState,
  (state: PostsState) => state.loaded
);

export const selectPostsError = createSelector(
  selectPostsState,
  (state: PostsState) => state.error
);
