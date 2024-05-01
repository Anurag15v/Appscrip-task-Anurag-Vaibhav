import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Main from '../components/main/index';
import Bar from '../components/bar/index';
import CombinedView from '../components/combinedView/index.js';
import { useState } from 'react';
import Head from 'next/head';

function index(props) {
  const [showFilter, setShowFilter] = useState(false)
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
    </div>
  )
}

export async function getServerSideProps() {
  try {
    // Fetch data from external API
    const res = await fetch('https://fakestoreapi.com/products?limit=9')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
  }
  catch (err) {
    console.log("Error while fetching data", err);
    // Handle error

    return {
      redirect: {
          destination: '/',
          statusCode: 307
      }
  }
  }
}

export default index