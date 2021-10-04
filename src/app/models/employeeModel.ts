export class Employee {
  id: number;
  name: string;
  task: string;
  workingHour: string;

  constructor(id: number, name: string, task: string, workingHour: string) {
    this.id = id;
    this.name = name;
    this.task = task;
    this.workingHour = workingHour;
  }
}
