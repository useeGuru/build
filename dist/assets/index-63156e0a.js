import{j as e,a as s,T as n,t as b,f as L,r as t,S,k,K as z,B as A,N as l,D as H,g as E,E as M,H as T,I as q,J as N,i as C,Q as D,h as G,e as P,L as y}from"./index-c4c355a5.js";import{B as K}from"./Breadcrumbs-74bf3616.js";const Q=({resourceList:o,title:r})=>e.jsxs(s,{children:[e.jsxs(n,{sx:{color:"#23272A",fontFamily:"Montserrat",fontSize:"1.5rem",fontStyle:"normal",fontWeight:600,lineHeight:"normal",marginBottom:3.75},children:["Featured ",r," Resources"]}),e.jsx(s,{display:"flex",flexWrap:"wrap",gap:"1.88rem 3.43rem",children:o.map((i,c)=>e.jsx(s,{sx:{width:"14.0625rem",mb:3},children:e.jsx(b,{resource:i})},c))})]}),J=({title:o})=>{const r=L(),[i,c]=t.useState([]),[p,u]=t.useState(""),[m,F]=t.useState("-1"),[d,v]=t.useState("-1"),[g,I]=t.useState("-1"),[h,R]=t.useState("-1"),[x,B]=t.useState("-1"),[f,w]=t.useState("-1"),j=()=>{C.getResourceList({subCategory:[o],keywords:p,cost:!m||m==="-1"?[]:[m],instructionId:!d||d==="-1"?[]:[d],boardingId:!g||g==="-1"?[]:[g],genderId:!h||h==="-1"?[]:[h],locationLimitId:!f||f==="-1"?[]:[f],gradeId:!x||x==="-1"?[]:[parseInt(x)]}).then(a=>{console.log(a),c(a)}).catch(a=>{console.log(a)})};return t.useEffect(()=>{j()},[]),t.useEffect(()=>{j()},[m,d,g,h,f,x]),e.jsxs(s,{children:[e.jsxs(n,{sx:{color:"#23272A",marginBottom:3.75,marginTop:6},variant:"h4",children:["Browse all ",o," Resources"]}),e.jsxs(S,{direction:"row",maxWidth:"32.1875rem",mb:3,alignItems:"center",sx:{background:k(r.palette.grey[500],.2),borderRadius:"0.3125rem"},children:[e.jsx(z,{size:"small",sx:{flex:1,borderTopLeftRadius:"0.3125rem",borderBottomLeftRadius:"0.3125rem",padding:"0rem 1rem",fontSize:"0.9375rem"},value:p,onChange:a=>u(a.target.value),onKeyDown:a=>{a.keyCode===13&&j()},placeholder:"Refine your search further"}),e.jsx(s,{sx:{background:r.palette.secondary.main,borderRadius:"0.3125rem"},children:e.jsx(A,{variant:"text",sx:{borderRadius:"0.3125rem",padding:"0.625rem"},onClick:j,children:e.jsx(n,{sx:{color:"#11243F"},variant:"subtitle1",children:"Enter"})})})]}),e.jsxs(S,{direction:"row",gap:"1.94rem",mb:6,flexWrap:"wrap",children:[e.jsx(l,{dataList:H,value:m,handleChange:F,defaultItemString:"Price"}),e.jsx(l,{dataList:E,value:x,handleChange:B,defaultItemString:"Grade"}),e.jsx(l,{dataList:M,value:d,handleChange:v,defaultItemString:"Instruction"}),e.jsx(l,{dataList:T,value:g,handleChange:I,defaultItemString:"Board Type"}),e.jsx(l,{dataList:q,value:h,handleChange:R,defaultItemString:"Gender"}),e.jsx(l,{dataList:N,value:f,handleChange:w,defaultItemString:"Location Limit"})]}),e.jsx(s,{display:"flex",flexWrap:"wrap",gap:"1.88rem 3.43rem",children:i.map((a,W)=>e.jsx(s,{sx:{width:"14.0625rem",mb:3},children:e.jsx(b,{resource:a})},W))})]})},O=()=>{const o=L(),{subCategoryName:r,categoryName:i}=D(),[c,p]=t.useState([]);return t.useEffect(()=>{C.getResourceList({subCategory:[r||""],limit:5}).then(u=>{p(u)}).catch(u=>{console.log(u)})},[]),e.jsx(s,{sx:{background:o.palette.common.white,minHeight:800},pt:"1.23rem",pb:"6rem",children:e.jsxs(G,{children:[e.jsxs(K,{separator:e.jsx(P,{fontSize:"small"}),"aria-label":"breadcrumb",children:[e.jsx(n,{sx:{color:"#23272A",fontFamily:"Montserrat",fontSize:"1.25rem",fontStyle:"normal",fontWeight:500,lineHeight:"normal",textDecoration:"none"},component:y,to:"/allCategories",children:"All Categories"}),e.jsx(n,{sx:{color:"#23272A",fontFamily:"Montserrat",fontSize:"1.25rem",fontStyle:"normal",fontWeight:500,lineHeight:"normal",textDecoration:"none"},component:y,to:`/allCategories/${i}`,children:i}),e.jsx(n,{sx:{color:"#23272A",fontFamily:"Montserrat",fontSize:"1.25rem",fontStyle:"normal",fontWeight:500,lineHeight:"normal"},children:r})]}),e.jsxs(s,{mt:8,children:[e.jsxs(n,{sx:{color:"#23272A",fontFamily:"Montserrat",fontSize:"1.5rem",fontStyle:"normal",fontWeight:600,lineHeight:"normal",marginBottom:3.75},children:["Learn ",r]}),e.jsx(n,{sx:{color:"#23272A",fontFamily:"Montserrat",fontSize:"1.25rem",fontStyle:"normal",fontWeight:500,lineHeight:"normal",marginBottom:"4.33rem"},children:"(Paragraph about computer science) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia eros at eros mollis sollicitudin. Sed convallis eros in neque tristique cursus. Morbi sit amet sagittis arcu. Curabitur fringilla ligula efficitur tellus tempus fermentum. Vestibulum placerat rhoncus sapien, non consectetur urna faucibus a. In eu purus non urna ullamcorper vehicula. Quisque tincidunt, eros tincidunt commodo tempor, justo purus convallis ex, et fringilla ex quam a lacus. In elementum, nulla vitae mattis convallis, purus quam lacinia tellus, vel sagittis diam orci eget est. Nam mattis lectus id nisl pulvinar semper."})]}),e.jsx(Q,{title:r||"Sub Category",resourceList:c}),e.jsx(J,{title:r||"Sub Category"})]})})};export{O as default};
