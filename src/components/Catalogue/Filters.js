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
      <div class="left-section md-padding bg-dull">
        <div class="filter para-sm-xs bold">
          <div class="xs-gutter">Filters</div>
          <div class="xs-gutter">
            <button
              class="clear bold"
              onClick={() => dispatchFilter({ type: "RESET" })}
            >
              Clear
            </button>
          </div>
        </div>
        <div class="price xs-gutter para-sm-xs bold">
          Price
          <input
            type="range"
            name="priceRange"
            class="range-input xs-gutter"
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
        </div>
        <div class="Rating xs-gutter">
          <div class="para-sm-xs bold">Sort by Price</div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              class="radio-input"
              checked={sort === "LOW_TO_HIGH"}
              onChange={() => dispatchFilter({ type: "LOW_TO_HIGH" })}
            />
            <span class="xs-gutter">Low-High</span>
          </div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              class="radio-input"
              checked={sort === "HIGH_TO_LOW"}
              onChange={() => dispatchFilter({ type: "HIGH_TO_LOW" })}
            />
            <span class="xs-gutter">High-Low</span>
          </div>
        </div>

        <div class="category xs-gutter">
          <div class="para-sm-xs bold">Category</div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input1"
              class="checkbox-input"
              checked={typeOfProduct.men}
              onChange={() =>
                dispatchFilter({ type: "TYPE_OF_PRODUCT", payload: "men" })
              }
            />
            <span class="xs-gutter">Men</span>
          </div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input1"
              class="checkbox-input"
              checked={typeOfProduct.women}
              onChange={() =>
                dispatchFilter({ type: "TYPE_OF_PRODUCT", payload: "women" })
              }
            />
            <span class="xs-gutter">Women</span>
          </div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input1"
              class="checkbox-input"
              checked={typeOfProduct.kids}
              onChange={() =>
                dispatchFilter({ type: "TYPE_OF_PRODUCT", payload: "kids" })
              }
            />
            <span class="xs-gutter">Kids</span>
          </div>
        </div>
        <div class="category xs-gutter">
          <div class="para-sm-xs bold">Type</div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input2"
              class="checkbox-input"
              checked={category.running}
              onChange={() =>
                dispatchFilter({ type: "CATEGORY", payload: "running" })
              }
            />
            <span class="xs-gutter">Running</span>
          </div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input2"
              class="checkbox-input"
              checked={category.sneakers}
              onChange={() =>
                dispatchFilter({ type: "CATEGORY", payload: "sneakers" })
              }
            />
            <span class="xs-gutter">Sneakers</span>
          </div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="input2"
              class="checkbox-input"
              checked={category.training}
              onChange={() =>
                dispatchFilter({ type: "CATEGORY", payload: "training" })
              }
            />
            <span class="xs-gutter">Training</span>
          </div>
        </div>
        <div class="Rating xs-gutter">
          <div class="para-sm-xs bold">Rating</div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              class="radio-input"
              checked={rating === "4/5"}
              onChange={() =>
                dispatchFilter({ type: "RATING", payload: "4/5" })
              }
            />
            <span class="xs-gutter">4 star & above</span>
          </div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              class="radio-input"
              checked={rating === "3/5"}
              onChange={() =>
                dispatchFilter({ type: "RATING", payload: "3/5" })
              }
            />
            <span class="xs-gutter">3 star & above</span>
          </div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              class="radio-input"
              checked={rating === "2/5"}
              onChange={() =>
                dispatchFilter({ type: "RATING", payload: "2/5" })
              }
            />
            <span class="xs-gutter">2 star & above</span>
          </div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="radio"
              name="input1"
              class="radio-input"
              checked={rating === "1/5"}
              onChange={() =>
                dispatchFilter({ type: "RATING", payload: "1/5" })
              }
            />
            <span class="xs-gutter">1 star & above</span>
          </div>
        </div>
        <div class="category xs-gutter">
          <div class="para-sm-xs bold">Other Filters</div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="inStock"
              class="checkbox-input"
              checked={inStock}
              onChange={() => dispatchFilter({ type: "OUT_OF_STOCK" })}
            />
            <span class="xs-gutter">Include Out of Stock Products</span>
          </div>
          <div class="para-sm-xs xs-gutter">
            <input
              type="checkbox"
              name="fastDelivery"
              class="checkbox-input"
              checked={fastDelivery}
              onChange={() => dispatchFilter({ type: "FAST_DELIVERY" })}
            />
            <span class="xs-gutter">Fast Delivery Only</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
