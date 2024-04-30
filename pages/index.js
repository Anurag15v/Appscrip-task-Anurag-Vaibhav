import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Main from '../components/main/index';
import Bar from '../components/bar/index';
import CombinedView from '../components/combinedView/index.js';
import { useState } from 'react';

function index(props) {
  const [showFilter,setShowFilter]=useState(false);
  return (
    <main style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Header />
      <Main />
      <Bar toggleFilter={()=>setShowFilter(!showFilter)}/>
      <CombinedView filter={showFilter} data={props.repo} />
      <Footer />
    </main>
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