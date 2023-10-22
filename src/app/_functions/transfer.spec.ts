// sum.test.js
import { expect, test } from "vitest";
import { japaneseToButatanLang } from "./transfer";

test("こんにちは", () => {
  expect(japaneseToButatanLang("こんにちは")).toBe("こんねては");
});
test("はしもとかんなちゃん", () => {
  expect(japaneseToButatanLang("はしもとかんなちゃん")).toBe(
    "はてもとかんなたん"
  );
});
test("です", () => {
  expect(japaneseToButatanLang("です")).toBe("でとぅ");
});

test("すご", () => {
  expect(japaneseToButatanLang("すご")).toBe("とぅご");
});

test("よし", () => {
  expect(japaneseToButatanLang("よし")).toBe("おて");
});

test("にんぎょうおばあちゃん", () => {
  expect(japaneseToButatanLang("にんぎょうおばあちゃん")).toBe(
    "ねんごうおばあたん"
  );
});
test("やめてください", () => {
  expect(japaneseToButatanLang("やめてください")).toBe("あめてくだたえ");
});

test("ぶただよ", () => {
  expect(japaneseToButatanLang("ぶただよ")).toBe("ぶただお");
});

test("ちょうしにのるな", () => {
  expect(japaneseToButatanLang("ちょうしにのるな")).toBe("とうてねのうな");
});
test("きゃきゅきょ", () => {
  expect(japaneseToButatanLang("きゃきゅきょ")).toBe("かくこ");
});

test("しゃしゅしょ", () => {
  expect(japaneseToButatanLang("しゃしゅしょ")).toBe("たとぅと");
});
test("きゃりーぱみゅぱみゅ", () => {
  expect(japaneseToButatanLang("きゃりーぱみゅぱみゅ")).toBe("かえーぱむぱむ");
});
test("ひろゆき", () => {
  expect(japaneseToButatanLang("ひろゆき")).toBe("へおうけ");
});
