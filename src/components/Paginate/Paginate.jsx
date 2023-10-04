import Pagination from 'rc-pagination';
import './index.scss'

const Paginate = ({currentPage, totalItems, onChangePages}) => {
  return (
    <div>
        <Pagination
            className="pagination"
            current={currentPage}
            total={totalItems}
            pageSize={10}
            onChange={onChangePages}
        />
    </div>
  )
}

export default Paginate