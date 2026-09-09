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
      <article class="introduction-info">
        <div id="text-container">
          <div class="text">
            <div class="greeting-line">
              <span id="greeting"><Greeting /></span>
              <span class="icon">👋</span>
            </div>
            <div class="my-data">
              <span>I'm <span class="my-data-selected">Ángela</span>,</span>
              <br />
              <span>a <span class="my-data-selected underlined">frontend</span> developer.</span>
            </div>
          </div>
        </div>
        <div id="image-container">
          <img src={woman} className="introduction-image" alt="3D Woman" />
        </div>
      </article>
    </section>
  );
}