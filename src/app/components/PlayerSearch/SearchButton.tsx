import React from "react"

interface SearchButtonProps {
  handleSearch: () => void
  loading: boolean
}

const SearchButton: React.FC<SearchButtonProps> = ({handleSearch, loading}) => (
  <button
    onClick={handleSearch}
    disabled={loading}
    className={`mt-2 p-2 border border-gray-300 rounded-md w-full ${
      loading ? "bg-gray-300" : "bg-green-700 text-white hover:bg-green-900"
    }`}>
    {loading ? "Loading..." : "Search"}
  </button>
)

export default SearchButton
