var wd = require('wd')  
  , fs = require('fs')
  , path = require('path')
  
var VARS = {};

var b = wd.promiseRemote();

b.on('status', function(info){console.log('[36m%s[0m', info);});b.on('command', function(meth, path, data){  console.log(' > [33m%s[0m: %s', meth, path, data || '');});
b.init({
  browserName:'firefox'
})
.then(function () { return b.get("http://demo.nodeportal.com/home"); })
.then(function () { return b.elementByLinkText("Login"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.elementById("login_email"); })
.then(function (el) { return b.clear(el)
  .then(function () { return b.type(el, "testadmin@nodeportal.com"); });
})
.then(function () { return b.elementById("login_password"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.elementById("login_submit_login"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.elementByLinkText("testUserAdmin"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.elementById("site_settings_page"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.elementByLinkText("Layout Builder"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.elementById("layoutBuilder_create"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.elementByCssSelector("div.plugin-body"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.refresh() }).then(function () { return b.elementById("layoutBuilder_open"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.elementByLinkText("test"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.elementById("layoutBuilder_template"); })
.then(function (el) { return b.clear(el)
  .then(function () { return b.type(el, ".column.span8 !{col1HTMLTMPL}.column.span4 !{col2HTMLTMPL}"); });
})
.then(function () { return b.elementById("layoutBuilder_template"); })
.then(function (el) { return b.clear(el)
  .then(function () { return b.type(el, ".column.span8 !{col1HTMLTMPL}.column.span4 !{col2HTMLTMPL}.column.span4 !{col2HTMLTMPL}"); });
})
.then(function () { return b.elementById("layoutBuilder_template"); })
.then(function (el) { return b.clear(el)
  .then(function () { return b.type(el, ".column.span4 !{col1HTMLTMPL}.column.span4 !{col2HTMLTMPL}.column.span4 !{col2HTMLTMPL}"); });
})
.then(function () { return b.elementById("layoutBuilder_template"); })
.then(function (el) { return b.clear(el)
  .then(function () { return b.type(el, ".column.span4 !{col1HTMLTMPL}.column.span4 !{col2HTMLTMPL}.column.span4 !{col3HTMLTMPL}"); });
})
.then(function () { return b.elementById("layoutBuilder_template"); })
.then(function (el) { return b.clear(el)
  .then(function () { return b.type(el, ".column.span4 !{col1HTMLTMPL}.column.span4 !{col2HTMLTMPL}.column.span4 !{col3HTMLTMPL}"); });
})
.then(function () { return b.elementById("layoutBuilder_placeholders"); })
.then(function (el) { return b.clear(el)
  .then(function () { return b.type(el, "col1HTMLTMPL,col2HTMLTMPL,col3HTMLTMPL"); });
})
.then(function () { return b.elementById("layoutBuilder_placeholders"); })
.then(function (el) { return b.clear(el)
  .then(function () { return b.type(el, "col1HTMLTMPL,col2HTMLTMPL,col3HTMLTMPL"); });
})
.then(function () { return b.elementById("layoutBuilder_submit_save"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.elementByCssSelector("html"); })
.then(function (el) { return b.clickElement(el); })
.then(function () { return b.elementByCssSelector("html"); })
.then(function (el) { return b.clickElement(el); })
.fin(function () {
b.quit();
}).done();
