const Item=require('../models/itemschema')

async function getItem(req,res){
    try {

        let data=await Item.find({})
        if(data && data.length >0){
            res.status(200).send({result:data})
        }
        else{
            res.status(404).send({result:"data Not Found"})
        }
        
    } catch (error) {
        res.status(500).send({result:error,message})
    }
}

module.exports=getItem;