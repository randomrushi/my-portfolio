import React from "react";
import { socialmedias } from "../data";

export default function Footer() {
    console.log(socialmedias);
    return (
        <footer id="footerx" className="bg-gray-800 top-0 z-10 mt-40">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center">
                <div className="flex-col md:px-4 sm:px-4 mx-auto justify-center ">
                    <div className="flex px-2 m-4 flex-row justify-center ">
                        {socialmedias.map((socialmedia) => (
                            <a href={socialmedia.link}
                            key={socialmedia.title}
                            className="w-100 p-2 sm:w-1/5" target="_blank">
                                <div className="flex relative">
                                    <img alt={socialmedia.title}
                                    className="w-10"
                                    src={socialmedia.image}
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="flex justify-center mt-10 px-4">
                        <div>© 2021 Copyright: 
                            <a href="#"> randomNerd.com</a>
                        </div> 
                    </div>
                </div>
            </div>
        </footer>
    );
}