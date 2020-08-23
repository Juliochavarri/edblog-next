import React from 'react'
import MainHeader from '../navigation/MainMenu'
import Link from 'next/link'

const Header = () => (
    <header className="d-flex justify-content-between align-items-center sticky-top bg-light">
        <div>
            <Link href="/">
                <a>
                    <img className="img-fluid" src="/logo.svg" alt="EDlogo"/>
                </a>
            </Link>
        </div>
        <div>
            <MainHeader />
        </div>
    </header>
)

export default Header
