const Joi = require('joi');

const signupValidation = (req,res,next)=>{
    const schema = Joi.object({
        name:Joi.string().min(1).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(1).required(),
    });

    const {error} = schema.validate(req.body);

    if(error){
        return res.status(400).json({message:"BAD request", error})
    }

    next();
}

const loginValidation = (req,res,next)=>{
    const schema = Joi.object({
        
        email:Joi.string().email().required(),
        password:Joi.string().min(1).required(),
    });

    const {error} = schema.validate(req.body);

    if(error){
        return res.status(400).json({message:"BAD request", error})
    }

    next();
}

module.exports = {
    signupValidation,
    loginValidation
}