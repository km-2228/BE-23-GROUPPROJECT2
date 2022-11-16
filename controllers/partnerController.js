const db = require('../models')
const partner = db.partners;

const readPartner = async(req, res) => {
    try {
      const response = await partner.findAll();
      res.status(200).json(response);
      console.log("succes akses ke tabel")
    } 
    catch (error) {
      console.log(error.message);
    }
  }
  
  const createPartner = async(req, res) => {
    try {
      await partner.create(req.body);
      res.status(201).json({message:"menambahkan Item"});
    } catch (error) {
      console.log(error.message)
    }  
  }
  
  
  const getPartnerById = async(req, res) => {
    try {
        const response = await partner.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response)
        console.log("succes dapatkan id")
    } catch (error) {
        console.log(error.message)
    }
  }
  
  
  const updatePartner = async(req,res) => {
    try {
      await partner.update(req.body,{
          where:{
              id:req.params.id
          }
      });
      res.status(200).json({message:" Item updated"});
    } catch (error) {
        console.log(error.message)
    }
    }
  
  const deletePartner= async(req, res) => {
    try {
        await partner.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({message:" Item deleted"});
    } catch (error) {
        console.log(error.message)
    }
  }
  

module.exports = {
    readPartner,
    createPartner,
    updatePartner,
    deletePartner,
    getPartnerById
}