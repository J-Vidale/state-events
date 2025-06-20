// src/components/StatsDisplay/StatsDisplay.jsx
import React from 'react';

export const StatsDisplay = ({
  stats: { characterCount, wordCount, readingTime },
  minWords = 0,
  maxWords = Infinity,
  showReadingTime = true
}) => {
  // format readingTime (minutes, as mm:ss)
  const minutes = Math.floor(readingTime);
  const seconds = Math.round((readingTime - minutes) * 60)
    .toString()
    .padStart(2, '0');

  return (
    <div className="w-full bg-white shadow rounded-lg mt-4 p-4 flex justify-around text-center">
      <div>
        <div className="text-sm text-gray-500">Characters</div>
        <div className="text-2xl font-semibold">{characterCount}</div>
      </div>
      <div>
        <div className="text-sm text-gray-500">Words</div>
        <div className="text-2xl font-semibold text-red-500">{wordCount}</div>
        {(minWords > 0 || maxWords < Infinity) && (
          <div className="text-xs text-gray-400">
            Min: {minWords} | Max: {maxWords}
          </div>
        )}
      </div>
      {showReadingTime && (
        <div>
          <div className="text-sm text-gray-500">Reading Time</div>
          <div className="text-2xl font-semibold">
            {minutes}:{seconds}
          </div>
        </div>
      )}
    </div>
  );
};
