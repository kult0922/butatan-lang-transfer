// @ts-ignore
type Props = {
  result: string;
};

export const TranslateResult = ({ result }: Props) => {
  return (
    <textarea
      rows={6}
      value={result}
      readOnly
      className="bg-white px-4 py-2 border rounded-md w-[90vw] max-w-[500px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 placeholder-gray-400"
    ></textarea>
  );
};
