import React, { useEffect, useState } from "react";

// <Pagination
//   page={page}
//   limit={limit}
//   setPage={setPage}
//   total={total}
// ></Pagination>
const data = jsonData;
const menus = data.menu;
const [page, setPage] = useState(1);
const limit = 3;
const offset = (page - 1) * limit;
const total = menus.length;
const showMenu = menus.slice(offset, offset + limit);
const Pagination = ({ page, limit, setPage, total }) => {
  const totalPage = Math.ceil(total / limit);

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    if (page < totalPage) setPage(page + 1);
  };

  useEffect(() => {
    console.log("현재 페이지", page);
  }, [page]);

  return (
    <div>
      <Pagination>
        <Pagination.Prev
          as="button"
          onClick={(e) => {
            e.preventDefault();
            prevPage();
          }}
          disabled={page === 1}
        >
          이전
        </Pagination.Prev>

        {Array.from({ length: totalPage }, (_, i) => (
          <Pagination
            as="button"
            key={i + 1}
            active={page === i + 1}
            onClick={(e) => {
              e.preventDefault();
              setPage(i + 1);
            }}
          >
            {i + 1}
          </Pagination>
        ))}

        <Pagination.Next
          as="button"
          onClick={(e) => {
            e.preventDefault();
            nextPage();
          }}
          disabled={page === totalPage}
        >
          다음
        </Pagination.Next>
      </Pagination>
    </div>
  );
};

export default Pagination;
