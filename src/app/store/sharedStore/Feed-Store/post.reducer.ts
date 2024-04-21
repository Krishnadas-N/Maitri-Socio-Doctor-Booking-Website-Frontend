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
  })),
  on(PostActions.likePost, state => ({ ...state, loading: true })),
  on(PostActions.likePostSuccess, (state, { post }) => {
    const updatedPosts = state.posts.map(p => p._id === post._id ? {...p,likes:post.likes} : p);
    console.log("log from post reducer like",post,updatedPosts);
    return { ...state, loading: false, posts: updatedPosts };
  }),
  on(PostActions.likePostFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(PostActions.commentOnPost, state => ({
    ...state,
    loading: true
  })),
  on(PostActions.commentOnPostSuccess, (state, { postId, comment }) => ({
    ...state,
    loading: false,
    // posts: state.posts.map(post => 
    //   post._id === postId ? { ...post, comments: [...post.comments, comment] } : post
    // )
  })),
  on(PostActions.commentOnPostFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(PostActions.deleteComment, state => ({
    ...state,
    loading: true
  })),
  on(PostActions.deleteCommentSuccess, (state, { postId, commentId }) => ({
    ...state,
    loading: false,
    posts: state.posts.map(post => ({
      ...post,
      comments: post?.comments.filter(comment => comment._id !== commentId)
    }))
  })),
  on(PostActions.deleteCommentFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
);

export const postReducer = (state: any, action: any) => {
    return _postReducerHelper(state, action);
};