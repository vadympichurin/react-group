import React from 'react';

const Article = ({match}) => (
    <article>
        <h3>Article</h3>
        <p>
            ID: {match.params.id}
        </p>
    </article>
);

export default Article;