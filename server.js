var http=require("http");
var fs= require("fs");

http.createServer(function (req,res) {
    if(req.url == "/"){
      fs.createReadStream("./login.html").pipe(res);
    }else if(req.url == ""){
        var str='';
        req.on("data", function (data) {
            str+=data;
        });
        req.on("end", function (data) {
            res.end(str);
        })
    }
}).listen(8085);