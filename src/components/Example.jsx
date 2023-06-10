import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useSpeechRecognition } from 'react-speech-kit';
import Synthesis from './Synthesis';
import Recognition from './Recognition';

function Example() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Synthesis />
      <Recognition />
    </div>
  );
}

export default Example;