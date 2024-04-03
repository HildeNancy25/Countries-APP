import React from 'react'
import { useState } from 'react'

const itemsOnPage = 50;
const Pagination =({data}) => {
  const [curr, setCurr] = useState(1);
  const startIndex = (curr -1) * itemsOnPage;
  const endIndex = startIndex + endIndex;
  const currItems = data.slice(startIndex, endIndex);

  const pageChange = (pageNum) =>{
    setCurr(pageNum);
  };

  const allPages = Math.ceil(data.length / itemsOnPage);
  return (
    <div>
      <ul>
        {currItems.map((items, index) => (
          <li key={index}> {items} </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: allPages}, (_, index) => index + 1).map((pageNum) =>(
          <button
            key={pageNum}
            onClick={() => pageChange(pageNum)}
            disabled={pageNum === curr}
            >
              {pageNum}
          </button>
        )
        )}
      </div>
    </div>

  );

};

export default Pagination