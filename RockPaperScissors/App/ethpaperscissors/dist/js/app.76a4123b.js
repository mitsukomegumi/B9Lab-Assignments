(function(e){function n(n){for(var o,r,s=n[0],c=n[1],u=n[2],l=0,p=[];l<s.length;l++)r=s[l],i[r]&&p.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(n);while(p.length)p.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,r=1;r<t.length;r++){var c=t[r];0!==i[c]&&(o=!1)}o&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},i={app:0},a=[];function r(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"07b90307"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=i[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=i[e]=[n,o]});n.push(t[2]=o);var a,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(e),a=function(n){u.onerror=u.onload=null,clearTimeout(l);var t=i[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");r.type=o,r.request=a,t[1](r)}i[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,c.appendChild(u)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var d=u;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("c21b"),i=t.n(o);i.a},"0fab":function(e,n,t){},3:function(e,n){},3091:function(e,n,t){"use strict";var o=t("5824"),i=t.n(o);i.a},4:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var o=t("2b0e"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n  ")],1),t("router-view")],1)},a=[],r=(t("034f"),t("2877")),s={},c=Object(r["a"])(s,i,a,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=t("8c4f"),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"paperscissors"},[t("metamask"),t("ul",[t("li",{on:{click:e.newGame}},[e._v("New Game")]),t("li",{on:{click:e.joinGame}},[e._v("Join Game")])]),e.pending||e.pendingCreateGame?t("ul",[t("li",{on:{click:e.rock}},[e._v("Rock")]),t("li",{on:{click:e.paper}},[e._v("Paper")]),t("li",{on:{click:e.scissors}},[e._v("Scissors")])]):e._e(),e.pendingCreateGame?t("p",[e._v("Created game! Here's your invite code: "+e._s(e.inviteCode))]):e._e(),e.loading?t("p",[e._v("Transaction "+e._s(e.txHash)+" submitted, waiting for confirmation.")]):e._e(),e.errored?t("p",[e._v("Error: "+e._s(e.error))]):e._e(),e.waiting?t("p",[e._v("Waiting for opponent's move...")]):e._e()],1)},p=[],m=(t("6b54"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"metamask-info"},[t("p",[e._v("Metamask: "+e._s(e.web3.isInjected))]),t("p",[e._v("Network: "+e._s(e.web3.networkId))]),t("p",[e._v("Account: "+e._s(e.web3.coinbase))]),t("p",[e._v("Balance: "+e._s(e.web3.balance))])])}),b=[],h={name:"metamask",computed:{web3:function(){return this.$store.state.web3}}},f=h,y=(t("3091"),Object(r["a"])(f,m,b,!1,null,"b0244868",null));y.options.__file="metamask.vue";var v=y.exports,g=(t("6983"),(void 0).$store.state.web3),w={name:"ethpaperscissors",beforeCreate:function(){console.log("registerWeb3 Action dispatched from ethpaperscissors.vue"),this.$store.dispatch("registerWeb3")},components:{metamask:v},data:function(){return{amount:null,move:null,test:"test",inviteCode:"",pending:!1,pendingCreateGame:!1,pendingJoinGame:!1,receipt:null,loading:!1,txHash:"",errored:!1,waiting:!1,won:!1,error:"",privateKey:""}},mounted:function(){console.log("dispatching getContractInstance"),this.$store.dispatch("getContractInstance")},methods:{newGame:function(e){if(this.errored=!1,1==this.pendingCreateGame||1==this.pending)return this.errored=!0,void(this.error=new Error("Must finish all pending games"));console.log("Initialized game"),console.log(this.$store.state.contractInstance()),this.$store.state.contractInstance().methods.newGame().send({from:this.$store.state.web3.coinbase,gas:3e5}).on("transactionHash",function(e){this.loading=!0,this.txHash=e}.bind(this)).on("receipt",function(e){return this.pendingCreateGame=!0,this.receipt=e,this.inviteCode=e.events.NewGame.returnValues.InviteCode,console.log(e),console.log(this.inviteCode),this.loading=!1,string(this.inviteCode)}.bind(this)).on("error",function(e){this.errored=!0,this.error=e,console.error(e)})},joinGame:function(e){if(this.errored=!1,1==this.pendingJoinGame||1==this.pending)return this.errored=!0,void(this.error=new Error("Must finish all pending games"));var n=prompt("Please Specify an Invite Code");this.inviteCode=n,this.privateKey=Math.random().toString(36).substring(7),console.log("Joining game"),this.joinGame=!0,console.log(this.$store.state.contractInstance()),this.$store.state.contractInstance().methods.joinGame(n).send({from:this.$store.state.web3.coinbase}).on("transactionHash",function(e){this.loading=!0,this.txHash=e}.bind(this)).on("receipt",function(e){this.receipt=e,this.pending=!0,this.loading=!1,console.log(e),console.log("Successfully joined game")}.bind(this)).on("error",console.error)},rock:function(e){this.errored=!1,1!=this.pending&&(this.errored=!0,this.error=new Error("Not currently in a game")),this.$store.state.contractInstance().methods.commitMove(this.inviteCode,g.sha3(1+this.privateKey)).send({from:this.$store.state.web3.coinbase}).on("transactionHash",function(e){this.loading=!0,this.txHash=e}.bind(this)).on("receipt",function(e){this.receipt=e,this.loading=!1,this.pending=!0,this.waiting=!0,console.log(e),console.log(e.events.PlayerJoinedGame.returnValues.Player)}.bind(this)).on("error",console.error)},paper:function(e){this.errored=!1,1!=this.pending&&(this.errored=!0,this.error=new Error("Not currently in a game")),this.$store.state.contractInstance().methods.commitMove(this.inviteCode,g.sha3(2+this.privateKey)).send({from:this.$store.state.web3.coinbase}).on("transactionHash",function(e){this.loading=!0,this.txHash=e}.bind(this)).on("receipt",function(e){this.receipt=e,this.loading=!1,this.pending=!0,this.waiting=!0,console.log(e),console.log(e.events.PlayerJoinedGame.returnValues.Player)}.bind(this)).on("error",console.error)},scissors:function(e){this.errored=!1,1==this.pending&&1==this.pendingCreateGame||(this.errored=!0,this.error=new Error("Not currently in a game")),this.$store.state.contractInstance().methods.commitMove(this.inviteCode,g.sha3(3+this.privateKey)).send({from:this.$store.state.web3.coinbase}).on("transactionHash",function(e){this.loading=!0,this.txHash=e}.bind(this)).on("receipt",function(e){this.receipt=e,this.loading=!1,this.pending=!0,this.waiting=!0,console.log(e),console.log(e.events.PlayerJoinedGame.returnValues.Player)}.bind(this)).on("error",console.error)}}},_=w,I=(t("ce2f"),Object(r["a"])(_,d,p,!1,null,"0eaf00e3",null));I.options.__file="ethpaperscissors.vue";var C=I.exports;o["a"].use(l["a"]);var x=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"ethpaperscissors",component:C},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}}]}),P=t("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var k=t("2f62"),j={web3:{isInjected:!1,web3Instance:null,networkId:null,coinbase:null,balance:null,error:null},contractInstance:null},M=j,G=(t("f751"),t("6314")),W=t.n(G),$=new Promise(function(e,n){var t=window.web3;if("undefined"!==typeof t){var o=new W.a(t.currentProvider);e({injectedWeb3:o.eth.net.isListening(),web3:function(){return o}})}else n(new Error("Unable to connect to Metamask"))}).then(function(e){return new Promise(function(n,t){e.web3().eth.net.getId(function(o,i){o?t(new Error("Unable to retrieve network ID")):(e=Object.assign({},e,{networkId:i}),n(e))})})}).then(function(e){return new Promise(function(n,t){e.web3().eth.getCoinbase(function(o,i){o?t(new Error("Unable to retrieve coinbase")):(e=Object.assign({},e,{coinbase:i}),n(e))})})}).then(function(e){return new Promise(function(n,t){e.web3().eth.getBalance(e.coinbase,function(o,i){o?t(new Error("Unable to retrieve balance for address: ".concat(e.coinbase))):(e=Object.assign({},e,{balance:i}),n(e))})})}),B=function(e){var n=window.web3,t=new W.a(n.currentProvider);setInterval(function(){if(t&&S.state.web3.web3Instance)if(t.eth.coinbase!==S.state.web3.coinbase){var e=t.eth.coinbase;e=t.eth.getCoinbase().then(function(n){e=n,t.eth.getBalance(n,function(n,t){n?console.log(n):S.dispatch("pollWeb3",{coinbase:e,balance:parseInt(t,10)})})})}else t.eth.getBalance(S.state.web3.coinbase,function(e,n){e?console.log(e):parseInt(n,10)!==S.state.web3.balance&&S.dispatch("pollWeb3",{coinbase:S.state.web3.coinbase,balance:n})})},500)},E=B,O="0x93a9bBdC482812D86F20351a4F642604e49A7B8c",H=[{constant:!1,inputs:[{name:"_inviteCode",type:"bytes32"}],name:"bet",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_inviteCode",type:"bytes32"}],name:"claimBet",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"newGame",outputs:[{name:"_inviteCode",type:"bytes32"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_inviteCode",type:"bytes32"},{name:"_address",type:"address"}],name:"winCount",outputs:[{name:"_winCount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_inviteCode",type:"bytes32"},{name:"_encryptedMove",type:"bytes32"}],name:"commitMove",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_inviteCode",type:"bytes32"}],name:"joinGame",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"Games",outputs:[{name:"Initialized",type:"bool"},{name:"InviteCode",type:"bytes32"},{name:"GameFinished",type:"bool"},{name:"Block",type:"uint256"},{name:"RoundsPlayed",type:"uint256"},{name:"Winner",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_inviteCode",type:"bytes32"},{name:"_move",type:"uint256"},{name:"_privateKey",type:"bytes32"}],name:"revealMove",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"FirstPlayer",type:"address"},{indexed:!1,name:"InviteCode",type:"bytes32"},{indexed:!1,name:"Block",type:"uint256"}],name:"NewGame",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"Player",type:"address"},{indexed:!1,name:"InviteCode",type:"bytes32"},{indexed:!1,name:"Block",type:"uint256"}],name:"PlayerJoinedGame",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"Player",type:"address"},{indexed:!1,name:"Move",type:"uint256"},{indexed:!1,name:"InviteCode",type:"bytes32"},{indexed:!1,name:"Block",type:"uint256"}],name:"PlayerMadeMove",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"Player",type:"address"},{indexed:!1,name:"Value",type:"uint256"},{indexed:!1,name:"InviteCode",type:"bytes32"},{indexed:!1,name:"Block",type:"uint256"}],name:"PlayerMadeBet",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"Player",type:"address"},{indexed:!1,name:"Value",type:"uint256"},{indexed:!1,name:"InviteCode",type:"bytes32"},{indexed:!1,name:"Block",type:"uint256"}],name:"PlayerClaimedBet",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"WinningPlayer",type:"address"},{indexed:!1,name:"LosingPlayer",type:"address"},{indexed:!1,name:"InviteCode",type:"bytes32"},{indexed:!1,name:"Block",type:"uint256"}],name:"PlayerWonRound",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"WinningPlayer",type:"address"},{indexed:!1,name:"LosingPlayer",type:"address"},{indexed:!1,name:"InviteCode",type:"bytes32"},{indexed:!1,name:"Block",type:"uint256"}],name:"PlayerWon",type:"event"}],J=new Promise(function(e){var n=new W.a(window.web3.currentProvider),t=new n.eth.Contract(H,O);e(t)}),N=J;o["a"].use(k["a"]);var S=new k["a"].Store({strict:!0,state:M,mutations:{registerWeb3Instance:function(e,n){console.log("registerWeb3instance Mutation being executed",n);var t=n,o=e.web3;o.coinbase=t.coinbase,o.networkId=t.networkId,o.balance=parseInt(t.balance,10),o.isInjected=t.injectedWeb3.then(function(e){o.isInjected=e},o.isInjected),o.web3Instance=t.web3,e.web3=o,E()},pollWeb3Instance:function(e,n){e.web3.coinbase=n.coinbase,e.web3.balance=parseInt(n.balance,10)},registerContractInstance:function(e,n){console.log("Ethpaperscissors contract instance: ",n),e.contractInstance=function(){return n}}},actions:{registerWeb3:function(e){var n=e.commit;console.log("registerWeb3 Action being executed"),$.then(function(e){console.log("committing result to registerWeb3Instance mutation"),n("registerWeb3Instance",e)}).catch(function(e){console.log("error in action registerWeb3",e)})},pollWeb3:function(e,n){var t=e.commit;t("pollWeb3Instance",n)},getContractInstance:function(e){var n=e.commit;N.then(function(e){n("registerContractInstance",e)}).catch(function(e){return console.log(e)})}}});o["a"].config.productionTip=!1,new o["a"]({router:x,store:S,render:function(e){return e(u)}}).$mount("#app")},5824:function(e,n,t){},6:function(e,n){},7:function(e,n){},c21b:function(e,n,t){},ce2f:function(e,n,t){"use strict";var o=t("0fab"),i=t.n(o);i.a}});
//# sourceMappingURL=app.76a4123b.js.map