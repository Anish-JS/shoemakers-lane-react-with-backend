import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Niky Runner",
    price: "7000",
    discount: "0.2",
    deliveryCharges: "50",
    fastDelivery: true,
    inStock: false,
    categoryName: "running",
    rating: "1/5",
    type: "women",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    productInfo: `New, Breathable knitted upper which is easily washable, perfect for all seasons - winter, summer and rainy, designed to give you the most comfortable fitting.Best running shoes for mens can be used in gym workout, outdoor running, morning walking, basketball, badminton, trekking, hip hop dance, party wear, dancing, volleyball, hiking, athletic sports.`,
  },
  {
    _id: uuid(),
    name: "Niky Red-Black Sneakers",
    price: "1000",
    discount: "0.2",
    deliveryCharges: "50",
    fastDelivery: false,
    inStock: true,
    categoryName: "sneakers",
    image:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    type: "men",
    rating: "4/5",
    productInfo: `An overlay wrapping around the forefoot area, eye-catching branding and a bold modular heel clip all sprinkle their ultramodern magic onto this shoe. And with a lightweight midsole and cushiony SoftFoam+ sockliner, you will have a spring in your step however far you travel. comfort sockliner for instant step-in and long-lasting comfort that provides soft cushioning every step of your dayDETAILS Low boot silhouette Mixed material upper with overlay wrapping around the forefoot area SoftFoam+ sockliner EVA TPU midsole Rubber outsole Lace closure for snug fit Heel clip inspired by modular style`,
  },
  {
    _id: uuid(),
    name: "Niky Sunrise",
    price: "3000",
    discount: "0.2",
    deliveryCharges: "50",
    fastDelivery: true,
    inStock: true,
    categoryName: "training",
    image:
      "https://images.unsplash.com/photo-1585944672394-4c58a015c1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    type: "kids",
    rating: "2/5",
    productInfo: `These trainers help you transition from heavy lifting in the weight room to agility drills on the turf without skipping a beat. It packs stability, durability and flexibility into a versatile design that supports all the ways you move while you train for your sport.Full-length rubber tread gives you grip on a range of surfaces, while foam cushioning keeps your foot comfortablefrom outdoor workouts into the rest of your day.`,
  },
  {
    _id: uuid(),
    name: "Grid Training",
    price: "5000",
    discount: "0.2",
    deliveryCharges: "50",
    fastDelivery: false,
    inStock: false,
    categoryName: "training",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: "3/5",
    type: "women",
    productInfo: `These trainers help you transition from heavy lifting in the weight room to agility drills on the turf without skipping a beat. It packs stability, durability and flexibility into a versatile design that supports all the ways you move while you train for your sport.Full-length rubber tread gives you grip on a range of surfaces, while foam cushioning keeps your foot comfortablefrom outdoor workouts into the rest of your day.`,
  },
  {
    _id: uuid(),
    name: "Niky Training Soft-Sol",
    price: "2000",
    discount: "0.2",
    deliveryCharges: "50",
    fastDelivery: false,
    inStock: true,
    categoryName: "training",
    image:
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    rating: "3/5",
    type: "women",
    productInfo: `These trainers help you transition from heavy lifting in the weight room to agility drills on the turf without skipping a beat. It packs stability, durability and flexibility into a versatile design that supports all the ways you move while you train for your sport. Full-length rubber tread gives you grip on a range of surfaces, while foam cushioning keeps your foot comfortablefrom outdoor workouts into the rest of your day.`,
  },
  {
    _id: uuid(),
    name: "Neon Trainers",
    price: "1500",
    discount: "0.2",
    deliveryCharges: "50",
    fastDelivery: true,
    inStock: true,
    categoryName: "running",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    rating: "2/5",
    type: "women",
    productInfo: `New, Breathable knitted upper which is easily washable, perfect for all seasons - winter, summer and rainy, designed to give you the most comfortable fitting.Best running shoes for mens can be used in gym workout, outdoor running, morning walking, basketball, badminton, trekking, hip hop dance, party wear, dancing, volleyball, hiking, athletic sports.`,
  },
  {
    _id: uuid(),
    name: " Orange Highlight",
    price: "1700",
    discount: "0.2",
    deliveryCharges: "50",
    fastDelivery: false,
    inStock: true,
    categoryName: "training",
    image:
      "https://images.unsplash.com/photo-1611080027147-a1a0b6e05168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    rating: "4/5",
    type: "women",
    productInfo: `These trainers help you transition from heavy lifting in the weight room to agility drills on the turf without skipping a beat. It packs stability, durability and flexibility into a versatile design that supports all the ways you move while you train for your sport. Full-length rubber tread gives you grip on a range of surfaces, while foam cushioning keeps your foot comfortablefrom outdoor workouts into the rest of your day.`,
  },
  {
    _id: uuid(),
    name: "Converse",
    price: "1300",
    discount: "0.2",
    deliveryCharges: "50",
    fastDelivery: true,
    inStock: false,
    categoryName: "sneakers",
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80",
    rating: "1/5",
    type: "men",
    productInfo: `An overlay wrapping around the forefoot area, eye-catching branding and a bold modular heel clip all sprinkle their ultramodern magic onto this shoe. And with a lightweight midsole and cushiony SoftFoam+ sockliner, you will have a spring in your step however far you travel. comfort sockliner for instant step-in and long-lasting comfort that provides soft cushioning every step of your dayDETAILS Low boot silhouette Mixed material upper with overlay wrapping around the forefoot area SoftFoam+ sockliner EVA TPU midsole Rubber outsole Lace closure for snug fit Heel clip inspired by modular style`,
  },
  ,
  {
    _id: uuid(),
    name: "Converse Shade",
    price: "6500",
    discount: "0.2",
    deliveryCharges: "50",
    categoryName: "sneakers",
    fastDelivery: true,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: "2/5",
    type: "men",
    productInfo: `An overlay wrapping around the forefoot area, eye-catching branding and a bold modular heel clip all sprinkle their ultramodern magic onto this shoe. And with a lightweight midsole and cushiony SoftFoam+ sockliner, you will have a spring in your step however far you travel. comfort sockliner for instant step-in and long-lasting comfort that provides soft cushioning every step of your dayDETAILS Low boot silhouette Mixed material upper with overlay wrapping around the forefoot area SoftFoam+ sockliner EVA TPU midsole Rubber outsole Lace closure for snug fit Heel clip inspired by modular style`,
  },
];
