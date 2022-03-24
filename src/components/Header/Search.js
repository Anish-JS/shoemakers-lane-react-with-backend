import { useFilters } from "../../store/filter-context";

const Search = () => {
  const { dispatchFilter } = useFilters();

  return (
    <>
      <div className="card__info xs-gutter para-sm-xs">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => {
            return dispatchFilter({
              type: "SEARCH",
              payload: e.target.value,
            });
          }}
          className={`textbox searchbar sm-brr searchbar xxs-padding `}
        />
      </div>
    </>
  );
};

export default Search;
