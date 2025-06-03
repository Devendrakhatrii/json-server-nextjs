import { Book } from "@/types/book";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  data: Book[];
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {data?.map((book) => (
        <div
          key={book.id}
          className="flex-1 min-w-[300px] max-w-[400px] border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <Link href={`/books/${book.id}`}>
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-600">Author: {book.author}</p>
            {book.description && (
              <p className="text-gray-500 mt-2 line-clamp-2">
                {book.description}
              </p>
            )}
            <p className="text-gray-600 mt-2">
              Price: ${book.price.toFixed(2)}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
