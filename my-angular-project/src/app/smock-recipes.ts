import { RecipeModel } from './models';
export const MOCK_RECIPES: RecipeModel[] = [
    {
        id: 1,
        name: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish.',
        imgUrl: 'https://www.giallozafferano.com/images/228-22875/spaghetti-carbonara_1200x800.jpg',
        isFavorite: true,
        ingredients: [
            { name: 'Spaghetti', quantity: 200, unit: 'g' },
            { name: 'Guanciale', quantity: 100, unit: 'g' },
            { name: 'Egg Yolks', quantity: 4, unit: 'each' },
            { name: 'Pecorino Romano Cheese', quantity: 50, unit: 'g' },
            { name: 'Black Pepper', quantity: 1, unit: 'tsp' },
        ],
    },
    {
        id: 2,
        name: 'Caprese Salad',
        description: 'A simple and refreshing Italian salad.',
        imgUrl: 'https://reluctantgourmet.com/wp-content/uploads/2023/09/tomato-basil-mozzarella-d3-480x270.jpeg',
        isFavorite: false,
        ingredients: [
            { name: 'Tomatoes', quantity: 4, unit: 'each' },
            { name: 'Fresh Mozzarella', quantity: 200, unit: 'g' },
            { name: 'Fresh Basil', quantity: 1, unit: 'bunch' },
            { name: 'Extra Virgin Olive Oil', quantity: 2, unit: 'tbsp' },
        ],
    },
];