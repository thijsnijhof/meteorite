import React from "react";

const Pagination = ({offsetPage, onPaginate}) => {
  return (
    <nav style={{padding:"1rem"}} className=" pagination" role="navigation" aria-label="pagination">
      {(offsetPage !== 0) ?<a className="pagination-previous" id="previous" onClick={onPaginate}>Previous</a> : null }
      <a className="pagination-next" id="next" onClick={onPaginate}>Next page</a>
    </nav>
  );
};

export default Pagination;
