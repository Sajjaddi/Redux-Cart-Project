import { useDispatch } from "react-redux"
import { cartAction } from "../../../store/cartSlice"

const MenuItem = ({name, price, description, id}) => {
    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(cartAction.addItemToCart({
            name,
            price,
            id,
            description
        }))
    }

    return (
        <li className="menu-item">
            <div>
                <h3>{name}</h3>
                <span>${price.toFixed(2)}</span>
            </div>
            <strong className="content">{description}</strong>
            <button onClick={addToCartHandler}>Add to Cart</button>
        </li>
    )
}

export default MenuItem