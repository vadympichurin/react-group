import React, { Component } from 'react';
import * as api from '../api-mock/api';

export default class SingleArticlePage extends Component {
    state = {
    "id": null,
    "imageUrl": null,
    "title": null,
    "author": null,
    "body": null,
    "category": null,
    };

    componentDidMount() {
        api.fetchArticleById(this.props.match.params.id).then(article => this.setState({ ...article }));
    };

    render(){

        const { imageUrl, title, author, body, category } = this.state;

        return(
            <article>
                <h2>{title}</h2>
                <img src={imageUrl} alt={title} />
                <p>
                    <b>Author: {author} </b>
                </p>
                <p>
                    <b>Category: { category } </b>
                </p>
                <p> {body} </p>
            </article>
        );
    }
};