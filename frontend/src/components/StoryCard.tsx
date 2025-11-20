function StoryCard({ imageSrc, imageAlt, titleImageSrc, titleImageAlt, description, videoUrl, videoButtonText, videoButtonColor }: {
  imageSrc: string;
  imageAlt: string;
  titleImageSrc: string;
  titleImageAlt: string;
  description: string;
  videoUrl: string;
  videoButtonText: string;
  videoButtonColor: string;
}) {
  return (
    <div className="bg-[url(ui/step-bg.png)] bg-no-repeat bg-cover md:bg-none md:bg-white relative p-6 pb-24 flex items-center flex-1 basis-0 flex-col gap-4 md:gap-2 md:shadow-[16px_16px_0px_0px_rgba(0,0,0,0.3)]">
      <img 
        src={imageSrc}
        alt={imageAlt}
        className="block w-[280px] h-[220px] max-w-none object-cover mb-2"
      />

      <div className="p-2 flex flex-col">
        <img 
          src={titleImageSrc}
          alt={titleImageAlt}
          className="mb-2 h-full w-full"
          style={{
            filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))"
          }}
        />

        <p 
          className="text-black h-max w-full text-2xl font-source-serif-pro"
          style={{ 
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          {description}
        </p>
      </div>

      <button
        className="absolute bottom-0 cursor-pointer block rounded-2xl p-4 px-6 font-ember-and-fire text-white font-bold text-4xl transition-transform hover:scale-105 active:scale-95 md:translate-y-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)]"
        onClick={() => window.open(videoUrl, "_blank")}
        style={{ background: videoButtonColor }}
      >
        {videoButtonText.toUpperCase()}
      </button>
    </div>
  );
}

export default StoryCard;
