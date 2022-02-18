import React from 'react'

import SearchListing from './search-listing';

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return (
      <div>Nothing found</div>
    )
  }

  return (
    <div>
      <ul className="flex flex-col m-auto">
        {results.map(item => (
          <li key={item.full_name} className="border-white flex flex-row mb-5 p-5 border-solid border-2 bg-gsw-gold">
            <SearchListing
              url={item.html_url}
              name={item.full_name}
              stars={item.stargazers_count}
              forks={item.forks}
              desc={item.description}
              language={item.language}
              license={item.license?.name}
              open_issues={item.open_issues}
              topics={item.topics}
            />
          </li>
        ))}
      </ul>
    </div>
  )
};

export default SearchResults;