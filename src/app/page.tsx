import Image from "next/image";
import { Transfer } from "./_components/Transfer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Transfer />
    </main>
  );
}
