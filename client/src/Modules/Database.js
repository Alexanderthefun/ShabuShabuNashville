export const database = {
    broths: [
        { id: 3, name: 'Miso', description: 'Traditional Dashi stock mixed with softened miso paste', canBeVegetarian: true, spicy: false, canBeGlutenFree: false, },
        { id: 4, name: 'Sukiyaki', description: 'Sweet and savory soy-based broth', canBeVegetarian: true, spicy: false, canBeGlutenFree: false },
        { id: 5, name: 'Tonkotsu', description: 'Traditional Japanese poke-bone based ramen broth with a savory flavor', canBeVegetarian: false, spicy: false, canBeGlutenFree: true },
        { id: 6, name: 'Tom Yum', description: 'Thai hot and sour soup with added lemongrass and coconut milk. Medium spice level', canBeVegetarian: true, spicy: true, canBeGlutenFree: false },
        { id: 7, name: 'Tomato', description: 'Simple but delicious broth made with juicy ripened tomatos and chicken broth', canBeVegetarian: true, spicy: false, canBeGlutenFree: false },
        { id: 8, name: 'Curry', description: 'Traditional Japanese yellow curry. Fragrant and flavorful with a mild heat level', canBeVegetarian: true, spicy: true, canBeGlutenFree: false },
        { id: 9, name: 'Szechuan Spicy', description: 'Tonkotsu base made with Scechuan peppers peppercor… chili oil. Your choice of Mild, Hot or Very Hot.', canBeVegetarian: true, spicy: true, canBeGlutenFree: false }
    ],

    drinks: [
        {
            "id": 2,
            "name": "Suntory Toki 86 Proof",
            "hasDairy": false,
            "type": "Whiskey",
            "hasAlcohol": true,
            "price": 10
        },
        {
            "id": 3,
            "name": "Nikka Coffey Malt",
            "hasDairy": false,
            "type": "Whiskey",
            "hasAlcohol": true,
            "price": 16
        },
        {
            "id": 4,
            "name": "Suntory Hibiki Harmony",
            "hasDairy": false,
            "type": "Whiskey",
            "hasAlcohol": true,
            "price": 18
        },
        {
            "id": 5,
            "name": "Jinro Chamisul",
            "hasDairy": false,
            "type": "Soju",
            "hasAlcohol": true,
            "price": 16
        },
        {
            "id": 6,
            "name": "Jinro Grapefruit",
            "hasDairy": false,
            "type": "Soju",
            "hasAlcohol": true,
            "price": 17
        },
        {
            "id": 7,
            "name": "Jinro GreenGrape",
            "hasDairy": false,
            "type": "Soju",
            "hasAlcohol": true,
            "price": 17
        },
        {
            "id": 8,
            "name": "Yogurt Soju Cocktail",
            "hasDairy": true,
            "type": "Cocktail",
            "hasAlcohol": true,
            "price": 12
        },
        {
            "id": 9,
            "name": "Grapefruit Soju Cocktail",
            "hasDairy": false,
            "type": "Cocktail",
            "hasAlcohol": true,
            "price": 12
        },
        {
            "id": 10,
            "name": "Lychee Sake Cocktail",
            "hasDairy": false,
            "type": "Cocktail",
            "hasAlcohol": true,
            "price": 12
        },
        {
            "id": 11,
            "name": "Gambino Prosecco",
            "hasDairy": false,
            "type": "Wine",
            "hasAlcohol": true,
            "price": 10
        },
        {
            "id": 12,
            "name": "Chateau Souverain Pinot Grigio",
            "hasDairy": false,
            "type": "Wine",
            "hasAlcohol": true,
            "price": 8
        },
        {
            "id": 13,
            "name": "Chateau Souverain Sauvignon Blanc",
            "hasDairy": false,
            "type": "Wine",
            "hasAlcohol": true,
            "price": 8
        },
        {
            "id": 14,
            "name": "Chateau Souverain Chardonnary",
            "hasDairy": false,
            "type": "Wine",
            "hasAlcohol": true,
            "price": 8
        },
        {
            "id": 15,
            "name": "Chateau Souverain Pinot Noir",
            "hasDairy": false,
            "type": "Wine",
            "hasAlcohol": true,
            "price": 8
        },
        {
            "id": 16,
            "name": "Chateau Souverain Merlot",
            "hasDairy": false,
            "type": "Wine",
            "hasAlcohol": true,
            "price": 8
        },
        {
            "id": 17,
            "name": "Chateau Souverain Cabernet Sauvignon",
            "hasDairy": false,
            "type": "Wine",
            "hasAlcohol": true,
            "price": 8
        },
        {
            "id": 18,
            "name": "Hot Sake 9oz",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 9
        },
        {
            "id": 19,
            "name": "Ozeki Draft Junmai",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 17
        },
        {
            "id": 20,
            "name": "Hakutsuru Superior Junmai",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 20
        },
        {
            "id": 21,
            "name": "Proper The Diplomat Junmai",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 20
        },
        {
            "id": 22,
            "name": "Ozeki Cloudy Nigori",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 18
        },
        {
            "id": 23,
            "name": "Hakutsuru Sayuri Nigori",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 18
        },
        {
            "id": 24,
            "name": "Proper The Diplomat Nigori",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 20
        },
        {
            "id": 25,
            "name": "Ozeki Hana-Peach Sparkling",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 18
        },
        {
            "id": 26,
            "name": "Ozeki Hana-Yuzu Sparkling",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 18
        },
        {
            "id": 27,
            "name": "Moonstone Asian Pear",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 19
        },
        {
            "id": 28,
            "name": "Sesshu Otokoyama Tokubetsu",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 45
        },
        {
            "id": 29,
            "name": "Kikuisami 36 Samurai Junmai Ginjo",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 65
        },
        {
            "id": 30,
            "name": "SOTO Super Premium Junmai Daiginjo",
            "hasDairy": false,
            "type": "Sake",
            "hasAlcohol": true,
            "price": 86
        },
        {
            "id": 31,
            "name": "Sapporo",
            "hasDairy": false,
            "type": "Beer",
            "hasAlcohol": true,
            "price": 8
        },
        {
            "id": 32,
            "name": "Asahi",
            "hasDairy": false,
            "type": "Beer",
            "hasAlcohol": true,
            "price": 8
        },
        {
            "id": 33,
            "name": "Blue Moon",
            "hasDairy": false,
            "type": "Beer",
            "hasAlcohol": true,
            "price": 8
        },
        {
            "id": 34,
            "name": "Kirin Ichiban (bottle)",
            "hasDairy": false,
            "type": "Beer",
            "hasAlcohol": true,
            "price": 6
        },
        {
            "id": 35,
            "name": "Kirin Light (bottle)",
            "hasDairy": false,
            "type": "Beer",
            "hasAlcohol": true,
            "price": 6
        },
        {
            "id": 36,
            "name": "Heineken (bottle)",
            "hasDairy": false,
            "type": "Beer",
            "hasAlcohol": true,
            "price": 6
        },
        {
            "id": 37,
            "name": "Coke",
            "hasDairy": false,
            "type": "Soda",
            "hasAlcohol": false,
            "price": 3.99
        },
        {
            "id": 38,
            "name": "Diet-Coke",
            "hasDairy": false,
            "type": "Soda",
            "hasAlcohol": false,
            "price": 3.99
        },
        {
            "id": 39,
            "name": "Dr. Pepper",
            "hasDairy": false,
            "type": "Soda",
            "hasAlcohol": false,
            "price": 3.99
        },
        {
            "id": 40,
            "name": "Fanta",
            "hasDairy": false,
            "type": "Soda",
            "hasAlcohol": false,
            "price": 3.99
        },
        {
            "id": 41,
            "name": "Sprite",
            "hasDairy": false,
            "type": "Soda",
            "hasAlcohol": false,
            "price": 3.99
        },
        {
            "id": 42,
            "name": "Lemonade",
            "hasDairy": false,
            "type": "Soda",
            "hasAlcohol": false,
            "price": 3.99
        },
        {
            "id": 43,
            "name": "Sparkling Water",
            "hasDairy": false,
            "type": "Soda",
            "hasAlcohol": false,
            "price": 3.99
        },
        {
            "id": 44,
            "name": "Green Tea",
            "hasDairy": false,
            "type": "Hot Tea",
            "hasAlcohol": false,
            "price": 1.99
        },
        {
            "id": 45,
            "name": "Roasted Rice Tea",
            "hasDairy": false,
            "type": "Hot Tea",
            "hasAlcohol": false,
            "price": 1.99
        },
        {
            "id": 46,
            "name": "Matcha Blend Tea",
            "hasDairy": false,
            "type": "Hot Tea",
            "hasAlcohol": false,
            "price": 1.99
        },
        {
            "id": 47,
            "name": "Calpico",
            "hasDairy": false,
            "type": "Japanese Soda",
            "hasAlcohol": false,
            "price": 3.99
        },
        {
            "id": 48,
            "name": "Ramune Original",
            "hasDairy": false,
            "type": "Japanese Soda",
            "hasAlcohol": false,
            "price": 3.89
        },
        {
            "id": 49,
            "name": "Ramune Melon",
            "hasDairy": false,
            "type": "Japanese Soda",
            "hasAlcohol": false,
            "price": 3.89
        },
        {
            "id": 50,
            "name": "Ramune Strawberry",
            "hasDairy": false,
            "type": "Japanese Soda",
            "hasAlcohol": false,
            "price": 3.89
        },
        {
            "id": 51,
            "name": "Ramune Lychee",
            "hasDairy": false,
            "type": "Japanese Soda",
            "hasAlcohol": false,
            "price": 3.89
        },
        {
            "id": 52,
            "name": "Grapefruit Ade",
            "hasDairy": false,
            "type": "Ade",
            "hasAlcohol": false,
            "price": 4.99
        },
        {
            "id": 53,
            "name": "LemonLime Ade",
            "hasDairy": false,
            "type": "Ade",
            "hasAlcohol": false,
            "price": 4.99
        },
        {
            "id": 54,
            "name": "Orange Ade",
            "hasDairy": false,
            "type": "Ade",
            "hasAlcohol": false,
            "price": 4.99
        },
        {
            "id": 55,
            "name": "Strawberry Ade",
            "hasDairy": false,
            "type": "Ade",
            "hasAlcohol": false,
            "price": 4.99
        },
        {
            "id": 56,
            "name": "Mango Ade",
            "hasDairy": false,
            "type": "Ade",
            "hasAlcohol": false,
            "price": 4.99
        },
        {
            "id": 57,
            "name": "Pineapple Ade",
            "hasDairy": false,
            "type": "Ade",
            "hasAlcohol": false,
            "price": 4.99
        },
        {
            "id": 58,
            "name": "Super Fruit Ade",
            "hasDairy": false,
            "type": "Ade",
            "hasAlcohol": false,
            "price": 5.5
        },
        {
            "id": 59,
            "name": "Cheese Milk Tea",
            "hasDairy": true,
            "type": "Cheese Tea",
            "hasAlcohol": false,
            "price": 5.95
        },
        {
            "id": 60,
            "name": "Cheese Peach Oolon Tea",
            "hasDairy": true,
            "type": "Cheese Tea",
            "hasAlcohol": false,
            "price": 5.95
        },
        {
            "id": 61,
            "name": "Cheese Jasmine Green Tea",
            "hasDairy": true,
            "type": "Cheese Tea",
            "hasAlcohol": false,
            "price": 5.95
        },
        {
            "id": 62,
            "name": "Classic Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 63,
            "name": "Strawberry Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 64,
            "name": "Matcha Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 65,
            "name": "Thai Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 66,
            "name": "Taro Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 67,
            "name": "Mango Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 68,
            "name": "Honeydew Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 69,
            "name": "Brown Sugar Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.75
        },
        {
            "id": 70,
            "name": "Tiramisu Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.75
        },
        {
            "id": 71,
            "name": "Mocha Cafe Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.75
        },
        {
            "id": 72,
            "name": "Avocado Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.75
        },
        {
            "id": 73,
            "name": "Cake puff cream Milk Tea",
            "hasDairy": true,
            "type": "Milk Tea",
            "hasAlcohol": false,
            "price": 5.95
        },
        {
            "id": 74,
            "name": "Strawberry Latte",
            "hasDairy": true,
            "type": "Latte",
            "hasAlcohol": false,
            "price": 5.75
        },
        {
            "id": 75,
            "name": "Matcha Latte",
            "hasDairy": true,
            "type": "Latte",
            "hasAlcohol": false,
            "price": 5.75
        },
        {
            "id": 76,
            "name": "Strawberry Smoothie",
            "hasDairy": true,
            "type": "Smoothie",
            "hasAlcohol": false,
            "price": 5.75
        },
        {
            "id": 77,
            "name": "Taro Smoothie",
            "hasDairy": true,
            "type": "Smoothie",
            "hasAlcohol": false,
            "price": 5.75
        },
        {
            "id": 78,
            "name": "Honeydew Smoothie",
            "hasDairy": true,
            "type": "Smoothie",
            "hasAlcohol": false,
            "price": 5.75
        },
        {
            "id": 79,
            "name": "Mango Smoothie",
            "hasDairy": true,
            "type": "Smoothie",
            "hasAlcohol": false,
            "price": 5.75
        },
        {
            "id": 80,
            "name": "Super Fruit Tea",
            "hasDairy": false,
            "type": "Fruit Tea",
            "hasAlcohol": false,
            "price": 5.95
        },
        {
            "id": 81,
            "name": "Whole Orange Fruit Tea",
            "hasDairy": false,
            "type": "Fruit Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 82,
            "name": "Strawberry Fruit Tea",
            "hasDairy": false,
            "type": "Fruit Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 83,
            "name": "Lemon Lime Fruit Tea",
            "hasDairy": false,
            "type": "Fruit Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 84,
            "name": "Passionfruit Tea",
            "hasDairy": false,
            "type": "Fruit Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 85,
            "name": "Mango Fruit Tea",
            "hasDairy": false,
            "type": "Fruit Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 86,
            "name": "Super Grapefruit Tea",
            "hasDairy": false,
            "type": "Fruit Tea",
            "hasAlcohol": false,
            "price": 5.25
        },
        {
            "id": 87,
            "name": "Royal Pineapple Fruit Tea",
            "hasDairy": false,
            "type": "Fruit Tea",
            "hasAlcohol": false,
            "price": 5.75
        },
        {
            "id": 88,
            "name": "Lychee Oolong Fruit Tea",
            "hasDairy": false,
            "type": "Fruit Tea",
            "hasAlcohol": false,
            "price": 5.5
        },
        {
            "id": 89,
            "name": "Peach Fruit Tea",
            "hasDairy": false,
            "type": "Fruit Tea",
            "hasAlcohol": false,
            "price": 5.5
        }
    ]
}

export const getBroths = () => {
    return [...database.broths]
}

export const getDrinks = () => {
    return [...database.drinks]
}

