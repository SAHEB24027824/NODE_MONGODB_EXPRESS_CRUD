const Item=require('../models/itemschema')


async function deleteItem(req,res){
    try {

        let id=req.params.id;

        let result=await Item.deleteOne({_id:id})
       if(result){
           res.status(200).send({result:"Deleted"})
       }
       else{
        res.status(404).send({result:"Item Not Dound"})
       }
        
    } catch (error) {
        res.status(500).send({result:error.message})
    }
}

module.exports=deleteItem;