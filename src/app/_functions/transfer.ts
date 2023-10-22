import { toKana, toRomaji, toHiragana } from "wanakana";

export const japaneseToButatanLang = (japanese: string) => {
  const customRomajiMapping = {
    し: "si",
    つ: "tu",
    ち: "ti",
    ず: "du",
    づ: "du",
    じ: "zi",
    ぢ: "zi",
    とぅ: "twu",
    てぃ: "thi",
    ちゃ: "tya",
    ちゅ: "tyu",
    ちょ: "tyo",
    しゃ: "sya",
    しゅ: "syu",
    しょ: "syo",
    じゃ: "zya",
    じゅ: "zyu",
    じょ: "zyo",
  };

  const hiragana = toHiragana(japanese);
  console.log("hiragana", hiragana);

  const roma = toRomaji(hiragana, { customRomajiMapping });
  console.log("roma", roma);

  const butatanRoma = removeRandY(replaceItoE(replaceStoT(roma)));
  console.log("butatanRoma", butatanRoma);

  const butatanRomanNative = beNative(butatanRoma);
  console.log("butatanRomanNative", butatanRomanNative);

  return toKana(butatanRomanNative);
};

const removeRandY = (str: string) => {
  return str.replace(/[r]/g, "").replace(/[y]/g, "");
};

const replaceItoE = (str: string) => {
  return str.replace(/[i]/g, "e");
};

const replaceStoT = (str: string) => {
  return str.replace(/[s]/g, "t");
};

const beNative = (str: string) => {
  return str
    .replace(/ti/g, "thi")
    .replace(/tu/g, "twu")
    .replace(/du/, "dwu")
    .replace(/zi/g, "dhi");
};
