const db = require('../dbconnect/dbconn');


exports.index = async (req,res,next)=>{
    db.query(
        'SELECT * FROM income',(err, result)=>{
                res.status(200).json(result);
        }
    )
}

exports.delete = async(req,res,next)=>{
    try {
        const {id} = req.params;
        console.log(id);

        db.query(`DELETE FROM income WHERE id=${id};`)
                res.status(200).json({
                    message: `Income deleted ${id} successfully`
                
                })
            }
    catch (error) {
        res.status(500).json({
            error:{
                message:`เกิดข้อผิดพลาด ${error.message}`
            }
        })
    }
}
exports.insert= async(req, res, next) => {
    const {text , amount} = req.body 
    console.log(text);
    console.log(amount);
    db.query( `INSERT INTO income (text,amount) VALUES(?,?)` ,
        [text,amount] ,
        (err, result) => {
            if(err){
                console.error('Error inserting data',err);
                res.status(500).json({
                    message: 'Error inserting data'
                })
            }else{
                res.status(200).json({
                    message: 'Income inserted successfully'
                })
            }
        })
   
}