// src/components/CharacterCounter/CharacterCounter.jsx
import React, { useState, useEffect } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 1 // in minutes
}) => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0
  });

  useEffect(() => {
    const characterCount = text.length;
    // split on whitespace, filter out empty strings
    const words = text.trim().length
      ? text.trim().split(/\s+/)
      : [];
    const wordCount = words.length;
    // average reading speed ~ 200 wpm
    const readingTime = wordCount / 200;

    setStats({ characterCount, wordCount, readingTime });
  }, [text]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <TextInput
        onTextChange={setText}
        placeholder="Hello, what are you doing?"
        initialValue=""
      />
      <StatsDisplay
        stats={stats}
        minWords={minWords}
        maxWords={maxWords}
        showReadingTime={true}
      />
    </div>
  );
};
