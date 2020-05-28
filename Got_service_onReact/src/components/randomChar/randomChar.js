import React, {Component} from 'react';
import './randomChar.css';
import GotSerice from "../../services/gotService"
import Spinner from "../spinner"
import ErrorMessage from "../errorMesage"


export default class RandomChar extends Component {
    constructor(){
        super();
        this.state = {
            char:{},
            loading: true,
            error: false
        }

        
        this.updateChair = this.updateChair.bind(this)
        this.onCharLoaded = this.onCharLoaded.bind(this)
        this.onError = this.onError.bind(this)
        this.updateChair()
    }


    gotService = new GotSerice()


    onCharLoaded(char){
        this.setState(({
            char,
            loading: false
            
        }))
    }

    onError(err){
        this.setState(({
            loading: false,
            error: true
        }))
    }

    updateChair(){
        const id = Math.floor(Math.random()*100 + 20);
        this.gotService.getCharacterById(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    componentDidMount(){
        this.updateChair()
        this.timerID = setInterval(this.updateChair, 3000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render() {

        const {char, loading, error} = this.state;
        const erromMesage = error ?<ErrorMessage/> : null;
        const loaderMessage = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <Content data = {char}/> : null;
        
        return (
            <div className="random-block rounded">
                {content}
                {loaderMessage}
                {erromMesage}
            </div>
        );
    }
}

const Content = (props) => {
        const  {name, gender, born, died, culture} = props.data;
        return(
            <>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </>
        )
    } 
