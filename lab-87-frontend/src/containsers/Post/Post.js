import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPost} from "../../store/actions/postAction";
import {fetchComments} from "../../store/actions/commentAction";
import {Col, Row} from "reactstrap";
import Moment from "react-moment";
import './Post.css';

class Post extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
        this.props.fetchComments(this.props.match.params.id);
    }

    render() {
        return (
            <Row>
                <Col sm={12}>
                    <h2 style={{textAlign: "center", marginTop: "30px"}}><strong>Post</strong></h2>
                    <hr/>
                   <div className="PostBlock">
                       <div>
                           <img className='PostImg'
                                src={'http://localhost:7000/uploads/' + this.props.post.image}
                                alt={this.props.post.image}/>
                       </div>
                       <div>
                           <div>
                               <Moment format="DD.MM.YYYY HH:mm:ss">{this.props.post.dateTime}</Moment>
                           </div>
                           <h2>{this.props.post.title}</h2>
                       </div>
                   </div>
                    <h2 style={{textAlign: "center"}}>Comments</h2>
                    {this.props.comments.map(comment => (
                        <div className='Comment' key={comment._id}>
                            <p>{comment.user.username || "Anonymous"}:</p>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    post: state.post.post,
    comments: state.comments.comments
});

const mapDispatchToProps = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id)),
    fetchComments: id => dispatch(fetchComments(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);