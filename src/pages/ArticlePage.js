import React, { Component } from "react";
import * as api from "../api-mock/api";
import ArticleList from "../components/ArticleList";
import CategorySelector from "../components/CategorySelector";
import categories from "../api-mock/categories";
import queryString from "query-string";

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class ArticlePage extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
      const category = getCategoryFromProps(this.props);

      if(!category) {
         return this.props.history.replace({
              pathname: this.props.location.pathname,
              search: 'category=all',
          });
      }

    api
    .fetchArticlesByCategory(category)
    .then(articles => this.setState({ articles }));

  };

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    console.log("prevCategory:", prevCategory);
    console.log("nextCategory:", nextCategory);

    if (prevCategory === nextCategory) return;

    api
      .fetchArticlesByCategory(nextCategory)
      .then(articles => this.setState({ articles }))
      .catch(error => console.log(error));
  }

  // меняем query string вручную для использования дальше
  handleCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`
    });
  };

  render() {
    const { articles } = this.state;
    const currentCategory = getCategoryFromProps(this.props);

    return (
      <div>
        <h2>Articles Pages</h2>
        <CategorySelector
          options={categories}
          onChange={this.handleCategoryChange}
          value={currentCategory}
        />
        {/* передаем пропс match ниже по компонентам вручную */}
        <ArticleList articles={articles} />
      </div>
    );
  }
}
