const db = require('../dbconnect/dbconn');

exports.index = (req,res,next)=>{

    db.query(
        'SELECT * FROM income',(err, result)=>{
                res.status(200).json(result);
        }
    )
}
exports.delete = (req,res,next)=>{
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