enum CoffeeTypes {
    EXPRESSO_TRADICIONAL ,
    EXPRESSO_AMERICANO,
    EXPRESSO_CREMOSO,
    EXPRESSO_GELADO,
    CAFE_COM_LEITE  ,
    LATTE,
    CAPUCCINO,
    MACCHIATO,
    MOCACCINO,
    CHOCOLATE_QUENTE,
    CUBANO,
    HAVAIANO,
    ARABE,
    IRLANDES
}

export const coffees = [
    {
        id: CoffeeTypes.EXPRESSO_TRADICIONAL,
        image: 'expresso',
        type: [
            'Traditional '
        ],
        name: 'Espresso',
        description: 'Traditional coffee made with hot water and ground beans',
        price: 7.95
    },
    {
        id: CoffeeTypes.EXPRESSO_AMERICANO,
        image: 'americano',
        type: [
            'Traditional'
        ],
        name: 'American',
        description: 'Diluted espresso, less intense than traditional',
        price: 10
    },
    {
        id: CoffeeTypes.EXPRESSO_CREMOSO,
        image: 'expresso-cremoso',
        type: [
            'Traditional'
        ],
        name: 'Coffee Breve',
        description: 'Traditional espresso with creamy foam',
        price: 8.99
    },
    {
        id: CoffeeTypes.EXPRESSO_GELADO,
        image: 'cafe-gelado',
        type: [
            'Traditional',
            'Cold'
        ],
        name: 'Iced Coffee',
        description: 'Drink prepared with espresso and ice cubes',
        price: 9.99
    },
    {
        id: CoffeeTypes.CAFE_COM_LEITE,
        image: 'cafe-com-leite',
        type: [
            'Traditional',
            'With mild'
        ],
        name: 'Cafe au Lait',
        description: 'Half and half traditional espresso with steamed milk',
        price: 12.49
    },
    {
        id: CoffeeTypes.LATTE,
        image: 'latte',
        type: [
            'Traditional',
            'With milk'
        ],
        name: 'Latte',
        description: 'A shot of espresso with double the milk and creamy foam',
        price: 11.49
    },
    {
        id: CoffeeTypes.CAPUCCINO,
        image: 'capuccino',
        type: [
            'Traditional',
            'With milk'
        ],
        name: 'Capuccino',
        description: 'Cinnamon drink made from equal doses of coffee, milk and foam',
        price: 11.89
    },
    {
        id: CoffeeTypes.MACCHIATO,
        image: 'macchiato',
        type: [
            'Traditional',
            'With milk'
        ],
        name: 'Macchiato',
        description: 'Café Espresso mixed with some hot milk and froth',
        price: 9.99
    },
    {
        id: CoffeeTypes.MOCACCINO,
        image: 'mocaccino',
        type: [
            'Traditional',
            'With milk'
        ],
        name: 'Mocaccino',
        description: 'Espresso with chocolate syrup, little milk and foam',
        price: 11.39
    },
    {
        id: CoffeeTypes.CHOCOLATE_QUENTE,
        image: 'chocolate-quente',
        type: [
            'Special',
            'With milk'
        ],
        name: 'Hot Chocolate',
        description: 'Drink made with chocolate dissolved in hot milk and coffee',
        price: 9.19
    },
    {
        id: CoffeeTypes.CUBANO,
        image: 'cubano',
        type: [
            'Especial',
            'Alcoholic',
            'Cold'
        ],
        name: 'Cuban',
        description: 'Iced espresso drink with rum, cream and mint',
        price: 8.99
    },
    {
        id: CoffeeTypes.HAVAIANO,
        image: 'havaiano',
        type: [
            'Special'
        ],
        name: 'Hawaiian',
        description: 'Sweet drink prepared with coffee and coconut milk',
        price: 15.99
    },
    {
        id: CoffeeTypes.ARABE,
        image: 'arabe',
        type: [
            'Especial'
        ],
        name: 'Arabic',
        description: 'Drink prepared with Arabic coffee beans and spices',
        price: 15.49
    },
    {
        id: CoffeeTypes.IRLANDES,
        image: 'irlandes',
        type: [
            'Especial',
            'Alcoholic'
        ],
        name: 'Irish',
        description: 'Drink made from coffee, Irish whiskey, sugar and whipped cream',
        price: 14.39
    }
]