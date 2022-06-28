import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import ProductCrudCard from 'pages/Admin/Products/ProductCrudCard';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';
import './styles.css';

type ControlCompnentsData = {
  activePage: number;
};
const List = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  const [controlCompnentsData, setControlCompnentsData] =
    useState<ControlCompnentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber : number) => {
    setControlCompnentsData({activePage : pageNumber})
  }
  
  const getProducts = useCallback (() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: controlCompnentsData.activePage,
        size: 3,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlCompnentsData])

  useEffect(() => {
     getProducts();
  }, [getProducts]);

  return (
    <div className="product-crud-container">
      <div className="produc-crud-bar-container">
        <Link to="/admin/products/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card product-filter-container">Search bar</div>
      </div>
      <div className="row">
        {page?.content.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-12">
            <ProductCrudCard
              product={product}
              onDelete={getProducts}
            />
          </div>
        ))}
      </div>

      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default List;
