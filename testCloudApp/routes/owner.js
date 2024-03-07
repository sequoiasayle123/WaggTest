const express = require('express');
const path = require('path');
const router = express.Router();
const { name } = require("ejs");
const TaskDao = require("../models/taskDao");

 class TaskList {
   /**
    * Handles the various APIs for displaying and managing tasks
    * @param {TaskDao} taskDao
    */
   constructor(taskDao) {
     this.taskDao = taskDao;
   }
   async showTasks(req, res) {
     const querySpec = {
       query: "SELECT * FROM root r WHERE r.completed=@completed",
       parameters: [
         {
           name: "@completed",
           value: false
         }
       ]
     };

     const items = await this.taskDao.find(querySpec);
     res.render("owner", {
       tasks: items
     });
   }
}

