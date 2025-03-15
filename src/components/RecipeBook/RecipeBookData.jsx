const recipes = [
    // 🥤 Drinks  
    {
      id: 1,
      name: "Lemon Mojito",
      image: "/lemon-mojito.jpg",
      category: "Drinks",
      ingredients: [
        "1 lemon (sliced)",
        "10 fresh mint leaves",
        "2 tbsp sugar",
        "1 cup soda water",
        "Ice cubes"
      ],
      instructions: "Muddle mint leaves, lemon slices, and sugar in a glass. Add ice cubes and pour soda water. Stir well and serve chilled."
    },
    {
      id: 2,
      name: "Rosemilk",
      image: "/rosemilk.jpg",
      category: "Drinks",
      ingredients: [
        "1 cup chilled milk",
        "1 tbsp rose syrup",
        "1 tsp sugar (optional)",
        "Ice cubes"
      ],
      instructions: "Mix rose syrup and sugar with chilled milk. Stir well and serve with ice cubes."
    },
    {
      id: 3,
      name: "Mango Juice",
      image: "/mango-juice.jpg",
      category: "Drinks",
      ingredients: [
        "1 ripe mango (peeled and chopped)",
        "1 cup cold water",
        "2 tbsp sugar",
        "Ice cubes"
      ],
      instructions: "Blend mango, sugar, and water until smooth. Strain and serve over ice."
    },
    {
      id: 4,
      name: "Chai (Indian Tea)",
      image: "/chai.jpg",
      category: "Drinks",
      ingredients: [
        "1 cup water",
        "½ cup milk",
        "1 tsp tea leaves",
        "2 tbsp sugar",
        "1 small piece ginger (crushed)",
        "1-2 cardamom pods"
      ],
      instructions: "Boil water with tea leaves, ginger, and cardamom. Add milk and sugar. Simmer for 2 minutes, strain, and serve hot."
    },
    {
      id: 5,
      name: "Coffee",
      image: "/coffee.jpg",
      category: "Drinks",
      ingredients: [
        "1 cup milk",
        "1 tbsp instant coffee",
        "1 tbsp sugar"
      ],
      instructions: "Boil milk and mix in instant coffee and sugar. Stir well and serve hot."
    },
  
    // 🍳 Instant Food  
    {
      id: 6,
      name: "Cheese Omelette",
      image: "/cheese-omelette.jpg",
      category: "Instant Food",
      ingredients: [
        "2 eggs",
        "¼ cup shredded cheese",
        "1 tbsp butter",
        "Salt & pepper to taste"
      ],
      instructions: "Whisk eggs, salt, and pepper. Heat butter in a pan, pour eggs, and cook. Sprinkle cheese, fold, and serve."
    },
    {
      id: 7,
      name: "Oatmeal",
      image: "/oatmeal.jpg",
      category: "Instant Food",
      ingredients: [
        "1 cup oats",
        "2 cups milk or water",
        "1 tbsp honey",
        "Fruits & nuts for topping"
      ],
      instructions: "Boil milk/water, add oats, and cook for 5 minutes. Add honey and top with fruits & nuts."
    },
    {
      id: 8,
      name: "Greek Yogurt",
      image: "/greek-yogurt.jpg",
      category: "Instant Food",
      ingredients: [
        "1 cup Greek yogurt",
        "1 tbsp honey",
        "Fruits & nuts for topping"
      ],
      instructions: "Mix yogurt with honey and top with fruits & nuts. Serve chilled."
    },
  
    // 🍲 Soups  
    {
      id: 9,
      name: "Mushroom Soup",
      image: "/mushroom-soup.jpg",
      category: "Soup",
      ingredients: [
        "200g mushrooms (sliced)",
        "1 onion (chopped)",
        "2 cups vegetable broth",
        "½ cup cream",
        "Salt & pepper"
      ],
      instructions: "Sauté onions and mushrooms. Add broth and simmer for 10 minutes. Blend smooth, add cream, and serve."
    },
    {
      id: 10,
      name: "Vegetable Soup",
      image: "/vegetable-soup.jpg",
      category: "Soup",
      ingredients: [
        "2 cups mixed vegetables",
        "1 onion (chopped)",
        "4 cups vegetable broth",
        "Salt & pepper"
      ],
      instructions: "Boil vegetables and onion in broth until soft. Blend for a smooth soup or serve chunky."
    },
    {
      id: 11,
      name: "French Onion Soup",
      image: "/french-onion-soup.jpg",
      category: "Soup",
      ingredients: [
        "3 onions (sliced)",
        "2 tbsp butter",
        "4 cups beef broth",
        "Bread slices",
        "Cheese for topping"
      ],
      instructions: "Sauté onions in butter until caramelized. Add broth and simmer. Serve with bread and melted cheese on top."
    },
    {
      id: 12,
      name: "Tomato Soup",
      image: "/tomato-soup.jpg",
      category: "Soup",
      ingredients: [
        "4 ripe tomatoes (chopped)",
        "1 onion (chopped)",
        "2 cups vegetable broth",
        "Salt & pepper",
        "Cream (optional)"
      ],
      instructions: "Sauté onions and tomatoes. Add broth and simmer. Blend smooth and serve with cream."
    },
  
    // 🍟 Snacks  
    {
      id: 13,
      name: "French Fries",
      image: "/french-fries.jpg",
      category: "Snacks",
      ingredients: [
        "2 large potatoes",
        "Oil for frying",
        "Salt"
      ],
      instructions: "Cut potatoes into thin strips. Deep fry in hot oil until golden brown. Drain, sprinkle salt, and serve."
    },
    {
      id: 14,
      name: "Pasta",
      image: "/pasta.jpg",
      category: "Snacks",
      ingredients: [
        "1 cup pasta",
        "1 tbsp olive oil",
        "1 cup tomato sauce",
        "Salt & herbs"
      ],
      instructions: "Boil pasta and drain. Sauté in olive oil, mix with tomato sauce, and season with herbs."
    },
    {
      id: 15,
      name: "Fruit Salad",
      image: "/fruit-salad.jpg",
      category: "Snacks",
      ingredients: [
        "1 cup mixed fruits (apple, banana, berries)",
        "1 tbsp honey",
        "1 tbsp lemon juice"
      ],
      instructions: "Chop fruits and mix with honey and lemon juice. Serve fresh."
    }
  ];
  
  export default recipes;
  