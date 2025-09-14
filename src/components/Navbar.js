import React from 'react';
import LOGO from '../components/Image/logo.jpg';

export default function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg`} style={{ backgroundColor: '#3d9f45ff' }}>
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img
                        src={LOGO}
                        alt="Logo"
                        width="70"
                        height="50"
                        className="d-inline-block align-text-center mx-2"
                        style={{ borderRadius: '10px' }}
                    />
                    <h3 className="m-0">▓▒░ 𝗥𝗞 𝗚𝗥𝗔𝗣𝗛𝗜𝗖𝗦 ░▒▓</h3>
                </a>

                <div className="collapse navbar-collapse justify-content-end mx-3" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="Home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="Template">
                                Templates
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="Vectors">
                                Vectors
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="Images">
                                Images
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="PSDs">
                                PSDs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="Tutorials">
                                Tutorials
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="Tools">
                                Tools
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="Tools">
                                BUY-Store
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
