'use client';

import * as Tone from 'tone';

export function Cuadradito({ note = 'C', styleModified = '' }) {
  const synth = new Tone.MembraneSynth().toDestination();

  function playSound() {
    synth.triggerAttackRelease(`${note}4`, '6n');
  }
  return (
    <>
      <button className={`square ${styleModified}`} onClick={playSound}>
        {note}
      </button>
    </>
  );
}
