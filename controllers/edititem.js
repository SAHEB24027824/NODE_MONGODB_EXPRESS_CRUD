const Item=require('../models/itemschema')


async function editItem(req,res){
    try {

       let updated=await Item.updateOne({_id:req.body.id},{$set:{name:req.body.name}})
       if(updated){
           res.status(200).send({result:"Updated"})
       }
       else{
        res.status(400).send({result:"Unable to Update"})
       }
        
    } catch (error) {
        res.status(500).send({result:error,message})
    }
}

module.exports=editItem;