#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todolist: string [] = [];
let conditions = true;

console.log(chalk.magenta.bold("\n \t Wellcome To CodeWithNoor - Todo-List Application\n"));

// while(conditions){
//     let addTask = await inquirer.prompt([
//       {
//         name: "task",
//         type: "input",
//         message: chalk.bgBlueBright("Enter your New Task :")
//       }

//     ]);
//     todolist.push(addTask.task);
//     console.log(`${addTask.task} Task added in todo-list successfully`);

//     let addTaskMore = await inquirer.prompt([
//         {
//             name: "addmore",
//             type: "confirm",
//             message: "Do you want to add more task ?",
//             default: "False"
//         }
//     ]);
//     conditions = addTaskMore.addmore
// }
// console.log("Your updated Todo-list:" , todolist);

let main = async () => {
  while(conditions){
    let option = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: "Select an option you want to do:",
        choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
      }
    ]);
    if(option.choice === "Add Task"){
      await addTask()
    }
    else if(option.choice === "Delete Task"){
      await deleteTask()
    }
    else if(option.choice === "Update Task"){
      await updateTask()
    }
    else if(option.choice === "View Todo-List"){
      await viewTask()
    }
    else if(option.choice === "Exit"){
        conditions = false;
    }
  }
}
//Function To Add New Task TO THe List
let addTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your new task :"
    }
  ]);
  todolist.push(newTask.task);
  console.log(`\n ${newTask.task} task added successfully in todolist`);
}

//Function To View All Todo-list Tasks
let viewTask = () => {
  console.log("\n Your Todo-list: \n");
  todolist.forEach((task, index) => {
    console.log(`${index +1}: ${task}`)
  })
}

//Function To Delete A Task From The List 
let deleteTask = async () => {
  await viewTask()
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index no.' of the task you want to delete :",
    }
  ]);
  let deletedTask = todolist.splice(taskIndex.index -1, 1);
  console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-list`)
}

//Function To Update A Task 
let updateTask = async () =>{
  await viewTask()
  let update_task_index = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index no' of the task you want to update :"
    },
    {
      name: "new_task",
      type: "input",
      message: "Now enter the new task name :",
    }
  ]);
  todolist[update_task_index.index - 1] =  update_task_index.new_task
  console.log(`\n Task at index no.${update_task_index.index - 1} updated successfully [For updated list check option: "view Todo-list"]`)

}

main();