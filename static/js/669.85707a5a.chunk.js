"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[669],{669:function(n,e,o){o.r(e),o.d(e,{default:function(){return z}});var r,t,i,d,a,p,c,l,x,s,u,f=o(791),h=o(434),b=o(546),g=function(n){return n.modal.status},m=o(164),j=o(168),k=o(686),v=k.Z.div(r||(r=(0,j.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),Z=k.Z.div(t||(t=(0,j.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 12px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0px 2px 1px, -1px, rgba(0, 0, 0, 0.2), 0px 1px 1px, 0px,\n    rgba(0, 0, 0, 0.14), 0px 1px 3px, 0px, rgba(0, 0, 0, 0.12);\n\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n"]))),w=o(329),y=document.querySelector("#modal-root"),C=function(n){var e=n.children,o=(0,h.I0)(),r=function(n){"Escape"===n.code&&o((0,b.p)(!1))};return(0,f.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[]),(0,m.createPortal)((0,w.jsx)(v,{onClick:function(n){n.currentTarget===n.target&&o((0,b.p)(!1))},children:(0,w.jsx)(Z,{className:"modalContent",children:e})}),y)},_=o(439),E=k.Z.form(i||(i=(0,j.Z)(["\n  width: 250px;\n  align-items: flex-end;\n  border: solid 1px black;\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n  padding: 10px;\n  line-height: 0.5;\n"]))),F=k.Z.label(d||(d=(0,j.Z)(["\n  display: flex;\n  gap: 5px;\n  line-height: 0;\n"]))),S=k.Z.button(a||(a=(0,j.Z)(["\n  background-color: #fff;\n  color: #000;\n  padding: 2px 5px 2px 5px;\n  height: 30px;\n  border-radius: 5px;\n  border: 1px solid #000;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),q=function(){var n=(0,f.useState)(""),e=(0,_.Z)(n,2),o=e[0],r=e[1],t=(0,f.useState)(""),i=(0,_.Z)(t,2),d=i[0],a=i[1],p=(0,h.I0)();return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(E,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),r(""),a(""),p((0,b.p)(!1))},children:[(0,w.jsxs)(F,{htmlFor:"name",children:[(0,w.jsx)("p",{children:"Name:"}),(0,w.jsx)("input",{type:"text",id:"name",name:"name",value:o,onChange:function(n){r(n.currentTarget.value)},required:!0})]}),(0,w.jsx)("br",{}),(0,w.jsxs)(F,{htmlFor:"number",children:[(0,w.jsx)("p",{children:"Number:"}),(0,w.jsx)("input",{type:"tel",id:"number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:d,onChange:function(n){a(n.currentTarget.value)},required:!0})]}),(0,w.jsx)("br",{}),(0,w.jsx)(S,{type:"submit",children:"Add Contact"})]})})},I=k.Z.div(p||(p=(0,j.Z)(["\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n"]))),N=k.Z.div(c||(c=(0,j.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),T=k.Z.div(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),A=k.Z.div(x||(x=(0,j.Z)(["\n  margin-top: 20px;\n  margin-left: 20px;\n"]))),L=k.Z.button(s||(s=(0,j.Z)(["\n  font-size: 16px;\n  line-height: 26px;\n  background-color: #fff;\n  color: #000;\n  padding: 5px 15px 5px 15px;\n  height: 40px;\n  border-radius: 5px;\n  border: 2px solid #000;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),P=k.Z.button(u||(u=(0,j.Z)(["\n  background-color: #fff;\n  color: #000;\n  padding: 2px 5px 2px 5px;\n  height: 25px;\n  border-radius: 4px;\n  border: 1px solid #000;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),z=function(){var n=(0,h.v9)(g),e=(0,h.I0)(),o=function(){e((0,b.p)(!n))};return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(A,{children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(N,{children:(0,w.jsx)(L,{type:"button",onClick:o,children:"Add Contact"})}),n&&(0,w.jsx)(C,{children:(0,w.jsx)(T,{children:(0,w.jsxs)(I,{children:[(0,w.jsx)(P,{type:"button",onClick:o,children:"Close"}),(0,w.jsx)(q,{})]})})})]})})}}}]);
//# sourceMappingURL=669.85707a5a.chunk.js.map