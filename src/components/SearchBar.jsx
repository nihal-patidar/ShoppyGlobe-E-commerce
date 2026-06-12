import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchItem } from "../redux/searchSlice";

function SearchBar(){
    const [query , setQuery] = useState("");
    const dispatch = useDispatch();


    function handleSearch(e){

      if(e.key != 'Enter') return ;
      dispatch(setSearchItem(query))
    }

    function handleChange(e){
      setQuery(e.target.value);
    }
    return (
                //   {/* Search */}
          <div
            className="
              order-3
              w-full
              md:order-2
              md:flex-1
              md:max-w-xl
            "
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search products... & Press Enter"
                className="
                  w-full
                  h-12
                  rounded-2xl
                  pl-12
                  pr-4
                  bg-white/5
                  border
                  border-[var(--border-color)]
                  text-[var(--text-primary)]
                  placeholder:text-[var(--text-secondary)]
                  outline-none
                  focus:border-[var(--accent)]
                  focus:ring-2
                  focus:ring-[var(--accent)]/20
                  transition-all
                "

                value={query}

                onChange={handleChange}

                onKeyDown={handleSearch}
              />

              <span
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[var(--text-secondary)]
                "
              >
                🔍
              </span>
            </div>
          </div>
    )
}


export default SearchBar ;