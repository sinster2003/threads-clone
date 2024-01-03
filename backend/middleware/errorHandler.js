const errorHandler = (error, req, res, next) => {
    console.log(error.name);

    if(error.name === "CastError") {
        return res.status(400).json({error: "Malformatted Id"});
    }

    else if(error.name === "ValidationError") {
        return res.status(400).json({error: "Invalid credentials"});
    }
    
    else if(error.name === "JsonWebTokenError") {
        return res.status(401).json({error: "Not authorized!!! Please signup or login"});
    }

    else if(error.name === "ZodError") {
        return res.status(400).json({error: error.issues});
    }

    else {
        return res.status(500).json({error: "Something Went Wrong"});
    }
}

module.exports = errorHandler;