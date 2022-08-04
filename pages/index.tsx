import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Landin Page</title>
      </Head>
      <div className="grid place-items-center h-screen">
        <div>
          <h1 className='text-gray-300 text-3xl'>dente app</h1>
          <h1 className='text-gray-500 text-center'>Landing Page</h1>
        </div>
      </div>
    </>
  )
}

export default Home
