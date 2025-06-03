"use client";
import ProductCard from "@/components/ProductCard";
import useFetch from "@/hooks/useFetch";
import React from "react";
import { Book } from "@/types/book";
import Button from "@/components/Button";
import Link from "next/link";

const BookPage = () => {
  const { data, loading, error } = useFetch<Book[]>("/books");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="w-screen flex items-center justify-center m-6">
        <Link href={"/books/new"}>
          <Button size="lg">Add Book</Button>
        </Link>
      </div>
      <ProductCard data={data || []} />
    </>
  );
};

export default BookPage;
