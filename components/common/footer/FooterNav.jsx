import Link from 'next/link';

export default function FooterNav() {
  return (
    <>
      <footer className="footer-nav">
        <div className="footer-inner container">
          <header className="d-lg-none">
            <h1>How can we help?</h1>
          </header>

          <nav>
            <ul>
              <li>
                <Link href="/" title="About us">
                  About us
                </Link>
              </li>

              <li>
                <Link href="/" title="Careers">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="/" title="Affiliates">
                  Affiliates
                </Link>
              </li>

              <li>
                <Link href="/" title="Advertising">
                  Advertising
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/" title="Style and fit">
                  Style and fit
                </Link>
              </li>

              <li>
                <Link href="/" title="Faqs">
                  Faqs
                </Link>
              </li>

              <li>
                <Link href="/" title="Delivery">
                  Delivery
                </Link>
              </li>

              <li>
                <Link href="/" title="Returns">
                  Returns
                </Link>
              </li>
            </ul>
          </nav>

          <footer className="d-block d-lg-none">
            <span className="d-block">
              <Link href="/" title="Terms and conditions">
                Terms & conditions
              </Link>
            </span>

            <span className="d-block">
              <Link href="/" title="Privacy and cookies">
                Privacy & cookies
              </Link>
            </span>
          </footer>
        </div>
      </footer>
    </>
  );
}
