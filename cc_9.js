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
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
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
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;
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

// TASK 3: CREATING A COMPANY CLASS

// Create company class to store and manage employee data
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];       
    }

    // Add method to add employee to array
    addEmployee (employee) {
        this.employees.push(employee)
    }

    // Add method to log all employee details
    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.getDetails());
        });
    }  
}

// Test Case
const company = new Company("TechCorp");

company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();