"use client";
import Link from "next/link";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <h1 className="text-8xl font-bold">{error.message}</h1>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-gray-200 text-gray-900 rounded hover:opacity-90"
      >
        Go Back
      </Link>
    </div>
  );
}
