import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <>
      <header className="header-primary-inner container d-flex align-items-center justify-content-between d-lg-none">
        <i className="fa-solid fa-bars "></i>

        <form className="search-wrapper">
          <div className="search-bar d-block d-lg-none">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />

            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </header>

      <ul className="nav-primary container d-none d-lg-flex">
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

      <div className="banner-secondary d-flex d-lg-none pb-3">
        <div className="banner-secondary-wrapper container d-flex justify-content-end align-items-end">
          <Link href="/" title="New in" className="button button-secondary">
            New in
          </Link>
        </div>
      </div>
    </>
  );
}
