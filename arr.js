let students = ["shola", "sara", "bidex", "damilola"]

console.log(students[2])
students[3] = 'Tunde'
console.log(students)

students.push("kunle")
console.log(students)

students.unshift("Tunrayo")
console.log(students)




console.log(students.includes("Bidex"))
console.log(students.indexOf("bidex"))


students.reverse();
console.log("this is reversed", students)
students.sort()
console.log("this is sorted", students)
console.log("this is slice", students.slice(1, 3))
console.log("this is my splice", students.splice(1, 2, "mohh", "sarah"))
console.log("this is the array", students)