"use client";
import Image from "next/image";
import { useState } from "react";
// @ts-ignore
import { toKana, toRomaji } from "wanakana";
import { butatanLangToJapanese } from "../_functions/transfer";
//import { hiraToRoma, romaToHira } from "hiraroma";

export const Transfer = () => {
  const [japanese, setJapanese] = useState("");
  const [butatanLang, setButatanLang] = useState("");

  const translate = () => {
    setButatanLang(butatanLangToJapanese(japanese));
  };

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      This is transfer
      <textarea
        onChange={(e) => {
          setJapanese(e.target.value);
        }}
      />
      <button onClick={translate}>翻訳</button>
      <textarea value={butatanLang}></textarea>
    </div>
  );
};
