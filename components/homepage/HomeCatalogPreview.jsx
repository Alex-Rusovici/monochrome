import ProductTile from '../catalog/ProductTile';

export default function HomeCatalogPreview() {
  return (
    <>
      <section className="home-catalog-preview container">
        <header>
          <h1>New stuff</h1>
        </header>

        <ul>
          <li>
            <ProductTile></ProductTile>
          </li>

          <li>
            <ProductTile></ProductTile>
          </li>

          <li>
            <ProductTile></ProductTile>
          </li>

          <li>
            <ProductTile></ProductTile>
          </li>
        </ul>

        <button className="button button-primary">View all</button>
      </section>
    </>
  );
}
