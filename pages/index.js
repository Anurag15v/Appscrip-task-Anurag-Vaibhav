import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Main from '../components/main/index';
import Bar from '../components/bar/index';
import CombinedView from '../components/combinedView/index.js';
import { useState } from 'react';
import Head from 'next/head';

function index(props) {
  const [showFilter, setShowFilter] = useState(false);
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite", // Changed type to WebSite
    "url": "https://yourwebsite.com", // Replace with your website URL
    "name": "Metta Muse", // Replace with your website name
    "potentialAction": {
      "@type": "SearchAction",
      "target": "/search?q={search term}" // Update search URL pattern
    },
  };
  return (
    <div>
      <Head>
        <title>Metta Muse</title>
        <meta name="description" content="One of the world's leading eccomerce website. Purchase anything you want." />
      </Head>
      <main style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Header />
        <Main />
        <Bar toggleFilter={() => setShowFilter(!showFilter)} />
        <CombinedView filter={showFilter} data={props.repo} />
        <Footer />
      </main>
      <script
        strategy="afterInteractive" // Ensures script loads after initial render
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </div>
  )
}

export async function getServerSideProps() {
  try {
    // Fetch data from external API
    const res = await fetch('https://fakestoreapi.com/products?limit=18')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
  }
  catch (err) {
    console.log("Error while fetching data", err);
  }
}

export default index