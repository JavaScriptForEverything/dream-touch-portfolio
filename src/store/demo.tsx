import React from 'react';

interface PaginationProps {
  total: number;
  count: number;
  currentPage: number;
  onChange: (page: number) => void;
}

const generatePagination = (current: number, total: number) => {
  const pages: (number | '...')[] = [];
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    // show first page, 2 pages before/after current, last page, dots in between
    pages.push(1);
    if (current > 4) pages.push('...');
    const start = Math.max(2, current - 2);
    const end = Math.min(total - 1, current + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (current < total - 3) pages.push('...');
    pages.push(total);
  }
  return pages;
};

export const Pagination: React.FC<PaginationProps> = ({
  total,
  count,
  currentPage,
  onChange,
}) => {
  const totalPages = Math.ceil(total / count);
  if (totalPages === 0) return null;

  const pagination = generatePagination(currentPage, totalPages);

  return (
    <nav className="flex items-center gap-x-1" aria-label="Pagination">
		
		<span>
			?
		</span>
      <button
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
        className="px-3 py-1 rounded disabled:opacity-50"
        aria-label="Previous page"
      >
        Prev
      </button>

      {pagination.map((page, idx) =>
        page === '...' ? (
          <span key={`dots-${idx}`} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onChange(page as number)}
            aria-current={currentPage === page ? 'page' : undefined}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-200'
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
        className="px-3 py-1 rounded disabled:opacity-50"
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
};
