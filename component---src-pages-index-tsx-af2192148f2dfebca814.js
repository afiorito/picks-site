"use strict";(self.webpackChunkpicks_site=self.webpackChunkpicks_site||[]).push([[691],{9652:function(N,M,I){I.r(M),I.d(M,{default:function(){return y}});var i=I(8055),e=I(3366),g=I(5785),s=I(7294),D=I(9021),c=function(N){var M=N.children;return(0,D.tZ)("div",{className:"device"},(0,D.tZ)("div",{className:"side"},(0,D.tZ)("div",{className:"screen"},M)),(0,D.tZ)("div",{className:"header"},(0,D.tZ)("div",{className:"sensor-1"}),(0,D.tZ)("div",{className:"sensor-2"}),(0,D.tZ)("div",{className:"sensor-3"})))},a=["pickers","segments"],T={name:"@bodypart",color:"#FF9E9E",picks:["Legs","Shoulders","Back","Chest","Biceps","Triceps"]},n=[{name:"Dinner",segments:["For dinner, I should eat ",0," food."],pickers:[{name:"@cuisine",color:"#FFDC7B",picks:["Chinese","Thai","Italian","Indian","Mexican","American","Japanese"]}]},{name:"Exercise",segments:["Workout ",0," and ",1," for ",2,"."],pickers:[T,T,{name:"@time",color:"#C6A3FF",picks:(0,g.Z)(Array(30)).map((function(N,M){return M+10+"m"}))}]}],t=function(N,M){return void 0===M&&(M=0),Math.floor(Math.random()*(N-M))+M},j=function(){var N=function(N){return n.map((function(M,I){var i=M.pickers,g=M.segments,s=(0,e.Z)(M,a),c=g.map((function(M){if("number"==typeof M){var e=i[M],g=I===N?e.picks[t(e.picks.length)]:e.name;return(0,D.tZ)("span",{key:M,className:"picker",style:{backgroundColor:e.color}},g)}return M}));return Object.assign({},s,{expression:c})}))},M=(0,s.useState)(N()),I=M[0],i=M[1],g=(0,s.useState)(0),T=g[0],j=g[1];(0,s.useEffect)((function(){var M=t(10,5),I=setInterval((function(){M--<0&&(clearInterval(I),setTimeout((function(){j((T+1)%n.length)}),1e3)),i(N(T))}),1e3)}),[T]);return(0,D.tZ)(c,null,(0,D.tZ)("header",{className:"nav-header"},(0,D.tZ)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkFydGJvYXJkPC90aXRsZT4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5Ljg2NjY2NywgMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNOTYuNDg1NTQ2Nyw1Ny41Njk2MjEzIEMxMTAuNTQ4NDgsNTcuNTk1MzA2NyAxMjIuODIxMTIsNjUuMjI3MTc4NyAxMjkuNDY4NTg3LDc2LjU0NzA3MiBMMTc4Ljg2NTQ5Myw0Ny40NTM1MjUzIEMxNTcuNDE0NCwxMC45MDczMDY3IDExNi45Mzk5NDcsLTYuNzYzOTA0IDc1LjU5NjcxNDcsMi4zNzkwNDIxMyBMODcuOTcxODQsNTguNTQyODQ4IEM5MC43MDc2MjY3LDU3LjkyODE5MiA5My41NDU4MTMzLDU3LjU2OTYyMTMgOTYuNDg1NTQ2Nyw1Ny41Njk2MjEzIFoiIGlkPSJQYXRoIiBmaWxsPSIjNjQ0Mzk5Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzguODY2MzQ3LDQ3LjQ3OTEyNTMgTDEyOS40Njk0NCw3Ni41NDcwNzIgQzEzMi44NDQzNzMsODIuMjU4MTc2IDEzNC43ODc0MTMsODguOTE3MzMzMyAxMzQuNzg3NDEzLDk2LjAzNjY5MzMgQzEzNC43NjE4MTMsMTA1Ljg3MTM2IDEzMS4wNTQwOCwxMTQuODA5MTczIDEyNC45Njg5NiwxMjEuNTk1NzMzIEwxNjcuOTc0NCwxNTkuNzgxNTQ3IEMxOTYuMDQ4MjEzLDEyOC4wNDk0OTMgMjAwLjMxODI5Myw4NC4wMjUzNDQgMTc4Ljg2NjM0Nyw0Ny40NzkxMjUzIFoiIGlkPSJQYXRoIiBmaWxsPSIjODU1QUNDIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjQuOTY4OTYsMTIxLjU5NTczMyBDMTE3LjkzNzQ5MywxMjkuNDU4MzQ3IDEwNy43MzU4OTMsMTM0LjQyNjQ1MyA5Ni4zODMxNDY3LDEzNC40MDA4NTMgQzkwLjkxMjQyNjcsMTM0LjQwMDg1MyA4NS43MjE2LDEzMy4yMjMyNTMgODEuMDE3MTczMywxMzEuMTQ4OCBMNTcuOTU0OTAxMywxODQuMDg1MzMzIEM5Ni43NjcxNDY3LDIwMS4wMzkzNiAxMzkuODc0OTg3LDE5MS41MTI3NDcgMTY3Ljk0Nzk0NywxNTkuNzgxNTQ3IEwxMjQuOTY4OTYsMTIxLjU5NTczMyBaIiBpZD0iUGF0aCIgZmlsbD0iI0E2NzBGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNODcuOTcwMTMzMyw1OC41NDMwMTg3IEw3NS41OTU2MDUzLDIuMzc5MTk1NzMgQzM0LjI1MjIwMjcsMTEuNTIyMTMzMyA0Ljk3Njg5Niw0NC41ODUzMDEzIDAuODg2MDA3NDY3LDg2LjgxNzI4IEw1OC4yNjA1NjUzLDkyLjM5OTc4NjcgQzU5Ljc5NDYwMjcsNzUuNzAyMDE2IDcxLjk5MDUyOCw2Mi4xNTQwNjkzIDg3Ljk3MDEzMzMsNTguNTQzMDE4NyBaIiBpZD0iUGF0aCIgZmlsbD0iI0E2NzBGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNODAuOTkxNTczMywxMzEuMTQ4OCBDNjcuNDkxNDk4NywxMjUuMTgxNDQgNTguMDU2ODc0NywxMTEuNjU5NTIgNTguMDU2ODc0Nyw5NS45MzQyOTMzIEM1OC4wNTY4NzQ3LDk0LjczMTA5MzMgNTguMTMzNTg5Myw5My41NTI2NCA1OC4yMzU5MDQsOTIuMzk5Nzg2NyBMMC44ODY4ODY0LDg2LjgxNzI4IEMwLjQ3Nzc5ODQsOTAuODg5Mzg2NyAwLjQyNjY2NjY2NywxMDMuNjk0NTA3IDAuNDI2NjY2NjY3LDEwMy42OTQ1MDcgTDAuNDI2NjY2NjY3LDIyNy4xODgwNTMgQzAuNDI2NjY2NjY3LDI0My4wOTI0OCAxMy4zMTI5Mzg3LDI1NiAyOS4xOTA2NTYsMjU2IEM0NS4wNjgzNzMzLDI1NiA1Ny45NTQ2NDUzLDI0My4xMTgwOCA1Ny45NTQ2NDUzLDIyNy4yMTM2NTMgTDU3Ljk1NDY0NTMsMTg0LjA4NjE4NyBMODAuOTkxNTczMywxMzEuMTQ4OCBaIiBpZD0iUGF0aCIgZmlsbD0iI0M2QTNGRiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",alt:"Picks Logo"})),(0,D.tZ)("div",{className:"generators"},I.map((function(N){return(0,D.tZ)("div",{key:N.name,className:"generator"},(0,D.tZ)("h3",null,N.name),(0,D.tZ)("p",null,N.expression))}))))},z=I(3403),u=I.p+"static/app-store-8c4986ee4828b47d16f5cd694ef065f2.svg",y=function(){return(0,D.tZ)(i.T3,{title:"Picks | Landing Page"},(0,D.tZ)("main",{className:"main index"},(0,D.tZ)("div",{className:"container"},(0,D.tZ)("section",{className:"section title-section"},(0,D.tZ)("img",{className:"dots",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDE1IiBoZWlnaHQ9IjQwOSIgdmlld0JveD0iMCAwIDQxNSA0MDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjMwMiIgY3k9IjQwMiIgcj0iNyIgZmlsbD0iI0M2QTNGRiIvPgo8Y2lyY2xlIGN4PSIzMiIgY3k9IjM0OCIgcj0iNyIgZmlsbD0iI0ZGQTlBOSIvPgo8Y2lyY2xlIGN4PSI0MDIiIGN5PSIxMjciIHI9IjYiIGZpbGw9IiNGRkRDN0IiLz4KPGNpcmNsZSBjeD0iNSIgY3k9IjIwMSIgcj0iNSIgZmlsbD0iI0ZGREM3QiIvPgo8Y2lyY2xlIGN4PSI0MDgiIGN5PSIzMTIiIHI9IjciIGZpbGw9IiM5QURDQTUiLz4KPGNpcmNsZSBjeD0iMjc4IiBjeT0iNyIgcj0iNyIgZmlsbD0iIzgwQzJGRiIvPgo8Y2lyY2xlIGN4PSIxMTEuNSIgY3k9Ijg3LjUiIHI9IjcuNSIgZmlsbD0iI0M2QTNGRiIvPgo8L3N2Zz4K",alt:""}),(0,D.tZ)("h1",null,"Making Decisions. ",(0,D.tZ)("br",null)," Simplified."),(0,D.tZ)("p",null,"Add a little fun to your decision making."),(0,D.tZ)(z.M,{target:"_blank",href:"https://apps.apple.com/us/app/picks-random-generator/id1536305926?mt=8",className:"app-store",rel:"noopener noreferrer"},(0,D.tZ)("img",{src:u,alt:"Download on the App Store"}))),(0,D.tZ)("section",{className:"section device-section"},(0,D.tZ)(j,null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-af2192148f2dfebca814.js.map