import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Container } from '@/pages/_layouts/styles.ts'

export function BaseLayout() {
    return (
        <>
            <Container>
                <Header />

                <div id="main-area">
                    <Outlet />
                </div>

            </Container>

            <Footer />
        </>
    )
}