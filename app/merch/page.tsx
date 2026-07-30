const email = "TrinityClan@proton.me";

const products = [
  {
    id: "shirt",
    number: "01",
    name: "Tiger Gardens Heavyweight Tee",
    price: "$35",
    description: "Light steel heavyweight cotton tee with the Tiger Gardens chest mark and full Trinity County artwork across the back.",
    details: "Unisex fit · Sizes S-XL · Front + back print",
    images: [
      { src: "/merch/tiger-gardens-shirt-front.png", alt: "Front of the Tiger Gardens heavyweight T-shirt" },
      { src: "/merch/tiger-gardens-shirt-back.png", alt: "Back artwork on the Tiger Gardens heavyweight T-shirt" },
    ],
  },
  {
    id: "hoodie",
    number: "02",
    name: "Tiger Gardens Heavyweight Hoodie",
    price: "$70",
    description: "Light steel heavyweight pullover hoodie with a small chest mark and the complete Tiger Gardens illustration on the back.",
    details: "Pullover · Sizes S-XL · Front + back print",
    images: [
      { src: "/merch/tiger-gardens-hoodie-front.png", alt: "Front of the Tiger Gardens heavyweight hoodie" },
      { src: "/merch/tiger-gardens-hoodie-back.png", alt: "Back artwork on the Tiger Gardens heavyweight hoodie" },
    ],
  },
  {
    id: "patch",
    number: "03",
    name: "Tiger Gardens Patch",
    price: "$12",
    description: "A durable Tiger Gardens logo patch for work jackets, bags, hats, and everyday field gear.",
    details: "Limited run · Ask about current styles",
    images: [{ src: "/tiger-gardens-mark.webp", alt: "Tiger Gardens tiger mark featured on the patch" }],
  },
  {
    id: "sticker",
    number: "04",
    name: "Tiger Gardens Logo Sticker",
    price: "$5",
    description: "The full Tiger Gardens crest in a weather-ready sticker made for bottles, cases, vehicles, and gear.",
    details: "One for $5 · Three for $12",
    images: [{ src: "/tiger-gardens-logo.png", alt: "Tiger Gardens crest featured on the logo sticker" }],
  },
];

function inquiryHref(product: string) {
  return `mailto:${email}?subject=${encodeURIComponent(`Tiger Gardens merch - ${product}`)}&body=${encodeURIComponent(`Hi Tiger Gardens,\n\nI'm interested in the ${product}. Please let me know what sizes or quantities are currently available.\n\nThank you.`)}`;
}

export default function MerchPage() {
  return (
    <main className="tg-static merch-page">
      <header className="tg-topbar">
        <a className="tg-wordmark" href="/"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /><span>Tiger Gardens</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/strains">Cultivars</a><a href="/inventory">Inventory</a></nav>
        <a className="tg-inventory-link" href={`mailto:${email}`}>Contact us <span aria-hidden="true">↗</span></a>
      </header>

      <section className="tg-static-hero merch-hero">
        <p>Tiger Gardens goods / Small-batch release</p>
        <h1>FIELD<br /><span>GEAR.</span></h1>
        <div>Clothing and goods built around the Tiger Gardens mark. Current availability is handled directly by email.</div>
      </section>

      <section className="merch-catalog" aria-label="Tiger Gardens merchandise">
        {products.map((product) => (
          <article className={`merch-product merch-${product.id}`} key={product.id}>
            <div className="merch-product-images">
              {product.images.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} /></figure>)}
            </div>
            <div className="merch-product-copy">
              <span>{product.number} / Tiger Gardens goods</span>
              <h2>{product.name}</h2>
              <strong>{product.price}</strong>
              <p>{product.description}</p>
              <em>{product.details}</em>
              <a href={inquiryHref(product.name)}>Ask about availability <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </section>

      <section className="merch-contact">
        <p>Questions, sizing, or current stock</p>
        <h2>REACH THE<br /><span>GARDEN.</span></h2>
        <a href={`mailto:${email}`}>{email} <span aria-hidden="true">↗</span></a>
      </section>

      <footer className="tg-footer"><a className="tg-wordmark" href="/"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
