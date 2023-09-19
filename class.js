
// function add(value1, value2){

//     console.log(value1+value2)
// }


// add(4,6)

//es6 onwards



class student {

    stuname = "Swamy"

    display(){

        console.log("this simnple method to print message")
    }


    add(num1, num2){

        console.log(num1+num2)
    }

}

const stu1 = new student()



const stu2 = new student()

//console.log(stu2.stuname)

const stu3 = new student()


//constructor 

//constuctor is method in a class 

// it will automatically / invoked 

//empty 


class employee {


    static a = 10 // static variable

    b=20 // non static varibale

    static method1(){

        console.log("This is static method")
    }

    method2(){

        console.log("This is a non static method")
    }
}

const emp1 = new employee()

emp1.method2()

employee.method1()

//POM 

//Page Object Model 

//OOPs 

