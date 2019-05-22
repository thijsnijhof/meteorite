import React from "react";

const Pagination = ({lastPage,secondLastPage}) => {
    let lastpage;
    let secondlast;
    let ellipsis;
    if(lastPage !== 1) {
        lastpage = <li><a className="pagination-link" aria-label="Goto page 86">{lastPage}</a></li>;
    }
    if(secondLastPage >= 3){
        secondlast = <li><a className="pagination-link" aria-label="Goto page 45">{secondLastPage}</a></li> 
        ellipsis = <li><span className="pagination-ellipsis">&hellip;</span></li>;
    }
    
  return (
    <nav style={{padding:"1rem"}} className="is-offset-one-quarter pagination is-half" role="navigation" aria-label="pagination">
      <a className="pagination-previous">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list is-offset-one-quarter">
        <li>
          <a className="pagination-link" aria-label="Goto page 1">
            1
          </a>
        </li>
        {ellipsis}
        {secondlast}
        {lastpage}

      </ul>
    </nav>
  );
};

export default Pagination;
