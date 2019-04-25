import React, {Fragment} from 'react';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import Posts from "./containsers/Posts/Posts";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Post from "./containsers/Post/Post";


function App() {
  return (
    <Fragment>
        <header>
            <Toolbar/>
        </header>
        <Container>
            <Switch>
                <Route path="/" exact component={Posts}/>
                <Route path="/post/:id" exact component={Post}/>
            </Switch>
        </Container>
    </Fragment>
  );
}

export default App;
