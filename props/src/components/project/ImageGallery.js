import React from 'react'

const ImageGallery = ({images}) => {
  return (
    <div className='image-gallery'>
      {images.map((image,index)=>(
        <div key={index} className='image-container'>
            <h3>{image.heading}</h3>
            <p>{image.details}</p>
            <img src={image.imagePath} />
            <button className='btnExplore'>Explore More</button>
            </div>
      ))}
    </div>

  )
}

export default ImageGallery
