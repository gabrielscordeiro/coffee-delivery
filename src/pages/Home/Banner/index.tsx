import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import { BannerContainer, BenefitItem, Benefits } from '@/pages/Home/Banner/styles'

import BannerCoffee from '../../../assets/banner.svg'

export function Banner() {
    return (
        <BannerContainer>
            <div>
                <h1>
                    Find the perfect coffee for any time of day
                </h1>
                <span>
                    With Coffee Delivery you receive your coffee wherever you are, anytime
                </span>

                <Benefits>
                    <BenefitItem color="yellow-dark">
                        <div className="icon">
                            <ShoppingCart color="#fff" weight="fill" />
                        </div>
                        Simple and secure purchase
                    </BenefitItem>
                    <BenefitItem color="base-text">
                        <div className="icon">
                            <Package color="#fff" weight="fill" />
                        </div>
                        Packaging keeps the coffee intact
                    </BenefitItem>
                    <BenefitItem color="yellow">
                        <div className="icon">
                            <Timer color="#fff" weight="fill" />
                        </div>
                        Fast and tracked delivery
                    </BenefitItem>
                    <BenefitItem color="purple">
                        <div className="icon">
                            <Coffee color="#fff" weight="fill" />
                        </div>
                        The coffee arrives fresh to you
                    </BenefitItem>
                </Benefits>
            </div>

            <div>
                <img src={BannerCoffee} alt="Coffee cup" draggable={false} />
            </div>
        </BannerContainer>
    )
}