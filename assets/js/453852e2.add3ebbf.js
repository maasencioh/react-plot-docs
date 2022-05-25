"use strict";(self.webpackChunkdocs_react_plot=self.webpackChunkdocs_react_plot||[]).push([[532],{7490:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return y},default:function(){return b},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return h}});var a=n(7462),r=n(3366),i=n(7294),l=n(3905),o=n(2074),s=n(1736),u=n(1119),d="import React from 'react';\nimport { LineSeries, Plot, ScatterSeries, BarSeries } from 'react-plot';\n\nexport default function Series() {\n  return (\n    <Plot width={300} height={300}>\n      <LineSeries\n        data={[\n          { x: 1, y: 1 },\n          { x: 2, y: 2 },\n          { x: 3, y: 3 },\n          { x: 4, y: 2 },\n          { x: 5, y: 1 },\n        ]}\n      />\n      <ScatterSeries\n        data={[\n          { x: 1, y: 2 },\n          { x: 2, y: 1 },\n          { x: 3, y: 2 },\n          { x: 4, y: 1 },\n          { x: 5, y: 2 },\n        ]}\n        // todo: in next release\n        // xShift={2}\n        // yShift={5}\n      />\n      <BarSeries\n        hidden\n        data={[\n          { x: 1, y: 2 },\n          { x: 2, y: 0 },\n          { x: 3, y: 2 },\n          { x: 5, y: 1 },\n          { x: 6, y: 2 },\n        ]}\n      />\n    </Plot>\n  );\n}\n",p=function(){return i.createElement(o.XN,{width:300,height:300},i.createElement(o.eh,{data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:2},{x:5,y:1}]}),i.createElement(o.nC,{data:[{x:1,y:2},{x:2,y:1},{x:3,y:2},{x:4,y:1},{x:5,y:2}]}),i.createElement(o.QG,{hidden:!0,data:[{x:1,y:2},{x:2,y:0},{x:3,y:2},{x:5,y:1},{x:6,y:2}]}))};function m(e){var t=(0,i.useState)(!1),n=t[0],a=t[1];return i.createElement(i.Fragment,null,i.createElement("div",{className:"demo-example-wrapper"},i.createElement(p,null),i.createElement("div",{className:"demo-example-buttons"},i.createElement("button",{onClick:function(){return a((function(e){return!e}))},type:"button",style:{backgroundColor:n?"#dbeafe":void 0}},"Code"),e.noCodesandbox?null:i.createElement(u.Z,{name:"series",source:d,dependencies:{react:"^17.0.2","react-plot":"^0.19.1"}},(function(){return i.createElement("button",{type:"submit"},"Open sandbox")})))),n&&i.createElement(s.Z,{className:"language-jsx"},d))}var k=["components"],c={},y="Introduction",f={unversionedId:"series/intro",id:"series/intro",title:"Introduction",description:"There are currently 5 different kind of series that can be added in a plot:",source:"@site/docs/100_series/000_intro.md",sourceDirName:"100_series",slug:"/series/intro",permalink:"/series/intro",editUrl:"https://github.com/zakodium-oss/react-plot-docs/tree/main/docs/100_series/000_intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BoxPlot",permalink:"/boxplot"},next:{title:"ScatterSeries",permalink:"/series/scatterSeries"}},x={},h=[{value:"Data",id:"data",level:2},{value:"Base Props",id:"base-props",level:2},{value:"<u>Mandatory</u>",id:"mandatory",level:4},{value:"<u>Optional</u>",id:"optional",level:4},{value:"Example",id:"example",level:2}],N={toc:h};function b(e){var t=e.components,n=(0,r.Z)(e,k);return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"There are currently 5 different kind of series that can be added in a plot:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/series/scatterSeries"},"ScatterSeries"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/series/lineSeries"},"LineSeries"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/series/barSeries"},"BarSeries"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/series/functionSeries"},"FunctionSeries"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/series/rangeSeries"},"RangeSeries")))),(0,l.kt)("p",null,"Series are direct children of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Plot")," component and you may have as many Series as you which on the same plot."),(0,l.kt)("h2",{id:"data"},"Data"),(0,l.kt)("p",null,"The main purpose of ",(0,l.kt)("inlineCode",{parentName:"p"},"react-plot")," is displaying different data in many ways.\nData is an array of points that differ from serie to another"),(0,l.kt)("h2",{id:"base-props"},"Base Props"),(0,l.kt)("p",null,"They are the props that all series have:"),(0,l.kt)("h4",{id:"mandatory"},(0,l.kt)("u",null,"Mandatory")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data:")," displayed serie's data",(0,l.kt)("br",null),"\ntype: ",(0,l.kt)("a",{parentName:"li",href:"/types/data"},(0,l.kt)("inlineCode",{parentName:"a"},"Data")))),(0,l.kt)("h4",{id:"optional"},(0,l.kt)("u",null,"Optional")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"id:")," serie id",(0,l.kt)("br",null),"\ntype: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\ndefault: generated automatically"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"xAxis:")," series horizontal axis id ",(0,l.kt)("br",null),"\ntype: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("br",null),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"li"},'"x"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"yAxis:")," series vertical axis id ",(0,l.kt)("br",null),"\ntype: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("br",null),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"li"},'"y"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"label:")," label of the serie that can be displayed in legends",(0,l.kt)("br",null),"\ntype: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hidden:")," hide serie",(0,l.kt)("br",null),"\ntype: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("br",null),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"xShift:"),' "number or string"',(0,l.kt)("br",null),"\ntype: ",(0,l.kt)("inlineCode",{parentName:"li"},"number or string"),(0,l.kt)("br",null),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"yShift:"),' "number or string"',(0,l.kt)("br",null),"\ntype: ",(0,l.kt)("inlineCode",{parentName:"li"},"number or string"),(0,l.kt)("br",null),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"li"},"0"))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(m,{mdxType:"SeriesDemo"}))}b.isMDXComponent=!0}}]);