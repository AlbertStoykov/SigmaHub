import React from 'react';
import './style.css';

export default function Result ({ result }) {
    return (
        <section>
        <div id="sunrise">
            <img src="../../images/sun.png" alt="Sun" />
            <p>{result.sunrise}</p>
        </div>

        <div id="sunset">
            <img src="../../images/moon.png" alt="Moon" />
            <p>{result.sunset}</p>
        </div>
        </section>
    )
}
