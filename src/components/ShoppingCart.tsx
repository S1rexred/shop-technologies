import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from '../data/items.json'
type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen} : ShoppingCartProps) {
    const {closeCart, cartItems} = useShoppingCart()
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Ваши покупки</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3} className="d-flex align-items-center">
                {cartItems.map(item => (
                <CartItem key={item.id} {...item}/>
                ))}
                <div className="ms-auto" style={{fontSize: '1.4rem'}} fw-bold fs-5>Всего: {formatCurrency(cartItems.reduce((total, CartItem) =>
                {
                    const item = storeItems.find(i => i.id === CartItem.id)
                    return total + (item?.price || 0) * CartItem.quantity
                }, 0)
                )}</div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}