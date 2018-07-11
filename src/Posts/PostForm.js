import React from 'react'
import { style } from 'typestyle'
const showTextarea = style({
  display: 'block'
});
class PostForm extends React.Component {

  state = {
    post: {
      name: "",
      description: "",
    },
    isShow: false
  }

  is_StateOject_Empty = Obj => {
    return !Object.keys(Obj.name).length  && !Object.keys(Obj.description).length ? true : false
  }

  changePostName = event => {
    if( event.target.value ) {
      this.setState({
        post:{
          name: event.target.value
        },
        isShow: true
      })
    }
  }

  changePostDescription = event => {
    this.setState({
      post:{
        name: this.state.post.name,
        description: event.target.value
      }
    })
  }

  submitHandler = event => {
    event.preventDefault();

    if( this.is_StateOject_Empty( this.state.post ) ) {
      alert("Please enter Post ")
      return false
    }
    this.props.addPostToState( this.state.post )

    this.setState({
      post: {
        name: "",
        description: ""
      },
      isShow: !this.state.isShow
    });
  }

  render() {
    let isShow = this.state.isShow ? "form-group show-textarea" : "card w-100 hide-textarea";
    return (
      <div className="new-Post">
        <form onSubmit = { this.submitHandler }>
          <div className="form-group">
            <label htmlFor="inputAddress">New Post</label>
            <input
              type="text"
              className="form-control"
              id="inputname"
              placeholder="Post Name"
              value={ this.state.post.name }
              onChange={ this.changePostName }
              onBlur={ this.showTextarea }
            />
          </div>
          <div className={isShow} >
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Write Somthing else ..."
              value={ this.state.post.description }
              onChange={ this.changePostDescription }
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary float-right">New Post</button>
        </form>
      </div>
    )
  }
}

export default PostForm
