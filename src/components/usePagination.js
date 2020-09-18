const usePagination = ({
  numberOfItems,
  itemsPerPage,
  currentPage,
  numberOfButtons,
}) => {
  const numberOfPages = Math.ceil(numberOfItems / itemsPerPage); //totalPages

  if (currentPage > numberOfPages || currentPage < 1)
    return { pagination: [], currentPage };

  const buttons = Array(numberOfPages)
    .fill(1)
    .map((e, i) => e + i);

  const sideButtons =
    numberOfButtons % 2 === 0 ? numberOfButtons / 2 : (numberOfButtons - 1) / 2;

  const calcLeft = (rest = 0) => {
    return {
      array: buttons
        .slice(0, currentPage - 1)
        .reverse()
        .slice(0, sideButtons + rest)
        .reverse(),
      rest: function () {
        return sideButtons - this.array.length;
      },
    };
  };

  const calcRight = (rest = 0) => {
    return {
      array: buttons.slice(currentPage).slice(0, sideButtons + rest),
      rest: function () {
        return sideButtons - this.array.length;
      },
    };
  };

  const leftButtons = calcLeft(calcRight().rest()).array;
  const rightButtons = calcRight(calcLeft().rest()).array;

  return {
    buttons: [...leftButtons, currentPage, ...rightButtons],
    currentPage,
  };
};

export default usePagination;
