import Router from 'next/router';
import Link from 'next/link';

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 2;
  console.log(totalCount);

  console.log(totalCount);
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/archive/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
