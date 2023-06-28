'use client';

import * as Tone from 'tone';

export function Cuadradito({ note = 'C' }) {
  const synth = new Tone.Synth().toDestination();

  function playSound() {
    synth.triggerAttackRelease(`${note}3`, '6n');
  }
  return (
    <>
      <button className="square" onClick={playSound}>
        {note}
      </button>
    </>
  );
}
