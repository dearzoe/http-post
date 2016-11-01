var http=require("http");
var fs= require("fs");

http.createServer(function (req,res) {
    if(req.url == "/"){
      fs.createReadStream("./login.html").pipe(res);
    }else if(req.url == "/login"){
        var buffers='';
        req.on("data", function (data) {
            buffers.push(data);
        });
        req.on("end", function (data) {
            var result=Buffer.concat(buffers);
            res.end(result.toString());
        })
    }else{
        res.end("404");
    }
}).listen(8085);