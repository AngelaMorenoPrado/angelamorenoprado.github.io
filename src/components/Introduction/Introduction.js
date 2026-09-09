import woman from "../../assets/img/woman.png";
import firstWave from "../../assets/img/firstWave.png";
import Greeting from "./Greeting";

export default function Introduction() {
  return (
    <section className="introduction">
      <img
        src={firstWave}
        className="wave wave-first"
        alt=""
      />
      <article id="text-container">
        <span id="greeting"><Greeting /> 👋</span>
      </article>
      <article id="image-container">
        <img src={woman} className="introduction-image" alt="3D Woman" />
      </article>
    </section>
  );
}