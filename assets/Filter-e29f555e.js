import{s as n,l as i,A as a,k as m,m as g,b as u,c as b,n as v,j as l}from"./index-0a34fab9.js";const p=n.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;

  ${i(a`
    display: flex;
    gap: 0.4rem;
  `)}

  ${m(a`
    display: flex;
    gap: 0.4rem;
  `)}

  ${g(a`
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  `)}

  ${u(a`
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  `)}

  ${b(a`
    margin-top: 1rem;
    margin-bottom: 1rem;
    justify-content: space-around;
  `)}
`,h=n.button`
  background-color: var(--color-grey-0);
  border: none;

  ${o=>o.active&&a`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function y({filterField:o,options:s}){const[e,d]=v(),t=e.get(o)||s.at(0).value;function c(r){e.set(o,r),e.get("page")&&e.set("page",1),d(e)}return l.jsx(p,{children:s.map(r=>l.jsx(h,{onClick:()=>c(r.value),active:r.value===t,disabled:r.value===t,children:r.label},r.value))})}export{y as F};
