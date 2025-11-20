interface StoryCardProps {
  imageSrc: string;
  imageAlt: string;
  titleImageSrc: string;
  titleImageAlt: string;
  description: string;
}

function StoryCard({ imageSrc, imageAlt, titleImageSrc, titleImageAlt, description }: StoryCardProps) {
  return (
    <div className="bg-white p-6 flex flex-1 basis-0 flex-col gap-2 h-[557px] shadow-[16px_16px_0px_0px_rgba(0,0,0,0.3)]">
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
    </div>
  );
}

export default StoryCard;
