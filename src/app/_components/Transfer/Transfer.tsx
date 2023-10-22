"use client";
import { useState } from "react";
import { japaneseToButatanLang } from "../../_functions/transfer";
import { TransferIcon } from "./TransIcon";
import { TranslateResult } from "./TranslateResult";

export const Transfer = () => {
  const [butatanLang, setButatanLang] = useState("");

  return (
    <div className="flex flex-col items-center">
      <textarea
        rows={6}
        placeholder="ぶたたん語に翻訳したい日本語を入力..."
        className="bg-white px-4 py-2 border rounded-md max-w-[500px] w-[90vw] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 placeholder-gray-400"
        onChange={(e) => {
          setButatanLang(japaneseToButatanLang(e.target.value));
        }}
      />
      <div className="m-6">
        <TransferIcon />
      </div>
      <TranslateResult result={butatanLang} />
    </div>
  );
};
