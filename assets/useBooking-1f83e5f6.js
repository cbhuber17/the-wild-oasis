import{s as o,j as e,G as k,o as B}from"./index-0a34fab9.js";import{b as D,r as E,s as M,t as P}from"./index.esm-dd9e6792.js";import{F as C}from"./Flag-0a62a64c.js";import{b as F,f as s}from"./helpers-a0fc2773.js";import{f as i,e as N}from"./apiBookings-eb2aad22.js";import{i as H}from"./index-c22e062b.js";const $=o.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`,z=o.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;function l({icon:r,label:n,children:t}){return e.jsxs($,{children:[e.jsxs(z,{children:[r,e.jsx("span",{children:n})]}),t]})}const I=o.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`,O=o.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`,T=o.section`
  padding: 3.2rem 4rem 1.2rem;
`,G=o.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`,S=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${r=>r.isPaid?"var(--color-green-100)":"var(--color-yellow-100)"};
  color: ${r=>r.isPaid?"var(--color-green-700)":"var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`,q=o.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;function _({booking:r}){const{created_at:n,startDate:t,endDate:a,numNights:f,numGuests:c,cabinPrice:u,extrasPrice:x,totalPrice:h,hasBreakfast:d,observations:m,isPaid:g,guests:{fullName:y,email:b,country:j,countryFlag:p,nationalID:v},cabins:{name:w}}=r;return e.jsxs(I,{children:[e.jsxs(O,{children:[e.jsxs("div",{children:[e.jsx(D,{}),e.jsxs("p",{children:[f," nights in Cabin ",e.jsx("span",{children:w})]})]}),e.jsxs("p",{children:[i(new Date(t),"EEE, MMM dd yyyy")," (",H(new Date(t))?"Today":F(t),") — ",i(new Date(a),"EEE, MMM dd yyyy")]})]}),e.jsxs(T,{children:[e.jsxs(G,{children:[p&&e.jsx(C,{src:p,alt:`Flag of ${j}`}),e.jsxs("p",{children:[y," ",c>1?`+ ${c-1} guests`:""]}),e.jsx("span",{children:"•"}),e.jsx("p",{children:b}),e.jsx("span",{children:"•"}),e.jsxs("p",{children:["National ID ",v]})]}),m&&e.jsx(l,{icon:e.jsx(E,{}),label:"Observations",children:m}),e.jsx(l,{icon:e.jsx(M,{}),label:"Breakfast included?",children:d?"Yes":"No"}),e.jsxs(S,{isPaid:g,children:[e.jsxs(l,{icon:e.jsx(P,{}),label:"Total price",children:[s(h),d&&` (${s(u)} cabin + ${s(x)} breakfast)`]}),e.jsx("p",{children:g?"Paid":"Will pay at property"})]})]}),e.jsx(q,{children:e.jsxs("p",{children:["Booked ",i(new Date(n),"EEE, MMM dd yyyy, p")]})})]})}const A=o.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`,J=o.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;function U(){const{bookingId:r}=k(),{isLoading:n,data:t,error:a}=B({queryKey:["booking",r],queryFn:()=>N(r),retry:!1});return{isLoading:n,error:a,booking:t}}export{J as B,_ as a,A as b,U as u};
