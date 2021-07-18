import{R as e,C as t,d as r,a as l,u as a,m as n,r as o,B as s,b as c,F as m,D as i,c as d,e as u,T as E,f as p,g as y,h,i as g,j as f,k as b,x as k,S as w,l as S,A as C,n as v,o as B,p as x,q as M}from"./vendor.f445456b.js";const{Svg:z,G:W,Path:P}=r,F=r=>r.isPDF?e.createElement(z,{viewBox:"0 0 24 24"},e.createElement(W,{fill:r.color},e.createElement(P,{d:"M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"}))):e.createElement(t,{color:"primary",style:{fontSize:50}}),D=t=>{const r=[],a=()=>{for(var e=0,l=t.words[Math.floor(Math.random()*t.words.length)];n(l)&&e<1e4;)l=t.words[Math.floor(Math.random()*t.words.length)],e++;return r.push(l),l},n=e=>{for(var t=0;t<=r.length;t++)if(r[t]==e)return!0;return!1},o={borderColor:t.color,color:t.color};return e.createElement(l,{maxWidth:"sm"},e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{style:o},"B"),e.createElement("th",{style:o},"I"),e.createElement("th",{style:o},"N"),e.createElement("th",{style:o},"G"),e.createElement("th",{style:o},"O")),e.createElement("tr",null,e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a())),e.createElement("tr",null,e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a())),e.createElement("tr",null,e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},e.createElement(F,{color:"red",isPDF:!1})),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a())),e.createElement("tr",null,e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a())),e.createElement("tr",null,e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a())))))},R=t=>{const r=a();return n({header:{fontSize:50,color:r.palette.primary.main,height:60,lineHeight:"60px"},text:{color:r.palette.primary.main},td:{border:"2px solid "+r.palette.primary.main},container:{margin:"20px auto"},table:{margin:"auto"}})(),e.createElement(e.Fragment,null,e.createElement(D,{words:t.words,color:r.palette.primary.main}))};const{Text:T,View:K,Svg:H,G:j,Path:A}=r,V=t=>{const r=[0,1,2,3,4].map((r=>2==r&&2==t.rowNumber?e.createElement(K,{key:"cell_"+r,style:t.style.td},e.createElement(K,{style:{margin:10}},e.createElement(H,{key:"cell_"+r,viewBox:"0 0 24 24"},e.createElement(j,{fill:t.color},e.createElement(A,{d:"M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"}))))):e.createElement(K,{key:"cell_"+r,style:t.style.td},e.createElement(T,null,t.getRandomWord()))));return e.createElement(e.Fragment,null,r)},{Text:G,View:N}=r,L=t=>{const r=[0,1,2,3,4].map((r=>e.createElement(N,{key:"cell_"+r,style:t.style.row},e.createElement(V,{style:t.style,rowNumber:r,getRandomWord:t.getRandomWord,color:t.color}))));return e.createElement(e.Fragment,null,r)},{Page:O,Text:_,View:I,Document:q,StyleSheet:U,PDFViewer:Y,PDFDownloadLink:J,Font:Q}=r;Q.register({family:"Roboto",fonts:[{src:"/bingo/assets/Roboto-Regular.319cff6e.ttf"},{src:"/bingo/assets/Roboto-Bold.baf44ce8.ttf",fontWeight:700}]});const X=t=>{const r=[],l=()=>{for(var e=0,l=t.words[Math.floor(Math.random()*t.words.length)];a(l)&&e<1e4;)l=t.words[Math.floor(Math.random()*t.words.length)],e++;return r.push(l),l},a=e=>{for(var t=0;t<=r.length;t++)if(r[t]==e)return!0;return!1},n=U.create({page:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},table:{marginBottom:30},row:{flexDirection:"row"},th:{width:120,height:60,textAlign:"center",justifyContent:"center",backgroundColor:"white",color:t.color,margin:"-2pt",border:"2pt  0   0  2pt solid "+t.color,fontSize:22,fontWeight:700,fontFamily:"Roboto"},td:{width:120,height:60,textAlign:"center",justifyContent:"center",backgroundColor:"white",color:t.color,margin:"-2pt",border:"2pt  0   0  2pt solid "+t.color,fontSize:10,fontFamily:"Roboto",alignContent:"center"}}),o=[...Array(t.boardCount)].reduce((function(e,t,r){return(r%2==0?e.push([r]):e[e.length-1].push(r))&&e}),[]).map(((r,a)=>e.createElement(O,{key:"page_"+a,size:"A4",style:n.page},r.map(((r,a)=>e.createElement(I,{key:"page_"+a,style:n.table},e.createElement(I,{style:n.row},e.createElement(I,{style:n.th},e.createElement(_,null,"B")),e.createElement(I,{style:n.th},e.createElement(_,null,"I")),e.createElement(I,{style:n.th},e.createElement(_,null,"N")),e.createElement(I,{style:n.th},e.createElement(_,null,"G")),e.createElement(I,{style:n.th},e.createElement(_,null,"O"))),e.createElement(L,{style:n,getRandomWord:l,color:t.color})))))));return e.createElement(q,null,o)},{pdf:Z}=r,$=t=>{const[r,l]=o.exports.useState(!1);return e.createElement(e.Fragment,null,e.createElement(s,{onClick:async()=>{l(!0);const r=Z([]),a=e.createElement(X,{words:t.words,boardCount:t.boardCount,color:t.color});r.updateContainer(a);const n=await r.toBlob();m.exports.saveAs(n,"document.pdf"),l(!1)},variant:"contained",color:"primary",disabled:r},"Download PDF"),r&&e.createElement(c,null))},ee=t=>{const[r,l]=e.useState(!1),[a,n]=e.useState(t.words.join("\n")),c=()=>{l(!1)},m=o.exports.useRef(null);return e.useEffect((()=>{if(r){const{current:e}=m;null!==e&&e.focus()}}),[r]),e.createElement(e.Fragment,null,e.createElement(s,{variant:"contained",color:"primary",onClick:()=>{l(!0)}},"Update Words"),e.createElement(i,{open:r,onClose:c,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},e.createElement(d,{id:"scroll-dialog-title"},"Edit Words"),e.createElement(u,{dividers:!0,style:{minWidth:500}},e.createElement(E,{label:"Words",multiline:!0,defaultValue:a,variant:"outlined",onChange:e=>{n(e.target.value)},style:{width:"100%"}})),e.createElement(p,null,e.createElement(s,{onClick:c,color:"primary"},"Cancel"),e.createElement(s,{onClick:()=>{console.log(a),t.onChange(a.split("\n")),l(!1)},color:"primary"},"Done"))))},{Svg:te,G:re,Path:le}=r,ae=t=>t.isPDF?e.createElement(te,{viewBox:"0 0 24 24"},e.createElement(re,{fill:t.color},e.createElement(le,{d:"M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"}))):e.createElement(y,{color:"primary",style:{fontSize:50}}),ne={red:"#f44336",pink:"#e91e63",purple:"#9c27b0",indigo:"#3f51b5",blue:"#2196f3",lightBlue:"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caf50",lightGreen:"#8bc34a",amber:"#ffc107",orange:"#ff9800",deepOrange:"#ff5722",dark:"#1b1d1e"};const oe=t=>{console.log("render config");const r=function(e,t){let r;return(...l)=>{clearTimeout(r),r=setTimeout((()=>{e(...l)}),t)}}((e=>{t.setBoardCount(e)}),400);return e.createElement(l,{maxWidth:"sm"},e.createElement(h,{className:t.styles.hideprint},e.createElement(g,{title:"Options",subheader:"Change bingo config here"}),e.createElement(f,null,e.createElement(b,{id:"number-slider",gutterBottom:!0},"Pick colour"),e.createElement(k,{palette:ne,onSelect:e=>{t.setColor(ne[e])}}),e.createElement("br",null),e.createElement(b,{id:"number-slider",gutterBottom:!0},"Number of Bingo boards"),e.createElement(w,{defaultValue:1,"aria-labelledby":"number-slider",min:1,valueLabelDisplay:"on",onChange:(e,t)=>r(Array.isArray(t)?t[0]:t)}),e.createElement("br",null),e.createElement(F,{color:"red",isPDF:!1}),e.createElement(ae,{color:"red",isPDF:!1}),e.createElement("br",null),e.createElement(ee,{words:t.words,onChange:t.setWords})),e.createElement(S,null,e.createElement($,{words:t.words,boardCount:t.boardCount,color:t.color}))))},se=t=>e.createElement(C,{position:"static",className:t.styles.hideprint},e.createElement(v,null,e.createElement(b,{variant:"h6"},"Buzzword Bingo"))),ce=["Handdoeke","Badmatjie","Laken","Pas laken","Kussing slope","Vaddoeke","Waslappe","Sout potjie","Peper potjie","Asyn houer","Olie houer","Koek pan","Muffin pan","Brood pan","Ys houer","Messe","Vurke","Lepels","Tee koppies","Tee pot","Tee lepels","Koek staander","Glase","Wit wyn glase","Rooi wyn glase","Whiskey glase","Tupperware","Koek roller","Waspoeier houer","Koek blik","Koffie bekers","Tee koppie","Sny bord","Hour bord","Kaas bord","Kaas Mes","Sop lepel","Mash drukker","Sker","Spatula","Kaas snyer","Rasper","Sif","Maatbeker","Maat lepels","Mandjies","Caserole","Cake lifter","Op-skep bakke","Tert bak","Koffie houer","Tee houer","Kerse","Plantjies","Handy Andy","Waspoeier","Sunlight Liquid","Doom","Speserye","Blompot","Kussings","Lekker ruik stokkies","Houtlepel","Borde","Klein bordjies","Bakkies","Sop Bakkies","Melk beker","Suiker pot"],me=()=>{const[t,r]=o.exports.useState(ce),[l,a]=o.exports.useState(!1),[s,c]=o.exports.useState(1),[m,i]=o.exports.useState("#3f51b5"),d=n({hideprint:{"@media print":{display:"none"}}})(),u=B({palette:{primary:{main:m}}});return e.createElement(x,{theme:u},e.createElement(se,{styles:d}),e.createElement("div",{style:{margin:20}},e.createElement(oe,{words:t,setWords:r,boardCount:s,setBoardCount:c,styles:d,color:m,setColor:i}),e.createElement(R,{words:t,boardCount:s,setIsPreview:a,isPreview:l})))},ie=()=>e.createElement(me,null);M.render(e.createElement(e.StrictMode,null,e.createElement(ie,null)),document.getElementById("root"));
