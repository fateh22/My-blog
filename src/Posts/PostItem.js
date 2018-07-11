import React from 'react'
import { style } from 'typestyle'
const iStyle = {
  textShadow: '0px -1px 11px #FF0000'
};
class PostItem extends React.Component {

  state = {
    isHovered: false,
    isHoveredTrash: false
  }

  handleHover = () => {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  handleHoverTrash = () => {
    this.setState({
      isHoveredTrash: !this.state.isHoveredTrash
    });
  }

  excerptPostItem = ( description ) => {
    return  ( description.length > 150 ) ? description.slice(0,150) + " ..... " : description
  }

  deletePostItem = () => {
    this.props.deletePostFromState( this.props.index )
  }

  render() {
    let { post } = this.props
    let cardClass = this.state.isHovered ? "card w-100 show-card" : "card w-100 hide-card";
    let iClass = this.state.isHoveredTrash ? "fa fa-trash-o float-right i-active" : "fa fa-trash-o float-right";
    return (
      <div className="single-post">

        <div className={ cardClass } onMouseEnter={ this.handleHover } onMouseLeave={ this.handleHover }  >
          <div className="card-body">
            <i
              className={ iClass }
              aria-hidden="true"
              onClick={ this.deletePostItem }
              onMouseEnter={ this.handleHoverTrash }
              onMouseLeave={ this.handleHoverTrash }
            ></i>
            <h5 className="card-title">{ post.name }</h5>
            <p className="card-text">{ this.excerptPostItem( post.description ) }</p>
            <a href="" className="btn btn-outline-primary float-right">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default PostItem
