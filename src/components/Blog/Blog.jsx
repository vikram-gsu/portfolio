import * as React from 'react';
import styles from './Blog.module.css';
import MediumItem from './MediumItem';

const data = require('./medium_feed.json');
class Blog extends React.Component {
  state = {posts: null}

  componentDidMount(){
    this.setPosts()
  }
  setPosts = () => {

    const { Post } = data.payload.references
  
    const posts = Object.values(Post).map(({ id, title, createdAt, virtuals, uniqueSlug }) => Object.assign({},{
        title,
        createdAt,
        subtitle: virtuals.subtitle,
        image: virtuals.previewImage.imageId ? `https://cdn-images-1.medium.com/max/800/${virtuals.previewImage.imageId}` : null,
        url: `https://medium.com/@vrstumped/${uniqueSlug}`
      })
    )
  
    this.setState({
      posts
    })
  }

  render(){
  return (
  <div className={styles.contentGrid}>
    <h3 className={styles.contentHeader}> Blog </h3>
    {this.state.posts && this.state.posts.map(post => <MediumItem {...post} />)}
  </div>)
  }
}

export default Blog;