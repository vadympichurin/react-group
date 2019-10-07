import React from "react";
// import { withRouter } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';

const ArticleList = ({ articles, match, location }) => (
  <ul>
    {articles.map(article => (
      <li key={article.id}>
          <Link to={{
            pathname: `${match.url}/${article.id}`,
            state: { from: location },
          }}
         >{article.title}</Link>
      </li>
    ))}
  </ul>
);

export default withRouter(ArticleList);
// export default withRouter(ArticleList); // передаем пропс match компоненту 
