"use strict";(self.webpackChunktenzi_ts=self.webpackChunktenzi_ts||[]).push([[537],{7537:function(r,t,n){n.r(t),n.d(t,{Edition:function(){return l}});var e=n(4165),a=n(5861),c=n(5671),u=n(3144),i=n(7326),o=n(136),s=n(9388),p=n(8084),f=n(4456),h=n(8624),l=(n(518),n(5025),n(332),n(8455),n(6219),n(8834),n(5660),n(1303),n(1497),n(9242),n(4317),n(3670),n(9120),n(7604),n(8187),n(9362),n(9190),n(4730),n(6250),n(5725),n(8730),n(8507),n(8398),n(2090),n(6841),n(9561),n(580),n(246),n(4253),n(1559),n(553),n(26),n(9392),n(9526),n(4601),n(6878),n(7033),n(3058),n(5158),n(7761),n(583),n(2355),n(4194),n(1121),n(8613),n(2484),n(8435),n(4255),n(8528),n(2555),n(8281),n(2037),n(7437),n(9189),n(737),n(8262),n(4161),n(266),n(8839),n(1375),n(3320),n(5815),n(2378),n(5173),n(6315),function(r){(0,o.Z)(n,r);var t=(0,s.Z)(n);function n(r,e,a){var u;(0,c.Z)(this,n);var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.cz(r,e,s,o);return u=t.call(this,l,a,h),(0,p._)((0,i.Z)(u),"abi",void 0),(0,p._)((0,i.Z)(u),"metadata",void 0),(0,p._)((0,i.Z)(u),"roles",void 0),(0,p._)((0,i.Z)(u),"sales",void 0),(0,p._)((0,i.Z)(u),"platformFees",void 0),(0,p._)((0,i.Z)(u),"encoder",void 0),(0,p._)((0,i.Z)(u),"estimator",void 0),(0,p._)((0,i.Z)(u),"events",void 0),(0,p._)((0,i.Z)(u),"royalties",void 0),(0,p._)((0,i.Z)(u),"signature",void 0),(0,p._)((0,i.Z)(u),"interceptor",void 0),(0,p._)((0,i.Z)(u),"erc1155",void 0),(0,p._)((0,i.Z)(u),"owner",void 0),u.abi=s,u.metadata=new f.ab(u.contractWrapper,f.cB,u.storage),u.roles=new f.ac(u.contractWrapper,n.contractRoles),u.royalties=new f.ad(u.contractWrapper,u.metadata),u.sales=new f.ae(u.contractWrapper),u.encoder=new f.aa(u.contractWrapper),u.estimator=new f.aL(u.contractWrapper),u.events=new f.aM(u.contractWrapper),u.platformFees=new f.aO(u.contractWrapper),u.interceptor=new f.aN(u.contractWrapper),u.signature=new f.aE(u.contractWrapper,u.storage,u.roles),u.erc1155=new f.aA(u.contractWrapper,u.storage,h),u.owner=new f.aQ(u.contractWrapper),u}return(0,u.Z)(n,[{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getAll",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getAll(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getOwned",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getOwned(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getTotalCount",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.totalCount());case 1:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(){var t;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.readContract.hasRole((0,f.br)("transfer"),h.d);case 2:return t=r.sent,r.abrupt("return",!t);case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"mint",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mint(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"mintTo",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mintTo(t,n));case 1:case"end":return r.stop()}}),r,this)})));return function(t,n){return r.apply(this,arguments)}}()},{key:"getMintTransaction",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getMintTransaction(t,n));case 1:case"end":return r.stop()}}),r,this)})));return function(t,n){return r.apply(this,arguments)}}()},{key:"mintAdditionalSupply",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mintAdditionalSupply(t,n));case 1:case"end":return r.stop()}}),r,this)})));return function(t,n){return r.apply(this,arguments)}}()},{key:"mintAdditionalSupplyTo",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n,a){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mintAdditionalSupplyTo(t,n,a));case 1:case"end":return r.stop()}}),r,this)})));return function(t,n,e){return r.apply(this,arguments)}}()},{key:"mintBatch",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mintBatch(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"mintBatchTo",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.mintBatchTo(t,n));case 1:case"end":return r.stop()}}),r,this)})));return function(t,n){return r.apply(this,arguments)}}()},{key:"burn",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.burn(t,n));case 1:case"end":return r.stop()}}),r,this)})));return function(t,n){return r.apply(this,arguments)}}()},{key:"call",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){var n,a,c,u,i=arguments;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(a=i.length,c=new Array(a>1?a-1:0),u=1;u<a;u++)c[u-1]=i[u];return r.abrupt("return",(n=this.contractWrapper).call.apply(n,[t].concat(c)));case 2:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()}]),n}(f.aH));(0,p._)(l,"contractRoles",["admin","minter","transfer"])}}]);
//# sourceMappingURL=537.f5d8a535.chunk.js.map