import Link from 'next/link';

export default function FooterConnect() {
  return (
    <>
      <footer className="footer-connect">
        <section className="footer-newsletter">
          <header className="d-block d-lg-none">
            <h1>Let's connect</h1>
          </header>

          <form>
            <div className="footer-email">
              <label htmlFor="email" className="d-none d-lg-block">
                sign up to our newsletter
              </label>
              <label htmlFor="email" className="d-lg-none">
                Be the first to recive exclusive offers
              </label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>

            <button className="button-primary-inverted" type="submit">
              Submit
            </button>

            <div className="footer-privacy">
              <input type="checkbox" name="privacy" id="privacy" />

              <label htmlFor="privacy">
                I agree with
                <span>
                  <Link href="/"> Privacy Policy </Link>
                </span>
                and I want to recive emails from Monochrome
              </label>
            </div>
          </form>
        </section>

        <section className="footer-social">
          <header className="d-lg-none">
            <h1>We are highly likeable</h1>
          </header>

          <div className="footer-icons">
            <a href="/" title="Youtube">
              <i class="fa-brands fa-youtube"></i>
            </a>

            <a href="/" title="Twitter">
              <i class="fa-brands fa-twitter"></i>
            </a>

            <a href="/" title="Facebook">
              <i class="fa-brands fa-facebook"></i>
            </a>

            <a href="/" title="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}
