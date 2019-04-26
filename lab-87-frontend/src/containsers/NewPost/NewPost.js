import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {createPost} from "../../store/actions/postsActions";
import {connect} from "react-redux";

class NewPost extends Component {

    state = {
        title: '',
        description: '',
        image: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.createPost({...this.state});
    };
    render() {
        return (
            <Fragment>
                <div style={{margin: '30px 0'}}>
                    <h2>Add new post</h2>
                    <hr/>
                </div>
                <Form onSubmit={this.submitFormHandler}>
                    <FormGroup row>
                        <Label for="title" sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input
                                value={this.state.title} onChange={this.inputChangeHandler}
                                type="text" name="title" id="title" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="description" sm={2}>Description</Label>
                        <Col sm={10}>
                            <Input
                                value={this.state.description} onChange={this.inputChangeHandler}
                                type="textarea" name="description" id="description" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="file" sm={2}>Image</Label>
                        <Col sm={10}>
                            <Input onChange={this.fileChangeHandler}
                                type="file" name="image" id="file" />
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="success">Create post</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createPost: postData => dispatch(createPost(postData))
});

export default connect(null, mapDispatchToProps)(NewPost);