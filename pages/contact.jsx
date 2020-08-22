import Head from 'next/head'
import React from 'react'

const Contact = () => (
  <div>
    <Head>
      <title>About | {process.env.SITE_NAME}</title>
    </Head>
    <main>
      <h1>Contact</h1>
      <span>Lorem ipsum...</span>
    </main>
  </div>
)

export default Contact