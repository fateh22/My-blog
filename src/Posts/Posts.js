import React from 'react'
import ReactDOM from 'react-dom'
import PostForm from './PostForm'
import PostList from './PostList'
class Post extends React.Component {
  constructor() {
    super()

    this.state = {
      posts: [
        {
          name: "What is Lorem Ipsum?",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
          name: "Lorem Ipsum",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        },
        {
          name: "Where can I get some?",
          description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
      ]
    }
  }

  addPostToState = newpost => {
    const newPosts = this.state.posts.concat({
      name: newpost.name,
      description: newpost.description
    });

    this.setState({
      posts: newPosts
    });
  }

  deletePostFromState = index => {
    const newposts = this.state.posts.filter( ( post, i ) => {
      if( index === i ) {
        return false;
      }

      return true;
    });

    this.setState({
      posts: newposts
    })
  }


  render() {
    return(
      <div id="Post-wrapper">
        <PostForm
          addPostToState = { this.addPostToState }
        />
        <PostList
          posts = { this.state.posts }
          deletePostFromState = { this.deletePostFromState }
        />
      </div>
    )
  }
}
ReactDOM.render(<Post />, document.getElementById('main'));
