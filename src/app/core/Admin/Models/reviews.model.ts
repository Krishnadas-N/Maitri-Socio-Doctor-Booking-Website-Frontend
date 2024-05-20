export interface ReviewDetails {
  _id:string;
    patientName: string;
    doctorName: string;
    rating: number;
    comment: string;
    createdAt: Date;
    patientId:string;
    doctorId:string;
}


export interface PaginatedReviewResult {
  reviews: ReviewDetails[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}