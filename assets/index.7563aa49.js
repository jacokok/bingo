import{R as e,C as t,u as r,m as l,d as a,r as n,B as o,a as s,F as c,b as m,c as i,e as d,T as u,x as p,S as E,f as y,A as g,g as h,h as b,i as f,j as k}from"./vendor.21102880.js";const w=r=>{const l=[],a=()=>{for(var e=0,t=r.words[Math.floor(Math.random()*r.words.length)];n(t)&&e<1e4;)t=r.words[Math.floor(Math.random()*r.words.length)],e++;return l.push(t),t},n=e=>{for(var t=0;t<=l.length;t++)if(l[t]==e)return!0;return!1},o={borderColor:r.color,color:r.color};return e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{style:o},"B"),e.createElement("th",{style:o},"I"),e.createElement("th",{style:o},"N"),e.createElement("th",{style:o},"G"),e.createElement("th",{style:o},"O")),e.createElement("tr",null,e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a())),e.createElement("tr",null,e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a())),e.createElement("tr",null,e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},e.createElement(t,{color:"primary",style:{fontSize:50}})),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a())),e.createElement("tr",null,e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a())),e.createElement("tr",null,e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()),e.createElement("td",{style:o},a()))))},S=t=>{const a=r();return l({header:{fontSize:50,color:a.palette.primary.main,height:60,lineHeight:"60px"},text:{color:a.palette.primary.main},td:{border:"2px solid "+a.palette.primary.main},container:{margin:"20px auto"},table:{margin:"auto"}})(),e.createElement(e.Fragment,null,e.createElement(w,{words:t.words,color:a.palette.primary.main}))};const{Text:C,View:B,Svg:x,G:M,Path:v}=a,T=t=>{const r=[0,1,2,3,4].map((r=>2==r&&2==t.rowNumber?e.createElement(B,{key:"cell_"+r,style:t.style.td},e.createElement(B,{style:{margin:10}},e.createElement(x,{key:"cell_"+r,viewBox:"0 0 24 24"},e.createElement(M,{fill:t.color},e.createElement(v,{d:"M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"}))))):e.createElement(B,{key:"cell_"+r,style:t.style.td},e.createElement(C,null,t.getRandomWord()))));return e.createElement(e.Fragment,null,r)},{Text:z,View:K}=a,R=t=>{const r=[0,1,2,3,4].map((r=>e.createElement(K,{key:"cell_"+r,style:t.style.row},e.createElement(T,{style:t.style,rowNumber:r,getRandomWord:t.getRandomWord,color:t.color}))));return e.createElement(e.Fragment,null,r)},{Page:W,Text:F,View:P,Document:j,StyleSheet:A,PDFViewer:D,PDFDownloadLink:H,Font:N}=a;N.register({family:"Roboto",fonts:[{src:"/bingo/assets/Roboto-Regular.319cff6e.ttf"},{src:"/bingo/assets/Roboto-Bold.baf44ce8.ttf",fontWeight:700}]});const V=t=>{const r=[],l=()=>{for(var e=0,l=t.words[Math.floor(Math.random()*t.words.length)];a(l)&&e<1e4;)l=t.words[Math.floor(Math.random()*t.words.length)],e++;return r.push(l),l},a=e=>{for(var t=0;t<=r.length;t++)if(r[t]==e)return!0;return!1},n=A.create({page:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},table:{marginBottom:30},row:{flexDirection:"row"},th:{width:120,height:60,textAlign:"center",justifyContent:"center",backgroundColor:"white",color:t.color,margin:"-2pt",border:"2pt  0   0  2pt solid "+t.color,fontSize:22,fontWeight:700,fontFamily:"Roboto"},td:{width:120,height:60,textAlign:"center",justifyContent:"center",backgroundColor:"white",color:t.color,margin:"-2pt",border:"2pt  0   0  2pt solid "+t.color,fontSize:10,fontFamily:"Roboto",alignContent:"center"}}),o=[...Array(t.boardCount)].reduce((function(e,t,r){return(r%2==0?e.push([r]):e[e.length-1].push(r))&&e}),[]).map(((r,a)=>e.createElement(W,{key:"page_"+a,size:"A4",style:n.page},r.map(((r,a)=>e.createElement(P,{key:"page_"+a,style:n.table},e.createElement(P,{style:n.row},e.createElement(P,{style:n.th},e.createElement(F,null,"B")),e.createElement(P,{style:n.th},e.createElement(F,null,"I")),e.createElement(P,{style:n.th},e.createElement(F,null,"N")),e.createElement(P,{style:n.th},e.createElement(F,null,"G")),e.createElement(P,{style:n.th},e.createElement(F,null,"O"))),e.createElement(R,{style:n,getRandomWord:l,color:t.color})))))));return e.createElement(j,null,o)},{pdf:L}=a,O=t=>{const[r,l]=n.exports.useState(!1);return e.createElement(e.Fragment,null,e.createElement(o,{onClick:async()=>{l(!0);const r=L([]),a=e.createElement(V,{words:t.words,boardCount:t.boardCount,color:t.color});r.updateContainer(a);const n=await r.toBlob();c.exports.saveAs(n,"document.pdf"),l(!1)},variant:"contained",color:"primary",disabled:r},"Download PDF"),r&&e.createElement(s,null))},_={red:"#f44336",pink:"#e91e63",purple:"#9c27b0",indigo:"#3f51b5",blue:"#2196f3",lightBlue:"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caf50",lightGreen:"#8bc34a",amber:"#ffc107",orange:"#ff9800",deepOrange:"#ff5722",dark:"#1b1d1e"};const G=r=>{console.log("render config");const l=function(e,t){let r;return(...l)=>{clearTimeout(r),r=setTimeout((()=>{e(...l)}),t)}}((e=>{r.setBoardCount(e)}),400);return e.createElement(m,{style:{padding:20,margin:"20px auto",maxWidth:700},className:r.styles.hideprint},e.createElement(i,{title:"Options",subheader:"Change bingo config here"}),e.createElement(d,null,e.createElement(u,{id:"number-slider",gutterBottom:!0},"Pick colour"),e.createElement(p,{palette:_,onSelect:e=>{r.setColor(_[e])}}),e.createElement("br",null),e.createElement(u,{id:"number-slider",gutterBottom:!0},"Number of Bingo boards"),e.createElement(E,{defaultValue:1,"aria-labelledby":"number-slider",min:1,valueLabelDisplay:"on",onChange:(e,t)=>l(Array.isArray(t)?t[0]:t)}),e.createElement("br",null),e.createElement(t,{color:"primary",fontSize:"large"})),e.createElement(y,null,e.createElement(O,{words:r.words,boardCount:r.boardCount,color:r.color})))},I=t=>e.createElement(g,{position:"static",className:t.styles.hideprint},e.createElement(h,null,e.createElement(u,{variant:"h6"},"Buzzword Bingo"))),q=["Handdoeke","Badmatjie","Laken","Pas laken","Kussing slope","Vaddoeke","Waslappe","Sout potjie","Peper potjie","Asyn houer","Olie houer","Koek pan","Muffin pan","Brood pan","Ys houer","Messe","Vurke","Lepels","Tee koppies","Tee pot","Tee lepels","Koek staander","Glase","Wit wyn glase","Rooi wyn glase","Whiskey glase","Tupperware","Koek roller","Waspoeier houer","Koek blik","Koffie bekers","Tee koppie","Sny bord","Hour bord","Kaas bord","Kaas Mes","Sop lepel","Mash drukker","Sker","Spatula","Kaas snyer","Rasper","Sif","Maatbeker","Maat lepels","Mandjies","Caserole","Cake lifter","Op-skep bakke","Tert bak","Koffie houer","Tee houer","Kerse","Plantjies","Handy Andy","Waspoeier","Sunlight Liquid","Doom","Speserye","Blompot","Kussings","Lekker ruik stokkies","Houtlepel","Borde","Klein bordjies","Bakkies","Sop Bakkies","Melk beker","Suiker pot"],Y=()=>{const[t,r]=n.exports.useState(q),[a,o]=n.exports.useState(!1),[s,c]=n.exports.useState(1),[m,i]=n.exports.useState("#3f51b5"),d=l({hideprint:{"@media print":{display:"none"}}})(),u=b({palette:{primary:{main:m}}});return e.createElement(f,{theme:u},e.createElement(I,{styles:d}),e.createElement(G,{words:t,boardCount:s,setBoardCount:c,styles:d,color:m,setColor:i}),e.createElement(S,{words:t,boardCount:s,setIsPreview:o,isPreview:a}))},J=()=>e.createElement(Y,null);k.render(e.createElement(e.StrictMode,null,e.createElement(J,null)),document.getElementById("root"));
