(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['express-auth-middle'] = factory());
}(this, (function () { 'use strict';

var __cov_HVaCZ1aO7lbgwEOamUxPBQ = (Function('return this'))();
if (!__cov_HVaCZ1aO7lbgwEOamUxPBQ.__coverage__) { __cov_HVaCZ1aO7lbgwEOamUxPBQ.__coverage__ = {}; }
__cov_HVaCZ1aO7lbgwEOamUxPBQ = __cov_HVaCZ1aO7lbgwEOamUxPBQ.__coverage__;
if (!(__cov_HVaCZ1aO7lbgwEOamUxPBQ['/home/carmichael/code/express-auth-middle/lib/index.js'])) {
   __cov_HVaCZ1aO7lbgwEOamUxPBQ['/home/carmichael/code/express-auth-middle/lib/index.js'] = {"path":"/home/carmichael/code/express-auth-middle/lib/index.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0,0,0,0,0],"6":[0,0],"7":[0,0],"8":[0,0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"return401","line":3,"loc":{"start":{"line":3,"column":16},"end":{"line":3,"column":49}}},"2":{"name":"xAuthCheck","line":10,"loc":{"start":{"line":10,"column":17},"end":{"line":10,"column":61}}},"3":{"name":"basicAuthCheck","line":18,"loc":{"start":{"line":18,"column":21},"end":{"line":18,"column":82}}},"4":{"name":"validateSwitch","line":28,"loc":{"start":{"line":28,"column":21},"end":{"line":28,"column":69}}},"5":{"name":"(anonymous_5)","line":54,"loc":{"start":{"line":54,"column":16},"end":{"line":54,"column":28}}},"6":{"name":"(anonymous_6)","line":57,"loc":{"start":{"line":57,"column":9},"end":{"line":57,"column":35}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":38}},"2":{"start":{"line":3,"column":0},"end":{"line":9,"column":2}},"3":{"start":{"line":4,"column":2},"end":{"line":4,"column":47}},"4":{"start":{"line":5,"column":2},"end":{"line":7,"column":3}},"5":{"start":{"line":6,"column":4},"end":{"line":6,"column":75}},"6":{"start":{"line":8,"column":2},"end":{"line":8,"column":32}},"7":{"start":{"line":10,"column":0},"end":{"line":17,"column":2}},"8":{"start":{"line":11,"column":2},"end":{"line":15,"column":3}},"9":{"start":{"line":12,"column":4},"end":{"line":14,"column":5}},"10":{"start":{"line":13,"column":6},"end":{"line":13,"column":18}},"11":{"start":{"line":16,"column":2},"end":{"line":16,"column":15}},"12":{"start":{"line":18,"column":0},"end":{"line":26,"column":2}},"13":{"start":{"line":19,"column":2},"end":{"line":19,"column":28}},"14":{"start":{"line":20,"column":2},"end":{"line":25,"column":3}},"15":{"start":{"line":21,"column":4},"end":{"line":21,"column":49}},"16":{"start":{"line":22,"column":4},"end":{"line":22,"column":17}},"17":{"start":{"line":24,"column":4},"end":{"line":24,"column":72}},"18":{"start":{"line":28,"column":0},"end":{"line":48,"column":2}},"19":{"start":{"line":29,"column":2},"end":{"line":47,"column":3}},"20":{"start":{"line":31,"column":6},"end":{"line":36,"column":7}},"21":{"start":{"line":32,"column":8},"end":{"line":32,"column":62}},"22":{"start":{"line":34,"column":8},"end":{"line":34,"column":163}},"23":{"start":{"line":35,"column":8},"end":{"line":35,"column":21}},"24":{"start":{"line":38,"column":6},"end":{"line":43,"column":7}},"25":{"start":{"line":39,"column":8},"end":{"line":39,"column":91}},"26":{"start":{"line":41,"column":8},"end":{"line":41,"column":178}},"27":{"start":{"line":42,"column":8},"end":{"line":42,"column":21}},"28":{"start":{"line":45,"column":6},"end":{"line":45,"column":62}},"29":{"start":{"line":46,"column":6},"end":{"line":46,"column":19}},"30":{"start":{"line":55,"column":2},"end":{"line":55,"column":87}},"31":{"start":{"line":57,"column":2},"end":{"line":78,"column":4}},"32":{"start":{"line":58,"column":4},"end":{"line":61,"column":5}},"33":{"start":{"line":59,"column":6},"end":{"line":59,"column":109}},"34":{"start":{"line":60,"column":6},"end":{"line":60,"column":37}},"35":{"start":{"line":62,"column":4},"end":{"line":67,"column":5}},"36":{"start":{"line":63,"column":6},"end":{"line":65,"column":7}},"37":{"start":{"line":64,"column":8},"end":{"line":64,"column":22}},"38":{"start":{"line":66,"column":6},"end":{"line":66,"column":37}},"39":{"start":{"line":69,"column":4},"end":{"line":75,"column":5}},"40":{"start":{"line":70,"column":6},"end":{"line":74,"column":7}},"41":{"start":{"line":71,"column":8},"end":{"line":73,"column":9}},"42":{"start":{"line":72,"column":10},"end":{"line":72,"column":24}},"43":{"start":{"line":77,"column":4},"end":{"line":77,"column":35}}},"branchMap":{"1":{"line":5,"type":"if","locations":[{"start":{"line":5,"column":2},"end":{"line":5,"column":2}},{"start":{"line":5,"column":2},"end":{"line":5,"column":2}}]},"2":{"line":11,"type":"if","locations":[{"start":{"line":11,"column":2},"end":{"line":11,"column":2}},{"start":{"line":11,"column":2},"end":{"line":11,"column":2}}]},"3":{"line":11,"type":"binary-expr","locations":[{"start":{"line":11,"column":6},"end":{"line":11,"column":36}},{"start":{"line":11,"column":40},"end":{"line":11,"column":68}}]},"4":{"line":12,"type":"if","locations":[{"start":{"line":12,"column":4},"end":{"line":12,"column":4}},{"start":{"line":12,"column":4},"end":{"line":12,"column":4}}]},"5":{"line":12,"type":"binary-expr","locations":[{"start":{"line":12,"column":8},"end":{"line":12,"column":71}},{"start":{"line":12,"column":75},"end":{"line":12,"column":136}},{"start":{"line":12,"column":140},"end":{"line":12,"column":203}},{"start":{"line":12,"column":207},"end":{"line":12,"column":268}},{"start":{"line":12,"column":272},"end":{"line":12,"column":336}},{"start":{"line":12,"column":340},"end":{"line":12,"column":402}}]},"6":{"line":20,"type":"if","locations":[{"start":{"line":20,"column":2},"end":{"line":20,"column":2}},{"start":{"line":20,"column":2},"end":{"line":20,"column":2}}]},"7":{"line":24,"type":"binary-expr","locations":[{"start":{"line":24,"column":11},"end":{"line":24,"column":39}},{"start":{"line":24,"column":43},"end":{"line":24,"column":71}}]},"8":{"line":29,"type":"switch","locations":[{"start":{"line":30,"column":4},"end":{"line":36,"column":7}},{"start":{"line":37,"column":4},"end":{"line":43,"column":7}},{"start":{"line":44,"column":4},"end":{"line":46,"column":19}}]},"9":{"line":31,"type":"if","locations":[{"start":{"line":31,"column":6},"end":{"line":31,"column":6}},{"start":{"line":31,"column":6},"end":{"line":31,"column":6}}]},"10":{"line":38,"type":"if","locations":[{"start":{"line":38,"column":6},"end":{"line":38,"column":6}},{"start":{"line":38,"column":6},"end":{"line":38,"column":6}}]},"11":{"line":38,"type":"binary-expr","locations":[{"start":{"line":38,"column":10},"end":{"line":38,"column":36}},{"start":{"line":38,"column":40},"end":{"line":38,"column":66}}]},"12":{"line":55,"type":"cond-expr","locations":[{"start":{"line":55,"column":69},"end":{"line":55,"column":81}},{"start":{"line":55,"column":84},"end":{"line":55,"column":86}}]},"13":{"line":55,"type":"binary-expr","locations":[{"start":{"line":55,"column":16},"end":{"line":55,"column":36}},{"start":{"line":55,"column":40},"end":{"line":55,"column":66}}]},"14":{"line":58,"type":"if","locations":[{"start":{"line":58,"column":4},"end":{"line":58,"column":4}},{"start":{"line":58,"column":4},"end":{"line":58,"column":4}}]},"15":{"line":58,"type":"binary-expr","locations":[{"start":{"line":58,"column":8},"end":{"line":58,"column":46}},{"start":{"line":58,"column":50},"end":{"line":58,"column":92}}]},"16":{"line":62,"type":"if","locations":[{"start":{"line":62,"column":4},"end":{"line":62,"column":4}},{"start":{"line":62,"column":4},"end":{"line":62,"column":4}}]},"17":{"line":63,"type":"if","locations":[{"start":{"line":63,"column":6},"end":{"line":63,"column":6}},{"start":{"line":63,"column":6},"end":{"line":63,"column":6}}]},"18":{"line":69,"type":"if","locations":[{"start":{"line":69,"column":4},"end":{"line":69,"column":4}},{"start":{"line":69,"column":4},"end":{"line":69,"column":4}}]},"19":{"line":71,"type":"if","locations":[{"start":{"line":71,"column":8},"end":{"line":71,"column":8}},{"start":{"line":71,"column":8},"end":{"line":71,"column":8}}]}}};
}
__cov_HVaCZ1aO7lbgwEOamUxPBQ = __cov_HVaCZ1aO7lbgwEOamUxPBQ['/home/carmichael/code/express-auth-middle/lib/index.js'];
__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['1']++;var basicAuth=require('basic-auth');__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['2']++;var return401=function return401(res,options){__cov_HVaCZ1aO7lbgwEOamUxPBQ.f['1']++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['3']++;console.error('authorisationMiddleware 401');__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['4']++;if(options.challenge){__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['1'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['5']++;res.set('WWW-Authenticate','Basic realm="'+options.challenge+'"');}else{__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['1'][1]++;}__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['6']++;return res.status(401).send();};__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['7']++;var xAuthCheck=function xAuthCheck(req,xAuthorisationKey){__cov_HVaCZ1aO7lbgwEOamUxPBQ.f['2']++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['8']++;if((__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['3'][0]++, req.headers['x-authorization'])||(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['3'][1]++, req.headers['authorization'])){__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['2'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['9']++;if((__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['5'][0]++, req.headers['x-authorization']==='Token '+xAuthorisationKey)||(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['5'][1]++, req.headers['authorization']==='Token '+xAuthorisationKey)||(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['5'][2]++, req.headers['x-authorization']==='TOKEN '+xAuthorisationKey)||(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['5'][3]++, req.headers['authorization']==='TOKEN '+xAuthorisationKey)||(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['5'][4]++, req.headers['x-authorization']==='Bearer '+xAuthorisationKey)||(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['5'][5]++, req.headers['authorization']==='Bearer '+xAuthorisationKey)){__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['4'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['10']++;return true;}else{__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['4'][1]++;}}else{__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['2'][1]++;}__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['11']++;return false;};__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['12']++;var basicAuthCheck=function basicAuthCheck(req,basicAuthUname,basicAuthPword){__cov_HVaCZ1aO7lbgwEOamUxPBQ.f['3']++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['13']++;var user=basicAuth(req);__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['14']++;if(!user){__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['6'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['15']++;console.error('Basic authentication failed');__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['16']++;return false;}else{__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['6'][1]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['17']++;return(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['7'][0]++, basicAuthUname===user.name)&&(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['7'][1]++, basicAuthPword===user.pass);}};__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['18']++;var validateSwitch=function validateSwitch(type,req,credentials){__cov_HVaCZ1aO7lbgwEOamUxPBQ.f['4']++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['19']++;switch(type){case'x-auth':__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['8'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['20']++;if(credentials.xAuthorisationKey){__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['9'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['21']++;return xAuthCheck(req,credentials.xAuthorisationKey);}else{__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['9'][1]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['22']++;console.error('auth middleware use attempt with no xAuthorisationKey passed in the options! Returning false but this does not mean the auth check failed');__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['23']++;return false;}case'basic-auth':__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['8'][1]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['24']++;if((__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['11'][0]++, credentials.basicAuthUname)&&(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['11'][1]++, credentials.basicAuthPword)){__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['10'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['25']++;return basicAuthCheck(req,credentials.basicAuthUname,credentials.basicAuthPword);}else{__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['10'][1]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['26']++;console.error('auth middleware use attempt with no basicAuthUname OR basicAuthPword passed in the options! Returning false but this does not mean the auth check failed');__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['27']++;return false;}default:__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['8'][2]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['28']++;console.error('Invalid auth type passed, return false');__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['29']++;return false;}};var index = function(){__cov_HVaCZ1aO7lbgwEOamUxPBQ.f['5']++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['30']++;var options=(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['13'][0]++, arguments.length>0)&&(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['13'][1]++, arguments[0]!==undefined)?(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['12'][0]++, arguments[0]):(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['12'][1]++, {});__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['31']++;return function(req,res,next){__cov_HVaCZ1aO7lbgwEOamUxPBQ.f['6']++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['32']++;if((__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['15'][0]++, typeof options.methods==='undefined')||(__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['15'][1]++, typeof options.credentials==='undefined')){__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['14'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['33']++;console.error('No authentication methods defined in the provided options. Will return a default 401.');__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['34']++;return return401(res,options);}else{__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['14'][1]++;}__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['35']++;if(typeof options.methods==='string'){__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['16'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['36']++;if(validateSwitch(options.methods,req)){__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['17'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['37']++;return next();}else{__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['17'][1]++;}__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['38']++;return return401(res,options);}else{__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['16'][1]++;}__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['39']++;if(Array.isArray(options.methods)){__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['18'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['40']++;for(var i=0;i<options.methods.length;++i){__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['41']++;if(validateSwitch(options.methods[i],req,options.credentials)){__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['19'][0]++;__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['42']++;return next();}else{__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['19'][1]++;}}}else{__cov_HVaCZ1aO7lbgwEOamUxPBQ.b['18'][1]++;}__cov_HVaCZ1aO7lbgwEOamUxPBQ.s['43']++;return return401(res,options);};};

return index;

})));