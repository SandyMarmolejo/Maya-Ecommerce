import { Badge } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const CartWidget = () => {
    return (
        <Badge badgeContent={8} color="secondary">
           < AddShoppingCartIcon />
        </Badge>
    )
}

export default CartWidget;