import React, {Component} from 'react';
import './charDetails.css';
import GotSerice from "../../services/gotService";
import Spinner from "../spinner";



export default class CharDetails extends Component {
    constructor(props){
        super(props)
    }

    gotService = new GotSerice()
    state = {
        char: null
    }


    onCaharUpdater(){
        const {charID} = this.props;
        if(!charID){
            return
        }

        this.gotService.getCharacterById(charID)
            .then(char => {
                this.setState({
                    char
                })
            })
    }

    componentDidMount(){
        this.onCaharUpdater()
        
    }


    render() {
        if(!this.state.char){
            return null
        }
        return (
            <div className="char-details rounded">
                <h4>John Snow</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>1783</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>1820</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>First</span>
                    </li>
                </ul>
            </div>
        );
    }
}