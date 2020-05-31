import React, {Component} from 'react';
import './itemList.css';
import Spinner from "../spinner"


export default class ItemList extends Component {
        state = {
            itemlist: null
        }


    componentDidMount(){
        this.props.getData()
            .then(itemlist => {
                this.setState({
                    itemlist
                })
        })
    }


    renderItem (arr) {
        return arr.map((elem, id) => {
            const label = this.props.renderItem(elem)
            return(
                <li 
                    key = {id}
                    onClick={() => this.props.onClickItem(id + 1)}    
                    className="list-group-item">
                    {label}
                </li>
            )
        })
    }
    
    render() {

        const {itemlist} = this.state;
        if(!itemlist){
            return <Spinner/>
        }
        
        const elements = this.renderItem(itemlist)
        return (
            <ul className="item-list list-group">
                {elements}
            </ul>
        );
    }
}