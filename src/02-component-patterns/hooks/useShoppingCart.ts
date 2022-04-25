import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/intefaces"


export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]:ProductInCart }>({})
  
    const onProductCountChange = ({ count, product }:{count:number, product:Product}) => {

        setShoppingCart( old => {

            if (count === 0) {
            const { [ product.id ]: toDelete, ...rest } = old
            return rest
            }

            return {
            ...old,
            [product.id]:{...product, count}
            }
        })
    }

    return{
        shoppingCart,
        onProductCountChange
    }
}