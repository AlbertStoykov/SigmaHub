import React from 'react';
import './style.css';

export default function Result ({ result }) {
    return (
        <section>
        <div id="sunrise">
            <p>{result.public_repos}</p>
            <p>{result.repos_url}</p>
        </div>

        <div id="sunset">
            <p>{result.login}</p>
        </div>
        </section>
    )
}
