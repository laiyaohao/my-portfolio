import React, { useEffect, useState } from 'react'
import sanityClient from '../../client.js'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import './About.css'

const builder = imageUrlBuilder(sanityClient)
const urlFor = (source) => {
  return builder.image(source)
}

const About = () => {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`,
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error)
  }, [])
  if (!author) {
    return <div>Loading...</div>
  }
  return (
    <div className="container aboutContainer">
      <div className="card bg-transparent">
        <div className="row g-5">
          <div className="col-md-4">
          <img
            src={urlFor(author.authorImage).url()}
            className="img-thumbnail"
            alt={author.name}
          />
          </div>
          <div className="col-md-8">
            <h1 className="">
              Hey there. I am{' '+ author.name}
            </h1>
            
              <BlockContent
                blocks={author.bio}
                projectId="tbyrdlmq"
                dataset="production"
              />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;