// sum.test.js
import { expect, test } from "vitest";
import { butatanLangToJapanese } from "./transfer";

test("test1", () => {
  expect(butatanLangToJapanese("こんにちは")).toBe("こんねては");
});
