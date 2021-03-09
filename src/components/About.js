import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import shoalwater from "../IMG_0846.JPG"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    },[]);
    if (!author) {
        return <div>Loading...</div>
    }
    return (
        <main className="min-h-screen">
            <img src={shoalwater} alt="shoalwater" className="absolute h-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="rounded-lg lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} 
                    className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-white mb-4">
                            Hey there. I am{" "}
                            <span className="text-gray-400">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} 
                            projectId="tbyrdlmq" 
                            dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}