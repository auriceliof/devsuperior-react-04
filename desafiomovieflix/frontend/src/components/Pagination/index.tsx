import ReactPaginate from "react-paginate";

const Pagination = () => {

    return (
        <ReactPaginate 
            pageCount={10}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}        
        />
    )
}

export default Pagination;
