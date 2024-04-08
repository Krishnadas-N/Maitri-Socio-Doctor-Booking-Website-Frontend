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
            map(post => PostActions.addPostSuccess({ post })),
            catchError(error => of(PostActions.addPostFailure({ error })))
        ))
    ));
      
}