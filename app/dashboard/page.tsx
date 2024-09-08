import React from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center">
      <p className="text-2xl mt-10">Home Page</p>
      <button className="mt-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href={`/garage`}>Click to Go to Garage</Link>
      </button>
    </main>
  );
}
