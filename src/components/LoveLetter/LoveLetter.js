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
      <p><strong>Dear Leona</strong> (shoona, baby, loml, sweetheart, etc...🖤),</p>
      <p>It's been almost a year since we started talking (crazy, right? haha). I'd like to say that I'm so glad I met you at Brunswick Eruption. I feel amazing every time we hang out, and even when we don't see each other, I enjoy every moment with you. Your voice, laugh, smile, and beautiful face in call and in person always makes me so happy.</p>
      <p>I'm grateful that you've put up with and supported me so many times when I'm moody and anxious about things like my parents or life. I wanted to tell you how much you mean to me. So hopefully we get to that 84 (round up to 85!) years we promised!</p>
      <p>You are special to me, so don't worry about "us not working out during college" because only time will tell. Let's focus on the present and enjoy the time we have together. We're together now, and I love you so much. If anyone ever tries to flirt with you (guy or girl), you should just, like, shoot and kill them (kidding, of course!).</p>
      <p>I can see our dynamic working out in a way that ends with us being together for a long time. I like being with you, our fun late escapades, being skin-to-skin close to you, and our getting big sessions. Never have I been so blessed as to fall in love with someone as wonderful as you.</p>
      <p><em>Āmi tōmākē bhālōbāsi</em></p>
      <p>Always yours,<br />
      - Richie</p>
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
