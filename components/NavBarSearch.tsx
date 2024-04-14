import { Input } from "./ui/input";
import SearchItem from "../components/SearchItem";

function NavBarSearch() {
  return (
    <div className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[440px] md:max-w-[520px]  lg:max-w-[540ppx]">
      <SearchItem />
    </div>
  );
}

export default NavBarSearch;
