export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public department: string,
    public salary: number,
    public designation: string,
    public date: Date
  ) {}
}
