module.exports = {
  token: async (req, res, next) => {
    if(req.url === '/v1/users/2'){
      res.status(401).send({msg:"Access denain"})
    }else{
      next()
    }
  }
};
