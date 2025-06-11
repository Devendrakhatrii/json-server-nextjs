"use client";
import Button from "@/components/Button";
import useFetch from "@/hooks/useFetch";
import { deleteBook } from "@/services/bookService";
import { Book } from "@/types/book";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import React from "react";

const BookDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const { data, loading } = useFetch<Book>(`/books/${params.id}`);

  const handleDelete = async (id: string) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this book?"
      );
      if (!confirmed) return;

      await deleteBook(id);
      router.push("/books");
      router.refresh();
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete book. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!data) return notFound();

  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto border rounded-lg p-6 shadow-md">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

        <div className="space-y-4 mb-4">
          <p className="text-xl text-gray-600">Author: {data.author}</p>
          <p className="text-gray-700">Category: {data.category}</p>
          <p className="text-lg font-semibold text-green-600">
            Price: ${data.price.toFixed(2)}
          </p>
          <p className="text-gray-600">Stock: {data.stock} available</p>
          {data.description && (
            <p className="text-gray-700">{data.description}</p>
          )}
        </div>
        <div className="flex gap-6">
          <Link href={`/books/${data.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <Button variant="danger" onClick={() => handleDelete(data.id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
