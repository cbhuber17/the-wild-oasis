import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import {
  largest,
  large,
  medium,
  small,
  smallest,
} from "../../utils/media-queries";
import { css } from "styled-components";

const StyledDashboardLayout = styled.div`
  ${largest(css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
  `)}

  ${large(css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
  `)}

  ${medium(css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(4, auto);
    gap: 1.5rem;
  `)}

  ${small(css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, auto);
    gap: 1rem;
  `)}

  ${smallest(css`
    @media (min-width: 450px) and (max-width: 500px) {
      grid-template-columns: 43rem;
    }
    @media (min-width: 400px) and (max-width: 450px) {
      grid-template-columns: 38rem;
    }
    @media (min-width: 350px) and (max-width: 400px) {
      grid-template-columns: 35rem;
    }

    display: grid;
    grid-template-rows: repeat(12, auto);
    gap: 1rem;
  `)}
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
