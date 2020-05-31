import React, {Component} from 'react';
import './itemDetails.css';
import GotSerice from "../../services/gotService";


const Field = ({item, field, label}) => {
    return(
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">{label}</span>
                <span>{item[field]}</span>
            </li>
    )
}
export {Field}

export default class ItemDetails extends Component {
    gotService = new GotSerice()
    
    state = {
        item: null
    }

    componentDidMount(){
        this.onItemUpdater()
    }

    componentDidUpdate(prevProps){
        if(this.props.itemID !== prevProps.itemID){
            this.onItemUpdater()
        }
    }

    onItemUpdater(){
        const {itemID} = this.props;
        if(!itemID){
            return
        }
        this.props.getDataId(itemID)
            .then(item => {
                this.setState({item})
            })

    }

    render() {
        if(!this.state.item){
            return(
                <div className="char-details rounded">
                    <h3>&#8666; Choise some one</h3>
                </div>
            )
        } 
        const {item} = this.state
        const {name} = item
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}
