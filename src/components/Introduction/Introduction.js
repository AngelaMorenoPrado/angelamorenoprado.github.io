import woman from "../../assets/img/woman.png";

export default function Introduction() {
  return (
    <section className="introduction">
      <article id="text-container">
        <p>Hello World!</p>
      </article>
      <article id="image-container">
        <img src={woman} className="introduction-image" alt="3D Woman" />
      </article>
    </section>
  );
}