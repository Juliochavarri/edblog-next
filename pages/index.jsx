import Head from 'next/head'
import React from 'react'
import Header from '../components/sections/Header'

const Home = () => (
  <div>
    <Head>
      <title>Home | {process.env.SITE_NAME}</title>
    </Head>
    <main>
      <h1>Edblog</h1>
      <span>Bienvenidos a EDblog by EDteam</span>
      <hr/>
      <span>{process.env.API_BLOG}</span>
    </main>
  </div>
)

export default Home

