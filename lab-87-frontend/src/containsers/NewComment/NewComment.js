import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Row} from "reactstrap";
import {connect} from "react-redux";
import {createComments} from "../../store/actions/postAction";
import './NewComments.css';
import {fetchComments} from "../../store/actions/commentAction";

class NewComment extends Component {

    componentDidMount() {

    }

    state = {
        posts: this.props.post,
        text: '',
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    submitFormHandler = event => {
        event.preventDefault();
        this.props.createComment({...this.state});
        this.props.fetchComment(this.props.post)
    };

    render() {

        return (
            <Form onSubmit={this.submitFormHandler}>
                <div className="FormDiv">
                    <Row>
                        <Col sm={9}>
                            <FormGroup>
                                <Input
                                    value={this.state.text}
                                    onChange={this.inputChangeHandler}
                                    type="text" name="text" id="text"
                                    placeholder="new comment"/>
                            </FormGroup>
                        </Col>
                        <Col sm={3}>
                            <FormGroup check>
                                <Button type="submit" color="primary">
                                    Add comment
                                </Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </Form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
   createComment: (commentData) => dispatch(createComments(commentData)),
    fetchComment: id => dispatch(fetchComments(id))
});

export default connect(null, mapDispatchToProps)(NewComment);