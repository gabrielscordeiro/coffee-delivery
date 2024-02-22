import { FooterContainer } from '@/components/footer/style.ts'

export function Footer() {
    return (
        <FooterContainer>
            Made with ❤️ by <a className="cursor-pointer font-semibold hover:underline" href="https://gabrielcordeiro.dev" rel="nofollow noopener noreferrer" target="_blank">Gabriel S. Cordeiro</a>
        </FooterContainer>
    )
}