import axios from "axios";

const categoryData = async (setCategory) => {
  try {
    const {
      data: { categories },
    } = await axios.get(`/api/categories`);
    setCategory(categories);
  } catch (error) {
    console.log(error);
  }
};
export { categoryData };
