import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            buttonswicherPosition: true,
            selektedChar: null
        }
        this.onToogleBlock = this.onToogleBlock.bind(this)
    }

    onToogleBlock(){
            this.setState(({
                buttonswicherPosition: !this.state.buttonswicherPosition
            }))
    }

    onClickChar = (id) => {
        this.setState(({
            selektedChar: id
        }))
    }

    render(){
        const randomSwich = this.state.buttonswicherPosition ?  <RandomChar/> : null


        return(
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomSwich}
                            <button 
                                className = "buttonSwicher"
                                onClick = {this.onToogleBlock}
                            >TogleSwich</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onClickChar = {this.onClickChar}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charID ={this.state.selektedChar} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}


