module.exports = function(application){

    application.post('/verify',function(req,res){
        application.app.controllers.mainController.verify(application,req,res);
    });

    // application.get('/chat',function(req,res){
    //         res.render('chat');
    // });
};