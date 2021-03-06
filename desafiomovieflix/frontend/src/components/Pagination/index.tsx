import ReactPaginate from "react-paginate";
import { ReactComponent as ArrowIcon } from 'assets/images/ArrowIcon.svg';
import './styles.css';

type Props = {
  pageCount: number;
  range: number;
  onChange?: ( pagenNumber: number ) => void; 
}

const Pagination = ( { pageCount, range, onChange } : Props ) => {

    return (
        <ReactPaginate 
            pageCount={pageCount}
            pageRangeDisplayed={range}
            marginPagesDisplayed={1}
            containerClassName="pagination-container"
            pageLinkClassName="pagination-item"
            breakClassName="pagination-item" 
            previousClassName="arrow-previous"
            nextClassName="arrow-next"
            activeLinkClassName="pagination-link-active"
            disabledClassName="arrow-inactive"
            onPageChange={ ( items ) => ( onChange ) ? onChange( items.selected ) : {} }
            previousLabel={ <ArrowIcon /> }  
            nextLabel={ <ArrowIcon /> }                
        />
    )
}

export default Pagination;
