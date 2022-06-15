import "./SearchField.css";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, setSearchTerm } from "../../redux/slice/SerachSlice";
const SearchField = ({ resetTimerForSearchInput }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      placeholder="Search by name.."
      type="text"
      onKeyUp={resetTimerForSearchInput}
      value={searchTerm}
      onChange={onSearchChangeHandler}
    />
  );
};
export default SearchField;
