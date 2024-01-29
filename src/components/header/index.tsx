import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { HeaderContainer, HeaderInfo } from '@/components/header/styles'

import logo from '../../assets/logo.svg'

export function Header() {
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
                    <ShoppingCart weight="fill" size={22}/>
                </div>
            </HeaderInfo>
        </HeaderContainer>
    )
}