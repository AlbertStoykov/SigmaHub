import React from 'react';
import './style.css';

export default function Result ({ result }) {
    return (
        <section>
        <div id="sunrise">
            <p>{result.sunrise}</p>
        </div>

        <div id="sunset">
            <p>{result.sunset}</p>
        </div>
        </section>
    )
}
