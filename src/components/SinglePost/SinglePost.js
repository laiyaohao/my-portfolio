import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../../client.js'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import './SinglePost.css'

const builder = imageUrlBuilder(sanityClient)
const urlFor = (source) => {
  return builder.image(source)
}
export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name":author->name,
            "authorImage":author->image
        }`,
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])
  if (!singlePost) return <div>Loading...</div>
  return (
    <div className="container singlePostContainer">
      <div className="card bg-black">
        <img
          src={singlePost.mainImage.asset.url}
          alt={singlePost.title}
          className="card-img-top"
          style={{ height: '400px' }}
        />
        <div className="card-body">
          <h1 className="card-title">{singlePost.title}</h1>
          <p className="card-text">
            by {'  '}
            <img
              src={urlFor(singlePost.authorImage).url()}
              alt={singlePost.name}
              className="img-fluid rounded-circle profilePicture"
            />
            {'  ' + singlePost.name}
          </p>
          <p className="card-text postContent">
            <BlockContent
              blocks={singlePost.body}
              projectId="tbyrdlmq"
              dataset="production"
            />
          </p>
        </div>
      </div>
    </div>
  )
}
