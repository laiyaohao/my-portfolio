import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-gray-300"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-gray-500 text-4xl font-bold cursive tracking-widest"
                    >
                        YaoHao
                    </NavLink>
                </nav>

                <nav>
                    <NavLink
                        to="/posts"
                        activeClassName="text-white bg-gray-600"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-400"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to="/projects"
                        activeClassName="text-white bg-gray-600"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-400"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="text-white bg-gray-600"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-gray-400"
                    >
                        About Me
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
