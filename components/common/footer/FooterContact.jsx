import Link from 'next/link';

export default function FooterContact() {
  return (
    <>
      <footer className="footer-contact footer-inner">
        <ul>
          <li>
            <Link href="tel:+44 010 2345 6789" title="Call us">
              Call us
            </Link>
          </li>

          <li>
            <Link href="tel:+44 010 2345 6789" title="Call us">
              +44 010 2345 6789
            </Link>
          </li>

          <li>
            <Link href="mailto:customer-support@momochrome.com">
              Email customer care
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
