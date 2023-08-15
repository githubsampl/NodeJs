const getContacts = (req,res)=>{
    res.status(200).json({message:`Get all contacts`});
};

const CreateContact = (req,res)=>{
    console.log('The body of the obj is',req.body);
    const {name,email,rollno}=req.body;
    if (!name || !email || !rollno){
        res.status(400);
        throw new Error({message:"All fileds are mandatory"});
    }
    res.status(201).json({message:`Create Contact`});
};

const getContact = (req,res)=>{
    res.status(200).json({message : `Get contact for ${req.params.id}`});
};

const UpdateContact = (req,res)=>{
    res.status(200).json({message : `Get update contact for ${req.params.id}`});
    
};

const DeleteContact = (req,res)=>{
    res.status(200).json({message : `Get delete contact for ${req.params.id}`});
};


module.exports={
    getContact,
    getContacts,
    CreateContact,
    UpdateContact,
    DeleteContact
};