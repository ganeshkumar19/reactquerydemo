import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFruits = (pageId) => {
  return axios.get(`http://localhost:4000/fruits/?_limit=4&_page=${pageId}`);
};

const PaginatedFruits = () => {
  const [page, setPage] = useState(1);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["fruits", page], // Include `page` in the queryKey
    queryFn: () => fetchFruits(page),
    placeholderData: keepPreviousData
  });

  if (isLoading) {
    return <h3>Posts are Loading...</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div className="container">
      {data?.data.map((item) => (
        <div className="fruit-label" key={item.id}>
          {item.name}
        </div>
      ))}

      <button 
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1} // Disable if on first page
      >
        Prev Page
      </button>

      <button onClick={() => setPage((prev) => prev + 1)} disabled={page===5}>
        Next Page
      </button>
    </div>
  );
};

export default PaginatedFruits;
