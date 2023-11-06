import{s as B,j as e,d as w,u as F,e as I,E as m,r as h,F as L,D as $,z as N,y as z,H as D,B as g}from"./index-8af32a30.js";import{u as G,B as H,a as M,b as Q}from"./useBooking-8b3d350e.js";import{f as o}from"./helpers-a0fc2773.js";import{u as R}from"./apiBookings-58ec83a8.js";import"./index.esm-e4c3150e.js";import"./Flag-87a5f7ab.js";import"./index-cc618fe9.js";const T=B.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;function p({checked:a,onChange:n,disabled:t=!1,id:i,children:s}){return e.jsxs(T,{children:[e.jsx("input",{type:"checkbox",id:i,checked:a,onChange:n,disabled:t}),e.jsx("label",{htmlFor:t?"":i,children:s})]})}function q(){const a=w(),n=F(),{mutate:t,isLoading:i}=I({mutationFn:({bookingId:s,breakfast:l})=>R(s,{status:"checked-in",isPaid:!0,...l}),onSuccess:s=>{m.success(`Booking #${s.id} successfully checked in`),a.invalidateQueries({active:!0}),n("/")},onError:()=>m.error("There was an error while checking in")});return{checkin:t,isCheckingIn:i}}const b=B.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;function A(){const[a,n]=h.useState(!1),[t,i]=h.useState(!1),{booking:s,isLoading:l}=G(),{settings:j,isLoading:C}=L();h.useEffect(()=>n((s==null?void 0:s.isPaid)??!1),[s]);const f=$(),{checkin:k,isCheckingIn:x}=q();if(l||C)return e.jsx(N,{});const{id:c,guests:y,totalPrice:d,numGuests:v,hasBreakfast:P,numNights:S}=s,r=j.breakfastPrice*S*v;function E(){a&&k(t?{bookingId:c,breakfast:{hasBreakfast:!0,extrasPrice:r,totalPrice:d+r}}:{bookingId:c,breakfast:{}})}return e.jsxs(e.Fragment,{children:[e.jsxs(z,{type:"horizontal",children:[e.jsxs(D,{as:"h1",children:["Check in booking #",c]}),e.jsx(H,{onClick:f,children:"← Back"})]}),e.jsx(M,{booking:s}),!P&&e.jsx(b,{children:e.jsxs(p,{checked:t,onChange:()=>{i(u=>!u),n(!1)},id:"breakfast",children:["Want to add breakfast for ",o(r),"?"]})}),e.jsx(b,{children:e.jsxs(p,{checked:a,onChange:()=>n(u=>!u),disabled:a||x,id:"confirm",children:["I confirm that ",y.fullName," has paid the total amount of"," ",t?`${o(d+r)} (${o(d)} + ${o(r)})`:o(d)]})}),e.jsxs(Q,{children:[e.jsxs(g,{onClick:E,disabled:!a||x,children:["Check in booking #",c]}),e.jsx(g,{variation:"secondary",onClick:f,children:"Back"})]})]})}function Y(){return e.jsx(A,{})}export{Y as default};
