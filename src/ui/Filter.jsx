import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

/* eslint react/prop-types: 0 */
function Filter({ filterField, options }) {
  // The useSearchParams hook is used to read and modify the query string in
  // the URL for the current location. Like React's own useState hook, useSearchParams
  // returns an array of two values: the current location's search params and a
  // function that may be used to update them. Just as React's useState hook,
  // setSearchParams also supports functional updates. Therefore, you may provide a
  // function that takes a searchParams and returns an updated version.
  const [searchParams, setSearchParams] = useSearchParams();

  // Current filter is designated by the URL
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    // Change URL based on the filter button clicked
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {/* Filtering options, num buttons, each action for the button is done in each option */}
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
