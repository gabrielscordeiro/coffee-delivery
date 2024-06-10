import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import BannerImage from '../../../../assets/banner.svg'
import { BannerAreaContainer, BenefitItem, BenefitsWrapper } from './styles.ts'

export function BannerArea() {
    return (
        <BannerAreaContainer>
            <div>
                <h1> Find the perfect coffee for any time of day</h1>
                <span
                    className="subTitle"> With Coffee Delivery you receive your coffee wherever you are, anytime
                </span>

                <BenefitsWrapper>
                    <BenefitItem color="yellow-dark">
                        <div className="benefitImage">
                            <ShoppingCart color="#fff" weight="fill"/>
                        </div>
                        Simple and secure purchase
                    </BenefitItem>
                    <BenefitItem color="base-text">
                        <div className="benefitImage">
                            <Package color="#fff" weight="fill"/>
                        </div>
                        Packaging keeps the coffee intact
                    </BenefitItem>
                    <BenefitItem color="yellow">
                        <div className="benefitImage">
                            <Timer color="#fff" weight="fill"/>
                        </div>
                        Fast and tracked delivery
                    </BenefitItem>
                    <BenefitItem color="purple">
                        <div className="benefitImage">
                            <Coffee color="#fff" weight="fill"/>
                        </div>
                        The coffee arrives fresh to you
                    </BenefitItem>
                </BenefitsWrapper>
            </div>

            <div>
                <img src={BannerImage} alt="Coffee cup banner" draggable={false}/>
            </div>
        </BannerAreaContainer>
    )
}