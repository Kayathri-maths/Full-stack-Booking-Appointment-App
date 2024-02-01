const User = require('../models/User');

exports.addUser = async (req, res, next) => {
    try {
        if(!req.body.phonenumber){
            throw new Error('Phone number is mandatory')
        }

     const name = req.body.name;
     const email = req.body.email;
     const phonenumber = req.body.phonenumber;

   const data = await User.create( {name: name, email: email, phonenumber: phonenumber});
   res.status(201).json({newUserDetails: data});
    }
    catch(error) {
        res.status(500).json({
            error: error
        });
    }
    
};

exports.getUser = async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.status(200).json({allUsers: users});
    }
    catch(error) {
        res.status(500).json({
            error: error
        });
    }
};
exports.deleteUser = async (req, res, next) => {
     try{
        if(req.params.id == 'undefined'){
            console.log('ID is missing');
            return res.status(400).json({err: 'ID is missing'});
        }
        const userId = req.params.id;
        await User.destroy({where: {id: userId}});
        res.sendStatus(200);
     }  catch(error){
        console.log(error);
        res.status(500).json(error);
     }
};










