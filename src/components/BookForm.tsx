"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { Book, BookFormData } from "@/types/book";

interface BookFormProps {
  name: string;
  initialData?: Book;
  onSubmit: (data: BookFormData) => Promise<void>;
  submitLabel: string;
}

const BookForm = ({ name, initialData, onSubmit, submitLabel }: BookFormProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState<BookFormData>({
    title: initialData?.title || "",
    author: initialData?.author || "",
    category: initialData?.category || "",
    price: initialData?.price?.toString() || "",
    stock: initialData?.stock?.toString() || "",
    description: initialData?.description || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">{name}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            step="0.01"
            min="0"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
            min="0"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-md p-2 h-32"
          />
        </div>

        <div className="flex gap-4">
          <Button type="submit">{submitLabel}</Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => router.push("/books")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
