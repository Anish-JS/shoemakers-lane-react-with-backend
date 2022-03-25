import { useEffect } from "react";
import { useState } from "react";
import { categoryData } from "../../../utils/categoryData";
import CategoryCard from "../../Card/CategoryCard";
import { Link } from "react-router-dom";
import "./Categories.css";
// import { useFilters } from "../../../store/filter-context";
const Categories = () => {
  const [category, setCategory] = useState([]);
  // const { dispatchFilter } = useFilters();
  useEffect(() => {
    categoryData(setCategory);
  }, []);

  const categoryList = category.map((item) => (
    <Link to="/product-listing">
      <CategoryCard data={item} key={item["_id"]} />
    </Link>
  ));
  return (
    <>
      <div className="responsive-grid-items categories sm-padding">
        {categoryList}
      </div>
    </>
  );
};
export default Categories;
