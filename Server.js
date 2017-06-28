var express=require('express');
var nodemailer = require("nodemailer");
var app=express();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nodemailersri@gmail.com',
    pass: 'password@123'
  }
});


/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
	res.sendfile('index.html');
});
app.get('/send',function(req,res){
  console.log('req ',req.query);
	var mailOptions={		
		to : req.query.to,
		subject : req.query.subject,
		text : req.query.text
	}
	console.log('** ',mailOptions);
	transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    
    console.log('Email sent: ' + info.response);

  }
});
});

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
	console.log("Express Started on Port 3000");
});
