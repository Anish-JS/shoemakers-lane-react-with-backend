import { useFilters } from "../../store/filter-context";
import "./ProductListing.css";
const Filters = (props) => {
  const { filterState, dispatchFilter } = useFilters();
  const {
    sort,
    typeOfProduct,
    category,
    rating,
    priceRange,
    inStock,
    fastDelivery,
  } = filterState;

  return (
    <>
      <div className="left-section md-padding bg-dull">
        <div className="filter para-sm-xs bold">
          <div className="xs-gutter">Filters</div>
          <div className="xs-gutter">
            <button
              className="clear bold"
              onClick={() => dispatchFilter({ type: "RESET" })}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="price xs-gutter para-sm-xs bold">
          <p>1000</p>
          <input
            type="range"
            name="priceRange"
            className="range-input xs-gutter"
            min="1000"
            value={priceRange}
            onChange={(event) => {
              dispatchFilter({
                type: "PRICE_RANGE",
                payload: event.target.value,
              });
            }}
            max="10000"
          />
          <p>10000</p>
        </div>
        <div className="Rating xs-gutter">
          <div className="para-sm-xs bold">Sort by Price</div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              className="radio-input"
              checked={sort === "LOW_TO_HIGH"}
              onChange={() => dispatchFilter({ type: "LOW_TO_HIGH" })}
            />
            <span className="xs-gutter">Low-High</span>
          </div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              className="radio-input"
              checked={sort === "HIGH_TO_LOW"}
              onChange={() => dispatchFilter({ type: "HIGH_TO_LOW" })}
            />
            <span className="xs-gutter">High-Low</span>
          </div>
        </div>

        <div className="category xs-gutter">
          <div className="para-sm-xs bold">Category</div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input1"
              className="checkbox-input"
              checked={typeOfProduct.men}
              onChange={() =>
                dispatchFilter({ type: "TYPE_OF_PRODUCT", payload: "men" })
              }
            />
            <span className="xs-gutter">Men</span>
          </div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input1"
              className="checkbox-input"
              checked={typeOfProduct.women}
              onChange={() =>
                dispatchFilter({ type: "TYPE_OF_PRODUCT", payload: "women" })
              }
            />
            <span className="xs-gutter">Women</span>
          </div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input1"
              className="checkbox-input"
              checked={typeOfProduct.kids}
              onChange={() =>
                dispatchFilter({ type: "TYPE_OF_PRODUCT", payload: "kids" })
              }
            />
            <span className="xs-gutter">Kids</span>
          </div>
        </div>
        <div className="category xs-gutter">
          <div className="para-sm-xs bold">Type</div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input2"
              className="checkbox-input"
              checked={category.running}
              onChange={() =>
                dispatchFilter({ type: "CATEGORY", payload: "running" })
              }
            />
            <span className="xs-gutter">Running</span>
          </div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input2"
              className="checkbox-input"
              checked={category.sneakers}
              onChange={() =>
                dispatchFilter({ type: "CATEGORY", payload: "sneakers" })
              }
            />
            <span className="xs-gutter">Sneakers</span>
          </div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input2"
              className="checkbox-input"
              checked={category.training}
              onChange={() =>
                dispatchFilter({ type: "CATEGORY", payload: "training" })
              }
            />
            <span className="xs-gutter">Training</span>
          </div>
        </div>
        <div className="Rating xs-gutter">
          <div className="para-sm-xs bold">Rating</div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              className="radio-input"
              checked={rating === "4/5"}
              onChange={() =>
                dispatchFilter({ type: "RATING", payload: "4/5" })
              }
            />
            <span className="xs-gutter">4 star & above</span>
          </div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              className="radio-input"
              checked={rating === "3/5"}
              onChange={() =>
                dispatchFilter({ type: "RATING", payload: "3/5" })
              }
            />
            <span className="xs-gutter">3 star & above</span>
          </div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              className="radio-input"
              checked={rating === "2/5"}
              onChange={() =>
                dispatchFilter({ type: "RATING", payload: "2/5" })
              }
            />
            <span className="xs-gutter">2 star & above</span>
          </div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              className="radio-input"
              checked={rating === "1/5"}
              onChange={() =>
                dispatchFilter({ type: "RATING", payload: "1/5" })
              }
            />
            <span className="xs-gutter">1 star & above</span>
          </div>
        </div>
        <div className="category xs-gutter">
          <div className="para-sm-xs bold">Other Filters</div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="inStock"
              className="checkbox-input"
              checked={inStock}
              onChange={() => dispatchFilter({ type: "OUT_OF_STOCK" })}
            />
            <span className="xs-gutter">Include Out of Stock Products</span>
          </div>
          <div className="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="fastDelivery"
              className="checkbox-input"
              checked={fastDelivery}
              onChange={() => dispatchFilter({ type: "FAST_DELIVERY" })}
            />
            <span className="xs-gutter">Fast Delivery Only</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
