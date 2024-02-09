import { ICoffee } from '@/@types/coffee.ts'
import { CoffeeImageContainer, CoffeeItemContainer, CoffeeItemTag } from '@/pages/Home/CoffeeItem/styles.ts'

interface ICoffeeItem {
    coffee: ICoffee
}
export function CoffeeItem({ coffee }: ICoffeeItem) {
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
        </CoffeeItemContainer>
    )
}