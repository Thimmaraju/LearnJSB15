var x= "Raju"

var y = 'this is a string'

var z = `username`

//cy.get(locator).type(text)

//cy.visit(`www.google.com`)

var  price = Number("120")

var price2 = Number("60")

var sum = price+price2

console.log(sum)

//How to convert string to number 

var str1 = "pavan"

var str2 = "PAVAN"
//expect(str1).to.equal(str2)

// to convert string to lowercase
//  toLowerCase()

//  toUpperCase()


str3 = "This Is A Simple String"

str4 = str3.toUpperCase()

console.log(str4)

str5 = str3.toLowerCase()

console.log(str5)

str6 = "                  Raju  is  Name       "

str7 = str6.trim()

console.log(str7.length)

str8 = "This is A jvascript - string session"

console.log(str8.charAt(5))

//str8.charAt(5) = "I"

 arr = ["raju", "pavan"]

// arr[1] = "Rajan"

console.log(str8)

//str8 = "javascript"

// console.log(arr)

//strings are immovable 

console.log(arr.includes("pavan"))

console.log(str8.includes("This is A jvascript - string session")) //

//length -to get how many chars 

// charAt()

// toLowerCase()

//toUpperCase()

//trim()
//includes


const name1 = "Jack";

console.log(name1.charAt(0)) //J

console.log(name1[0]) //J
const result = `The names are Raju and ${name1}`;

console.log(result)


str9 = "Pavan"

str10 = "bangali"
  
console.log(typeof(str9)) //string

const b = new String('Pavan');

console.log(typeof(b)) //object


st11 = str9.concat(str10)

console.log(st11)

str12 = "This is a string"

arr2 = str12.split(" ")

console.log(arr2)

arr3 = ["Raju", "G"]

strconverted = arr3.join("")

console.log(strconverted)


mobprice1 = "₹6,499"

mobprice2 = '₹5,499'

//total = 11998

pr1  = Number(mobprice1.replace("₹", "").replace(",", "")) // "6499"

pr2 = Number(mobprice2.replace("₹", "").replace(",", ""))  //"5499"

console.log(pr1+pr2)

pric3 = "$300"

console.log(pric3.substring(1,4))




 