import { Transfer } from "./_components/Transfer";
import { Description } from "./_components/Description";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div>
        <div className="m-4 text-center text-2xl text-pink-500">
          ぶたたん語翻訳
        </div>
        <Transfer />
        <Description />
      </div>
    </main>
  );
}
