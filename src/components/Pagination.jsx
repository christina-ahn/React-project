import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginations = ({ page, limit, setPage, total, offset }) => {
  const totalPage = Math.ceil(total / limit);
  console.log(totalPage);
  return (
    <div>
      <Pagination>
        {Array.from(Array(totalPage).keys()).map((el) => (
          <Pagination.Item>{el + 1}</Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default Paginations;
