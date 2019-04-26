import React, {Component, Fragment} from 'react';
import { Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "../../components/FormElement/FormElement";
import {registerUser} from "../../store/actions/userAction";
import {connect} from "react-redux";

class Register extends Component {

    state = {
        username: '',
        password: '',
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.registerUser({...this.state})
    };

    render() {
        return (
            <Fragment>
                <h2>Register new user</h2>
                <Form onSubmit={this.submitFormHandler}>

                    <FormElement
                        propertyName="username"
                        title="Username"
                        type="text"
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        placeholder="Enter your desired username"
                        autocomplete="new-username"
                    />

                    <FormElement
                        propertyName="password"
                        title="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        placeholder="Enter your desired password"
                        autocomplete="new-password"
                    />

                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}>
                            <Button outline type="submit" color='primary'>
                                Register
                            </Button>
                        </Col>
                    </FormGroup>

                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.registerError,
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);