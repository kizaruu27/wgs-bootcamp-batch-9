const http = require('http');
const fs = require('fs');
const port = 3000;

http
    .createServer((req, res) => {
        const url = req.url;
        console.log(url);

        res.writeHead(200, {
            'Content-Type' : 'text/html'
        });

        switch (url) {
            case '/about':
                renderFile(res, './about.html');
                break;
            case '/contact': 
                renderFile(res, './contact.html');
                break;
            default:
                renderFile(res, './index.html');
                break;
        }
    })
    .listen(port, () => {
        console.log(`Server is listening to port http://localhost:${port}`);
    });

const renderFile = (res, dir) => {
    fs.readFile(dir, (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write('Error: Page Not Found');
        } else {
            res.write(data);
        }
        res.end();
    });
}
