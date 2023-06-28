'use client';

import * as Tone from 'tone';

export function Cuadradito({ title = 'LA' }) {
  const synth = new Tone.Synth().toDestination();

  function playSound() {
    synth.triggerAttackRelease(`${title[0]}3`, '6n');
  }
  return (
    <>
      <button onClick={playSound}>{title}</button>
    </>
  );
}
