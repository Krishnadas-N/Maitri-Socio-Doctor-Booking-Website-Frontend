export interface FindDoctorsRequest {
    searchQuery?: string;
    currentPage: number;
    pageSize: number;
    sortOption?: string;
    filters?: { [key: string ]: string[] }; 
  }