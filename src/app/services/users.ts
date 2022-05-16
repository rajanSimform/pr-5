import { User } from '../models/user.model';

const getRandomSalary = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomDate = () => {
  let day = Math.floor(Math.random() * (28 - 1) + 1);
  let month = Math.floor(Math.random() * (12 - 1) + 1);
  let year = Math.floor(Math.random() * (2022 - 2001) + 2001);
  let date = new Date(`${month}/${day}/${year}`);
  return date;
};

const dept = [
  'MEAN',
  'Java',
  'Marketing',
  'HR',
  'Admin',
  'RoR',
  'React',
  'MERN',
  'Python',
  'BA',
  'DevOps',
];

const randomDept = () => {
  return dept[Math.floor(Math.random() * dept.length)];
};

export const users: User[] = [
  new User(
    // name
    'Rajan Lodhiya',
    // email
    'lodhiyarajan@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Nirali Vaghela',
    // email
    'niralivaghela@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Jay Lodhiya',
    // email
    'lodhiyajay@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Rajan Soni',
    // email
    'rajansoni@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Nishant Shah',
    // email
    'shahnishant@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Prem Budh',
    // email
    'prem@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Virat',
    // email
    'virat@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Pushpa',
    // email
    'puspa@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Vandita',
    // email
    'vandita@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Deep',
    // email
    'deep@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Jaydev',
    // email
    'jaydev@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Tejas',
    // email
    'tejas@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Meet',
    // email
    'meet@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Samir',
    // email
    'samirjogi@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Harsh',
    // email
    'harsh@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Nikita',
    // email
    'nikita@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Parag',
    // email
    'parag@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Jatin',
    // email
    'jatin@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Ekta',
    // email
    'ekta@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
  new User(
    // name
    'Ajay',
    // email
    'ajay@gmail.com',
    // password
    'asdfghjkl',
    randomDept(),
    getRandomSalary(200, 1000) * 1000,
    // role
    'jr engineer',
    randomDate()
  ),
];
