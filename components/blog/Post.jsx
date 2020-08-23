import React from 'react'
import Link from 'next/link'

const Post = ({ post }) => (
    <div className="col-12 col-md-3 m-2 card">
        <article className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-text">{post.body}</p>
            <span>{`Escrito por el usuario ${post.userId}`}</span>
            <Link href={`/blog/${post.id}`}><a className="color-info">Leer más</a></Link>
        </article>
    </div>
)

export default Post
