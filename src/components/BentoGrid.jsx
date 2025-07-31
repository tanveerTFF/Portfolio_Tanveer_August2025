// src/components/BentoGrid.jsx
import React from 'react';

export default function BentoGrid({ onTileClick }) {
  const tileBaseClass =
    "rounded-xl p-4 cursor-pointer backdrop-blur-md bg-white/10 border border-white/20 transition-transform duration-300 hover:scale-105";

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full h-[75vh]">
      {/* A: Tall Left Tile - universal height */}
      <div
        className={`${tileBaseClass} col-span-1 row-span-4`}
        onClick={() => onTileClick('A')}
      >
        <h2 className="text-white text-xl font-bold">Color Palette</h2>
      </div>

      {/* B: Top Short Tile */}
      <div
        className={`${tileBaseClass} col-span-1 row-span-1`}
        onClick={() => onTileClick('B')}
      >
        <p className="text-white">Try Prism and unlock music.</p>
      </div>

      {/* C: Center Hero Tile */}
      <div
        className={`${tileBaseClass} col-span-2 row-span-2 flex items-center justify-center`}
        onClick={() => onTileClick('C')}
      >
        <h1 className="text-4xl text-white font-extrabold">PRISM</h1>
      </div>

      {/* D: Bottom-left music block */}
      <div
        className={`${tileBaseClass} col-span-1 row-span-3`}
        onClick={() => onTileClick('D')}
      >
        <p className="text-white">25M+ Songs</p>
      </div>

      {/* E: Portrait right tile */}
      <div
        className={`${tileBaseClass} col-span-1 row-span-2`}
        onClick={() => onTileClick('E')}
      >
        <p className="text-white">Model Portrait</p>
      </div>

      {/* F: Bottom-right CTA */}
      <div
        className={`${tileBaseClass} col-span-1 row-span-2`}
        onClick={() => onTileClick('F')}
      >
        <p className="text-white font-bold text-lg">25 Million Songs</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded">Join Prism</button>
      </div>
    </div>
  );
} 
