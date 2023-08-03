interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

// Function to render teacher details in the HTML container
function renderTeacherDetails(teacher: Teacher) {
  const container = document.getElementById('teacher-details');

  if (container) {
      container.innerHTML = `
          <h2>Teacher Details:</h2>
          <p>First Name: ${teacher.firstName}</p>
          <p>Last Name: ${teacher.lastName}</p>
          <p>Full-Time Employee: ${teacher.fullTimeEmployee}</p>
          <p>Years of Experience: ${teacher.yearsOfExperience ?? 'Not specified'}</p>
          <p>Location: ${teacher.location}</p>
          ${Object.keys(teacher)
              .filter(key => !['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key))
              .map(key => `<p>${key}: ${teacher[key]}</p>`)
              .join('')}
      `;
  }
}

renderTeacherDetails(teacher);