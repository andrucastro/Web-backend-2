const fs= require('fs');

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method

    if( url ==='/'){
        res.setHeader('content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Dummy greeting</title></head>');
        res.write('<body>')
        res.write('<h1>Hi This is a dummy greeting</h1>')
        res.write('<form action="/create-user" method="POST"><input name="user" type="text"></input><button type="submit">Send</button></form>')
        res.write('</body>')
        res.write('<html>');
        return res.end();
    } 
    
    if( url ==='/users'){
        res.write('<html>');
        res.write('<head><title>Dummy greeting</title></head>');
            res.write('<body>');
             res.write('<ul>');
                 res.write('<li>Elmo</li>');
                 res.write('<li>Henrique</li>');
             res.write('</ul>');
            res.write('</body>');
        res.write('<html>');
        return res.end();
    } 

    if(url ==='/create-user'){
        const body =[];
        req.on('data', chuck =>{
            body.push(chuck);
        });
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('location', '/');
        res.end();
    }

};

module.exports = requestHandler;
