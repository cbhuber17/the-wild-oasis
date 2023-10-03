import{s,l as a,A as r,a as m,b as c,c as l,N as h,j as e,L as x,u as g,d as v,e as j,f as p,S as f,g as y,h as b,i as k,k as w,m as H,O as $}from"./index-0a34fab9.js";import{H as S,a as L,b as M,c as O,d as A,e as C,f as N,g as U,h as D}from"./index.esm-dd9e6792.js";const R=s.ul`
  ${a(r`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `)}

  ${m(r`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  `)}

  ${c(r`
    a {
      justify-content: center;
      span {
        display: none;
      }
    }
  `)}
  
  ${l(r`
    a {
      justify-content: center;
      span {
        display: none;
      }
    }
  `)}
`,n=s(h)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;function T(){return e.jsx("nav",{children:e.jsxs(R,{children:[e.jsx("li",{children:e.jsxs(n,{to:"/dashboard",children:[e.jsx(S,{}),e.jsx("span",{children:"Home"})]})}),e.jsx("li",{children:e.jsxs(n,{to:"/bookings",children:[e.jsx(L,{}),e.jsx("span",{children:"Bookings"})]})}),e.jsx("li",{children:e.jsxs(n,{to:"/cabins",children:[e.jsx(M,{}),e.jsx("span",{children:"Cabins"})]})}),e.jsx("li",{children:e.jsxs(n,{to:"/users",children:[e.jsx(O,{}),e.jsx("span",{children:"Users"})]})}),e.jsx("li",{children:e.jsxs(n,{to:"/settings",children:[e.jsx(A,{}),e.jsx("span",{children:"Settings"})]})})]})})}const _=s.aside`
  ${a(r`
    padding: 3.2rem 2.4rem;
    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  `)}

  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
`;function z(){return e.jsxs(_,{children:[e.jsx(x,{}),e.jsx(T,{})]})}const d=s.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;function B(){const i=g(),o=v(),{mutate:t,isLoading:u}=j({mutationFn:p,onSuccess:()=>{o.removeQueries(),i("/login",{replace:!0})}});return{logout:t,isLoading:u}}function Q(){const{logout:i,isLoading:o}=B();return e.jsx(d,{disabled:o,onClick:i,children:o?e.jsx(f,{}):e.jsx(C,{})})}function q(){const{isDarkMode:i,toggleDarkMode:o}=y();return e.jsx(d,{onClick:o,children:i?e.jsx(N,{}):e.jsx(U,{})})}const E=s.ul`
  display: flex;
  gap: 0.4rem;
`;function F(){const i=g();return e.jsxs(E,{children:[e.jsx("li",{children:e.jsx(d,{onClick:()=>i("/account"),children:e.jsx(D,{})})}),e.jsx("li",{children:e.jsx(q,{})}),e.jsx("li",{children:e.jsx(Q,{})})]})}const I=s.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`,G=s.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;function J(){const{user:i}=b(),{fullName:o,avatar:t}=i.user_metadata;return e.jsxs(I,{children:[e.jsx(G,{src:t||"default-user.jpg",alt:`Avatar of ${o}`}),e.jsx("span",{children:o})]})}const K=s.header`
  ${k(r`
    padding: 1.2rem 4.8rem;
  `)}
  ${l(r`
    padding: 1.2rem 0.5rem;
  `)}


  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;function P(){return e.jsxs(K,{children:[e.jsx(J,{}),e.jsx(F,{})]})}const V=s.div`
  ${a(r`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
  `)};
`,W=s.main`
  background-color: var(--color-grey-50);

  ${a(r`
    padding: 4rem 4.8rem 6.4rem;
    overflow-y: scroll;
  `)}

  ${w(r`
    min-height: 85vh;
    padding: 4rem 4.8rem 6.4rem;
    overflow-y: hidden;
  `)}
    
  ${H(r`
    min-height: 85vh;
    padding: 2rem 2.4rem 3.2rem;
    overflow-y: hidden;
  `)}

  ${c(r`
    min-height: 91vh;
    padding: 1rem 1.2rem 1.6rem;
    overflow-y: hidden;
  `)}

  ${l(r`
    min-height: 91vh;
    padding: 0.5rem 0.6rem 0.8rem;
    overflow-y: hidden;
  `)}

  overflow-x: hidden;
`,X=s.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow-x: auto;
`;function ee(){return e.jsxs(V,{children:[e.jsx(P,{}),e.jsx(z,{}),e.jsx(W,{children:e.jsx(X,{children:e.jsx($,{})})})]})}export{ee as default};
