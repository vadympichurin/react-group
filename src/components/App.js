import React, { Component } from "react";
// import axios from "axios";
import ArticleList from "./ArticleList";
import { getArticlesByQuery } from "../services/api";
import CategorySelector from "./CategorySelector";

const styles = {
  header: { textAlign: "center" }
};

// process.env.API_KEY // !!!!!!!!!   доступ к ключам в файле .env !!!!!!!!!!!

const categorySelectorOptions = ["html", "css", "js", "react"];

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    category: categorySelectorOptions[2]
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    getArticlesByQuery(this.state.category)
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          error,
          isLoading: false
        });
      });
  } // все запросы на сервер и внешние АПИ тут

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate");
    console.log("prevState:", prevState);
    console.log("state:", this.state);

    const prevCategory = prevState.category;
    const nextCategory = this.state.category;

    if (prevCategory !== nextCategory) {
      this.setState({ isLoading: true });

      getArticlesByQuery(this.state.category)
        .then(articles => {
          this.setState({
            articles,
            isLoading: false
          });
        })
        .catch(error => {
          this.setState({
            error,
            isLoading: false
          });
        });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {}; // получает следующие пропс и стейт, их можно сравнить с текущими

  // getSnapshotBeforeUpdate(prevProps, prevState){}; // перед обновлением делает фото

  // componentDidUpdate(prevProps, prevState, snapshot) {}; // сразу после обновления, можно вызывать setState(перед сетСтейт делать проверку), можно делать запросы и сравнения

  handleCategoryChange = evt => {
    console.log(evt.target.value);
    this.setState({
      category: evt.target.value
    });
  };

  render() {
    const { articles, isLoading, error, category } = this.state;

    console.log(this.state);

    return (
      <div>
        <h1 style={styles.header}>Forms in React</h1>

        <CategorySelector
          options={categorySelectorOptions}
          category={category}
          onChange={this.handleCategoryChange}
        />

        {isLoading ? <h2>...Loading</h2> : <ArticleList articles={articles} />}
      </div>
    );
  }
}
