export const Footer = () => {
  return (
    <>
      <div className="bg-pink-200 w-[100vw] p-6">
        <div className="flex justify-center">
          <div>
            <a
              href="https://github.com/kult0922/butatan-lang-transfer"
              target="_blank"
              className="underline decoration-solid"
              rel="noreferrer"
            >
              <div className="flex">
                <img width={22} src="/GitHub-Mark-64px.png" className="mr-1" />
                GitHub
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          つくった人👨‍💻:
          <a
            href="https://twitter.com/KK_sep_TT"
            target="_blank"
            className="underline decoration-solid ml-2"
            rel="noreferrer"
          >
            @KK_sep_TT
          </a>
        </div>
        <div className="flex justify-center mt-2"></div>
      </div>
    </>
  );
};
