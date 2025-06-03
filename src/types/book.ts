export interface Book {
  id: string;
  title: string;
  author: string;
  category?: string;
  price: number;
  stock: number;
  description: string;
}

export interface BookFormData {
  title: string;
  author: string;
  category: string;
  price: string;
  stock: string;
  description: string;
}
