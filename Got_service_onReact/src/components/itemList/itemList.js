import React, {useEffect, useState} from 'react';
import './itemList.css';
import Spinner from "../spinner"


function ItemList({getData, renderItem, onClickItem}){

    const [itemList, itemListUpdate] = useState([])

    useEffect(() => {
        getData()
            .then(data => itemListUpdate(data))
    }, [])


    function renderItems(arr){
        return arr.map((elem, id) => {
            const label = renderItem(elem)
            return(
                    <li 
                        key = {id}
                        onClick={() => onClickItem(id + 1)}    
                        className="list-group-item">
                        {label}
                    </li>
            )
        })
    }
    

    if(!itemList){
        return <Spinner/>
    }

    const elements = renderItems(itemList)
        return (
            <ul className="item-list list-group">
                {elements}
            </ul>
        );
}

export default ItemList