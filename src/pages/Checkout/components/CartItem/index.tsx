import { coffeeList } from '@/data/coffees.data.ts'
import { Coffee, CoffeeInfo } from '@/pages/Checkout/components/CartItem/style.ts'

interface ICartItem {
    itemId: number
}
export function CartItem({
    itemId
}: ICartItem) {
    const coffee = coffeeList.find(coffee => coffee.id === itemId)

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
                        </CoffeeInfo>
                    </div>

                </Coffee>
            )}
        </>
    )
}