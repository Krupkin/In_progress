import React, {Component} from "react";
import ItemDetails, {Field} from '../itemDetails';
import GotSerice from "../../services/gotService";

export default class BookItem extends Component{
    gotService = new GotSerice()

    render(){
        return(
            <ItemDetails 
                itemID ={this.props.bookId} 
                getDataId = {this.gotService.getBooksById}>
                    <Field field = "isbn" label = "ISBN" />
                    <Field field = "publisher" label = "Publisher" />
                    <Field field = "released" label = "Released" />
                    <Field field = "numberOfPages" label = "Pages" />
            </ItemDetails>
        )
    }
}