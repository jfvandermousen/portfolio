import React from 'react'
import pacman from '../img/pacman.gif';

export default function Contact() {
    return (
        <div>
            <h3 className="text-2xl my-4">You can join me at 0485/75.12.16 </h3>
            <p className="text-2xl mb-4">I am available between 9:05 am and 9:08 am</p>
            <img className="mt-8" src={pacman} alt="loading..." />
        </div>
    )
}
