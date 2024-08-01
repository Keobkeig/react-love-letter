import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './song.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        Dear Leona (shoona, loml🖤),<br />
        Hiii my love, its been almost a year since we've started to talk (crazy right haha). I'd like to say that I'm glad that I've met you, 
        I feel amazing everytime we've hung out. Even during the times when we didn't see each other, I enjoy every moment. Your voice, laugh, 
        smile, and beautiful face always makes me happy. I'm glad that you've put up with and supported me so many times when I'm moody or sad
        or anxious over things like my parents or life. I wanted to tell you how much you mean to me, being with you makes me happy and I hope 
        we end up together for those 84 years we promised! You are special to me, so don't wory about "us not working out during college" 
        cause only time will tell of that so let us focus on the present and enjoy the time we have together. We're together now and I love you 
        so much so if a man ever tries to flirt with you (or girl idk) you should like just like shoot and kill them :). I can see our dynamic 
        working out in a way that ends with us being together for a long time. I like being with you, I like being skin-to-skin close to you, 
        and never have I been so blessed as to fall in love with someone as wonderful as you...<br />Āmi tōmākē bhālōbāsi<br />
        Always yours,<br />
        -Richie
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
