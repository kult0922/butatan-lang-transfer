export const Videos = () => {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="text-center text-lg text-pink-400">
            ぶたたん語講座
          </div>
          <div className="m-6">
            <iframe
              width={320}
              height="215"
              src="https://www.youtube.com/embed/R0lkT2iUR2s?si=RLAttYLkF_AjYubH"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="m-6">
            <iframe
              width={320}
              height="215"
              src="https://www.youtube.com/embed/A5mpnfdmO7A?si=2NALrjQt9mwVGdyc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
