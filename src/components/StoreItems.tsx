import { Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}
export function StoreItem({id, name, price, imgUrl} : StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card className="h-100">
            <Card.Img 
            variant="top" 
            src={imgUrl} 
            height='270px' 
            style={{ objectFit: 'cover'}}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex flex-column justify-content-space-between align-items-baseline">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                {quantity === 0 ? (
                    <Button onClick={() => increaseCartQuantity(id)}>Добавить в корзину</Button>
                ) : ( <div className="d-flex align-items-center flex-column" style={{gap: '.5rem'}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap: '.5rem'}}>
                        <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                        <span className="fs-3">{quantity}</span>
                        <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                    </div>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Удалить</Button>
                    </div>)}
                    
                </div>
            </Card.Body>
        </Card> 
    )
}

export default StoreItem;