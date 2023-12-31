import styled from "styled-components";

import Heading from "../../ui/Heading";
import { Row } from "../../ui/Row";

import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";
import {
  largest,
  large,
  medium,
  small,
  smallest,
} from "../../utils/media-queries";
import { css } from "styled-components";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${largest(css`
    padding: 3.2rem;
    grid-column: 1 / span 2;
  `)}

  ${large(css`
    padding: 3.2rem;
    grid-column: 1 / span 2;
  `)}

  ${medium(css`
    padding: 2.5rem;
    grid-column: 2 / span 2;
  `)}

  ${small(css`
    padding: 1.8rem;
    grid-column: 1 / span 2;
  `)}

  ${smallest(css`
    padding: 0.9rem;
    grid-column: 1 / span 1;
  `)}

  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>

      {!isLoading ? (
        activities?.length > 0 ? (
          <TodayList>
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>No activity today...</NoActivity>
        )
      ) : (
        <Spinner /> // Loading
      )}
    </StyledToday>
  );
}

export default TodayActivity;
