import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Link } from '../routes'
import Progress from 'react-progress';

import axios from 'axios';

class Portfolios extends React.Component {

  state = {
    percent: 10
  }

  static async getInitialProps() {
    let posts = [];
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    } catch(err) {
      console.error(err);
    }

    return {posts: posts.splice(0, 10)};
  }

  componentDidMount() {
    setTimeout(() => this.setState({ percent: 100 }), 100);
  }

  renderPosts(posts) {
    return posts.map((post, index) => {
      return (
        <li key={index}>
          <Link route={`/portfolio/${post.id}`}>
            <a style={{'fontSize': '20px'}}> {post.title} </a>
          </Link>
        </li>
      )
    })
  }

  render() {
    const { posts } = this.props;

    return (
      <BaseLayout>
        <Progress percent={this.state.percent} color="red" height="3"/> 
        <h1> I am Portfolios Page </h1>
        <ul>
          { this.renderPosts(posts) }
        </ul>
      </BaseLayout>
    )
  }
}

export default Portfolios;
