import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-dark   text-white pt-4 pb-3 mt-5">
                <div className="container text-center text-md-start">
                    <div className="row">

                        {/* Contact Section */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h5 className="text-uppercase fw-bold">Follow us</h5>
                            <p>Email: rk_graphics@gmail.com</p>
                            <p>Address: Avas Vikas Colonyt, Uttar Pradesh - Farrukhabad, India</p>
                        </div>


                        {/* Links Section */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                            <h5 className="text-uppercase fw-bold">Information</h5>
                            <p><a href="/about" className="text-white text-decoration-none">About</a></p>
                            <p><a href="/contact" className="text-white text-decoration-none">Contact</a></p>
                        </div>
                        {/* Links Section */}
                        <div className="col-md-1 col-lg-2 col-xl-2 mx-auto mb-1">
                            <h5 className="text-uppercase fw-bold">Disclaimers</h5>
                            <p><a href="/about" className="text-white text-decoration-none">Privacy Policy</a></p>
                            <p><a href="/contact" className="text-white text-decoration-none">Terms of Use</a></p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center p-1 mt-2 border-top border-secondary">
                    © {new Date().getFullYear()} Rk_Graphic. All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}
