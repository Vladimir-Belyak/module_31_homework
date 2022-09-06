import { Task } from "./models/Task";

export const getFromStorage = function (key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

export const addToStorage = function (obj, key) {
  const storageData = getFromStorage(key);
  storageData.push(obj);
  localStorage.setItem(key, JSON.stringify(storageData));
};

export const displayTasks = function (userOwnerTasks) {
  const storageTasks = getFromStorage("tasks");
  if (storageTasks.lenght == 0) return false;
  for (let task of storageTasks) {
    if (userOwnerTasks.login == task.owner){
      let addLi = document.createElement('li');
      addLi.textContent = task.text;
      document.querySelector(".list-tasks-"+task.category).appendChild(addLi);
    }
  }
}


export const generateTestUser = function (User) {
  localStorage.clear();
  const testUser = new User("1", "1");
  const testTask1 = new Task("1", "Some text backlog", "backlog");
  const testTask2 = new Task("1", "Some text ready", "ready");
  const testTask3 = new Task("1", "Some text ready_2", "ready");
  const testTask4 = new Task("1", "Some text in progress", "progress");
  const testTask5 = new Task("1", "Some text finished", "finished");
  const testTask6 = new Task("2", "Some text finished_2", "finished");
  User.save(testUser);
  Task.saveTask(testTask1);
  Task.saveTask(testTask2);
  Task.saveTask(testTask3);
  Task.saveTask(testTask4);
  Task.saveTask(testTask5);
  Task.saveTask(testTask6);
};
