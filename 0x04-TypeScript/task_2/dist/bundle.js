/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
    workFromHome: function () { return 'Cannot work from home'; },
    getCoffeeBreak: function () { return 'Cannot have a break'; },
    workTeacherTasks: function () { return 'Getting to work'; },
};
var director1 = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'New York',
    numberOfReports: 17,
    workFromHome: function () { return 'Working from home'; },
    getCoffeeBreak: function () { return 'Getting a coffee break'; },
    workTeacherTasks: function () { return 'Getting to director tasks'; },
};
// Function to render object details in the HTML container
function renderDetails(obj, containerId) {
    var container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = "\n        <h2>Details:</h2>\n        ".concat(Object.entries(obj)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            if (typeof value === 'boolean') {
                return "<p>".concat(key, ": ").concat(value ? 'Yes' : 'No', "</p>");
            }
            return "<p>".concat(key, ": ").concat(value !== null && value !== void 0 ? value : 'Not specified', "</p>");
        })
            .join(''), "\n      ");
    }
}
// Call the renderDetails function with the teacher object and container ID
renderDetails(teacher, 'teacher-details');
// Call the renderDetails function with the director1 object and container ID
renderDetails(director1, 'director-details');
// Director Class
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
// Teacher Class
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
// Function to create Employee based on salary
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// Creating a new instance of StudentClass
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.displayName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Student;
}());
// Render student name
var studentInstance = new Student('Alice', 'Johnson');
var studentName = studentInstance.displayName();
var studentNameContainer = document.getElementById('student-name');
if (studentNameContainer) {
    studentNameContainer.textContent = studentName;
}
// Render employee type based on salary
var employeeSalary1 = 200;
var employeeSalary2 = 1000;
var employeeSalary3 = '$500';
console.log(createEmployee(employeeSalary1)); // Should return "Teacher"
console.log(createEmployee(employeeSalary2)); // Should return "Director"
console.log(createEmployee(employeeSalary3)); // Should return "Director"
document.addEventListener('DOMContentLoaded', function () {
    // Render the details to the HTML containers
    renderDetails(teacher, 'teacher-details');
    renderDetails(director1, 'director-details');
    // Get the student name container
    var studentNameContainer = document.getElementById('student-name');
    // Create a new instance of StudentClass
    var studentInstance = new Student('Alice', 'Johnson');
    var studentName = studentInstance.displayName();
    // Render student name
    if (studentNameContainer) {
        studentNameContainer.textContent = studentName;
    }
});
// Function to check if an employee is a Director
function isDirector(employee) {
    return 'numberOfReports' in employee;
}
// Function to execute work based on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Usage examples
var employee1 = createEmployee(200);
var employee2 = createEmployee(1000);
console.log(executeWork(employee1)); // Should return "Getting to work"
console.log(executeWork(employee2)); // Should return "Getting to director tasks"
// Function to teach the class based on the subject
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
    else {
        return 'Invalid subject';
    }
}
// Usage examples
console.log(teachClass('Math')); // Should return "Teaching Math"
console.log(teachClass('History')); // Should return "Teaching History"

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxrQkFBa0IsQ0FBQztLQUMzQjtTQUFNO1FBQ0wsT0FBTyxpQkFBaUIsQ0FBQztLQUMxQjtBQUNILENBQUM7QUFFRCxpQkFBaUI7QUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztBQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsbUNBQW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEludGVyZmFjZSBmb3IgU3R1ZGVudENsYXNzXHJcbmludGVyZmFjZSBTdHVkZW50Q2xhc3Mge1xyXG4gICAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xyXG4gIH1cclxuICBcclxuICBpbnRlcmZhY2UgVGVhY2hlciB7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xyXG4gICAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XHJcbiAgICByZWFkb25seSBsb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH1cclxuICBcclxuICBpbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XHJcbiAgICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgdGVhY2hlcjogVGVhY2hlciA9IHtcclxuICAgIGZpcnN0TmFtZTogJ0pvaG4nLFxyXG4gICAgbGFzdE5hbWU6ICdEb2UnLFxyXG4gICAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXHJcbiAgICBsb2NhdGlvbjogJ0xvbmRvbicsXHJcbiAgICBjb250cmFjdDogZmFsc2UsXHJcbiAgICB3b3JrRnJvbUhvbWU6ICgpID0+ICdDYW5ub3Qgd29yayBmcm9tIGhvbWUnLFxyXG4gICAgZ2V0Q29mZmVlQnJlYWs6ICgpID0+ICdDYW5ub3QgaGF2ZSBhIGJyZWFrJyxcclxuICAgIHdvcmtUZWFjaGVyVGFza3M6ICgpID0+ICdHZXR0aW5nIHRvIHdvcmsnLFxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XHJcbiAgICBmaXJzdE5hbWU6ICdKYW5lJyxcclxuICAgIGxhc3ROYW1lOiAnU21pdGgnLFxyXG4gICAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcclxuICAgIGxvY2F0aW9uOiAnTmV3IFlvcmsnLFxyXG4gICAgbnVtYmVyT2ZSZXBvcnRzOiAxNyxcclxuICAgIHdvcmtGcm9tSG9tZTogKCkgPT4gJ1dvcmtpbmcgZnJvbSBob21lJyxcclxuICAgIGdldENvZmZlZUJyZWFrOiAoKSA9PiAnR2V0dGluZyBhIGNvZmZlZSBicmVhaycsXHJcbiAgICB3b3JrVGVhY2hlclRhc2tzOiAoKSA9PiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcycsXHJcbiAgfTtcclxuICBcclxuICAvLyBGdW5jdGlvbiB0byByZW5kZXIgb2JqZWN0IGRldGFpbHMgaW4gdGhlIEhUTUwgY29udGFpbmVyXHJcbiAgZnVuY3Rpb24gcmVuZGVyRGV0YWlscyhvYmo6IGFueSwgY29udGFpbmVySWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpO1xyXG4gIFxyXG4gICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoMj5EZXRhaWxzOjwvaDI+XHJcbiAgICAgICAgJHtPYmplY3QuZW50cmllcyhvYmopXHJcbiAgICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGA8cD4ke2tleX06ICR7dmFsdWUgPyAnWWVzJyA6ICdObyd9PC9wPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGA8cD4ke2tleX06ICR7dmFsdWUgPz8gJ05vdCBzcGVjaWZpZWQnfTwvcD5gO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5qb2luKCcnKX1cclxuICAgICAgYDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbCB0aGUgcmVuZGVyRGV0YWlscyBmdW5jdGlvbiB3aXRoIHRoZSB0ZWFjaGVyIG9iamVjdCBhbmQgY29udGFpbmVyIElEXHJcbiAgcmVuZGVyRGV0YWlscyh0ZWFjaGVyLCAndGVhY2hlci1kZXRhaWxzJyk7XHJcbiAgXHJcbiAgLy8gQ2FsbCB0aGUgcmVuZGVyRGV0YWlscyBmdW5jdGlvbiB3aXRoIHRoZSBkaXJlY3RvcjEgb2JqZWN0IGFuZCBjb250YWluZXIgSURcclxuICByZW5kZXJEZXRhaWxzKGRpcmVjdG9yMSwgJ2RpcmVjdG9yLWRldGFpbHMnKTtcclxuICBcclxuICAvLyBJbnRlcmZhY2UgZm9yIERpcmVjdG9yXHJcbiAgaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XHJcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XHJcbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEludGVyZmFjZSBmb3IgVGVhY2hlclxyXG4gIGludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcclxuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XHJcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XHJcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcclxuICB9XHJcbiAgXHJcbiAgLy8gRGlyZWN0b3IgQ2xhc3NcclxuICBjbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ1dvcmtpbmcgZnJvbSBob21lJztcclxuICAgIH1cclxuICBcclxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhayc7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBUZWFjaGVyIENsYXNzXHJcbiAgY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xyXG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcclxuICAgIH1cclxuICBcclxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnQ2Fubm90IGhhdmUgYSBicmVhayc7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gRnVuY3Rpb24gdG8gY3JlYXRlIEVtcGxveWVlIGJhc2VkIG9uIHNhbGFyeVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBDcmVhdGluZyBhIG5ldyBpbnN0YW5jZSBvZiBTdHVkZW50Q2xhc3NcclxuICBjbGFzcyBTdHVkZW50IGltcGxlbWVudHMgU3R1ZGVudENsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZywgcHVibGljIGxhc3ROYW1lOiBzdHJpbmcpIHt9XHJcbiAgXHJcbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gUmVuZGVyIHN0dWRlbnQgbmFtZVxyXG4gIGNvbnN0IHN0dWRlbnRJbnN0YW5jZSA9IG5ldyBTdHVkZW50KCdBbGljZScsICdKb2huc29uJyk7XHJcbiAgY29uc3Qgc3R1ZGVudE5hbWUgPSBzdHVkZW50SW5zdGFuY2UuZGlzcGxheU5hbWUoKTtcclxuICBjb25zdCBzdHVkZW50TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHVkZW50LW5hbWUnKTtcclxuICBcclxuICBpZiAoc3R1ZGVudE5hbWVDb250YWluZXIpIHtcclxuICAgIHN0dWRlbnROYW1lQ29udGFpbmVyLnRleHRDb250ZW50ID0gc3R1ZGVudE5hbWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlbmRlciBlbXBsb3llZSB0eXBlIGJhc2VkIG9uIHNhbGFyeVxyXG4gIGNvbnN0IGVtcGxveWVlU2FsYXJ5MSA9IDIwMDtcclxuICBjb25zdCBlbXBsb3llZVNhbGFyeTIgPSAxMDAwO1xyXG4gIGNvbnN0IGVtcGxveWVlU2FsYXJ5MyA9ICckNTAwJztcclxuICBcclxuICBjb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZShlbXBsb3llZVNhbGFyeTEpKTsgLy8gU2hvdWxkIHJldHVybiBcIlRlYWNoZXJcIlxyXG4gIGNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKGVtcGxveWVlU2FsYXJ5MikpOyAvLyBTaG91bGQgcmV0dXJuIFwiRGlyZWN0b3JcIlxyXG4gIGNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKGVtcGxveWVlU2FsYXJ5MykpOyAvLyBTaG91bGQgcmV0dXJuIFwiRGlyZWN0b3JcIlxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgLy8gUmVuZGVyIHRoZSBkZXRhaWxzIHRvIHRoZSBIVE1MIGNvbnRhaW5lcnNcclxuICAgIHJlbmRlckRldGFpbHModGVhY2hlciwgJ3RlYWNoZXItZGV0YWlscycpO1xyXG4gICAgcmVuZGVyRGV0YWlscyhkaXJlY3RvcjEsICdkaXJlY3Rvci1kZXRhaWxzJyk7XHJcbiAgXHJcbiAgICAvLyBHZXQgdGhlIHN0dWRlbnQgbmFtZSBjb250YWluZXJcclxuICAgIGNvbnN0IHN0dWRlbnROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0dWRlbnQtbmFtZScpO1xyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFN0dWRlbnRDbGFzc1xyXG4gICAgY29uc3Qgc3R1ZGVudEluc3RhbmNlID0gbmV3IFN0dWRlbnQoJ0FsaWNlJywgJ0pvaG5zb24nKTtcclxuICAgIGNvbnN0IHN0dWRlbnROYW1lID0gc3R1ZGVudEluc3RhbmNlLmRpc3BsYXlOYW1lKCk7XHJcbiAgXHJcbiAgICAvLyBSZW5kZXIgc3R1ZGVudCBuYW1lXHJcbiAgICBpZiAoc3R1ZGVudE5hbWVDb250YWluZXIpIHtcclxuICAgICAgc3R1ZGVudE5hbWVDb250YWluZXIudGV4dENvbnRlbnQgPSBzdHVkZW50TmFtZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgYW4gZW1wbG95ZWUgaXMgYSBEaXJlY3RvclxyXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBUZWFjaGVyIHwgRGlyZWN0b3IpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XHJcbiAgICByZXR1cm4gJ251bWJlck9mUmVwb3J0cycgaW4gZW1wbG95ZWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgd29yayBiYXNlZCBvbiBlbXBsb3llZSB0eXBlXHJcbiAgZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IFRlYWNoZXIgfCBEaXJlY3Rvcik6IHN0cmluZyB7XHJcbiAgICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcclxuICAgICAgcmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBVc2FnZSBleGFtcGxlc1xyXG4gIGNvbnN0IGVtcGxveWVlMSA9IGNyZWF0ZUVtcGxveWVlKDIwMCkgYXMgVGVhY2hlciB8IERpcmVjdG9yO1xyXG4gIGNvbnN0IGVtcGxveWVlMiA9IGNyZWF0ZUVtcGxveWVlKDEwMDApIGFzIFRlYWNoZXIgfCBEaXJlY3RvcjtcclxuICBcclxuICBjb25zb2xlLmxvZyhleGVjdXRlV29yayhlbXBsb3llZTEpKTsgLy8gU2hvdWxkIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiXHJcbiAgY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoZW1wbG95ZWUyKSk7IC8vIFNob3VsZCByZXR1cm4gXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCJcclxuXHJcbiAgLy8gRGVmaW5lIGEgc3RyaW5nIGxpdGVyYWwgdHlwZSBmb3IgU3ViamVjdHNcclxudHlwZSBTdWJqZWN0cyA9ICdNYXRoJyB8ICdIaXN0b3J5JztcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHRlYWNoIHRoZSBjbGFzcyBiYXNlZCBvbiB0aGUgc3ViamVjdFxyXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcclxuICBpZiAodG9kYXlDbGFzcyA9PT0gJ01hdGgnKSB7XHJcbiAgICByZXR1cm4gJ1RlYWNoaW5nIE1hdGgnO1xyXG4gIH0gZWxzZSBpZiAodG9kYXlDbGFzcyA9PT0gJ0hpc3RvcnknKSB7XHJcbiAgICByZXR1cm4gJ1RlYWNoaW5nIEhpc3RvcnknO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gJ0ludmFsaWQgc3ViamVjdCc7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBVc2FnZSBleGFtcGxlc1xyXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKCdNYXRoJykpOyAvLyBTaG91bGQgcmV0dXJuIFwiVGVhY2hpbmcgTWF0aFwiXHJcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7IC8vIFNob3VsZCByZXR1cm4gXCJUZWFjaGluZyBIaXN0b3J5XCJcclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=