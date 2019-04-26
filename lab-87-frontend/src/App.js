import React, {Component, Fragment} from 'react';
import {Container} from "reactstrap";
import {Route, Switch, withRouter} from "react-router";
import Posts from "./containsers/Posts/Posts";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Post from "./containsers/Post/Post";
import Register from "./containsers/Register/Register";
import Login from "./containsers/Login/Login";
import NewPost from "./containsers/NewPost/NewPost";
import {connect} from "react-redux";
import {NotificationContainer} from "react-notifications";
import {logoutUser} from "./store/actions/userAction";


class App extends Component {
    render() {
        return (
            <Fragment>
                <NotificationContainer/>
                <header>
                    <Toolbar user={this.props.user}
                             logout={this.props.logoutUser}/>
                </header>
                <Container>
                    <Switch>
                        <Route path="/" exact component={Posts}/>
                        <Route path="/post/:id" exact component={Post}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/new/post" exact component={NewPost}/>
                    </Switch>
                </Container>
            </Fragment>
        );
    }

}

const mapStateToProps = state => ({
    user: state.users.user
});
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
