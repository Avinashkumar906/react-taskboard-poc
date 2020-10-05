import React, { useEffect, useState } from 'react'

function Banner(props) {
    return (
        <section id="banner" className="major">
            <div className="inner">
                <header className="major">
                <h1 className="text-white">Hi, my name is { props.name }</h1>
                </header>
                <div className="content">
                    <p className="text-white">{ props.bio }</p>
                    <ul className="actions">
                        <li><a className="button next scrolly">Get Started</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Banner
