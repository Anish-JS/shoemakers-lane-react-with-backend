import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Running",
    description:
      "Running shoes are designed to protect your feet from the road, provided traction on different surfaces, cushion the landing shock and support your feet.",
  },
  {
    _id: uuid(),
    categoryName: "Sneakers",
    description:
      "Sneakers are shoes primarily designed for sports or other forms of physical exercise, but which are now also widely used for everyday casual wear.",
  },
  {
    _id: uuid(),
    categoryName: "Training",
    description:
      " training shoes are a category of footwear designed to provide protection for a variety of fitness activities. This class of footwear is suitable for weightlifting, a variety fitness classes, some racquet sports and overall use at the health club.",
  },
];
