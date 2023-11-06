import{s,r as i,j as t,v as y,n as f,l as b,A as h,k as v}from"./index-8af32a30.js";import{w}from"./index.esm-e4c3150e.js";import{u as j}from"./Empty-783e0023.js";const S=s.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  min-width: 70rem;
  margin-bottom: 1.5rem;
`,x=s.div`
  display: grid;
  grid-template-columns: ${e=>e.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`,C=s(x)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,k=s(x)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,B=s.section`
  margin: 0.4rem 0;
`,P=s.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`,T=s.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,p=i.createContext();function u({columns:e,children:o}){return t.jsx(p.Provider,{value:{columns:e},children:t.jsx(S,{role:"table",children:o})})}function R({children:e}){const{columns:o}=i.useContext(p);return t.jsx(C,{role:"row",columns:o,as:"header",children:e})}function $({children:e}){const{columns:o}=i.useContext(p);return t.jsx(k,{role:"row",columns:o,children:e})}function E({data:e,render:o}){return e.length?t.jsx(B,{children:e.map(o)}):t.jsx(T,{children:"No data to show at the moment"})}u.Header=R;u.Body=E;u.Row=$;u.Footer=P;const M=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,z=s.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`,H=s.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${e=>e.position.x}px;
  top: ${e=>e.position.y}px;
`,I=s.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`,g=i.createContext();function m({children:e}){const[o,r]=i.useState(""),[a,n]=i.useState(null),l=()=>r(""),c=r;return t.jsx(g.Provider,{value:{openId:o,close:l,open:c,position:a,setPosition:n},children:e})}function L({id:e}){const{openId:o,close:r,open:a,setPosition:n}=i.useContext(g);function l(c){c.stopPropagation();const d=c.target.closest("button").getBoundingClientRect();n({x:window.innerWidth-d.width-d.x,y:d.y+d.height+8}),o===""||o!==e?a(e):r()}return t.jsx(z,{onClick:l,children:t.jsx(w,{})})}function O({id:e,children:o}){const{openId:r,position:a,close:n}=i.useContext(g),l=j(n,!1);return r!==e?null:y.createPortal(t.jsx(H,{position:a,ref:l,children:o}),document.body)}function A({children:e,icon:o,onClick:r}){const{close:a}=i.useContext(g);function n(){r==null||r(),a()}return t.jsx("li",{children:t.jsxs(I,{onClick:n,children:[o,t.jsx("span",{children:e})]})})}m.Menu=M;m.Toggle=L;m.List=O;m.Button=A;const F=s.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;function D({options:e,value:o,onChange:r,...a}){return t.jsx(F,{value:o,onChange:r,...a,children:e.map(n=>t.jsx("option",{value:n.value,children:n.label},n.value))})}function X({options:e}){const[o,r]=f(),a=o.get("sortBy")||"";function n(l){o.set("sortBy",l.target.value),r(o)}return t.jsx(D,{options:e,type:"white",value:a,onChange:n})}const q=s.div`
  ${b(h`
    display: flex;
    align-items: center;
    gap: 1.6rem;
  `)}
  ${v(h`
    display: flex;
    align-items: center;
    gap: 1.6rem;
  `)}
`;export{m as M,X as S,u as T,q as a};
