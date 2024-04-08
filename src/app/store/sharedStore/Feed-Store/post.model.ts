// src/app/store/posts/post.model.ts
export interface Post {
    doctorId: string; 
    title: string;
    content: string;
    media: PostMedia[];
    tags: string[];
    createdAt: Date;
    likes?: Like[];
    comments?: Comment[];
    reportedBy?: Report[];
    isBlocked?: boolean;
    isArchived?: boolean;
  }
  
  export interface PostMedia {
    url: string;
  }
  
  export interface Like {
    userId: string;
    timestamp: Date;
  }
  
  export interface Reply {
    userId: string;
    content: string;
    timestamp: Date;
    replies: Reply[]; // Nested structure
  }
  
  export interface Comment {
    userId: string;
    content: string;
    timestamp: Date;
    replies: Reply[];
  }
  
  export interface Report {
    userId: string;
    reason: string;
    timestamp: Date;
  }
  
  export interface AddPost{
    title: string;
    content: string;
    media?: File[];
    tags?: string[];
}