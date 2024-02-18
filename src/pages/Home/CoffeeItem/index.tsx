import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useTheme } from 'styled-components'

import { ICoffee } from '@/@types/coffee.ts'
import { CoffeeContext } from '@/contexts/CoffeeContext.tsx'
import {
    CoffeeImageContainer,
    CoffeeItemActions,
    CoffeeItemContainer,
    CoffeeItemTag, CoffeePrice, ItemQuantitySelector
} from '@/pages/Home/CoffeeItem/styles.ts'
import { priceFormatter } from '@/utils/formatter.ts'


interface ICoffeeItem {
    coffee: ICoffee
}
export function CoffeeItem({ coffee }: ICoffeeItem) {
    const theme = useTheme()
    const [itemQuantity, setItemQuantity] = useState(0)
    const { setCartItems } = useContext(CoffeeContext)

    function handleChangeItemQuantity(quantity: number) {
        setItemQuantity((prevState) => {
            return prevState + quantity <= 1 ? 1 : prevState + quantity
        })
    }

    function handleAddCart() {
        setCartItems(coffee.id, itemQuantity)
        toast.success(`Coffee ${coffee.name} added to cart`)
    }


    return (
        <CoffeeItemContainer>
            <CoffeeImageContainer>
                <img
                    src={`/coffees/${coffee.image}.png`}
                    alt={coffee.name}
                    title={coffee.name}
                    draggable={false}
                />
            </CoffeeImageContainer>

            <CoffeeItemTag>
                {coffee.type.map(coffeeType =>
                    <span key={coffeeType}>{coffeeType}</span>
                )}
            </CoffeeItemTag>

            <h3>{coffee.name}</h3>

            <span className="description">{coffee.description}</span>

            <CoffeeItemActions>
                <CoffeePrice>
                    <span className="prefix">
                        US$
                    </span>
                    <span className="price">
                        {priceFormatter(coffee.price).replace('$','')}
                    </span>
                </CoffeePrice>

                <div className="qtdSelectorBuy">
                    <ItemQuantitySelector>
                        <Minus
                            size={14}
                            color={theme['purple']}
                            onClick={() => handleChangeItemQuantity(-1)}
                        />
                        <span className="quantity">{itemQuantity}</span>
                        <Plus
                            size={14}
                            color={theme['purple']}
                            onClick={() => handleChangeItemQuantity(1)}
                        />
                    </ItemQuantitySelector>

                    <button onClick={handleAddCart} disabled={itemQuantity === 0}>
                        <ShoppingCart color="#fff" weight="fill" size={22} />
                    </button>
                </div>
            </CoffeeItemActions>
        </CoffeeItemContainer>
    )
}