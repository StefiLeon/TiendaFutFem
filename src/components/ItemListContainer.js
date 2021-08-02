import '../App.css';
import './ItemListContainer.css'

export default function ItemListContainer(props) {
    return (
        <div className="item-list">
            <ul>
                <li>¡{props.greeting}, visitante!</li>
            </ul>
        </div>
    )
}