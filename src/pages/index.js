import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import RepoSearch from "../components/repo-search";
import SearchResults from "../components/search-results";
import Pagination from "../components/pagination";
import { getGithubData } from "../utils/api";

const IndexPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({ items: [] });
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);


  const handleSubmit = async e => {
    e.preventDefault();
    getGithubData({
      currentPage,
      setSearchResults,
      setError,
      searchQuery,
    })
  };

  useEffect(() => {
    if (searchQuery) {
      getGithubData({
        currentPage,
        setSearchResults,
        setError,
        searchQuery,
      })
    }
  }, [currentPage])

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Start your search now!</h1>
      <RepoSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSubmit={handleSubmit}
      />
      {searchResults.items.length !== 0 && (
        <>
          <h1>{searchResults.total_count} repositories found</h1>
          <SearchResults results={searchResults.items} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            searchQuery={searchQuery}
            setSearchResults={setSearchResults}
            setError={setError}
            length={searchResults.total_count}
          />
        </>
      )}
    </Layout>
  )
};

export default IndexPage
