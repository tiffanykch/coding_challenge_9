// TASK 1: CREATING AN EMPLOYEE CLASS - HR SYSTEM

// Create employee class to record personal details
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary
    }

    // Add method to display employee information to the console
    getDetails () {
        return `Employee Name: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    }

    // Add method to calculate employee annual salary
    calculateAnnualSalary() {
        return this.salary * 12
    }
};

// Test case
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary()); 