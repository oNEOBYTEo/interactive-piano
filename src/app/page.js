import { Cuadradito } from './components/Cuadradito';

export default function Home() {
  return (
    <div className="container">
      <Cuadradito note="C" styleModified="square1" />
      <Cuadradito note="D" styleModified="square2" />
      <Cuadradito note="E" styleModified="square3" />
      <Cuadradito note="F" styleModified="square4" />
      <Cuadradito note="G" styleModified="square5" />
      <Cuadradito note="A" styleModified="square6" />
    </div>
  );
}
