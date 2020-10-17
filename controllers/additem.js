const Item=require('../models/itemschema')

async function additem(req,res){

    try {
        let existingItem=await Item.findOne({name:req.body.name})
        if(existingItem){
            return res.status(400).send({result:"Item Already exist"})
        }
        else{
            let newItem=new Item({
                name:req.body.name
            })

            let result=await newItem.save()
            if(result) return res.status(200).send({result:result})
            return res.status(400).send({result:'Bad Request'})
        }
        
    } catch (error) {
        return res.status(500).send({result:error.message})
    }

}

module.exports=additem;