import '../App.css';
import './ItemListContainer.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

export default function ItemListContainer(props) {
    return (
        <>
            <ItemList />
            <ItemCount stock="10" initial="1"/>
        </>
    )
}

