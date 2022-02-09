import { Badge } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useState } from 'react';

const CartWidget = () => {
    // let addProducts = 0;

    const [ addProduct, setAddProduct ] = useState(0);

    const increment = () => {
        setAddProduct(addProduct+1);
    }

    return (
        <Button onClick={increment}>
         <Badge badgeContent={addProduct} color="secondary">
            < AddShoppingCartIcon />
        </Badge>
        </Button>
    )
}

export default CartWidget;