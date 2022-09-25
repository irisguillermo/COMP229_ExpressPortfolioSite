
export function helloNODEJs(req, res, next) {
    res.render('index');
 };

 export function helloHTML(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello from NodeJS Application as html</h1>');
 };
 
