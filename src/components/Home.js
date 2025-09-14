import React from 'react'

export default function Home() {
  return (
    <>
      <h2 className='text-center mt-4'>Trending Resources</h2>
      <div className="container my-5">
        <div className="row g-3 justify-content-center">
          <div className="col-auto">
            <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px' }}>
              <img src="https://coreldrawdesign.com/resources/thumbnails/thumbnail-1729579955.webp" alt="imag" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px' }}>
              <img src="https://coreldrawdesign.com/resources/thumbnails/thumbnail-1709219812.webp" alt="imag" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px' }}>
              <img src="https://coreldrawdesign.com/resources/thumbnails/thumbnail-1751028124.webp" alt="imag" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px' }}>
              <img src="https://coreldrawdesign.com/templates/674.png" alt="imag" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px' }}>
              <img src="https://coreldrawdesign.com/templates/639.png" alt="imag" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px' }}>
              <img src="https://coreldrawdesign.com/templates/1077.png" alt="imag" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
              />
            </div>
          </div>




        </div>
        <div className="d-flex justify-content-center my-5">
          <button className="btn btn-primary">VIEW MORE</button>
        </div>
      </div>
    </>
  );
} 
