import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

import { CoffeeContext, ICart } from '@/contexts/CoffeeContext.tsx'
import { coffeeList } from '@/data/coffees.data.ts'
import { Actions, Coffee, CoffeeInfo } from '@/pages/Checkout/components/CartItem/style.ts'

interface ICartItemProps {
    coffeeItemCart: ICart
}
export function CartItem({
    coffeeItemCart
}: ICartItemProps) {
    const coffee = coffeeList[Number(Object.keys(coffeeItemCart))]
    const theme = useTheme()
    const { removeCartItem, changeCartItemQuantity } = useContext(CoffeeContext)

    return (
        <>
            {coffee && (

                <Coffee>
                    <div>
                        <img
                            src={`/coffees/${coffee.image}.png`}
                            alt={coffee.name}
                            title={coffee.name}
                            width={64}
                            height={64}
                            draggable={false}
                        />

                        <CoffeeInfo>
                            <h3>
                                {coffee.name}
                            </h3>

                            <Actions>
                                <div className="quantity">
                                    <Minus
                                        size={14}
                                        color={theme['purple']}
                                        onClick={() => changeCartItemQuantity(coffee.id, -1)}
                                    />
                                    <span>{Number(Object.values(coffeeItemCart))}</span>
                                    <Plus
                                        size={14}
                                        color={theme['purple']}
                                        onClick={() => changeCartItemQuantity(coffee.id, 1)}
                                    />
                                </div>

                                <button onClick={() => removeCartItem(coffee.id)}>
                                    <Trash size={16} color={theme['purple']}/>
                                    <span>Remover</span>
                                </button>
                            </Actions>
                        </CoffeeInfo>
                    </div>

                </Coffee>
            )}
        </>
    )
}