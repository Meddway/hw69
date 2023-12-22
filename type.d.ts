export interface Show {
  id: number;
  name: string;
}

export interface SearchResult {
  score?: number;
  show: Show;
}