(function(e){function t(t){for(var r,a,i=t[0],u=t[1],l=t[2],f=0,h=[];f<i.length;f++)a=i[f],n[a]&&h.push(n[a][0]),n[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],r=!0,i=1;i<s.length;i++){var u=s[i];0!==n[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var r={},n={app:0},o=[];function a(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=r,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var r=s("64a9"),n=s.n(r);n.a},"25e0":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"container"},[this.numberOfQuestions>=0?s("div",{staticClass:"question"},[s("h1",[e._v("Pick the "),s("b",{style:"color:"+e.answers[e.correctAnsIndex].value},[e._v(e._s(e.answers[e.correctAnsIndex].value))]),e._v(" word from the choices below ")]),s("div",{staticClass:"timer"},[e._v("00:0"+e._s(e.time))]),s("div",{staticClass:"timer"},[e._v("Score :: "+e._s(e.score))])]):s("div",{staticClass:"question"},[e._v("\n      "+e._s(e.result)+"\n    ")]),s("div",{staticClass:"answers"},[s("div",{class:"answer "+e.answers[0].color+e.getDarKClass(e.answers[0].color)},[s("h1",[e._v("1")]),e._v("\n        "+e._s(e.answers[0].value)+"\n      ")]),s("div",{class:"answer "+e.answers[1].color+e.getDarKClass(e.answers[1].color)},[s("h1",[e._v("2")]),e._v("\n        "+e._s(e.answers[1].value)+"\n      ")]),s("div",{class:"answer "+e.answers[2].color+e.getDarKClass(e.answers[2].color)},[s("h1",[e._v("3")]),e._v("\n        "+e._s(e.answers[2].value)+"\n      ")]),s("div",{class:"answer "+e.answers[3].color+e.getDarKClass(e.answers[3].color)},[s("h1",[e._v("4")]),e._v("\n        "+e._s(e.answers[3].value)+"\n      ")])])])])},n=[],o=(s("c5f6"),s("6762"),s("2fdb"),s("5118")),a={name:"app",components:{},data:function(){return{QUESTION_TIME:3,shuffleColors:!0,result:"",totalNumberOfQuestions:20,numberOfQuestions:20,score:0,time:0,timeInterval:null,darkColors:["red","black","green","blue"],colors:[{color:"red",value:"red"},{color:"green",value:"green"},{color:"yellow",value:"yellow"},{color:"pink",value:"pink"},{color:"black",value:"black"}],answers:[{color:"red",value:"red"},{color:"green",value:"green"},{color:"yellow",value:"yellow"},{color:"pink",value:"pink"}],correctAnsIndex:2,keys:1}},methods:{getScore:function(){return this.score},getNumberOfQuestions:function(){return this.totalNumberOfQuestions},answer:function(e){e==this.correctAnsIndex&&this.score++,this.getQuestion(),this.time=this.QUESTION_TIME},getDarKClass:function(e){return-1==this.darkColors.indexOf(e)?"":" dark"},count:function(){return this.numberOfQuestions<0?(this.result="You have answerd "+this.score+" out of "+this.totalNumberOfQuestions,Object(o["clearInterval"])(this.timeInterval),this.time=0,document.onkeypress=null,void this.$emit("finished")):this.time<=0?(this.time=this.QUESTION_TIME,void this.getQuestion()):void this.time--},shuffleArray:function(e){for(var t=e,s=t.length-1;s>0;s--){var r=Math.floor(Math.random()*(s+1)),n=t[s];t[s]=t[r],t[r]=n}return t},getQuestion:function(){if(this.answers=this.shuffleArray(this.colors).slice(0,4),this.correctAnsIndex=Math.floor(Math.random()*this.answers.length),this.numberOfQuestions--,this.shuffleColors){for(var e=0;e<this.answers.length;e++)if(0!==e){var t=this.answers[e-1].value;void 0!==t&&(this.answers[e-1].value=this.answers[e].value,this.answers[e].value=t)}else{var s=this.answers[e+1].value;this.answers[e+1].value=this.answers[0].value,this.answers[0].value=s}while(this.answers[this.correctAnsIndex].value===this.answers[this.correctAnsIndex].color)this.correctAnsIndex=Math.floor(Math.random()*this.answers.length)}},startTimer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;this.setUpKeys(),this.shuffleColors=e,this.score=0,this.numberOfQuestions=t,this.totalNumberOfQuestions=t,this.timeInterval=Object(o["setInterval"])(this.count,1e3)},setUpKeys:function(){var e=this;document.onkeypress=function(t){[1,2,3,4].includes(Number(t.key))&&e.answer(Number(t.key)-1)}}},mounted:function(){}},i=a,u=(s("68e4"),s("2877")),l=Object(u["a"])(i,r,n,!1,null,null,null);t["default"]=l.exports},"3dfd":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("game",{ref:"game",class:e.start?"":"hide",on:{finished:e.endGame}}),s("div",{class:e.start?"hide":""},[s("h1",[e._v("Color game")]),s("label",{attrs:{for:"number"}},[e._v("Number of question")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.numberOfQuestions,expression:"numberOfQuestions"}],attrs:{type:"number",name:"number"},domProps:{value:e.numberOfQuestions},on:{input:function(t){t.target.composing||(e.numberOfQuestions=t.target.value)}}}),s("br"),s("label",{attrs:{for:"shuffle"}},[e._v("shuffle colors")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.withShuffle,expression:"withShuffle"}],attrs:{type:"checkbox",name:"shuffle"},domProps:{checked:Array.isArray(e.withShuffle)?e._i(e.withShuffle,null)>-1:e.withShuffle},on:{change:function(t){var s=e.withShuffle,r=t.target,n=!!r.checked;if(Array.isArray(s)){var o=null,a=e._i(s,o);r.checked?a<0&&(e.withShuffle=s.concat([o])):a>-1&&(e.withShuffle=s.slice(0,a).concat(s.slice(a+1)))}else e.withShuffle=n}}}),s("br"),s("button",{staticClass:"btn",on:{click:e.startGame}},[e._v("start")]),s("div",{staticClass:"table-container"},[s("table",{staticClass:"table"},[e._m(0),e._l(e.records,function(t,r){return s("tr",{key:r},[s("td",[e._v(e._s(r))]),s("td",[e._v("\n            "+e._s(t.score)+"\n          ")]),s("td",[e._v("\n            "+e._s(t.totalQuestion)+"\n          ")])])})],2)])])],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("th",[e._v("#")]),s("th",[e._v("Score")]),s("th",[e._v("Total questions")])])}],o={data:function(){return{start:!1,numberOfQuestions:20,withShuffle:!1,records:[]}},methods:{startGame:function(){this.$refs.game.startTimer(this.withShuffle,this.numberOfQuestions),this.start=!0},endGame:function(){this.start=!1;var e={score:this.$refs.game.getScore(),totalQuestion:this.$refs.game.getNumberOfQuestions()};this.records.push(e)}}},a=o,i=(s("034f"),s("2877")),u=Object(i["a"])(a,r,n,!1,null,null,null);t["default"]=u.exports},4366:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var r=s("2b0e"),n=s("3dfd");r["a"].config.productionTip=!1,r["a"].component("game",s("25e0").default),r["a"].component("app",s("3dfd").default),new r["a"]({render:function(e){return e(n["default"])}}).$mount("#app")},"64a9":function(e,t,s){},"68e4":function(e,t,s){"use strict";var r=s("4366"),n=s.n(r);n.a}});
//# sourceMappingURL=app.b1f3435d.js.map