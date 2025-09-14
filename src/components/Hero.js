import React from 'react'
import imageHero from '../components/Image/imageHero.jpg';
import imageHero1 from '../components/Image/imageHero1.jpg';
import imageHero2 from '../components/Image/imageHero2.jpg';
export default function hero() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageHero} className="d-block w-100" style={{ height: '460px' }} alt="Hero Image1" />
            {/* <h2 classNameName="position-absolute top-50 start-50 translate-middle text-white">
              This is the Hero Section Preview
            </h2> */}
          </div>
          <div className="carousel-item">
            <img src={imageHero1} className="d-block w-100 h-400" style={{ height: '460px' }} alt="Hero Image1" />
          </div>
          <div className="carousel-item">
            <img src={imageHero2} className="d-block w-100 h-400" style={{ height: '460px' }} alt="Hero Image1" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}