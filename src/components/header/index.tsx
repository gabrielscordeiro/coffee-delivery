import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'

import { HeaderContainer, HeaderInfo } from '@/components/header/styles'
import { CoffeeContext } from '@/contexts/CoffeeContext'

import logo from '../../assets/logo.svg'

export function Header() {
    const { cart } = useContext(CoffeeContext)
    const cartLength = cart ? Object.keys(cart).length : 0

    console.log(cart)

    return (
        <HeaderContainer>
            <div>
                <img src={logo} alt="Logo" draggable={false}/>
            </div>
            <HeaderInfo>
                <div className="headerInfo location">
                    <MapPin weight="fill" size={22} color="#8047F8" />
                    Rio do sul, SC
                </div>
                <div className="headerInfo cart">
                    <ShoppingCart weight="fill" size={22} />

                    {!!cartLength && (
                        <div className="cartCount">{cartLength}</div>
                    )}
                </div>
            </HeaderInfo>
        </HeaderContainer>
    )
}