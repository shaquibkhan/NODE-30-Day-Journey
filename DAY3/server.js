const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url ==='/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from my 1st ever Server');
}
else if(req.url === '/about' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the about page');
}
else if(req.url === '/api/user' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const user = {
        name: 'Shaquib Ahmad Khan',
        role: 'Frontend Dev', 
        experience: '8.7 years',
        age: 30,
        email: 'shaquib@gmail.com'
    };
    res.end(JSON.stringify(user));
}
else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
}
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});