import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function Synthesis() {
  const [value, setValue] = useState('');
  const [voiceIndex, setVoiceIndex] = useState(null);
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis();
  const voice = voices[voiceIndex] || null;

  return (
    <div className="w-full max-w-lg px-4 py-8 mx-auto">
      <textarea
        className="w-full h-40 px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white rounded-full px-6 py-2 mb-4 shadow-lg"
        onClick={() => speak({ text: value, voice })}
      >
        Speak
      </button>

      <select
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
        name="voice"
        value={voiceIndex || ''}
        onChange={(e) => {
          setVoiceIndex(e.target.value);
        }}
      >
        {voices.map((option, index) => (
          <option key={option.voiceURI} value={index}>
            {`${option.lang} - ${option.name}${option.default ? ' - Default' : ''}`}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Synthesis;