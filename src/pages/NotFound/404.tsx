
import { ContainerNotFound, LinkPage } from '@/pages/NotFound/styles'

export function NotFound() {
    return (
        <ContainerNotFound>
            <h1> Page not found</h1>
            <p>
                Back to {' '} <LinkPage to="/" className="text-sky-500 underline-offset-4 hover:underline dark:text-sky-400">Home</LinkPage>
            </p>
        </ContainerNotFound>
    )
}
