import{s as g,d as w,e as q,E as j,J as W,j as e,K,M as x,P as C,Q as N,B as S,n as z,z as Z,C as $,H as J,y as X}from"./index-eea9e710.js";import{c as k,d as G,u as U}from"./useCabins-3547df0f.js";import{f as R}from"./helpers-a0fc2773.js";import{u as Y,v as _,o as M}from"./index.esm-1ca176e4.js";import{M as u,C as ee,E as ie}from"./Empty-67fee934.js";import{T as v,M as h,a as se,S as ne}from"./TableOperations-5e9b63b9.js";import{F as ae}from"./Filter-e6d31e02.js";const re=g.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
`;function A(){const r=w(),{mutate:i,isLoading:t}=q({mutationFn:k,onSuccess:()=>{j.success("New cabin successfully created"),r.invalidateQueries({queryKey:["cabins"]})},onError:n=>j.error(n.message)});return{isCreating:t,createCabin:i}}function te(){const r=w(),{mutate:i,isLoading:t}=q({mutationFn:({newCabinData:n,id:d})=>k(n,d),onSuccess:()=>{j.success("Cabin successfully edited"),r.invalidateQueries({queryKey:["cabins"]})},onError:n=>j.error(n.message)});return{isEditing:t,editCabin:i}}function H({cabinToEdit:r={},onCloseModal:i}){var E,T,D,F,P;const{isCreating:t,createCabin:n}=A(),{isEditing:d,editCabin:m}=te(),c=t||d,{id:b,...f}=r,o=!!b,{register:s,handleSubmit:p,reset:y,getValues:V,formState:I}=W({defaultValues:o?f:{}}),{errors:a}=I;function L(l){const B=typeof l.image=="string"?l.image:l.image[0];o?m({newCabinData:{...l,image:B},id:b},{onSuccess:Q=>{y(),i==null||i()}}):n({...l,image:B},{onSuccess:Q=>{y(),i==null||i()}})}function O(l){console.log(l)}return e.jsxs(K,{onSubmit:p(L,O),type:i?"modal":"regular",children:[e.jsx(x,{label:"Cabin name",error:(E=a==null?void 0:a.name)==null?void 0:E.message,children:e.jsx(C,{type:"text",id:"name",disabled:c,...s("name",{required:"This field is required"})})}),e.jsx(x,{label:"Maximum capacity",error:(T=a==null?void 0:a.maxCapacity)==null?void 0:T.message,children:e.jsx(C,{type:"number",id:"maxCapacity",disabled:c,...s("maxCapacity",{required:"This field is required",min:{value:1,message:"Capacity should be at least 1"}})})}),e.jsx(x,{label:"Regular price",error:(D=a==null?void 0:a.regularPrice)==null?void 0:D.message,children:e.jsx(C,{type:"number",id:"regularPrice",disabled:c,...s("regularPrice",{required:"This field is required",min:{value:1,message:"Capacity should be at least 1"}})})}),e.jsx(x,{label:"Discount",error:(F=a==null?void 0:a.discount)==null?void 0:F.message,children:e.jsx(C,{type:"number",id:"discount",disabled:c,defaultValue:0,...s("discount",{required:"This field is required",validate:l=>l<=V().regularPrice||"Discount should be less than regular price"})})}),e.jsx(x,{label:"Description for website",error:(P=a==null?void 0:a.description)==null?void 0:P.message,children:e.jsx(re,{type:"number",id:"description",defaultValue:"",disabled:c,...s("description",{required:"This field is required"})})}),e.jsx(x,{label:"Cabin photo",children:e.jsx(N,{id:"image",accept:"image/*",...s("image",{required:o?!1:"This field is required"})})}),e.jsxs(x,{children:[e.jsx(S,{variation:"secondary",type:"reset",onClick:()=>i==null?void 0:i(),children:"Cancel"}),e.jsx(S,{disabled:c,children:o?"Edit cabin":"Create new cabin"})]})]})}function ce(){const r=w(),{isLoading:i,mutate:t}=q({mutationFn:G,onSuccess:()=>{j.success("Cabin successfully deleted"),r.invalidateQueries({queryKey:["cabins"]})},onError:n=>j.error(n.message)});return{isDeleting:i,deleteCabin:t}}const de=g.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`,oe=g.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`,le=g.div`
  font-family: "Sono";
  font-weight: 600;
`,ue=g.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;function me({cabin:r}){const{isDeleting:i,deleteCabin:t}=ce(),{isCreating:n,createCabin:d}=A(),{id:m,name:c,maxCapacity:b,regularPrice:f,discount:o,image:s,description:p}=r;function y(){d({name:`Copy of ${c}`,maxCapacity:b,regularPrice:f,discount:o,image:s,description:p})}return e.jsxs(v.Row,{children:[e.jsx(de,{src:s}),e.jsx(oe,{children:c}),e.jsxs("div",{children:["Fits up to ",b," guests"]}),e.jsx(le,{children:R(f)}),o?e.jsx(ue,{children:R(o)}):e.jsx("span",{children:"—"}),e.jsx("div",{children:e.jsx(u,{children:e.jsxs(h.Menu,{children:[e.jsx(h.Toggle,{id:m}),e.jsxs(h.List,{id:m,children:[e.jsx(h.Button,{icon:e.jsx(Y,{}),onClick:y,disabled:n,children:"Duplicate"}),e.jsx(u.Open,{opens:"edit",children:e.jsx(h.Button,{icon:e.jsx(_,{}),children:"Edit"})}),e.jsx(u.Open,{opens:"delete",children:e.jsx(h.Button,{icon:e.jsx(M,{}),children:"Delete"})})]}),e.jsx(u.Window,{name:"edit",children:e.jsx(H,{cabinToEdit:r})}),e.jsx(u.Window,{name:"delete",children:e.jsx(ee,{resourceName:"cabins",disabled:i,onConfirm:()=>t(m)})})]})})})]})}function be(){const{isLoading:r,cabins:i}=U(),[t]=z();if(r)return e.jsx(Z,{});if(!i.length)return e.jsx(ie,{resourceName:"cabins"});const n=t.get("discount")||"all";let d;n==="all"&&(d=i),n==="no-discount"&&(d=i.filter(s=>s.discount===0)),n==="with-discount"&&(d=i.filter(s=>s.discount>0));const m=t.get("sortBy")||"startDate-asc",[c,b]=m.split("-"),f=b==="asc"?1:-1,o=d.sort((s,p)=>(s[c]-p[c])*f);return e.jsx(h,{children:e.jsxs(v,{columns:"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr",children:[e.jsxs(v.Header,{children:[e.jsx("div",{}),e.jsx("div",{children:"Cabin"}),e.jsx("div",{children:"Capacity"}),e.jsx("div",{children:"Price"}),e.jsx("div",{children:"Discount"}),e.jsx("div",{})]}),e.jsx(v.Body,{data:o,render:s=>e.jsx(me,{cabin:s},s.id)})]})})}function xe(){return e.jsx("div",{children:e.jsxs(u,{children:[e.jsx(u.Open,{opens:"cabin-form",children:e.jsx(S,{children:"Add new cabin"})}),e.jsx(u.Window,{name:"cabin-form",children:e.jsx(H,{})})]})})}function he(){return e.jsxs(se,{children:[e.jsx(ae,{filterField:"discount",options:[{value:"all",label:"All"},{value:"no-discount",label:"No discount"},{value:"with-discount",label:"With discount"}]}),e.jsx(ne,{options:[{value:"name-asc",label:"Sort by name (A-Z)"},{value:"name-desc",label:"Sort by name (Z-A)"},{value:"regularPrice-asc",label:"Sort by price (low first)"},{value:"regularPrice-desc",label:"Sort by price (high first)"},{value:"maxCapacity-asc",label:"Sort by capacity (low first)"},{value:"maxCapacity-desc",label:"Sort by capacity (high first)"}]})]})}function Se(){return e.jsxs(e.Fragment,{children:[e.jsxs($,{type:"horizontal",children:[e.jsx(J,{as:"h1",children:"All cabins"}),e.jsx(he,{})]}),e.jsxs(X,{children:[e.jsx(be,{}),e.jsx(xe,{})]})]})}export{Se as default};
