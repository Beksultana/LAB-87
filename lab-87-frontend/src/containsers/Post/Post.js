import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPost} from "../../store/actions/postAction";
import {fetchComments} from "../../store/actions/commentAction";
import {Col, Row} from "reactstrap";
import Moment from "react-moment";
import './Post.css';
import PostsThumbnail from "../../components/PostsThumblnile/PostsThumbnile";
import NewComment from "../NewComment/NewComment";

class Post extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
        this.props.fetchComments(this.props.match.params.id);
    }

    render() {
        return (
            <Row>
                <Col sm={12}>
                    <h2 style={{textAlign: "center", marginTop: "30px"}}>
                        <strong>Post</strong>
                    </h2>
                    <hr/>
                   <div className="PostBlock">
                       <div>
                           { this.props.post.image ?
                           <img className='PostImg'
                                src={'http://localhost:7000/uploads/' +
                                this.props.post.image}
                                alt={this.props.post.image}/>
                                : <PostsThumbnail/>
                           }
                       </div>
                       <div>
                           <div>
                               <Moment format="DD.MM.YYYY HH:mm:ss">
                                   {this.props.post.dateTime}
                                </Moment>
                           </div>
                           <h2>{this.props.post.title}</h2>
                       </div>
                   </div>
                    <h2 style={{textAlign: "center"}}>Comments</h2>
                    {this.props.comments.length ? this.props.comments.map(comment => (
                        <div className='Comment' key={comment._id}>
                            <p>{comment.user.username || "Anonymous"}:</p>
                            <p>{comment.text || "No comment"}</p>
                        </div>
                    )): <div><h2>No comments</h2></div>}
                    {this.props.user ?
                       <div>
                           <NewComment post={this.props.match.params.id}/>
                       </div>
                        : null
                    }
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    post: state.post.post,
    comments: state.comments.comments,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id)),
    fetchComments: id => dispatch(fetchComments(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);