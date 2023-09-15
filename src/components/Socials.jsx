import React from 'react';

const Socials = () => {
    const socials = ['facebook', 'pinterest', 'instagram'];

    return (
        <div className='flex mt-auto mb-12'>
            {socials.map((media, index) => (
                <p key={index} className={`icon-${media} text-gray-500 hover:text-rose-400 text-3xl cursor-pointer p-2 mx-2`}></p>
            ))}
        </div>
    );
};

export default Socials;