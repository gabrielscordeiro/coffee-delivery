export function priceFormatter(number: number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}