let profile = { name: "tunde", age: 30 };
let updatedProfile = {
  ...profile,
  city: "Lagos",
};
console.log(updatedProfile);

const { job, ...rest } = {
  job: "web dev",
  age: 30,
  city: "Ondo",
};
console.log(rest);
console.log(job);



const students = {name: "Tunde", age: 25, course: "Backend engineer"}

for(let key in students){
    console.log(key, ":", students[key])
};


console.log(Object.keys(students))