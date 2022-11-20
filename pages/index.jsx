import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import HomeCatalogPreview from '../components/homepage/HomeCatalogPreview';
import HomeContent from '../components/homepage/HomeContent';

export default function Home() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="content-main">
        <HomeCatalogPreview></HomeCatalogPreview>

        <HomeCatalogPreview></HomeCatalogPreview>

        <HomeContent></HomeContent>

        <HomeCatalogPreview></HomeCatalogPreview>

        <HomeCatalogPreview></HomeCatalogPreview>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
