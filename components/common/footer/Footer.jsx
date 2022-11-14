import FooterConnect from './FooterConnect';
import FooterContact from './FooterContact';
import FooterNav from './FooterNav';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="d-block d-lg-grid container">
          {/* daca pun container, arata bine in desktop, daca scot container, arata bine in mobile. AAAAARGH */}

          <section className="d-none d-lg-block">
            <FooterContact></FooterContact>
          </section>

          <section>
            <FooterNav></FooterNav>
          </section>

          <section>
            <FooterConnect></FooterConnect>
          </section>
        </div>
      </div>
    </>
  );
}
