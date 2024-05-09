// src/app/store/posts/post.model.ts
export interface Post {
   _id:string;
   doctorId:{_id:string,profilePic:string,firstName:string} | string;
   doctorName: string; 
   doctorProfileImage:string;
    title: string;
    content: string;
    media: PostMedia[];
    tags: string[];
    createdAt: Date;
    likes: Like[];
    comments: Comment[];
    isLikedByUser:boolean;
    savedBy?:SavedPost[];
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

  export interface SavedPost {
    userId: string;
    createdAt: Date;
  }
  
  
  export interface Comment {
    _id: string;
    userId: string | {
      _id: string;
      firstName: string;
      lastName: string; // Optional if present in your data
      profilePic: string; // Optional if present in your data
    };
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



export interface PostModel{
  post:Post;
  isLikedUser:boolean,
  isPermissionToCrud:boolean
}