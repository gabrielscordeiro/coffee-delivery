import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { ICoffee } from '@/@types/coffee.ts'
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
                            onClick={() => console.log(-1)}
                        />
                        <span>0</span>
                        <Plus
                            size={14}
                            color={theme['purple']}
                            onClick={() => console.log(1)}
                        />
                    </ItemQuantitySelector>

                    <button onClick={() => console.log('add to cart')}>
                        <ShoppingCart color="#fff" weight="fill" size={22} />
                    </button>
                </div>
            </CoffeeItemActions>
        </CoffeeItemContainer>
    )
}