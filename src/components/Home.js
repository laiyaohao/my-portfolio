import React from "react";
import image from "../Firefox_wallpaper.png";

export default function Home() {
    return (
        <main>
            <img
                src={image}
                alt="beautiful rice field"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-48 px-8">
                <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name">
                    Hello World! <br /> Welcome to Yao Hao's portfolio website!
                </h1>
            </section>
        </main>
    );
}
