import React from 'react'
import Link from 'next/link'

const MainMenu = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link href="/"><a className="nav-link">Inicio</a></Link></li>
            <li className="nav-item"><Link href="/about"><a className="nav-link">Acerca de</a></Link></li>
            <li className="nav-item"><Link href="/contact"><a className="nav-link">contacto</a></Link></li>
        </ul>
    </nav>
)

export default MainMenu