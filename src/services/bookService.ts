import { Book, BookFormData } from "@/types/book";
import axiosInstance from "@/lib/axiosInstance";

const API_URL = "books";

export const createBook = async (bookData: BookFormData) => {
  const book = {
    ...bookData,
    price: parseFloat(bookData.price),
    stock: parseInt(bookData.stock),
  };
  const response = await axiosInstance.post<Book>(API_URL, book);
  return response.data;
};

export const updateBook = async (id: string, bookData: BookFormData) => {
  const book = {
    ...bookData,
    price: parseFloat(bookData.price),
    stock: parseInt(bookData.stock),
  };
  const response = await axiosInstance.put<Book>(`${API_URL}/${id}`, book);
  return response.data;
};

export const deleteBook = async (id: string) => {
  await axiosInstance.delete(`${API_URL}/${id}`);
};
