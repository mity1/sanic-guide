(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8,13],{249:function(t,r,e){},251:function(t,r,e){"use strict";e(249)},252:function(t,r,e){"use strict";e.r(r);var n={props:["avatar","profile","login","releaseManager"]},a=(e(251),e(4)),i=Object(a.a)(n,(function(){var t=this,r=t._self._c;return r("div",[r("img",{attrs:{src:t.avatar}}),t._v(" "),r("a",{attrs:{href:t.profile,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    @"+t._s(t.login)+"\n  ")]),t._v(" "),t.releaseManager?r("em",[t._v("v23 Release Manager")]):t._e()])}),[],!1,null,"451b7cc2",null);r.default=i.exports},261:function(t,r,e){},265:function(t,r,e){"use strict";e.r(r);var n={components:{Contributor:e(252).default},props:["contrib"]},a=e(4),i=Object(a.a)(n,(function(){var t=this._self._c;return t("li",[t("Contributor",{attrs:{avatar:this.contrib.avatar_url,profile:this.contrib.html_url,login:this.contrib.login,releaseManager:this.contrib.release_manager||!1}})],1)}),[],!1,null,null,null);r.default=i.exports},271:function(t,r,e){"use strict";e(261)},297:function(t,r,e){"use strict";e.r(r);var n={components:{ContributorWrapper:e(265).default},props:["title","contributors","additional","more"]},a=(e(271),e(4)),i=Object(a.a)(n,(function(){var t=this,r=t._self._c;return r("div",[t.title?r("h4",[t._v(t._s(t.title))]):t._e(),t._v(" "),r("ul",[t._l(t.contributors,(function(t){return r("ContributorWrapper",{key:t.id,attrs:{contrib:t}})})),t._v(" "),t._t("default")],2),t._v(" "),t.additional?r("div",{staticClass:"additional"},[r("a",{attrs:{href:t.more,target:"_blank"}},[t._v("+"+t._s(t.additional)+" more")])]):t._e()])}),[],!1,null,"2ba36891",null);r.default=i.exports}}]);