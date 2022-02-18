import React from 'react';

const SearchListing = ({ url, name, stars, forks, desc, language, open_issues, topics, license }) => {
  return (
    <div>
      <a className="no-underline text-gsw-blue" href={url}>
        <h3 className="pb-3">{name}</h3>
      </a>
      <div className="mb-1 text-sm text-gsw-blue">
        <span className="pr-5">{stars} stars</span>
        <span className="pr-5">{forks} forks</span>
        <span className="pr-5">{language}</span>
        <span className="pr-5">{license}</span>
        <span className="pr-5">{open_issues} issues open</span>
      </div>
      {topics.length !== 0 && (
        <div className="mb-1 text-sm text-gsw-blue">
          <p className="mb-0 text-m text-gsw-blue">Topics: </p>
          {topics.map(topic => (
            <span key={topic} className="pr-5">
              {topic}
            </span>
          ))}
        </div>
      )}
      <p className="text-gsw-blue text-l">{desc}</p>
    </div>
  )
}

export default SearchListing;