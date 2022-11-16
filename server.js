const http = require('http');
const fs = require('fs');

http.createServer((req, resp)=>{
    if (req.url && req.url.endsWith('/hello')){
        resp.statusCode = 200;
        resp.setHeader('ContentType', 'application/html');

        fs.createReadStream(__dirname + '/index.html').pipe(resp);
    }
    else {
        resp.statusCode = 200;
        resp.setHeader('ContentType', 'plain/text');
        resp.end('Hello world');
    }

}).listen(3000);

/**
 * semver => semantic versioning
 * 
 * major.minor.patch 
 * major: great probability of breaking changes; 
 * minor: new features added, normally no breaking changes; 
 * patch: bug fixes, refactoring, (normally) no breaking changes;
 */