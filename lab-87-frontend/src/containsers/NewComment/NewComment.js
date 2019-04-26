import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Row} from "reactstrap";
import {connect} from "react-redux";
import {createComments} from "../../store/actions/postAction";
import './NewComments.css';

class NewComment extends Component {

    state = {
        text: '',
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    submitFormHandler = event => {
        event.preventDefault();
        const commentData = {
            posts: this.props.post,
            text: this.state.text
        };
        this.props.createComment(commentData);
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
   createComment: (commentData) => dispatch(createComments(commentData))
});

export default connect(null, mapDispatchToProps)(NewComment);