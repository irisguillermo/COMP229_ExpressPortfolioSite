
export function helloNODEJs(req, res, next) {
    res.render('index');
 };

 export function helloHTML(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello from NodeJS Application as html</h1>');
 };
 
 export function helloJSON(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end('{message: Hello from NodeJS Application as json}');
 };