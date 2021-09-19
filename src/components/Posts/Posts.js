import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import sanityClient from '../../client.js'
import './Posts.css'

export default function Posts() {
  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`,
      )
      .then((data) => setPost(data))
      .catch(console.error)
  }, [])
  return (
    <div className="container text-white postContainer">
      <div className="headings">
        <h1>Blog Posts Page</h1>
        <h2>This is the list of my blog posts.</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {postData &&
          postData.map((post, index) => (
            <div className="col">
              <div className="card h-100 mb-2 bg-black text-white">
                <NavLink
                  to={'/posts/' + post.slug.current}
                  key={post.slug.current}
                >
                  <span key={index}>
                    <img
                      className="img-fluid"
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                    />

                    <h3>{post.title}</h3>
                  </span>
                </NavLink>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
