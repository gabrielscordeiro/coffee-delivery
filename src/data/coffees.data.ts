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

export const coffeeList = [
    {
        id: CoffeeTypes.EXPRESSO_TRADICIONAL,
        image: 'expresso',
        type: [
            'Traditional '
        ],
        name: 'Expresso Tradicional',
        description: 'Traditional coffee made with hot water and ground beans',
        price: 9.9
    },
    {
        id: CoffeeTypes.EXPRESSO_AMERICANO,
        image: 'americano',
        type: [
            'Traditional'
        ],
        name: 'Expresso Americano',
        description: 'Diluted espresso, less intense than traditional',
        price: 9.9
    },
    {
        id: CoffeeTypes.EXPRESSO_CREMOSO,
        image: 'expresso-cremoso',
        type: [
            'Traditional'
        ],
        name: 'Expresso Cremoso',
        description: 'Traditional espresso with creamy foam',
        price: 9.9
    },
    {
        id: CoffeeTypes.EXPRESSO_GELADO,
        image: 'cafe-gelado',
        type: [
            'Traditional',
            'Cold'
        ],
        name: 'Expresso Gelado',
        description: 'Drink prepared with espresso and ice cubes',
        price: 9.9
    },
    {
        id: CoffeeTypes.CAFE_COM_LEITE,
        image: 'cafe-com-leite',
        type: [
            'Traditional',
            'With mild'
        ],
        name: 'Café com Leite',
        description: 'Half and half traditional espresso with steamed milk',
        price: 9.9
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
        price: 9.9
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
        price: 9.9
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
        price: 9.9
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
        price: 9.9
    },
    {
        id: CoffeeTypes.CHOCOLATE_QUENTE,
        image: 'chocolate-quente',
        type: [
            'Special',
            'With mildk'
        ],
        name: 'Chocolate Quente',
        description: 'Drink made with chocolate dissolved in hot milk and coffee',
        price: 9.9
    },
    {
        id: CoffeeTypes.CUBANO,
        image: 'cubano',
        type: [
            'Especial',
            'Alcoholic',
            'Cold'
        ],
        name: 'Cubano',
        description: 'Iced espresso drink with rum, cream and mint',
        price: 9.9
    },
    {
        id: CoffeeTypes.HAVAIANO,
        image: 'havaiano',
        type: [
            'Special'
        ],
        name: 'Havaiano',
        description: 'Sweet drink prepared with coffee and coconut milk',
        price: 9.9
    },
    {
        id: CoffeeTypes.ARABE,
        image: 'arabe',
        type: [
            'Especial'
        ],
        name: 'Árabe',
        description: 'Drink prepared with Arabic coffee beans and spices',
        price: 9.9
    },
    {
        id: CoffeeTypes.IRLANDES,
        image: 'irlandes',
        type: [
            'Especial',
            'Alcoholic'
        ],
        name: 'Irlandês',
        description: 'Drink made from coffee, Irish whiskey, sugar and whipped cream',
        price: 9.9
    }
]