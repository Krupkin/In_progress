import React, {Component} from "react"
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMesage from '../errorMesage';
import GotSerice from "../..//services/gotService";
import RowDetails from "../rowDetails"

export default class BookPage extends Component {
    gotService = new GotSerice()
    state= {
        selektedItem: null,
        error: false
    }
    
    onClickItem = (selektedItem) => {
        this.setState(({
            selektedItem
        }))
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

        const itemList = (
            <ItemList 
                onClickItem = {this.onClickItem}
                getData = {this.gotService.getAllBooks}
                renderItem = {item => ( <><span>{item.name}</span> <button>Click me</button></>)}/>
        )

        const itemDetails = (
            <ItemDetails 
                itemID ={this.state.selektedItem} 
                getDataId = {this.gotService.getBooksById}>
                    <Field field = "isbn" label = "ISBN" />
                    <Field field = "publisher" label = "Publisher" />
                    <Field field = "released" label = "Released" />
                    <Field field = "numberOfPages" label = "Pages" />
            </ItemDetails>
        )

        return(
            <RowDetails left={itemList} right = {itemDetails}/>
        )
    }
}