// Card Data
export interface CardData {
  icon: string;
  tickets: number;
  title: string;
  text: string;
}

// Table Data
export interface TableData {
  id: string;
  title: string;
  category: string;
  des: string;
  priority: string;
  creator: string;
  created_date: string;
  expired_date: string;
  status: string;
}

// Search Data
export interface SearchResult {
  tickets: TableData[];
  total: number;
}
