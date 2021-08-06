import '../App.css';
import './ItemListContainer.css';
import ItemCount from './ItemCount';

export default function ItemListContainer(props) {
    return (
        <>
            <div className="item-list">
                <ul>
                    <li>¡{props.greeting}, visitante!</li>
                </ul>
            </div>
            <ItemCount stock="10" initial="1"/>
        </>
    )
}

