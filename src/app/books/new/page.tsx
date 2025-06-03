"use client";
import React from "react";
import { useRouter } from "next/navigation";
import BookForm from "@/components/BookForm";
import { createBook } from "@/services/bookService";
import { BookFormData } from "@/types/book";

const NewBookPage = () => {
  const router = useRouter();

  const handleSubmit = async (data: BookFormData) => {
    await createBook(data);
    router.push("/books");
    router.refresh();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Book</h1>
      <BookForm onSubmit={handleSubmit} submitLabel="Add Book" />
    </div>
  );
};

export default NewBookPage;
