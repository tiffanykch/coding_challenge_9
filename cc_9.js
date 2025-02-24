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
        return this.salary * 12;
    }
};

// Test case
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary()); 

// TASK 2: CREATING A MANAGER CLASS

// Create manager class that extends employee class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }
    
    // Override getDetails() method to include team size
    getDetails() {
        return super.getDetails() + `, Team Size: ${this.teamSize}`;
    }

    // Add method to calculate 10% of manager's annual salary 
    calculateBonus() {
        return this.calculateAnnualSalary(this.salary) * 0.1;
    }
}

// Test Case
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());