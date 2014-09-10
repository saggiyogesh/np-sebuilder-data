var si = require('se-interpreter');
var tr = new si.TestRun({"steps": [{"type":"get", "url":"http://www.google.com"}]}, "Go to Google");
tr.wd.maximize(null, function(){
tr.listener = si.getInterpreterListener(tr);
tr.start();
tr.next();
tr.end();
});
