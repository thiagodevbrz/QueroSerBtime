module.exports.verify = function(application,req,res){

    let inputs = req.body;
    
    

    req.assert('year','Ano não pode ser vazio').notEmpty();
    // req.assert('nick','Apelido deve conter entre 3 e 15 caracteres').len(3,15);

    var errors = req.validationErrors();

    if(errors){
        res.render('index',{validator :errors});
        return;
    }

    const year = parseInt(req.body.year);

     const isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

     res.render('index',{verifyResponse :isLeapYear});
     return;



    // var io = application.get('io');
    // io.emit('clientConnected',{nick:inputs.nick});

    // res.render('chat',{nick:inputs.nick});

}
