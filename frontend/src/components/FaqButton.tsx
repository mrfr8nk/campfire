interface FaqButtonProps {
  content: string;
}

function FaqButton({ content }: FaqButtonProps) {
  return (
    <div className="bg-[#091e8b] shadow-[8px_8px_0px_0px_#0a1861] flex items-start px-5 py-12 justify-center w-[467px]">
      <div className="flex gap-1 items-center">
        <div className="relative w-8 h-8 overflow-hidden">
          <img 
            alt="" 
            className="absolute -inset-1 w-full h-full object-cover select-none" 
            src="/icons/plus.svg" 
          />
        </div>
        <p 
          className="text-white text-4xl font-bold leading-none whitespace-nowrap font-ember-and-fire"
        >
          {content}
        </p>
      </div>
    </div>
  );
}

export default FaqButton;
