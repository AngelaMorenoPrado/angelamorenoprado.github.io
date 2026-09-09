import Typewriter from "typewriter-effect";

export default function Greeting() {
  return (
    <Typewriter
      options={{
        strings: ["Hi!", "¡Hola!", "Ciao!", "Bonjour!", "Hallo!"],
        autoStart: true,
        loop: true,
        delay: 80,
        deleteSpeed: 50,
        pauseFor: 1500,
      }}
    />
  );
}