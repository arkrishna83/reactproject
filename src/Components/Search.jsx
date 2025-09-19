import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {

    const [searchParams]=useSearchParams();
    const keyword=searchParams.get("keyword");
    const category=searchParams.get("category");

  return (
    <div>
      <h3>Search Results page : for below filter with keyword {keyword} in category {category} </h3>
    </div>
  )
}

export default Search
