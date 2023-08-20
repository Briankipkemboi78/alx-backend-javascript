// Interface for StudentClass
interface StudentClass {
    displayName(): string;
  }
  
  interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const teacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
    workFromHome: () => 'Cannot work from home',
    getCoffeeBreak: () => 'Cannot have a break',
    workTeacherTasks: () => 'Getting to work',
  };
  
  const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'New York',
    numberOfReports: 17,
    workFromHome: () => 'Working from home',
    getCoffeeBreak: () => 'Getting a coffee break',
    workTeacherTasks: () => 'Getting to director tasks',
  };
  
  // Function to render object details in the HTML container
  function renderDetails(obj: any, containerId: string) {
    const container = document.getElementById(containerId);
  
    if (container) {
      container.innerHTML = `
        <h2>Details:</h2>
        ${Object.entries(obj)
          .map(([key, value]) => {
            if (typeof value === 'boolean') {
              return `<p>${key}: ${value ? 'Yes' : 'No'}</p>`;
            }
            return `<p>${key}: ${value ?? 'Not specified'}</p>`;
          })
          .join('')}
      `;
    }
  }
  
  // Call the renderDetails function with the teacher object and container ID
  renderDetails(teacher, 'teacher-details');
  
  // Call the renderDetails function with the director1 object and container ID
  renderDetails(director1, 'director-details');
  
  // Interface for Director
  interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // Interface for Teacher
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Director Class
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  // Teacher Class
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  // Function to create Employee based on salary
  function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Creating a new instance of StudentClass
  class Student implements StudentClass {
    constructor(public firstName: string, public lastName: string) {}
  
    displayName(): string {
        return `${this.firstName} ${this.lastName}`;
      }
  }
  
  // Render student name
  const studentInstance = new Student('Alice', 'Johnson');
  const studentName = studentInstance.displayName();
  const studentNameContainer = document.getElementById('student-name');
  
  if (studentNameContainer) {
    studentNameContainer.textContent = studentName;
  }
  
  // Render employee type based on salary
  const employeeSalary1 = 200;
  const employeeSalary2 = 1000;
  const employeeSalary3 = '$500';
  
  console.log(createEmployee(employeeSalary1)); // Should return "Teacher"
  console.log(createEmployee(employeeSalary2)); // Should return "Director"
  console.log(createEmployee(employeeSalary3)); // Should return "Director"

  document.addEventListener('DOMContentLoaded', () => {
    // Render the details to the HTML containers
    renderDetails(teacher, 'teacher-details');
    renderDetails(director1, 'director-details');
  
    // Get the student name container
    const studentNameContainer = document.getElementById('student-name');
  
    // Create a new instance of StudentClass
    const studentInstance = new Student('Alice', 'Johnson');
    const studentName = studentInstance.displayName();
  
    // Render student name
    if (studentNameContainer) {
      studentNameContainer.textContent = studentName;
    }
  });

  // Function to check if an employee is a Director
function isDirector(employee: Teacher | Director): employee is Director {
    return 'numberOfReports' in employee;
  }
  
  // Function to execute work based on employee type
  function executeWork(employee: Teacher | Director): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }
  
  // Usage examples
  const employee1 = createEmployee(200) as Teacher | Director;
  const employee2 = createEmployee(1000) as Teacher | Director;
  
  console.log(executeWork(employee1)); // Should return "Getting to work"
  console.log(executeWork(employee2)); // Should return "Getting to director tasks"

  // Define a string literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach the class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Invalid subject';
  }
}

// Usage examples
console.log(teachClass('Math')); // Should return "Teaching Math"
console.log(teachClass('History')); // Should return "Teaching History"



  