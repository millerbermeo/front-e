import React, { ReactNode } from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  flipped: boolean;
}

export const FlipCard: React.FC<FlipCardProps> = ({ front, back, flipped }) => {
  return (
    <div className="w-full h-[500px] perspective">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          {front}
        </div>
        <div className="absolute w-full h-full backface-hidden transform rotate-y-180">
          {back}
        </div>
      </div>
    </div>
  );
};
