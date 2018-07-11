import React from 'react'
import PostItem from './PostItem'
class PostList extends React.Component {
  render() {
    return (
      <div className="Posts-list">
        <h5>All Posts</h5>
        <hr />
        <div className="all-posts">
          {
            this.props.posts.map( ( post, index ) => {
              return(
                <PostItem
                  key = { index }
                  post = { post }
                  index = { index }
                  deletePostFromState = { this.props.deletePostFromState }
                />)
            })
          }
        </div>
      </div>
    )
  }
}

export default PostList
