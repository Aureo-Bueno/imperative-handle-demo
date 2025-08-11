import { forwardRef, useImperativeHandle, useRef } from "react";

type AudioHandle = {
  play: () => void;
  pause: () => void;
  reset: () => void;
};


type AudioPlayerProps = {
  src?: string;
};

const AudioPlayer = forwardRef<AudioHandle, AudioPlayerProps>(({ src }, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    play() {
      audioRef.current?.play();
    },
    pause() {
      audioRef.current?.pause();
    },
    reset() {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.pause();
      }
    }
  }));

  return <audio ref={audioRef} src={src} controls />;
});

import { useState } from "react";

export function SecondExample() {
  const audioRef = useRef<AudioHandle>(null);
  const [audioSrc, setAudioSrc] = useState<string | undefined>(undefined);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioSrc(url);
    }
  };

  return (
    <div>
      <p>Exemplo de player de áudio com métodos imperativos: play, pause e reset</p>
      <input
        type="file"
        accept="video/*,audio/*"
        onChange={handleFileChange}
        style={{ marginBottom: 12 }}
      />
      <AudioPlayer ref={audioRef} src={audioSrc} />
      <div style={{ marginTop: 8 }}>
        <button onClick={() => audioRef.current?.play()}>▶ Play</button>
        <button onClick={() => audioRef.current?.pause()}>⏸ Pause</button>
        <button onClick={() => audioRef.current?.reset()}>🔄 Reset</button>
      </div>
    </div>
  );
}
