const {Router} = require("express");
const TaskModel = require("../models/Task")

const taskRouter = Router();

taskRouter.get("/:userId/tasks", async (req,res)=>{
    const userId = req.params.userId
    const tasks = await TaskModel.find({userId})
    res.send(tasks)
})

taskRouter.post("/:userId/tasks", async(req,res)=>{
    const userId = req.params.userId
    let payload = {
        ...req.body,
        userId
    }
    const task = await new TaskModel(payload)
    task.save((err, success) => {
        if(err){
            return res.status(500).send({message : "something went wrong"})
        }
        return res.status(201).send(success)
    })
})

taskRouter.delete("/:userId",async (req,res)=>{
    const userid= req.params.userId;
    const result = await TaskModel.deleteOne({_id: userid});
    console.log(result)
    res.send(userid)

})

module.exports = taskRouter