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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVyRSx3Q0FBd0M7SUFDeEMsSUFBTSxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELElBQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVsRCxzQkFBc0I7SUFDdEIsSUFBSSxvQkFBb0IsRUFBRTtRQUN4QixvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQ2hEO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW50ZXJmYWNlIGZvciBTdHVkZW50Q2xhc3NcclxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzcyB7XHJcbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XHJcbiAgfVxyXG4gIFxyXG4gIGludGVyZmFjZSBUZWFjaGVyIHtcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XHJcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfVxyXG4gIFxyXG4gIGludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcclxuICAgIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xyXG4gIH1cclxuICBcclxuICBjb25zdCB0ZWFjaGVyOiBUZWFjaGVyID0ge1xyXG4gICAgZmlyc3ROYW1lOiAnSm9obicsXHJcbiAgICBsYXN0TmFtZTogJ0RvZScsXHJcbiAgICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcclxuICAgIGxvY2F0aW9uOiAnTG9uZG9uJyxcclxuICAgIGNvbnRyYWN0OiBmYWxzZSxcclxuICAgIHdvcmtGcm9tSG9tZTogKCkgPT4gJ0Nhbm5vdCB3b3JrIGZyb20gaG9tZScsXHJcbiAgICBnZXRDb2ZmZWVCcmVhazogKCkgPT4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnLFxyXG4gICAgd29ya1RlYWNoZXJUYXNrczogKCkgPT4gJ0dldHRpbmcgdG8gd29yaycsXHJcbiAgfTtcclxuICBcclxuICBjb25zdCBkaXJlY3RvcjE6IERpcmVjdG9ycyA9IHtcclxuICAgIGZpcnN0TmFtZTogJ0phbmUnLFxyXG4gICAgbGFzdE5hbWU6ICdTbWl0aCcsXHJcbiAgICBmdWxsVGltZUVtcGxveWVlOiB0cnVlLFxyXG4gICAgbG9jYXRpb246ICdOZXcgWW9yaycsXHJcbiAgICBudW1iZXJPZlJlcG9ydHM6IDE3LFxyXG4gICAgd29ya0Zyb21Ib21lOiAoKSA9PiAnV29ya2luZyBmcm9tIGhvbWUnLFxyXG4gICAgZ2V0Q29mZmVlQnJlYWs6ICgpID0+ICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJyxcclxuICAgIHdvcmtUZWFjaGVyVGFza3M6ICgpID0+ICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJyxcclxuICB9O1xyXG4gIFxyXG4gIC8vIEZ1bmN0aW9uIHRvIHJlbmRlciBvYmplY3QgZGV0YWlscyBpbiB0aGUgSFRNTCBjb250YWluZXJcclxuICBmdW5jdGlvbiByZW5kZXJEZXRhaWxzKG9iajogYW55LCBjb250YWluZXJJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCk7XHJcbiAgXHJcbiAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgyPkRldGFpbHM6PC9oMj5cclxuICAgICAgICAke09iamVjdC5lbnRyaWVzKG9iailcclxuICAgICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYDxwPiR7a2V5fTogJHt2YWx1ZSA/ICdZZXMnIDogJ05vJ308L3A+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYDxwPiR7a2V5fTogJHt2YWx1ZSA/PyAnTm90IHNwZWNpZmllZCd9PC9wPmA7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmpvaW4oJycpfVxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBDYWxsIHRoZSByZW5kZXJEZXRhaWxzIGZ1bmN0aW9uIHdpdGggdGhlIHRlYWNoZXIgb2JqZWN0IGFuZCBjb250YWluZXIgSURcclxuICByZW5kZXJEZXRhaWxzKHRlYWNoZXIsICd0ZWFjaGVyLWRldGFpbHMnKTtcclxuICBcclxuICAvLyBDYWxsIHRoZSByZW5kZXJEZXRhaWxzIGZ1bmN0aW9uIHdpdGggdGhlIGRpcmVjdG9yMSBvYmplY3QgYW5kIGNvbnRhaW5lciBJRFxyXG4gIHJlbmRlckRldGFpbHMoZGlyZWN0b3IxLCAnZGlyZWN0b3ItZGV0YWlscycpO1xyXG4gIFxyXG4gIC8vIEludGVyZmFjZSBmb3IgRGlyZWN0b3JcclxuICBpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xyXG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcclxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcclxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcclxuICB9XHJcbiAgXHJcbiAgLy8gSW50ZXJmYWNlIGZvciBUZWFjaGVyXHJcbiAgaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xyXG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcclxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcclxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xyXG4gIH1cclxuICBcclxuICAvLyBEaXJlY3RvciBDbGFzc1xyXG4gIGNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xyXG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcclxuICAgIH1cclxuICBcclxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFRlYWNoZXIgQ2xhc3NcclxuICBjbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdDYW5ub3Qgd29yayBmcm9tIGhvbWUnO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcclxuICAgIH1cclxuICBcclxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdHZXR0aW5nIHRvIHdvcmsnO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBGdW5jdGlvbiB0byBjcmVhdGUgRW1wbG95ZWUgYmFzZWQgb24gc2FsYXJ5XHJcbiAgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcclxuICAgICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIENyZWF0aW5nIGEgbmV3IGluc3RhbmNlIG9mIFN0dWRlbnRDbGFzc1xyXG4gIGNsYXNzIFN0dWRlbnQgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGZpcnN0TmFtZTogc3RyaW5nLCBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZykge31cclxuICBcclxuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YDtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBSZW5kZXIgc3R1ZGVudCBuYW1lXHJcbiAgY29uc3Qgc3R1ZGVudEluc3RhbmNlID0gbmV3IFN0dWRlbnQoJ0FsaWNlJywgJ0pvaG5zb24nKTtcclxuICBjb25zdCBzdHVkZW50TmFtZSA9IHN0dWRlbnRJbnN0YW5jZS5kaXNwbGF5TmFtZSgpO1xyXG4gIGNvbnN0IHN0dWRlbnROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0dWRlbnQtbmFtZScpO1xyXG4gIFxyXG4gIGlmIChzdHVkZW50TmFtZUNvbnRhaW5lcikge1xyXG4gICAgc3R1ZGVudE5hbWVDb250YWluZXIudGV4dENvbnRlbnQgPSBzdHVkZW50TmFtZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gUmVuZGVyIGVtcGxveWVlIHR5cGUgYmFzZWQgb24gc2FsYXJ5XHJcbiAgY29uc3QgZW1wbG95ZWVTYWxhcnkxID0gMjAwO1xyXG4gIGNvbnN0IGVtcGxveWVlU2FsYXJ5MiA9IDEwMDA7XHJcbiAgY29uc3QgZW1wbG95ZWVTYWxhcnkzID0gJyQ1MDAnO1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKGVtcGxveWVlU2FsYXJ5MSkpOyAvLyBTaG91bGQgcmV0dXJuIFwiVGVhY2hlclwiXHJcbiAgY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoZW1wbG95ZWVTYWxhcnkyKSk7IC8vIFNob3VsZCByZXR1cm4gXCJEaXJlY3RvclwiXHJcbiAgY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoZW1wbG95ZWVTYWxhcnkzKSk7IC8vIFNob3VsZCByZXR1cm4gXCJEaXJlY3RvclwiXHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAvLyBSZW5kZXIgdGhlIGRldGFpbHMgdG8gdGhlIEhUTUwgY29udGFpbmVyc1xyXG4gICAgcmVuZGVyRGV0YWlscyh0ZWFjaGVyLCAndGVhY2hlci1kZXRhaWxzJyk7XHJcbiAgICByZW5kZXJEZXRhaWxzKGRpcmVjdG9yMSwgJ2RpcmVjdG9yLWRldGFpbHMnKTtcclxuICBcclxuICAgIC8vIEdldCB0aGUgc3R1ZGVudCBuYW1lIGNvbnRhaW5lclxyXG4gICAgY29uc3Qgc3R1ZGVudE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3R1ZGVudC1uYW1lJyk7XHJcbiAgXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgU3R1ZGVudENsYXNzXHJcbiAgICBjb25zdCBzdHVkZW50SW5zdGFuY2UgPSBuZXcgU3R1ZGVudCgnQWxpY2UnLCAnSm9obnNvbicpO1xyXG4gICAgY29uc3Qgc3R1ZGVudE5hbWUgPSBzdHVkZW50SW5zdGFuY2UuZGlzcGxheU5hbWUoKTtcclxuICBcclxuICAgIC8vIFJlbmRlciBzdHVkZW50IG5hbWVcclxuICAgIGlmIChzdHVkZW50TmFtZUNvbnRhaW5lcikge1xyXG4gICAgICBzdHVkZW50TmFtZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHN0dWRlbnROYW1lO1xyXG4gICAgfVxyXG4gIH0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==