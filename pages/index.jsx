import Head from 'next/head'
import fetch from 'node-fetch'
import Post from '../components/blog/Post'

const Home = ({ posts }) => (
  <div>
    <Head>
      <title>Home | {process.env.SITE_NAME}</title>
    </Head>
    <main>
      <h1>Edblog</h1>
      <div className="container-fluid row justify-content-center">
        {
          posts.map(p => <Post key={p.id} post={p} />)
        }
      </div>
    </main>
  </div>
)

 export async function getStaticProps() {
  const res = await fetch(`${process.env.API_BLOG}/posts`)
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

export default Home

