import Heading from "../ui/Heading";
import { Row2 } from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Row2 type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row2>

      <BookingTable />
    </>
  );
}

export default Bookings;
