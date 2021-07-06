(this["webpackJsonppokemon-unite-ui-react"]=this["webpackJsonppokemon-unite-ui-react"]||[]).push([[0],{32:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(26),s=n.n(o),i=(n(32),n(11)),r=n(4),l=n(1);var d=function(){return Object(l.jsxs)("header",{className:"flex py-2 px-2 bg-gray-700 shadow border-b border-gray-500 text-gray-200 text-xl",children:[Object(l.jsx)("div",{className:"pr-5",children:"Nav"}),Object(l.jsx)(i.b,{to:"/",children:"Pokemon"})]})};var j=function(){return Object(l.jsx)("div",{className:"py-1 px-2 text-center bg-gray-700 shadow text-gray-200 text-sm",children:"Pok\xe9mon images & names \xa9 1995-2021 Nintendo/Game Freak."})},u=n(6);var p=function(e){var t=e.children;return Object(l.jsx)("div",{className:"flex-1",children:t})},m=n(27);var b=function(e){var t=e.loading;return Object(l.jsxs)("div",{className:"flex flex-col items-center",children:[Object(l.jsx)("p",{className:"text-lg",children:"Loading..."}),Object(l.jsx)(m.BarLoader,{css:"display: block;",loading:t,height:8})]})},v=n(10),x=n.n(v),f=n(12),h="https://pokemon-unite-api.trevor-builds-apps.com",O="".concat(h,"/api");function g(){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"\n  {\n    all_pokemon {\n      id\n      name\n      battle_type\n      attack_type\n    }\n}",e.next=3,fetch(O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n  {\n    all_pokemon {\n      id\n      name\n      battle_type\n      attack_type\n    }\n}",variables:{}})});case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return N.apply(this,arguments)}function N(){return(N=Object(f.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n  {\n    pokemon(id: ".concat(t,") {\n      id\n      name\n      battle_type\n      attack_type\n      difficulty\n      ability_name\n      ability_description\n      offense\n      endurance\n      mobility\n      scoring\n      support\n      moves {\n        id\n        name\n        slot\n        description\n        category\n        cooldown\n        unlock_level\n        upgrade_level\n        upgrade_effect\n        is_evolved_special_attack\n      }\n    evolutions {\n      name\n      stage\n      level_evolved_at\n    }\n    }\n  }"),e.next=3,fetch(O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:n})});case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:t=e.sent,a(t.data.all_pokemon),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),n};var _=function(e){var t=e.pokemon;return Object(l.jsxs)("div",{className:"flex flex-col items-center p-2 m-1 bg-".concat(t.battle_type," bg-pokemon-profile border border-yellow-200 rounded-tr-lg text-gray-200 capitalize"),children:[Object(l.jsx)("p",{className:"font-bold",children:t.name}),Object(l.jsx)("div",{className:"w-7/12",children:Object(l.jsx)("img",{src:"".concat(h,"/images/pokemon/").concat(t.id,"/profile.png"),alt:"".concat(t.name," profile")})}),Object(l.jsxs)("p",{className:"text-sm",children:[t.battle_type," | ",t.attack_type]})]})};var C=function(){var e=w(),t=Object(c.useState)(!0),n=Object(u.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),d=r[0],j=r[1],m=Object(c.useState)(""),v=Object(u.a)(m,2),x=v[0],f=v[1],h=Object(c.useState)(""),O=Object(u.a)(h,2),g=O[0],y=O[1];return Object(c.useEffect)((function(){setTimeout((function(){o(!1)}),1e3)}),[e]),Object(l.jsxs)(p,{children:[a&&Object(l.jsx)(b,{loading:a}),!a&&Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsxs)("div",{className:"flex justify-between items-center my-2",children:[Object(l.jsx)("input",{type:"search",placeholder:"Search Pokemon...",className:"px-2 py-1 w-3/5",onChange:function(e){return j(e.target.value)}}),Object(l.jsxs)("div",{className:"flex flex-col space-y-2",children:[Object(l.jsxs)("select",{onChange:function(e){return f(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"Melee/Ranged"}),Object(l.jsx)("option",{value:"melee",children:"Melee"}),Object(l.jsx)("option",{value:"ranged",children:"Ranged"})]}),Object(l.jsxs)("select",{onChange:function(e){return y(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"Battle Type"}),Object(l.jsx)("option",{value:"all-rounder",children:"All-Rounder"}),Object(l.jsx)("option",{value:"attacker",children:"Attacker"}),Object(l.jsx)("option",{value:"defender",children:"Defender"}),Object(l.jsx)("option",{value:"speedster",children:"Speedster"}),Object(l.jsx)("option",{value:"supporter",children:"Supporter"})]})]})]}),Object(l.jsx)("div",{className:"flex flex-wrap justify-around",children:e.filter((function(e){return!!e.name.toLowerCase().includes(d.toLowerCase())&&((!x||e.attack_type===x)&&(!g||e.battle_type===g))})).map((function(e){return Object(l.jsx)(i.b,{to:"/pokemon/".concat(e.id),style:{flexBasis:"45%"},children:Object(l.jsx)(_,{pokemon:e})},e.id)}))})]})]})};var S=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],o=n[1],s=function(){var e=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t);case 3:n=e.sent,o(n.data.pokemon),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s(e)}),[e]),a},P=n(13);var I=function(e){var t=e.evo,n=e.pokemonId;return Object(l.jsx)("div",{className:"flex flex-col capitalize",children:Object(l.jsx)("img",{style:{maxWidth:"100px"},src:"".concat(h,"/images/pokemon/").concat(n,"/stage_").concat(t.stage,".png"),alt:"Pokemon stage"})})};var L=function(e){var t=e.pokemonId,n=e.evolutions;return console.log(n),Object(l.jsxs)("div",{className:"flex flex-col py-1 bg-gray-600 text-gray-300",children:[Object(l.jsx)("p",{className:"font-bold text-lg px-3",children:"Evolutions"}),Object(l.jsxs)("div",{className:"flex justify-center space-x-3",children:[!n.length&&Object(l.jsx)("p",{className:"py-1 pl-1 text-sm",children:"Pokemon doesn't have evolutions"}),n.map((function(e){return Object(l.jsxs)("div",{className:"flex items-center",children:[Object(l.jsx)(I,{pokemonId:t,evo:e}),e.level_evolved_at&&Object(l.jsxs)("div",{children:[Object(l.jsx)(P.a,{className:"h-8"}),Object(l.jsxs)("p",{className:"font-bold text-center",children:["Lv ",e.level_evolved_at]})]})]},"evo_stage_".concat(e.stage))}))]})]})};var T=function(e){var t=e.pokemon;return Object(l.jsxs)("div",{className:"flex space-x-3 px-3 py-2 bg-".concat(t.battle_type," bg-pokemon-profile shadow text-gray-300"),children:[Object(l.jsx)("div",{className:"w-20 border border-yellow-200 rounded-tr-lg",children:Object(l.jsx)("img",{src:"".concat(h,"/images/pokemon/").concat(t.id,"/profile.png"),alt:""})}),Object(l.jsxs)("div",{className:"flex flex-col w-3/5 capitalize",children:[Object(l.jsx)("h2",{className:"font-bold text-2xl mb-2 mt-1",children:t.name}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"flex justify-between pt-2",children:[Object(l.jsx)("p",{children:t.battle_type}),Object(l.jsx)("p",{children:t.attack_type}),Object(l.jsx)("p",{children:t.difficulty})]})]})]})},A=n(18),E=n(20);var D=function(e){var t=e.moveName,n=e.moveType,c=void 0===n?null:n,a=e.unlockLevel,o=e.moveCategory,s=e.cooldown,i=e.moveDescription,r=e.upgradeLevel,d=e.upgradeEffect;return Object(l.jsxs)("div",{className:"mb-2 shadow-sm",children:[Object(l.jsxs)("div",{className:"flex justify-between w-full px-1",children:[Object(l.jsxs)("div",{className:"flex flex-col capitalize ml-1 py-",children:[c&&Object(l.jsx)("span",{className:"font-light text-sm",children:c}),Object(l.jsx)("p",{className:"font-bold text-lg",children:t})]}),a&&Object(l.jsxs)("p",{className:"flex items-center text-lg",children:[Object(l.jsx)(P.c,{className:"w-4"})," Lv. ",a]}),Object(l.jsxs)("div",{className:"flex flex-col items-end capitalize",children:[Object(l.jsx)("p",{children:o}),s&&Object(l.jsxs)("div",{className:"flex",children:[s," ",Object(l.jsx)(P.b,{className:"w-4 text-blue-500 ml-1"})]})]})]}),Object(l.jsxs)("div",{className:"px-2 pb-2 text-sm",children:[Object(l.jsx)("p",{children:i}),r&&Object(l.jsxs)("div",{className:"mt-2",children:[Object(l.jsxs)("div",{className:"flex font-bold",children:["Lv. ",r,"  Upgrade effect"]}),d]})]})]})};var W=function(e){var t=e.moveIconPath,n=e.onClick,c=void 0===n?null:n,a=e.isActive,o=void 0!==a&&a,s=e.height,i=void 0===s?"60px":s,r=e.width,d=void 0===r?"60px":r,j={backgroundImage:t?"url(".concat(t,")"):null,backgroundSize:"cover",backgroundPosition:"center",width:d,height:i};return t||(j.backgroundColor="#6b7280"),Object(l.jsx)("div",{className:"cursor rounded-full ".concat(o?"border-2 border-yellow-500":null),style:j,onClick:c})};var z=function(e){var t=e.pokemonId,n=e.moves,a=e.type,o=Object(c.useState)("a"),s=Object(u.a)(o,2),i=s[0],r=s[1],d=a.replace(" ","_");return Object(l.jsxs)("div",{className:"flex flex-col w-full",children:[Object(l.jsx)(D,{moveName:n[0].name,moveType:a,cooldown:n[0].cooldown,moveCategory:n[0].category,moveDescription:n[0].description,unlockLevel:"1 or 3"}),Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsxs)("div",{className:"flex justify-around",children:[Object(l.jsx)("div",{className:"flex my-2",children:Object(l.jsx)(W,{moveName:n[1].name,moveIconPath:"".concat(h,"/images/pokemon/").concat(t,"/").concat(d,"a.png"),onClick:function(){return r("a")},isActive:"a"===i})}),Object(l.jsxs)("div",{className:"flex justify-center items-center text-lg",children:[Object(l.jsx)(P.c,{className:"w-5"})," Lv. ",n[1].unlock_level]}),Object(l.jsx)("div",{className:"flex",children:Object(l.jsx)(W,{moveName:n[2].name,moveIconPath:"".concat(h,"/images/pokemon/").concat(t,"/").concat(d,"b.png"),onClick:function(){return r("b")},isActive:"b"===i})})]}),"a"===i&&Object(l.jsx)(D,{moveName:n[1].name,moveType:a,cooldown:n[1].cooldown,moveCategory:n[1].category,moveDescription:n[1].description,moveIconPath:"".concat(h,"/images/pokemon/").concat(t,"/").concat(d,"a.png"),upgradeLevel:n[1].upgrade_level,upgradeEffect:n[1].upgrade_effect}),"b"===i&&Object(l.jsx)(D,{moveName:n[2].name,moveType:a,cooldown:n[2].cooldown,moveCategory:n[2].category,moveDescription:n[2].description,moveIconPath:"".concat(h,"/images/pokemon/").concat(t,"/").concat(d,"b.png"),upgradeLevel:n[2].upgrade_level,upgradeEffect:n[2].upgrade_effect})]})]})};var B=function(e){for(var t=e.pokemon,n=Object(c.useState)("ability"),a=Object(u.a)(n,2),o=a[0],s=a[1],i=Object(E.a)(t.moves),r={},d=[],j=[],p={},m=0;m<i.length;m++){var b=i[m];switch(b.slot){case"basic":r=Object(A.a)({},b);break;case"unite":p=Object(A.a)({},b);break;case"special 1":d=[].concat(Object(E.a)(d),[Object(A.a)({},b)]);break;case"special 2":j=[].concat(Object(E.a)(j),[Object(A.a)({},b)])}}var v=d.find((function(e){return 1===e.unlock_level})),x=j.find((function(e){return 3===e.unlock_level}));return Object(l.jsxs)("div",{className:"flex flex-col px-1 py-1 bg-gray-400 shadow-inner",children:[Object(l.jsxs)("div",{className:"flex w-full justify-between p-1 shadow-md",children:[Object(l.jsx)(W,{moveName:"".concat(t.ability_name," icon"),moveIconPath:"".concat(h,"/images/pokemon/").concat(t.id,"/ability.png"),onClick:function(){return s("ability")},isActive:"ability"===o}),Object(l.jsx)(W,{moveName:"Basic attack icon",moveIconPath:"".concat(h,"/images/icons/basic_attack.png"),onClick:function(){return s("basic")},isActive:"basic"===o}),Object(l.jsx)(W,{moveName:v.name,moveIconPath:"".concat(h,"/images/pokemon/").concat(t.id,"/special_1.png"),onClick:function(){return s("special_1")},isActive:"special_1"===o}),Object(l.jsx)(W,{moveName:x.name,moveIconPath:"".concat(h,"/images/pokemon/").concat(t.id,"/special_2.png"),onClick:function(){return s("special_2")},isActive:"special_2"===o}),Object(l.jsx)(W,{moveName:p.name,moveIconPath:"".concat(h,"/images/pokemon/").concat(t.id,"/unite.png"),onClick:function(){return s("unite")},isActive:"unite"===o})]}),Object(l.jsxs)("div",{className:"flex pt-2",children:["ability"===o&&Object(l.jsx)(D,{moveName:t.ability_name,moveType:"ability",moveDescription:t.ability_description}),"basic"===o&&Object(l.jsx)(D,{moveName:r.name,moveType:"basic",cooldown:r.cooldown,moveCategory:r.category,moveDescription:r.description}),"special_1"===o&&Object(l.jsx)(z,{pokemonId:t.id,moves:d,type:"special 1"}),"special_2"===o&&Object(l.jsx)(z,{pokemonId:t.id,moves:j,type:"special 2"}),"unite"===o&&Object(l.jsx)(D,{moveName:p.name,moveType:"unite",cooldown:p.cooldown,moveCategory:p.category,moveDescription:p.description,unlockLevel:p.unlock_level})]})]})};var V=function(e){var t=e.offense,n=e.endurance,c=e.mobility,a=e.scoring,o=e.support;return Object(l.jsxs)("div",{className:"flex justify-between py-2 bg-gray-600 text-gray-300 shadow-inner",children:[Object(l.jsx)(F,{statName:"offense",statValue:t}),Object(l.jsx)(F,{statName:"endurance",statValue:n}),Object(l.jsx)(F,{statName:"mobility",statValue:c}),Object(l.jsx)(F,{statName:"scoring",statValue:a}),Object(l.jsx)(F,{statName:"support",statValue:o})]})};function F(e){var t,n=e.statName,c=e.statValue;return Object(l.jsxs)("p",{className:"flex flex-col items-center capitalize shadow px-2",children:[Object(l.jsx)("span",{children:n}),Object(l.jsx)("span",{className:"font-bold ".concat((t=c,t<4?"text-red-400":t>=4&&t<=7?"text-blue-400":"text-green-400")),children:c})]})}var J=function(){var e=Object(r.f)().id,t=S(e),n=Object(c.useState)(!0),a=Object(u.a)(n,2),o=a[0],s=a[1];return Object(c.useEffect)((function(){setTimeout((function(){s(!1)}),1e3)}),[t]),Object(l.jsxs)(p,{children:[o&&Object(l.jsx)(b,{loading:o}),!o&&Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsx)(T,{pokemon:t}),Object(l.jsx)(V,{offense:t.offense,endurance:t.endurance,mobility:t.mobility,scoring:t.scoring,support:t.support}),Object(l.jsx)(B,{pokemon:t}),Object(l.jsx)(L,{pokemonId:t.id,evolutions:t.evolutions})]})]})};var R=function(){return Object(l.jsx)("div",{className:"bg-gray-500 min-h-screen flex flex-col justify-between antialiased",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/pokemon/:id",children:Object(l.jsx)(J,{})}),Object(l.jsx)(r.a,{path:"/",children:Object(l.jsx)(C,{})})]}),Object(l.jsx)(j,{})]})})},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pokemon-unite-ui-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pokemon-unite-ui-react","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):M(t,e)}))}}(),q()}},[[69,1,2]]]);
//# sourceMappingURL=main.c34e4858.chunk.js.map