import Heading from "../ui/Heading";
import { Row, Row2 } from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row2 type="horizontal">
        <Heading as="h1">All cabins</Heading>
        {/* Sort/filter done here */}
        <CabinTableOperations />
      </Row2>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
