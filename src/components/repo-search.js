import React from 'react';

const RepoSearch = ({ searchQuery, setSearchQuery, onSubmit }) => {

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="border-2 mb-2 relative focus-within:border-blue-500 ease-in duration-300">
          <input
            className="block p-4 w-full text-lg ease-in bg-transparent placeholder:text-white"
            type="text"
            value={searchQuery}
            placeholder="Github Search"
            id="github-search-input"
            name="github-search"
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="border-2 p-2" type="submit" onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  )
};

export default RepoSearch;