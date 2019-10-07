import React, { Component } from 'react';
import * as api from '../api-mock/api';
import ArticleList from '../components/ArticleList';
import { Route } from 'react-router-dom';
import Article from '../components/Article';

export default class ArticlePage extends Component {
    state = {
        articles: []
    };

    componentDidMount(){
        api.fetchAllArticles().then(articles => this.setState({ articles }));
    };

    render() {

        const {articles} = this.state;

        return (
            <div>
                <h2>Articles Pages</h2>
                {/* передаем пропс match ниже по компонентам вручную */}
                <ArticleList articles={articles} match={this.props.match} /> 

                {/* <Route path={`${this.props.match.path}/:id`} component={Article} /> */}
            </div>
        )
    }
};
