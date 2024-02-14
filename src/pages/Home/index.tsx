import { coffeeList } from '@/data/coffees.data.ts'
import { Container } from '@/pages/_layouts/styles'
import { Banner } from '@/pages/Home/Banner'
import { CoffeeItem } from '@/pages/Home/CoffeeItem'
import { CoffeeList, CoffeeListContainer } from '@/pages/Home/style'

export function Home() {
    return (
        <Container>
            <Banner />

            <CoffeeListContainer>
                <h2>
                    Our coffees
                </h2>

                <CoffeeList>
                    {coffeeList.map(coffee => (
                        <CoffeeItem
                            key={coffee.id}
                            coffee={coffee}
                        />
                    ))}
                </CoffeeList>
            </CoffeeListContainer>
        </Container>
    )
}