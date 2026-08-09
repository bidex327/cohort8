//adding and updating Props to an object
const students = {
  name: "Abidemi",
  age: 78,
  regNo: "c8/0229",
  course: "javascript",
  year: 2026,
  friends: ["tunde", "shola", "femi", "kunle"],
};

console.log(students);
students.gender = "male";
console.log(students);

students.course = "node_js";
console.log(students);
delete students.course;
console.log(students);

const phone = {
  brand: "Samsung",
  price: 50000,
  model: "Galaxys9",
};
phone.color = "red";
console.log(phone);


let employee = {
    name: "tunde",
    role: "manager",
    salary: 7666 ,
    city: "lagos",
};

let hisName = employee.name
let hisRole = employee.role
let hisSalary = employee.salary
let hisCity = employee.city

const {name: fullName, role: title, salary, city}= employee;


let profile = {name: "Seun", age: 30};
let updatedProfile = {
    ...profile,
    city: "Lagos"
}
console.log(updatedProfile);

