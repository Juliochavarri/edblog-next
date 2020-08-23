import Head from 'next/head'
import React from 'react'
import fetch from 'node-fetch'
import Comments from '../../components/blog/comments'

const PostBlog = ({post}) => (
  <div>
    <Head>
      <title>{post.title} | {process.env.SITE_NAME}</title>
    </Head>
    <main>
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    </main>
    <Comments id={post.id} />
  </div>
)

PostBlog.getInitialProps = async function(context) {

    const { id } = context.query
    const res = await fetch(`${process.env.API_BLOG}/posts/${id}`)
    const post = await res.json()

    return {
        post
    }
}

export default PostBlog