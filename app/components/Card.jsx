import React from 'react';
import Image from 'next/image';

const Card = (props) => {
  return (
    <div className="p-4 w-full  md:w-full lg:w-1/3 xl:w-1/3 transition-transform hover:scale-105">
      <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-opacity hover:opacity-80 flex items-center justify-center">
        <Image src={props.src} alt={props.alt} className="rounded-lg mx-auto" />
        <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-xl opacity-0 transition-opacity hover:opacity-80">
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default Card;
