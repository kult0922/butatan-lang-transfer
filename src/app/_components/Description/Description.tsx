import { Footer } from "../Footer";
import { Videos } from "./Vides";

export const Description = () => {
  return (
    <div className="">
      <div className="m-4 text-center text-lg text-pink-400">
        ぶたたん語とは
      </div>
      <div className="mt-4 mb-8 flex justify-center">
        <div className="max-w-[500px] w-[90vw] flex justify-center">
          <div className="text-center">
            <a
              href="https://www.youtube.com/@suadachannel"
              className="underline text-lg"
            >
              すあだちゃんねる
            </a>
            の<span className="text-pink-400">ぶたたん</span>が使っている言語。
            ぶたたん語日本語を元にした言語であるが、使うひらがなの種類が日本語より少ない。
            ぶたたん語講座に登場したバズ・ライトイヤーさんが
            <span className="text-green-500">
              「日本語の入門として外国人にもおすすめ」
            </span>
            と言っている。
          </div>
        </div>
      </div>
      <Videos />
      <Footer />
    </div>
  );
};
