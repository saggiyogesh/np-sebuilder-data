var si = require('se-interpreter');
var tr = new si.TestRun({"steps": [{"type":"get", "url":"http://www.google.com"}]}, "Go to Google");
tr.listener = si.getInterpreterListener(tr);
tr.start(function(){
	tr.wd.maximize();
});
tr.next();
tr.end();