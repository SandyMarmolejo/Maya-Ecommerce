import { Badge } from '@material-ui/core';
import { ShoppingCardtOutlined } from '@material-ui/icons';

const CartWidget = () => {
    return (
        <Badge badgeContent={8} color="secondary">
            <ShoppingCardtOutlined/>
        </Badge>
    )
}

export default CartWidget;