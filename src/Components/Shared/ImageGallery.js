import React from 'react'
import Gallery from 'react-grid-gallery';

export default function ImageGallery() {
    const IMAGES =
[
    {
        src: process.env.PUBLIC_URL + '/images/aguadulceshirt.jpeg',
        thumbnail: process.env.PUBLIC_URL + '/images/aguadulceshirt.jpeg',
        thumbnailWidth: 130,
        thumbnailHeight: 174,
    },
    {
        src: process.env.PUBLIC_URL + '/images/toughiesdigipak.jpeg',
        thumbnail: process.env.PUBLIC_URL + '/images/toughiesdigipak.jpeg',
        thumbnailWidth: 240,
        thumbnailHeight: 174,
    },
{
    src: process.env.PUBLIC_URL + '/images/brandedhowafixedannuity.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/brandedhowafixedannuity.jpg',
    thumbnailWidth: 130,
    thumbnailHeight: 174,
},
{
    src: process.env.PUBLIC_URL + '/images/brandedhowanannuity.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/brandedhowanannuity.jpg',
    thumbnailWidth: 130,
    thumbnailHeight: 174,
},
{
    src: process.env.PUBLIC_URL + '/images/argus.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/argus.jpg',
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},
{
    src: 'https://f4.bcbits.com/img/a3419430998_16.jpg',
    thumbnail: 'https://f4.bcbits.com/img/a3419430998_16.jpg',
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},
{
    src: 'https://f4.bcbits.com/img/0005887424_10.jpg',
    thumbnail: 'https://f4.bcbits.com/img/0005887424_10.jpg',
    thumbnailWidth: 280,
    thumbnailHeight: 174,
},
{
        src: "https://mir-cdn.behance.net/v1/rendition/project_modules/1400/fb5344125140145.6112dd9f07abb.jpg",
        thumbnail: "https://mir-cdn.behance.net/v1/rendition/project_modules/1400/fb5344125140145.6112dd9f07abb.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 174,
},
{
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/fc0b2592520321.5e4d4b6e18832.jpg",
        thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/fc0b2592520321.5e4d4b6e18832.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
},{
    src: process.env.PUBLIC_URL + '/images/toughiesflex.jpeg',
    thumbnail: process.env.PUBLIC_URL + '/images/toughiesflex.jpeg',
    thumbnailWidth: 130,
    thumbnailHeight: 174,
},
{
    src: process.env.PUBLIC_URL + '/images/10-steps-online-lead-generation.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/10-steps-online-lead-generation.jpg',
    thumbnailWidth: 150,
    thumbnailHeight: 174,
},
{
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/99fa5340203475.5775adbbab70c.jpg",
        thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/99fa5340203475.5775adbbab70c.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/508bb382054919.5d125a21a8303.jpg",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/508bb382054919.5d125a21a8303.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
}
,
{
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35e90082054919.5d121f5bd8355.png",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35e90082054919.5d121f5bd8355.png",
    thumbnailWidth: 150,
    thumbnailHeight: 212
}
,
{
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b2357882054919.5d12326f7a1d9.jpg",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b2357882054919.5d12326f7a1d9.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
}]

    return (
        <div className="fade-in">
            <Gallery
      images={IMAGES}
      enableLightbox={true}
      backdropClosesModal
      margin={10}
      enableImageSelection={false}/>
        </div>
    )
}
