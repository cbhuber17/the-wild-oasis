import{s as n,d as a,e as c,E as o}from"./index-8af32a30.js";import{u}from"./apiBookings-58ec83a8.js";const p=n.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${e=>e.type}-700);
  background-color: var(--color-${e=>e.type}-100);
`;function h(){const e=a(),{mutate:r,isLoading:s}=c({mutationFn:t=>u(t,{status:"checked-out"}),onSuccess:t=>{o.success(`Booking #${t.id} successfully checked out`),e.invalidateQueries({active:!0})},onError:()=>o.error("There was an error while checking out")});return{checkout:r,isCheckingOut:s}}export{p as T,h as u};
