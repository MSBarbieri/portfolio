import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/NavBar'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Matheus Barieri Portifolio</title>
        <meta name="description" content="Matheus Barieri Portifolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar> </Navbar>

      {/* <Header /> */}
    </div>
  )
}

export default Home
