(this["webpackJsonppokemon-unite-ui-react"]=this["webpackJsonppokemon-unite-ui-react"]||[]).push([[0],{32:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(26),o=c.n(s),i=(c(32),c(11)),r=c(4),l=c(1);var j=function(){return Object(l.jsxs)("header",{className:"flex py-2 px-2 bg-gray-700 shadow border-b border-gray-500 text-gray-200 text-xl",children:[Object(l.jsx)("div",{className:"pr-5",children:"Nav"}),Object(l.jsx)(i.b,{to:"/",children:"Pokemon"})]})};var d=function(){return Object(l.jsx)("div",{className:"py-1 px-2 text-center bg-gray-700 shadow text-gray-200 text-sm",children:"Pok\xe9mon images & names \xa9 1995-2021 Nintendo/Game Freak."})},b=c(6);var m=function(e){var t=e.children;return Object(l.jsx)("div",{className:"flex-1",children:t})},u=c(27);var p=function(e){var t=e.loading;return Object(l.jsxs)("div",{className:"flex flex-col items-center",children:[Object(l.jsx)("p",{className:"text-lg",children:"Loading..."}),Object(l.jsx)(u.BarLoader,{css:"display: block;",loading:t,height:8})]})},x=c(10),v=c.n(x),f=c(12),h="https://pokemon-unite-api.trevor-builds-apps.com",O="".concat(h,"/api");function y(){return g.apply(this,arguments)}function g(){return(g=Object(f.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"\n  {\n    all_pokemon {\n      id\n      name\n      image_path\n      battle_type\n      attack_type\n    }\n}",e.next=3,fetch(O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n  {\n    all_pokemon {\n      id\n      name\n      image_path\n      battle_type\n      attack_type\n    }\n}",variables:{}})});case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return N.apply(this,arguments)}function N(){return(N=Object(f.a)(v.a.mark((function e(t){var c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="\n  {\n    pokemon(id: ".concat(t,") {\n      id\n      name\n      image_path\n      battle_type\n      attack_type\n      difficulty\n      ability_name\n      ability_description\n      ability_icon_path\n      offense\n      endurance\n      mobility\n      scoring\n      support\n      moves {\n        id\n        name\n        slot\n        icon_path\n        description\n        category\n        cooldown\n        unlock_level\n        upgrade_level\n        upgrade_effect\n        is_evolved_special_attack\n      }\n    evolutions {\n      name\n      stage\n      level_evolved_at\n    }\n    }\n  }"),e.next=3,fetch(O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:c})});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(f.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:t=e.sent,a(t.data.all_pokemon),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),c};var _=function(e){var t=e.pokemon;return Object(l.jsxs)("div",{className:"flex flex-col items-center p-2 m-1 bg-gray-900 border border-yellow-200 rounded-lg text-gray-200 capitalize",children:[Object(l.jsx)("p",{className:"font-bold",children:t.name}),Object(l.jsx)("div",{className:"w-7/12",children:Object(l.jsx)("img",{src:t.image_path,alt:"".concat(t.name," profile")})}),Object(l.jsxs)("p",{className:"text-sm",children:[t.battle_type," | ",t.attack_type]})]})};var C=function(){var e=w(),t=Object(n.useState)(!0),c=Object(b.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)(""),r=Object(b.a)(o,2),j=r[0],d=r[1],u=Object(n.useState)(""),x=Object(b.a)(u,2),v=x[0],f=x[1],h=Object(n.useState)(""),O=Object(b.a)(h,2),y=O[0],g=O[1];return Object(n.useEffect)((function(){setTimeout((function(){s(!1)}),1e3)}),[e]),Object(l.jsxs)(m,{children:[a&&Object(l.jsx)(p,{loading:a}),!a&&Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsxs)("div",{className:"flex justify-between items-center my-2",children:[Object(l.jsx)("input",{type:"search",placeholder:"Search Pokemon...",className:"px-2 py-1 w-3/5",onChange:function(e){return d(e.target.value)}}),Object(l.jsxs)("div",{className:"flex flex-col space-y-2",children:[Object(l.jsxs)("select",{onChange:function(e){return f(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"Melee/Ranged"}),Object(l.jsx)("option",{value:"melee",children:"Melee"}),Object(l.jsx)("option",{value:"ranged",children:"Ranged"})]}),Object(l.jsxs)("select",{onChange:function(e){return g(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"Battle Type"}),Object(l.jsx)("option",{value:"all-rounder",children:"All-Rounder"}),Object(l.jsx)("option",{value:"attacker",children:"Attacker"}),Object(l.jsx)("option",{value:"defender",children:"Defender"}),Object(l.jsx)("option",{value:"speedster",children:"Speedster"}),Object(l.jsx)("option",{value:"supporter",children:"Supporter"})]})]})]}),Object(l.jsx)("div",{className:"flex flex-wrap justify-around",children:e.filter((function(e){return!!e.name.toLowerCase().includes(j.toLowerCase())&&((!v||e.attack_type===v)&&(!y||e.battle_type===y))})).map((function(e){return Object(l.jsx)(i.b,{to:"/pokemon/".concat(e.id),style:{flexBasis:"45%"},children:Object(l.jsx)(_,{pokemon:e})},e.id)}))})]})]})};var S=function(e){var t=Object(n.useState)([]),c=Object(b.a)(t,2),a=c[0],s=c[1],o=function(){var e=Object(f.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t);case 3:c=e.sent,s(c.data.pokemon),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o(e)}),[e]),a};var P=function(e){var t=e.pokemon;return Object(l.jsxs)("div",{className:"flex space-x-3 px-3 py-2 bg-gray-600 shadow text-gray-300",children:[Object(l.jsx)("div",{className:"w-20 border border-yellow-200 rounded-tr-lg",children:Object(l.jsx)("img",{src:t.image_path,alt:""})}),Object(l.jsxs)("div",{className:"flex flex-col w-3/5 capitalize",children:[Object(l.jsx)("h2",{className:"font-bold text-2xl mb-2 mt-1",children:t.name}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"flex justify-between pt-2",children:[Object(l.jsx)("p",{children:t.battle_type}),Object(l.jsx)("p",{children:t.attack_type}),Object(l.jsx)("p",{children:t.difficulty})]})]})]})},I=c(18),T=c(20);var L=function(e){var t=e.name,c=e.description,n=e.type,a=e.cooldown,s=void 0===a?null:a,o=e.category,i=e.unlockLevel;return Object(l.jsxs)("div",{className:"flex flex-col w-full",children:[Object(l.jsxs)("div",{className:"flex justify-between w-full capitalize",children:[Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsx)("span",{className:"font-light text-sm",children:n}),Object(l.jsx)("p",{className:"font-bold text-lg",children:t})]}),i&&Object(l.jsxs)("p",{children:["Lv. ",i]}),Object(l.jsxs)("div",{className:"flex flex-col items-end",children:[Object(l.jsx)("p",{children:o}),Object(l.jsx)("p",{children:s})]})]}),Object(l.jsx)("div",{className:"mt-1",children:c})]})},A=c(17);var D=function(e){var t=e.moveName,c=e.moveType,n=void 0===c?null:c,a=e.unlockLevel,s=e.moveCategory,o=e.cooldown,i=e.moveDescription;return Object(l.jsxs)("div",{className:"mb-2 shadow-sm",children:[Object(l.jsxs)("div",{className:"flex justify-between w-full px-1",children:[Object(l.jsxs)("div",{className:"flex flex-col capitalize ml-1 py-",children:[n&&Object(l.jsx)("span",{className:"font-light text-sm",children:n}),Object(l.jsx)("p",{className:"font-bold text-lg",children:t})]}),a&&Object(l.jsxs)("p",{className:"flex items-center text-lg",children:[Object(l.jsx)(A.b,{className:"w-4"})," Lv. ",a]}),Object(l.jsxs)("div",{className:"flex flex-col items-end capitalize",children:[Object(l.jsx)("p",{children:s}),o&&Object(l.jsxs)("div",{className:"flex",children:[o," ",Object(l.jsx)(A.a,{className:"w-4 text-blue-500 ml-1"})]})]})]}),Object(l.jsx)("div",{className:"px-2 pb-2 text-sm",children:i})]})};var z=function(e){var t=e.moveIconPath,c=e.onClick,n=void 0===c?null:c,a=e.isActive,s=void 0!==a&&a,o=e.height,i=void 0===o?"60px":o,r=e.width,j=void 0===r?"60px":r,d={backgroundImage:t?"url(".concat(t,")"):null,backgroundSize:"cover",backgroundPosition:"center",width:j,height:i};return t||(d.backgroundColor="#6b7280"),Object(l.jsx)("div",{className:"cursor rounded-full ".concat(s?"border-2 border-yellow-500":null),style:d,onClick:n})};var B=function(e){var t=e.pokemonId,c=e.moves,a=e.type,s=Object(n.useState)("a"),o=Object(b.a)(s,2),i=o[0],r=o[1],j=a.replace(" ","_");return Object(l.jsxs)("div",{className:"flex flex-col w-full",children:[Object(l.jsx)(D,{moveName:c[0].name,moveType:a,cooldown:c[0].cooldown,moveCategory:c[0].category,moveDescription:c[0].description,unlockLevel:"1 or 3"}),Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsxs)("div",{className:"flex justify-around",children:[Object(l.jsx)("div",{className:"flex my-2",children:Object(l.jsx)(z,{moveName:c[1].name,moveIconPath:"".concat(h,"/images/pokemon/").concat(t,"/").concat(j,"a.png"),onClick:function(){return r("a")},isActive:"a"===i})}),Object(l.jsxs)("div",{className:"flex justify-center items-center text-lg",children:[Object(l.jsx)(A.b,{className:"w-5"})," Lv. ",c[1].unlock_level]}),Object(l.jsx)("div",{className:"flex",children:Object(l.jsx)(z,{moveName:c[2].name,moveIconPath:"".concat(h,"/images/pokemon/").concat(t,"/").concat(j,"b.png"),onClick:function(){return r("b")},isActive:"b"===i})})]}),"a"===i&&Object(l.jsx)(D,{moveName:c[1].name,moveType:a,cooldown:c[1].cooldown,moveCategory:c[1].category,moveDescription:c[1].description,moveIconPath:"".concat(h,"/images/pokemon/").concat(t,"/").concat(j,"a.png")}),"b"===i&&Object(l.jsx)(D,{moveName:c[2].name,moveType:a,cooldown:c[2].cooldown,moveCategory:c[2].category,moveDescription:c[2].description,moveIconPath:"".concat(h,"/images/pokemon/").concat(t,"/").concat(j,"b.png")})]})]})};var E=function(e){for(var t=e.pokemon,c=Object(n.useState)("ability"),a=Object(b.a)(c,2),s=a[0],o=a[1],i=Object(T.a)(t.moves),r={},j=[],d=[],m={},u=0;u<i.length;u++){var p=i[u];switch(p.slot){case"basic":r=Object(I.a)({},p);break;case"unite":m=Object(I.a)({},p);break;case"special 1":j=[].concat(Object(T.a)(j),[Object(I.a)({},p)]);break;case"special 2":d=[].concat(Object(T.a)(d),[Object(I.a)({},p)])}}var x=j.find((function(e){return 1===e.unlock_level})),v=d.find((function(e){return 3===e.unlock_level}));return Object(l.jsxs)("div",{className:"flex flex-col px-2 py-1 bg-gray-400 shadow",children:[Object(l.jsxs)("div",{className:"flex w-full justify-between p-1 mb-1 shadow-md",children:[Object(l.jsx)(z,{moveName:"".concat(t.ability_name," icon"),moveIconPath:t.ability_icon_path,onClick:function(){return o("ability")},isActive:"ability"===s}),Object(l.jsx)(z,{moveName:"Basic attack icon",moveIconPath:"".concat(h,"/images/icons/basic_attack.png"),onClick:function(){return o("basic")},isActive:"basic"===s}),Object(l.jsx)(z,{moveName:x.name,moveIconPath:"".concat(h,"/images/pokemon/").concat(t.id,"/special_1.png"),onClick:function(){return o("special_1")},isActive:"special_1"===s}),Object(l.jsx)(z,{moveName:v.name,moveIconPath:"".concat(h,"/images/pokemon/").concat(t.id,"/special_2.png"),onClick:function(){return o("special_2")},isActive:"special_2"===s}),Object(l.jsx)(z,{moveName:m.name,moveIconPath:"".concat(h,"/images/pokemon/").concat(t.id,"/unite.png"),onClick:function(){return o("unite")},isActive:"unite"===s})]}),Object(l.jsxs)("div",{className:"flex py-2",children:["ability"===s&&Object(l.jsx)(L,{name:t.ability_name,type:"ability",description:t.ability_description}),"basic"===s&&Object(l.jsx)(D,{moveName:r.name,moveType:"basic",cooldown:r.cooldown,moveCategory:r.category,moveDescription:r.description}),"special_1"===s&&Object(l.jsx)(B,{pokemonId:t.id,moves:j,type:"special 1"}),"special_2"===s&&Object(l.jsx)(B,{pokemonId:t.id,moves:d,type:"special 2"}),"unite"===s&&Object(l.jsx)(D,{moveName:m.name,moveType:"unite",cooldown:m.cooldown,moveCategory:m.category,moveDescription:m.description,unlockLevel:m.unlock_level})]})]})};var F=function(){var e=Object(r.f)().id,t=S(e),c=Object(n.useState)(!0),a=Object(b.a)(c,2),s=a[0],o=a[1];return Object(n.useEffect)((function(){setTimeout((function(){o(!1)}),1e3)}),[t]),Object(l.jsxs)(m,{children:[s&&Object(l.jsx)(p,{loading:s}),!s&&Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsx)(P,{pokemon:t}),Object(l.jsx)(E,{pokemon:t})]})]})};var J=function(){return Object(l.jsx)("div",{className:"bg-gray-500 min-h-screen flex flex-col justify-between antialiased",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/pokemon/:id",children:Object(l.jsx)(F,{})}),Object(l.jsx)(r.a,{path:"/",children:Object(l.jsx)(C,{})})]}),Object(l.jsx)(d,{})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(J,{})}),document.getElementById("root")),M()}},[[69,1,2]]]);
//# sourceMappingURL=main.381ead62.chunk.js.map