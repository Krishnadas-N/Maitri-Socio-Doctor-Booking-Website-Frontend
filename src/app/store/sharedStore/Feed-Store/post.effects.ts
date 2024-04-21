import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { FeedService } from "../../../shared/Services/feed-Service.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PostActions from './post.action'
import { catchError, map, of, switchMap, tap } from "rxjs";

@Injectable()

export class postEffects{
    constructor(private actions$:Actions,private feedService:FeedService){}

    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(PostActions.loadPosts),
        switchMap(() => this.feedService.getAllPosts().pipe(
            tap((data) => console.log("data from load posts", data)),
            map((res: any) => PostActions.loadPostsSuccess({ posts: res.data })),
            catchError(error => of(PostActions.loadPostsFailure({ error })))
        ))
    ));

    addPost$ = createEffect(() => this.actions$.pipe(
        ofType(PostActions.addPost),
        switchMap(({ post }) => this.feedService.addPost(post).pipe(
            map((res:any) => PostActions.addPostSuccess({ post:res.data })),
            catchError(error => of(PostActions.addPostFailure({ error })))
        ))
    ));
      
    likePost$ = createEffect(() => this.actions$.pipe(
        ofType(PostActions.likePost),
        switchMap(({ postId }) => this.feedService.likePost(postId).pipe(
          map((res:any) => PostActions.likePostSuccess({ post:res.data })),
          catchError(error => of(PostActions.likePostFailure({ error })))
        ))
      ));

      commentOnPost$ = createEffect(() => this.actions$.pipe(
        ofType(PostActions.commentOnPost),
        switchMap(({ postId, comment }) => this.feedService.commentOnPost(postId, comment).pipe(
          map(() => PostActions.commentOnPostSuccess({ postId, comment })),
          catchError(error => of(PostActions.commentOnPostFailure({ error })))
        ))
      ));
    
      deleteComment$ = createEffect(() => this.actions$.pipe(
        ofType(PostActions.deleteComment),
        switchMap(({ postId, commentId }) => this.feedService.deleteComment(postId, commentId).pipe(
          map(() => PostActions.deleteCommentSuccess({ postId, commentId })),
          catchError(error => of(PostActions.deleteCommentFailure({ error })))
        ))
      ));
}