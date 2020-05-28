import React, {Component} from 'react';
import './itemList.css';
import GotSerice from "../../services/gotService"
import Spinner from "../spinner"


export default class ItemList extends Component {
    constructor(props){
        super(props)
    }
    gotService = new GotSerice()
    state = {
        charlist: null
    }

    componentDidMount(){
        this.gotService.getAllCharacters()
        .then(charlist => {
            this.setState({
                charlist
            })
        })
    }


    renderItem (arr) {
        return arr.map((elem, id) => {
            return(
                <li 
                    key = {id}
                    onClick={() => this.props.onClickChar(id)}    
                    className="list-group-item">
                    {elem.name}
                </li>
            )
        })
    }
    
    render() {

        const {charlist} = this.state;
        if(!charlist){
            return <Spinner/>
        }
        
        const elements = this.renderItem(charlist)
        return (
            <ul className="item-list list-group">
                {elements}
            </ul>
        );
    }
}