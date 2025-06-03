"use client";
import { useParams, useRouter } from "next/navigation";
import BookForm from "@/components/BookForm";
import { updateBook } from "@/services/bookService";
import { Book, BookFormData } from "@/types/book";
import useFetch from "@/hooks/useFetch";

const EditBookPage = () => {
  const router = useRouter();
  const params = useParams();
  const { data, loading } = useFetch<Book>(`/books/${params.id}`);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Book not found</div>;

  const handleSubmit = async (formData: BookFormData) => {
    await updateBook(data.id, formData);
    router.push("/books");
    router.refresh();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Book</h1>
      <BookForm
        initialData={data}
        onSubmit={handleSubmit}
        submitLabel="Update Book"
      />
    </div>
  );
};

export default EditBookPage;
