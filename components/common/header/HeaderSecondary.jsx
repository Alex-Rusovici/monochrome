import Link from 'next/link';

export default function HeaderSecondary() {
  return (
    <>
      <div className="header-top-inner container">
        <h1 className="d-block d-lg-none">Monochrome</h1>

        <nav className="header-connect d-none d-lg-block">
          <ul>
            <li>
              <Link href="/" title="Youtube">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>

            <li>
              <Link href="tel:+44 010 2345 6789">
                Call us +44 0(1)0 2345 6789
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="header-controls d-flex">
          <div className="search-wrapper d-none d-lg-block">
            <div className="search-bar d-none d-lg-block">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
              />
            </div>
          </div>

          <ul>
            <li>
              <Link href="/" title="My account">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Favorites">
                <i className="fa-solid fa-heart"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Favorites">
                <i className="fa-solid fa-bag-shopping"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
