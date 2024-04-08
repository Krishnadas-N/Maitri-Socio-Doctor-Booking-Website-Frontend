import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPost, Post } from '../../store/sharedStore/Feed-Store/post.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private apiUrl = 'http://localhost:3000/api/posts';
  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  addPost(postData: AddPost): Observable<Post> {
    console.log("post data from service",postData);
    return this.http.post<Post>(this.apiUrl, postData).pipe(catchError(this.handleError));
  }

  updatePost(postId: string, postData: FormData): Observable<Post> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.put<Post>(url, postData).pipe(catchError(this.handleError));
  }

  deletePost(postId: string): Observable<void> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.delete<void>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.log(error);
    let errorMessage = '';
  
    if (error.error && error.error.error && error.error.error.message) {
      errorMessage = `Error: ${error.status}\t ${error.error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    
    return throwError(errorMessage);
  }

}
