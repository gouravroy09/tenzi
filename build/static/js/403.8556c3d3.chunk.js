"use strict";(self.webpackChunktenzi_ts=self.webpackChunktenzi_ts||[]).push([[403],{9403:function(t,r,e){e.r(r),e.d(r,{TokenDrop:function(){return h}});var n=e(4165),a=e(5861),c=e(5671),u=e(3144),s=e(7326),o=e(136),i=e(9388),p=e(8084),l=e(4456),f=e(8624),h=(e(518),e(5025),e(332),e(8455),e(6219),e(8834),e(5660),e(1303),e(1497),e(9242),e(4317),e(3670),e(9120),e(7604),e(8187),e(9362),e(9190),e(4730),e(6250),e(5725),e(8730),e(8507),e(8398),e(2090),e(6841),e(9561),e(580),e(246),e(4253),e(1559),e(553),e(26),e(9392),e(9526),e(4601),e(6878),e(7033),e(3058),e(5158),e(7761),e(583),e(2355),e(4194),e(1121),e(8613),e(2484),e(8435),e(4255),e(8528),e(2555),e(8281),e(2037),e(7437),e(9189),e(737),e(8262),e(4161),e(266),e(8839),e(1375),e(3320),e(5815),e(2378),e(5173),e(6315),function(t){(0,o.Z)(e,t);var r=(0,i.Z)(e);function e(t,n,a){var u;(0,c.Z)(this,e);var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,f=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new l.cz(t,n,i,o);return u=r.call(this,h,a,f),(0,p._)((0,s.Z)(u),"abi",void 0),(0,p._)((0,s.Z)(u),"metadata",void 0),(0,p._)((0,s.Z)(u),"roles",void 0),(0,p._)((0,s.Z)(u),"encoder",void 0),(0,p._)((0,s.Z)(u),"estimator",void 0),(0,p._)((0,s.Z)(u),"sales",void 0),(0,p._)((0,s.Z)(u),"platformFees",void 0),(0,p._)((0,s.Z)(u),"events",void 0),(0,p._)((0,s.Z)(u),"claimConditions",void 0),(0,p._)((0,s.Z)(u),"interceptor",void 0),u.abi=i,u.metadata=new l.ab(u.contractWrapper,l.c$,u.storage),u.roles=new l.ac(u.contractWrapper,e.contractRoles),u.encoder=new l.aa(u.contractWrapper),u.estimator=new l.aL(u.contractWrapper),u.events=new l.aM(u.contractWrapper),u.sales=new l.ae(u.contractWrapper),u.platformFees=new l.aO(u.contractWrapper),u.interceptor=new l.aN(u.contractWrapper),u.claimConditions=new l.ag(u.contractWrapper,u.metadata,u.storage),u}return(0,u.Z)(e,[{key:"getVoteBalance",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.contractWrapper.getSignerAddress();case 3:return t.t1=t.sent,t.next=6,t.t0.getVoteBalanceOf.call(t.t0,t.t1);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getVoteBalanceOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this.erc20,t.next=3,this.contractWrapper.readContract.getVotes(r);case 3:return t.t1=t.sent,t.next=6,t.t0.getValue.call(t.t0,t.t1);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getDelegation",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.contractWrapper.getSignerAddress();case 3:return t.t1=t.sent,t.next=6,t.t0.getDelegationOf.call(t.t0,t.t1);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getDelegationOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.delegates(r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.hasRole((0,l.br)("transfer"),f.d);case 2:return r=t.sent,t.abrupt("return",!r);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"claim",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var e,a=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(a.length>1&&void 0!==a[1])||a[1],t.t0=this,t.next=4,this.contractWrapper.getSignerAddress();case 4:return t.t1=t.sent,t.t2=r,t.t3=e,t.abrupt("return",t.t0.claimTo.call(t.t0,t.t1,t.t2,t.t3));case 8:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"claimTo",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){var a,c=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=!(c.length>2&&void 0!==c[2])||c[2],t.abrupt("return",this.erc20.claimTo(r,e,{checkERC20Allowance:a}));case 2:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"delegateTo",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.sendTransaction("delegate",[r]);case 2:return t.t0=t.sent,t.abrupt("return",{receipt:t.t0});case 4:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"burnTokens",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc20.burn(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"burnFrom",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc20.burnFrom(r,e));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var e,a,c,u,s=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=s.length,c=new Array(a>1?a-1:0),u=1;u<a;u++)c[u-1]=s[u];return t.abrupt("return",(e=this.contractWrapper).call.apply(e,[r].concat(c)));case 2:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()}]),e}(l.ap));(0,p._)(h,"contractRoles",["admin","transfer"])}}]);
//# sourceMappingURL=403.8556c3d3.chunk.js.map