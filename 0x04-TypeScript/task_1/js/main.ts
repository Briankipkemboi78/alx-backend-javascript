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
};

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  numberOfReports: 17,
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

// Function to print teacher name
function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
}

// Call the printTeacher function with teacher's first and last name
const teacherName = printTeacher(teacher.firstName, teacher.lastName);

// Call the printTeacher function with director's first and last name
const directorName = printTeacher(director1.firstName, director1.lastName);

// Render teacher name
const teacherNameContainer = document.getElementById('teacher-name');

if (teacherNameContainer) {
  teacherNameContainer.textContent = teacherName;
}

// Render director name
const directorNameContainer = document.getElementById('director-name');

if (directorNameContainer) {
  directorNameContainer.textContent = directorName;
}


// Interface for StudentClass constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for StudentClass methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Creating a new instance of StudentClass
const studentInstance = new StudentClass('Alice', 'Johnson');

// Render student name
const studentName = studentInstance.displayName();
const studentNameContainer = document.getElementById('student-name');

if (studentNameContainer) {
  studentNameContainer.textContent = studentName;
}
