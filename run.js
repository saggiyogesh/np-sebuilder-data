var si = require('se-interpreter');
var tr = new si.TestRun({"steps": [{"type":"get", "url":"http://demo.nodeportal.com/home"}]});
tr.listener = si.getInterpreterListener(tr);
tr.start();
tr.next();
tr.end();