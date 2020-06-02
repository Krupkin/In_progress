import React, {Component} from "react"
import ItemList from '../itemList';
import ErrorMesage from '../errorMesage';
import GotSerice from "../..//services/gotService";
import {withRouter} from 'react-router-dom';


class BookPage extends Component {
    gotService = new GotSerice()
    state= {
        error: false
    }
    

    componentDidCatch(){
        this.setState({error: true})
    }

    render(){
        if(this.state.error){
            return(
                <ErrorMesage/>
            )
        }


        return(
            <ItemList 
            onClickItem = {(itemId) => {
                this.props.history.push(`${itemId}`)
            }}
            getData = {this.gotService.getAllBooks}
            renderItem = {item => ( <><span>{item.name}</span> <button>Click me</button></>)}/>
        )
    }
}

export default withRouter(BookPage)