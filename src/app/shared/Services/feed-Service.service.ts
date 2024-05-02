import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get<Post[]>(this.apiUrl);
  }

  
    addPost(postData: AddPost): Observable<Post> {
      const formData = new FormData();
      formData.append('title', postData.title);
      formData.append('content', postData.content);
      if( postData.tags && postData.media){
        postData.tags?.forEach(tag => formData.append('tags', tag));
        postData.media.forEach(file => formData.append('media', file));
      }
      
      console.log("post data from service", postData);
      return this.http.post<Post>(this.apiUrl, formData);
    }

    editPost(postId: string, updatedPost: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/edit/${postId}`, updatedPost);
    }
  

  deletePost(postId: string): Observable<any> {
    const url = `${this.apiUrl}/p/${postId}`;
    return this.http.delete<any>(url);
  }
  likePost(postId: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${postId}/like`, {});
  }

  
  commentOnPost(postId: string, comment: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${postId}/comment`, { comment });
  }

  deleteComment(postId: string, commentId: string): Observable<void> {
    return this.http.delete<void>(`your_api_url/posts`);
  }

  loadCurrentDoctorPosts():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-doctor-posts`)
  }

  replyToComment(postId:string,commentId:string,content:string): Observable<any>{
     return this.http.post<any>(`${this.apiUrl}/${postId}/comment/reply`,{commentId,content})
  }

  getPostById(postId:string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/p/${postId}`)
  }
}
