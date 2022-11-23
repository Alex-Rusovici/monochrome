import Link from 'next/link';

export default function ProductTile() {
  return (
    <>
      <article className="product-tile">
        <header className="product-tile-image">
          <Link href="/" title="Product">
            <picture>
              <img
                src="/images/products/product_01.png"
                alt="Monochrome Watch type 1"
              />
            </picture>
          </Link>

          <Link href="/" className="badge">
            <i className="fa-regular fa-heart"></i>
          </Link>

          <h1 className="product-tile-title">
            <Link href="/" title="Monochrome Watch">
              Monochrome
            </Link>
          </h1>
        </header>

        <section>
          <span className="product-price">$425</span>
        </section>

        <button className="button button-atc">Add to cart</button>
      </article>
    </>
  );
}
