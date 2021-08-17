(this["webpackJsonpredbox-language-editor"]=this["webpackJsonpredbox-language-editor"]||[]).push([[0],{39:function(e,t){},40:function(e){e.exports=JSON.parse('{"a":"2.0.0"}')},60:function(e,t){},61:function(e,t){},93:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n(0),c=n.n(s),i=n(22),r=n.n(i),l=n(36),o=n(24),d=n(17),j=n(31),b=n(101),h=n(102),u=n(41),m=n(42),p=n(48),x=n(103),g=n(46),O=n(104),f=n(105),k=n(9),v=n.n(k),N=n(10),w=n(13),y=n.n(w),_=(n(62),n(65),n(67),n(69),n(71),n(73),n(75),n(77),n(79),n(81),n(83),n(85),n(87),n(89),n(47)),C=n(40);n(91),n(92),n(93);function S(e){var t=(new DOMParser).parseFromString(e,"text/html");return Array.from(t.body.childNodes).some((function(e){return 1===e.nodeType}))}function z(e){return Object(a.jsx)(_.a,Object(j.a)({init:{skin:!1,content_css:"https://cdn.jcu.edu.au/cookbook/3.0/css/cookbook.min.css",content_css_cors:!0,content_style:"body { background: #fff; margin: .75rem; }",max_height:"20rem",autoresize_bottom_margin:0,body_class:"",forced_root_block:"",force_br_newlines:!1,force_p_newlines:!1,menubar:!1,statusbar:!1,branding:!1,plugins:["autoresize","advlist","autolink","lists","link","image","searchreplace","code","fullscreen","paste","help"],toolbar:"undo redo searchreplace | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link | removeformat | code | help",help_tabs:[{name:"languageeditor",title:"About This App",items:[{type:"htmlpanel",html:'\n                <p>This editor is for modifying messages used in ReDBox language files.</p>\n                <p>This visual HTML editor is configured to work for:</p>\n                <ul>\n                  <li><strong>Labels</strong>: simple text-based messages which are typically short, single-line strings (allowed content are <strong>bold</strong>, <em>italic</em> and <a href="#">linked text</a>), and</li>\n                  <li><strong>Rich HTML:</strong> more complicated messages that contain multiple paragraphs, styling, headings, bullets, numbering and more.</li>\n                </ul>\n                <p>Because this visual HTML editor needs to work for both types of message, hitting <kbd>Enter</kbd> or <kbd>Return</kbd> will insert a Line Break (<code>&lt;br&gt;</code>) rather than a new Paragraph (<code>&lt;p&gt;</code>). To create a new paragraph, use <kbd>Shift</kbd> + <kbd>Enter/Return</kbd> when entering text.</p>\n                <p>Other help documentation for this visual editor, including shortcuts, is available from the links in this Help panel.</p>\n                '}]},"shortcuts","keyboardnav","plugins"]}},e))}var A=function(){var e=Object(s.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)(null),r=Object(d.a)(i,2),k=r[0],w=r[1],_=[["Key","Message"],["",""]],A=Object(s.useState)(_),T=Object(d.a)(A,2),E=T[0],L=T[1],M=Object(s.useState)({}),F=Object(d.a)(M,2),R=F[0],D=F[1];window.onbeforeunload=function(){return!0};var H=function(e){D((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(o.a)({},e,{html:!0}))}))},I=function(e,t,n){L((function(a){var s=Object(l.a)(a);return s[e][t]=n,s})),S(n)&&H(e)},B=function(e){return D(e?E&&Array(E.slice(1).length).fill({html:!0}).reduce((function(e,t,n){return e[n+1]=t,e}),{}):{})},U=function(e){var t=y.a.utils.aoa_to_sheet(E),a=y.a.utils.book_new();y.a.utils.book_append_sheet(a,t,k?k.SheetNames[0]:"language"),y.a.writeFile(a,"".concat(n?n.replace(/\.[^/.]+$/,""):"language",".").concat(e))};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(b.a,{fluid:!0,children:[Object(a.jsxs)(h.a,{as:"header",className:"fixed-top mb-3 p-1 justify-content-between align-items-center border-bottom bg-white shadow",children:[Object(a.jsx)(u.a,{xs:{span:"auto",order:3},lg:{span:"auto",order:1},children:Object(a.jsxs)(m.a,{variant:"outline-secondary",onClick:function(){L((function(e){return[].concat(Object(l.a)(e),[["",""]])}))},children:[Object(a.jsx)(v.a,{path:N.h,title:"Add",size:1,className:"me-1"}),"Add row"]})}),Object(a.jsx)(u.a,{xs:{span:12,order:1},lg:{span:"auto",order:1},className:"text-center",children:Object(a.jsxs)("h1",{className:"h6 mb-lg-0",children:[Object(a.jsx)("span",{className:"fw-bold",children:"Visual Language Editor"}),n&&Object(a.jsxs)(a.Fragment,{children:[": ",Object(a.jsx)("code",{children:n})]})]})}),Object(a.jsxs)(u.a,{xs:{span:"auto",order:2},lg:{span:"auto",order:3},className:"mb-1 mb-lg-0",children:[Object(a.jsxs)(p.a,{className:"d-inline-block",children:[Object(a.jsx)(p.a.Label,{htmlFor:"fileUpload",children:Object(a.jsxs)("span",{className:"btn btn-primary",children:[Object(a.jsx)(v.a,{path:N.c,title:"Upload",size:1,className:"me-1"}),"Upload spreadsheet"]})}),Object(a.jsx)(p.a.Input,{className:"d-none",id:"fileUpload",onChange:function(e){var t=Object(d.a)(e.target.files,1)[0];if(t){var n=new FileReader;n.onload=function(e){var n=e.target.result,a=y.a.read(n,{type:"binary",raw:!0,sheets:0}),s=a.Sheets[a.SheetNames[0]];L(y.a.utils.sheet_to_json(s,{raw:!0,header:1})),w(a),c(t.name),D({})},n.readAsBinaryString(t)}},accept:".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"})]})," ",Object(a.jsxs)(x.a,{className:"d-inline-block",variant:"outline-success",id:"downloadDropdown",menuAlign:"right",title:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v.a,{path:N.b,title:"Download",size:1,className:"me-1"}),"Download"]}),children:[Object(a.jsx)(g.a.Item,{onClick:function(){return U("xlsx")},children:"Excel 2007 (.xlsx)"}),Object(a.jsx)(g.a.Item,{onClick:function(){return U("csv")},children:"CSV (.csv)"})]})," ",Object(a.jsxs)(x.a,{className:"d-inline-block",variant:"outline-secondary",id:"settingsDropdown",menuAlign:"right",bsPrefix:"",title:Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(v.a,{path:N.a,title:"Settings",size:1,className:"me-1"})}),children:[Object(a.jsxs)(g.a.Item,{onClick:function(){return B(!0)},children:[Object(a.jsx)(v.a,{path:N.f,size:1,className:"me-1"}),"Edit all as rich HTML"]}),Object(a.jsxs)(g.a.Item,{onClick:function(){return B(!1)},children:[Object(a.jsx)(v.a,{path:N.d,size:1,className:"me-1"}),"Edit all as labels"]}),Object(a.jsx)(g.a.Divider,{}),Object(a.jsxs)(g.a.Item,{className:"text-danger",onClick:function(){c(null),w(null),L(_),D({})},children:[Object(a.jsx)(v.a,{path:N.i,size:1,className:"me-1"}),"Restart app"]})]})]})]}),Object(a.jsx)(h.a,{as:"main",className:"mt-5 mb-3",children:Object(a.jsx)(u.a,{children:Object(a.jsxs)(O.a,{striped:!0,bordered:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{style:{width:"1%"},children:"Row"}),Object(a.jsx)("th",{className:"w-25",children:E[0][0]}),Object(a.jsx)("th",{children:E[0][1]})]})}),Object(a.jsx)("tbody",{children:E&&E.slice(1).map((function(e,t){var n=t+1;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"text-center",children:Object(a.jsx)("code",{children:n+1})}),Object(a.jsx)("td",{children:Object(a.jsx)(f.a.Control,{className:"position-sticky",type:"text",placeholder:E[0][0],value:e[0],onChange:function(e){return I(n,0,e.target.value)}})}),Object(a.jsx)("td",{children:R&&R[n]&&R[n].html?Object(a.jsx)(z,{value:e[1],onEditorChange:function(e){return I(n,1,e)}}):Object(a.jsxs)(h.a,{children:[Object(a.jsx)(u.a,{children:Object(a.jsx)(f.a.Control,{type:"text",placeholder:E[0][1],value:e[1],onChange:function(e){return I(n,1,e.target.value)},onFocus:function(){return S(e[1])&&H(n)}})}),Object(a.jsx)(u.a,{xs:"auto",children:Object(a.jsxs)(m.a,{variant:"outline-primary",onClick:function(){return H(n)},children:[Object(a.jsx)(v.a,{path:N.g,title:"Edit",size:1,className:"me-1"}),"HTML"]})})]})})]},n)}))})]})})}),Object(a.jsx)(h.a,{as:"footer",className:"pt-3 border-top",children:Object(a.jsx)(u.a,{className:"text-center text-muted",children:Object(a.jsxs)("ul",{className:"list-inline",children:[Object(a.jsxs)("li",{className:"list-inline-item me-2 pe-2 border-right",children:["Made by the"," ",Object(a.jsx)("a",{href:"https://github.com/jcu-eresearch",children:"JCU eResearch Centre"})]}),Object(a.jsx)("li",{className:"list-inline-item me-2 pe-2 border-right",children:Object(a.jsxs)("a",{href:"https://github.com/jcu-eresearch/redbox-language-editor",children:[Object(a.jsx)(v.a,{path:N.e,title:"GitHub",size:1,className:"me-1"}),"Source code"]})}),Object(a.jsxs)("li",{className:"list-inline-item",children:["v",C.a]})]})})})]})})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.faa20dd6.chunk.js.map