import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Container } from '@/pages/_layouts/styles.ts'

export function BaseLayout() {
    return (
        <Container>
            <Header />

            <div id="main-area">
                <Outlet />
            </div>
        </Container>
    )
}