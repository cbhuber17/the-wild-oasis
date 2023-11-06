import{s as d,u as S,j as e,n as w,d as P,o as M,z as T,C as D,H as q}from"./index-8af32a30.js";import{l as F,m as H,n as N,o as A,p as z,q as E}from"./index.esm-e4c3150e.js";import{u as O,T as R}from"./useCheckout-80e70568.js";import{T as h,M as c,a as L,S as Q}from"./TableOperations-982f2e91.js";import{M as y,C as $,E as K}from"./Empty-783e0023.js";import{b as G,f as U}from"./helpers-a0fc2773.js";import{u as V}from"./useDeleteBooking-5caa67e1.js";import{i as W}from"./index-cc618fe9.js";import{f as v,P as m,c as b}from"./apiBookings-58ec83a8.js";import{F as Z}from"./Filter-99f5fc58.js";const _=d.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`,k=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`,J=d.div`
  font-family: "Sono";
  font-weight: 500;
`;function X({booking:{id:s,startDate:r,endDate:o,numNights:n,totalPrice:a,status:l,guests:{fullName:u,email:i},cabins:{name:t}}}){const f=S(),{checkout:x,isCheckingOut:g}=O(),{deleteBooking:p,isDeleting:j}=V(),B={unconfirmed:"blue","checked-in":"green","checked-out":"silver"};return e.jsxs(h.Row,{children:[e.jsx(_,{children:t}),e.jsxs(k,{children:[e.jsx("span",{children:u}),e.jsx("span",{children:i})]}),e.jsxs(k,{children:[e.jsxs("span",{children:[W(new Date(r))?"Today":G(r)," ","→ ",n," night stay"]}),e.jsxs("span",{children:[v(new Date(r),"MMM dd yyyy")," —"," ",v(new Date(o),"MMM dd yyyy")]})]}),e.jsx(R,{type:B[l],children:l.replace("-"," ")}),e.jsx(J,{children:U(a)}),e.jsxs(y,{children:[e.jsxs(c.Menu,{children:[e.jsx(c.Toggle,{id:s}),e.jsxs(c.List,{id:s,children:[e.jsx(c.Button,{icon:e.jsx(F,{}),onClick:()=>f(`/bookings/${s}`),children:"See details"}),l==="unconfirmed"&&e.jsx(c.Button,{icon:e.jsx(H,{}),onClick:()=>f(`/checkin/${s}`),children:"Check in"}),l==="checked-in"&&e.jsx(c.Button,{icon:e.jsx(N,{}),onClick:()=>x(s),disabled:g,children:"Check out"}),e.jsx(y.Open,{opens:"delete",children:e.jsx(c.Button,{icon:e.jsx(A,{}),children:"Delete booking"})})]})]}),e.jsx(y.Window,{name:"delete",children:e.jsx($,{resourceName:"booking",disabled:j,onConfirm:()=>p(s)})})]})]})}const Y=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,I=d.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`,ee=d.div`
  display: flex;
  gap: 0.6rem;
`,C=d.button`
  background-color: ${s=>s.active?" var(--color-brand-600)":"var(--color-grey-50)"};
  color: ${s=>s.active?" var(--color-brand-50)":"inherit"};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function ne({count:s}){const[r,o]=w(),n=r.get("page")?Number(r.get("page")):1,a=Math.ceil(s/m);function l(){const i=n===a?n:n+1;r.set("page",i),o(r)}function u(){const i=n===1?n:n-1;r.set("page",i),o(r)}return a<=1?null:e.jsxs(Y,{children:[e.jsxs(I,{children:["Showing ",e.jsx("span",{children:(n-1)*m+1})," to"," ",e.jsx("span",{children:n===a?s:n*m})," ","of ",e.jsx("span",{children:s})," results"]}),e.jsxs(ee,{children:[e.jsxs(C,{onClick:u,disabled:n===1,children:[e.jsx(z,{})," ",e.jsx("span",{children:"Previous"})]}),e.jsxs(C,{onClick:l,disabled:n===a,children:[e.jsx("span",{children:"Next"}),e.jsx(E,{})]})]})]})}function se(){const s=P(),[r]=w(),o=r.get("status"),n=!o||o==="all"?null:{field:"status",value:o},a=r.get("sortBy")||"startDate-desc",[l,u]=a.split("-"),i={field:l,direction:u},t=r.get("page")?Number(r.get("page")):1,{isLoading:f,data:{data:x,count:g}={},error:p}=M({queryKey:["bookings",n,i,t],queryFn:()=>b({filter:n,sortBy:i,page:t})}),j=Math.ceil(g/m);return t<j&&s.prefetchQuery({queryKey:["bookings",n,i,t+1],queryFn:()=>b({filter:n,sortBy:i,page:t+1})}),t>1&&s.prefetchQuery({queryKey:["bookings",n,i,t-1],queryFn:()=>b({filter:n,sortBy:i,page:t-1})}),{isLoading:f,error:p,bookings:x,count:g}}function re(){const{bookings:s,isLoading:r,count:o}=se();return r?e.jsx(T,{}):s.length?e.jsx(c,{children:e.jsxs(h,{columns:"0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem",children:[e.jsxs(h.Header,{children:[e.jsx("div",{children:"Cabin"}),e.jsx("div",{children:"Guest"}),e.jsx("div",{children:"Dates"}),e.jsx("div",{children:"Status"}),e.jsx("div",{children:"Amount"}),e.jsx("div",{})]}),e.jsx(h.Body,{data:s,render:n=>e.jsx(X,{booking:n},n.id)}),e.jsx(h.Footer,{children:e.jsx(ne,{count:o})})]})}):e.jsx(K,{resourceName:"bookings"})}function ie(){return e.jsxs(L,{children:[e.jsx(Z,{filterField:"status",options:[{value:"all",label:"All"},{value:"checked-out",label:"Checked out"},{value:"checked-in",label:"Checked in"},{value:"unconfirmed",label:"Unconfirmed"}]}),e.jsx(Q,{options:[{value:"startDate-desc",label:"Sort by date (recent first)"},{value:"startDate-asc",label:"Sort by date (earlier first)"},{value:"totalPrice-desc",label:"Sort by amount (high first)"},{value:"totalPrice-asc",label:"Sort by amount (low first)"}]})]})}function me(){return e.jsxs(e.Fragment,{children:[e.jsxs(D,{type:"horizontal",children:[e.jsx(q,{as:"h1",children:"All bookings"}),e.jsx(ie,{})]}),e.jsx(re,{})]})}export{me as default};
