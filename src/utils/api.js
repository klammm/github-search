import axios from "axios"

export const getGithubData = async ({
  searchQuery,
  currentPage,
  setSearchResults,
  setError,
  sort,
}) => {
  return await axios
    .get("https://api.github.com/search/repositories", {
      params: { q: searchQuery, per_page: 5, page: currentPage, sort },
    })
    .then(result => {
      const githubData = result.data
      setSearchResults(githubData)
    })
    .catch(error => setError(error.message))
}
