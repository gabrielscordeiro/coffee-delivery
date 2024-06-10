import { useContext } from 'react'

import { CoffeeContext } from '../../../../contexts/CoffeeContext.tsx'
import { coffees } from '../../../../data/coffees.ts'
import { CoffeeItem } from './components/CoffeeItem'
import { CoffeeListContainer } from './styles.ts'

export function CoffeeList() {
    const { cart } = useContext(CoffeeContext)

    return (
        <CoffeeListContainer>
            <h2>Our Coffees</h2>

            <div className="coffeeList">
                {coffees.map((coffee) => (
                    <CoffeeItem
                        key={coffee.id}
                        coffee={coffee}
                        coffeeItemQtd={(cart && cart[coffee.id]) ? cart[coffee.id] : 1}
                    />
                ))}

            </div>
        </CoffeeListContainer>
    )
}