import React from "react";

const Pagination = ({offsetPage, onPaginate, meteorites}) => {
  return (
    <nav style={{padding:"1rem"}} className=" pagination" role="navigation" aria-label="pagination">
      {(offsetPage !== 0) ?<a className="pagination-previous" id="previous" onClick={onPaginate}>Previous</a> : null }
     {(meteorites.length >= 30 ) ? <a className="pagination-next" id="next" onClick={onPaginate}>Next page</a> : null }
    </nav>
  );
};

export default Pagination;
