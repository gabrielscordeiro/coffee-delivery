import { ReactNode } from 'react'

import { CardHeaderContainer } from './styles.ts'

interface ICheckoutCardHeader {
    icon: ReactNode
    title: string
    subtitle: string
}

export function CardHeader({icon, title, subtitle}: ICheckoutCardHeader) {
    return (
        <CardHeaderContainer>
            {icon}
            <div className="titleArea">
                <h3>{title}</h3>
                <span className="subtitle">{subtitle}</span>
            </div>
        </CardHeaderContainer>
    )
}