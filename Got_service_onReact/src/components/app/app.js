import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {ChararterPage, BookPage, HousesPage, BookItem} from '../pages';



import "./app.css";

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            buttonswicherPosition: true,
        }
        this.onToogleBlock = this.onToogleBlock.bind(this)
    }

    onToogleBlock(){
            this.setState(({
                buttonswicherPosition: !this.state.buttonswicherPosition
            }))
    }

    render(){
        const randomSwich = this.state.buttonswicherPosition ?  <RandomChar/> : null
        return(
            <Router>
                <div className = "app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {randomSwich}
                                <button 
                                    className = "buttonSwicher" 
                                    onClick = {this.onToogleBlock}>
                                        TogleSwich
                                </button>
                            </Col>
                        </Row>
                        <Route path="/characters" exact  component={ChararterPage}/>
                        <Route path="/books" exact component={BookPage}/>
                        <Route path="/houses" exact component={HousesPage}/>
                        <Route path="/books/:id" render = {
                            ({match}) => {
                                const {id} = match.params;
                                return <BookItem bookId={id}/>}
                        }/>
                    </Container>
                </div>
            </Router>
        )
    }
}