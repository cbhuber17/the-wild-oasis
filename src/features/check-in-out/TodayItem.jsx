import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

import { gt_smallest, smallest } from "../../utils/media-queries";
import { css } from "styled-components";

const StyledTodayItem = styled.li`
  display: grid;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  ${gt_smallest(css`
    grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
    gap: 1.2rem;
    &:first-child {
      border-top: 1px solid var(--color-grey-100);
    }
  `)}

  ${smallest(css`
    border: 1px solid navy;
    border-radius: 5px;
    justify-content: center;
    grid-template-columns: 9rem 2rem 18rem;
    grid-template-rows: 6rem 3rem;
    gap: 0.6rem;
    margin-bottom: 1rem;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  `)}
`;

const Guest = styled.div`
  font-weight: 500;
`;

/* eslint react/prop-types: 0 */
function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
