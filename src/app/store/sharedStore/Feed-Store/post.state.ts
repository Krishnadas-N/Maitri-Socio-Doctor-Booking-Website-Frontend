import { Post } from './post.model';

export interface PostsState {
    posts: Post[];
    loading: boolean;
    loaded: boolean;
    error: any;
  } 

export const initialState: PostsState = {
    posts: [],
    loading: false,
    loaded: false,
    error: null,
  };

 
  
//   export interface AppState {
//   readonly posts: ReadonlyArray<Post>;
//     }