import Controls from "@/components/Controls";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-100 dark:bg-slate-800">
      <Navbar />
      <Overview />
      <Controls />
    </main>
  );
}
