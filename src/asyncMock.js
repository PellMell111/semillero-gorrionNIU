const products = [
    {
        id: '1',
        name: 'Tomate Perita',
        price: 2000,
        category: 'vegetales',
        img: 'https://images.pexels.com/photos/10332298/pexels-photo-10332298.jpeg',
        stock: 40,
        alias: 'Tomate San Marzano, tomate pera',
        seedQuantity: '30 unidades'
    },
    {
        id: '2',
        name: 'Lechuga Costina',
        price: 4000,
        category: 'vegetales',
        img: 'https://images.pexels.com/photos/5202194/pexels-photo-5202194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 40,
        alias: 'Lechuga romana, lechuga cos',
        seedQuantity: '50 unidades'
    },
    {
        id: '3',
        name: 'Papa Yagana',
        price: 25000,
        category: 'tubérculos',
        img: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1600',
        stock: 40,
        alias: 'Papa Yagana-INIA',
        seedQuantity: '2.5 kilos'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}