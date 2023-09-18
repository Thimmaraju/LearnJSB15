
const student ={

    stuname : "Swamy",
    place : "Tumkur",
    age: 29,
    employeded: true,
}

console.log(student.stuname)

console.log(student['place'])

console.log(student.companyname)

student["companyname"]= "IBM"

console.log(student.companyname)

student["age"]= 30

console.log(student.age)

delete student.place


console.log(student.place)

// cy.contains("Admin").should('be.visible')
// cy.contains("PIM").should('be.visible')
// cy.contains("Leave").should('be.visible')

menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Leave",
    menu4 : "Time",
    menu5 : "Recruitment"

}

for (let item in menuitems){

   // cy.contains(menuitems[item]).should('be.visible')
}