import { BaseModel } from "./BaseModel";
import { getFromStorage, addToStorage } from "../utils";

export class Task extends BaseModel {
  constructor(owner, text, category) {
      super();
      this.owner = owner;
      this.text = text;
      this.category = category;
      this.storageKey = "tasks";
    }

    static saveTask(task) {
      try {
        addToStorage(task, task.storageKey);
        return true;
      } catch (e) {
        throw new Error(e);
      }
    }
    
  //   get hasAccess() {
  //     let tasks = getFromStorage(this.storageKey);
  //     if (tasks.length == 0) return false;
  //     for (let task of tasks) {
  //       if (user.login == this.login)
  //         return true;
  //     }
  //     return false;
  //   }


}