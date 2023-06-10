import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

function Recognition() {
  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const handleListen = () => {
    if (!listening) {
      listen();
    } else {
      stop();
    }
  };

  return (
    <div className="w-full max-w-lg px-4 py-8 mx-auto">
      <textarea
        className="w-full h-40 px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        className={`text-2xl bg-blue-500 text-white rounded-full p-4 shadow-lg ${
          listening ? 'opacity-50' : ''
        }`}
        onClick={handleListen}
      >
        🎤
      </button>
      {listening && <div className="mt-2 text-gray-500">Go ahead, I'm listening</div>}
    </div>
  );
}

export default Recognition;
