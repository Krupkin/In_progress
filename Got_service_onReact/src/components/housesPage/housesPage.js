import React, {Component} from "react"
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMesage from '../errorMesage';
import GotSerice from "../..//services/gotService";
import RowDetails from "../rowDetails"

export default class HousesPage extends Component {
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
                getData = {this.gotService.getAllHouses}
                renderItem = {item => ( <><span>{item.name}</span> <button>Click me</button></>)}/>
        )

        const itemDetails = (
            <ItemDetails 
                itemID ={this.state.selektedItem} 
                getDataId = {this.gotService.getHousesById}>
                    <Field field = "region" label = "Region" />
                    <Field field = "coatOfArms" label = "Arms" />
                    <Field field = "words" label = "Words" />
            </ItemDetails>
        )

        return(
            <RowDetails left={itemList} right = {itemDetails}/>
        )
    }
}