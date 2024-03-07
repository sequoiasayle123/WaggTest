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
     res.render("index", {
       title: "My ToDo List ",
       tasks: items
     });
   }

   async searchItems(req, res){
    const querySpec = {
      query: "SELECT * FROM root r WHERE r.name=@name"
    }
   }

   async addTask(req, res) {
     const item = req.body;

     await this.taskDao.addItem(item);
     res.redirect("/");
   }

  async addWalker(req, res) {
    const item = req.body;

    await this.taskDao.addUser(item);
    res.redirect("/");
  }

  async addOwner(req, res) {
    const item = req.body;

    await this.taskDao.addUser(item);
    res.redirect("/");
  }

  async getWalkersPage(req, res) {
    const querySpec = {
      query: "SELECT * FROM root r WHERE r.needWalker=@needWalker",
      parameters: [
        {
          name: "@needWalker",
          value: true
        }
      ]
    };

    const dogOwners = await this.taskDao.find(querySpec);
    res.render("walker", {
      tasks: dogOwners
    });
  }

  async getOwnersPage(req, res) {
    const querySpec = {
      query: "SELECT * FROM root r WHERE r.available=@available",
      parameters: [
        {
          name: "@available",
          value: true
        }
      ]
    };

    const dogWalkers = await this.taskDao.find(querySpec);
    res.render("owner", {
      tasks: dogWalkers
    });
  }


   async completeTask(req, res) {
     const completedTasks = Object.keys(req.body);
     const tasks = [];

     completedTasks.forEach(task => {
       tasks.push(this.taskDao.updateItem(task));
     });
     await Promise.all(tasks);
     res.redirect("/");
   }
 }

 module.exports = TaskList;