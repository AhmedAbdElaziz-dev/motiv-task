import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Search = () => {
  return (
    <div className="bg-gray-100 flex rounded-md h-12 p-3">
      <MagnifyingGlassIcon className="w-6 text-gray-400 mr-3" />
      <input
        className="border-none bg-gray-100 focus:outline-none"
        placeholder="search or type"
      />
    </div>
  );
};

export default Search;
