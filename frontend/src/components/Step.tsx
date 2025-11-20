import type { PropsWithChildren } from "react";

function Step({ stepNumber, imageSrc, imageAlt, isReversed = false, children }: PropsWithChildren<{
  stepNumber: number;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}>) {
  return (
    <div className={`flex gap-16 items-center w-full flex-col-reverse ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className={`relative flex flex-col text-[#000] flex-1 ${isReversed ? 'lg:items-start' : 'lg:items-end lg:text-right'}`}>
        <div className="absolute -inset-12 lg:-inset-16 -z-60 pointer-events-none">
          <img 
            src="/ui/step-bg.png" 
            alt="" 
            className="w-min h-full object-cover select-none"
          />
        </div>
        
        <p 
          className="text-3xl font-bold mb-2 font-source-serif-pro relative z-10"
        >
          Step {stepNumber}
        </p>

        <p 
          className={`text-4xl leading-tight font-source-serif-pro relative z-10 max-w-3/4`}
        >
          {children}
        </p>
      </div>

      <img 
        src={imageSrc}
        alt={imageAlt}
        className="rounded-lg object-cover w-full lg:w-[509px] aspect-video shadow-[-8px_16px_0px_0px_rgba(0,0,0,0.25)] relative z-20"
      />
    </div>
  );
}

export default Step;
