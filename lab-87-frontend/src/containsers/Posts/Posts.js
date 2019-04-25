import React, {Component, Fragment} from 'react';
import {fetchPosts} from "../../store/actions/postsActions";
import {connect} from "react-redux";
import {CardBody} from "reactstrap";
import './Posts.css';
import {Link} from "react-router-dom";

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts);
        const posts = this.props.posts.map(postItem => {
           return (
               <div className="Post" key={postItem._id}>
                   <div className='PostItem'>
                       <div>
                           <img className='PostImg'
                                src={'http://localhost:7000/uploads/' + postItem.image}
                                alt={postItem.image}/>
                       </div>
                       <div className='PostTextBlock'>
                           <div>
                               <p>{postItem.dateTime} by</p>
                               <p><strong>{postItem.user.username}</strong></p>
                           </div>
                           <Link to={"/post/" + postItem._id}><h2>{postItem.title}</h2></Link>
                       </div>
                   </div>
               </div>
           )
        });
        return (
            <Fragment>
                <div className="TitleText">
                    <h2><strong>Posts</strong></h2>
                    <hr/>
                </div>
                {posts}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);