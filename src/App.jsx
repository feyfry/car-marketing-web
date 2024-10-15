import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pinned from './components/PinnedBar/PinnedBar';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Beranda from './components/Beranda/Beranda';
import Brosur from './components/Brosur/Brosur';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Meta Tags */}
        <meta charset="UTF-8" />
        <title>Daihatsu Citra Jakarta | Automotive Service Sales (David)</title>
        <meta name="description" content="Temukan penawaran terbaik untuk mobil Daihatsu di Jakarta! Daihatsu Citra Jakarta menawarkan berbagai model, promo menarik, dan layanan terbaik untuk memenuhi kebutuhan kendaraan Anda." />
        <meta name="keywords" content="daihatsu jakarta, daihatsu citra jakarta, daihatsu sahabatku, sales daihatsu, daihatsu murah jakarta, daihatsu tangerang, daihatsu semarang, daihatsu medan, daihatsu yogyakarta, daihatsu solo, daihatsu bekasi, daihatsu malang, daihatsu jakarta timur, daihatsu jakarta selatan, daihatsu jakarta barat, daihatsu pusat, daihatsu jakarta pusat, daihatsu karawang, daihatsu sigra, daihatsu rocky, daihatsu ayla, daihatsu indonesia, harga daihatsu rocky, harga mobil daihatsu, daihatsu terios, daihatsu xenia, daihatsu sirion, logo daihatsu, mobil daihatsu, wallpaper mobil daihatsu, rocky daihatsu, astra daihatsu, daihatsu ceria, daihatsu gran max, daihatsu feroza, mobil daihatsu sigra, daihatsu taft, daihatsu rocky harga, daihatsu luxio, daihatsu granmax pick up, daihatsu granmax mini bus, daihatsu granmax blindvan" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Indonesia" />
        <meta name="revisit-after" content="30 days" />
        <meta name="author" content="David Sales (Automotive Service)" />
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Daihatsu Citra Jakarta" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Daihatsu Citra Jakarta | Automotive Service Sales (David)" />
        <meta property="og:description" content="Temukan penawaran terbaik untuk mobil Daihatsu di Jakarta! Daihatsu Citra Jakarta menawarkan berbagai model, promo menarik, dan layanan terbaik untuk memenuhi kebutuhan kendaraan Anda." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.daihatsucitrajakarta.com/" />
        <meta property="og:site_name" content="Daihatsu Citra Jakarta" />
        <meta property="og:image" content="/01a-daya-daihatsu-home-banner-final-revisi-1557220387.jpg" />
        <meta property="og:image:width" content="1366" />
        <meta property="og:image:height" content="563" />
        <meta property="og:image:alt" content="Daihatsu Citra Jakarta" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:keywords" content="daihatsu jakarta, daihatsu citra jakarta, daihatsu sahabatku, sales daihatsu, daihatsu murah jakarta, daihatsu tangerang, daihatsu semarang, daihatsu medan, daihatsu yogyakarta, daihatsu solo, daihatsu bekasi, daihatsu malang, daihatsu jakarta timur, daihatsu jakarta selatan, daihatsu jakarta barat, daihatsu pusat, daihatsu jakarta pusat, daihatsu karawang, daihatsu sigra, daihatsu rocky, daihatsu ayla, daihatsu indonesia, harga daihatsu rocky, harga mobil daihatsu, daihatsu terios, daihatsu xenia, daihatsu sirion, logo daihatsu, mobil daihatsu, wallpaper mobil daihatsu, rocky daihatsu, astra daihatsu, daihatsu ceria, daihatsu gran max, daihatsu feroza, mobil daihatsu sigra, daihatsu taft, daihatsu rocky harga, daihatsu luxio, daihatsu granmax pick up, daihatsu granmax mini bus, daihatsu granmax blindvan" />
        <meta property="og:author" content="David Sales (Automotive Service)" />
        <meta property="fb:app_id" content="your_facebook_app_id" />
        <meta property="fb:pages" content="your_facebook_page_id" />
        <meta name="twitter:site" content="@DaihatsuCitraJKT" />
        <meta name="twitter:creator" content="@DavidSales" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="pinterest-rich-pin" content="true" />
        <meta name="pinterest:description" content="Temukan penawaran terbaik untuk mobil Daihatsu di Jakarta! Daihatsu Citra Jakarta menawarkan berbagai model, promo menarik, dan layanan terbaik." />
        <meta property="business:contact_data:street_address" content="Jl. Contoh No. 123" />
        <meta property="business:contact_data:locality" content="Jakarta" />
        <meta property="business:contact_data:region" content="DKI Jakarta" />
        <meta property="business:contact_data:postal_code" content="12345" />
        <meta property="business:contact_data:country_name" content="Indonesia" />
        <meta property="business:contact_data:email" content="info@daihatsucitrajakarta.com" />
        <meta property="business:contact_data:phone_number" content="088210047775" />
        <meta property="business:hours:day" content="Senin" />
        <meta property="business:hours:start" content="08:00" />
        <meta property="business:hours:end" content="18:00" />
        <meta property="product:brand" content="Daihatsu" />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />
        <meta property="product:price:currency" content="IDR | Rupiah" />
        <meta name="twitter:title" content="Daihatsu Citra Jakarta | Automotive Service Sales (David)" />
        <meta property="article:author" content="David Sales" />
        <meta property="article:published_time" content="2024-10-10T12:00:00+07:00" />
        <meta property="article:modified_time" content="2024-10-10T12:00:00+07:00" />
        <meta property="article:section" content="Automotive" />
        <meta property="article:tag" content="Daihatsu,Jakarta,Dealership,Sales" />
        <meta name="twitter:description" content="Temukan penawaran terbaik untuk mobil Daihatsu di Jakarta! Daihatsu Citra Jakarta menawarkan berbagai model, promo menarik, dan layanan terbaik untuk memenuhi kebutuhan kendaraan Anda." />
        <meta name="twitter:image" content="/01a-daya-daihatsu-home-banner-final-revisi-1557220387.jpg" />
        <meta property="og:updated_time" content="2024-10-10T12:00:00+07:00" />
        <meta property="og:rich_attachment" content="true" />
        <meta property="article:publisher" content="https://www.facebook.com/DaihatsuCitraJakarta" />
      </Helmet>

      <Router>
        <Pinned />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/brosur" element={<Brosur />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;