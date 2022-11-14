import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <>
      <header className="header-primary container">
        <div className="wrapper-primary d-flex align-items-center justify-content-between d-lg-none">
          <i className="fa-solid fa-bars "></i>

          <div className="search-wrapper">
            <div className="search-bar d-block d-lg-none">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
              />

              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>

        <ul className="nav-primary d-none d-lg-flex">
          <li>
            <Link href="/" title="New arrivals">
              New arrivals
            </Link>
          </li>

          <li>
            <Link href="/" title="Brands">
              Brands
            </Link>
          </li>

          <li>
            <Link href="/" title="Men's">
              Men's
            </Link>
          </li>

          <li>
            <Link href="/" title="Women's">
              Women's
            </Link>
          </li>

          <li>
            <Link href="/" title="Accessories">
              Accessories
            </Link>
          </li>

          <li>
            <Link href="/" title="Lookbook">
              Lookbook
            </Link>
          </li>
        </ul>
      </header>

      <div className="banner-secondary d-flex justify-content-end align-items-end d-lg-none container pb-3">
        <Link href="/" title="New in" className="button button-secondary">
          New in
        </Link>
      </div>
    </>
  );
}
