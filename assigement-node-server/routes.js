
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url == '/') {
        res.write('<html>');
        res.write('<head><title>Create User</title><head>');
        res.write(
        '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    } else if (url == '/users') {
        res.write('<html>');
        res.write('<head><title>User List </title><head>');
        res.write(
        '<body><ul><li>Daisy</li></ul></body>'
        );
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message)
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          });

       
    }
}

exports.handler = requestHandler;

