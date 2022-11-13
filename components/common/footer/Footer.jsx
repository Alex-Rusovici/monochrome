import FooterConnect from './FooterConnect';
import FooterContact from './FooterContact';
import FooterNav from './FooterNav';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container d-block d-lg-grid">
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
