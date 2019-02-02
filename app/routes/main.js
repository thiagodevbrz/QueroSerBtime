module.exports = function(application){

    application.post('/verify',function(req,res){
        application.app.controllers.mainController.verify(application,req,res);
    });
    
};