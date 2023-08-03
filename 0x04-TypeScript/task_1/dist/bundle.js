(()=>{var e={firstName:"John",lastName:"Doe",fullTimeEmployee:!1,location:"London",contract:!1},t={firstName:"Jane",lastName:"Smith",fullTimeEmployee:!0,location:"New York",numberOfReports:17};function n(e,t){var n=document.getElementById(t);n&&(n.innerHTML="\n      <h2>Details:</h2>\n      "+Object.entries(e).map((function(e){var t=e[0],n=e[1];return"boolean"==typeof n?"<p>"+t+": "+(n?"Yes":"No")+"</p>":"<p>"+t+": "+(null!=n?n:"Not specified")+"</p>"})).join("")+"\n    ")}function a(e,t){return e.charAt(0).toUpperCase()+". "+t}n(e,"teacher-details"),n(t,"director-details");var o=a(e.firstName,e.lastName),r=a(t.firstName,t.lastName),m=document.getElementById("teacher-name");m&&(m.textContent=o);var i=document.getElementById("director-name");i&&(i.textContent=r)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJNQWFBLElBQU1BLEVBQW1CLENBQ3ZCQyxVQUFXLE9BQ1hDLFNBQVUsTUFDVkMsa0JBQWtCLEVBQ2xCQyxTQUFVLFNBQ1ZDLFVBQVUsR0FHTkMsRUFBdUIsQ0FDM0JMLFVBQVcsT0FDWEMsU0FBVSxRQUNWQyxrQkFBa0IsRUFDbEJDLFNBQVUsV0FDVkcsZ0JBQWlCLElBSW5CLFNBQVNDLEVBQWNDLEVBQVVDLEdBQy9CLElBQU1DLEVBQVlDLFNBQVNDLGVBQWVILEdBRXRDQyxJQUNGQSxFQUFVRyxVQUFZLG9DQUVsQkMsT0FBT0MsUUFBUVAsR0FDZFEsS0FBSSxTQUFDLEcsSUFBQ0MsRUFBRyxLQUFFQyxFQUFLLEtBQ2YsTUFBcUIsa0JBQVZBLEVBQ0YsTUFBTUQsRUFBRyxNQUFLQyxFQUFRLE1BQVEsTUFBSSxPQUVwQyxNQUFNRCxFQUFHLE1BQUtDLFFBQUFBLEVBQVMsaUJBQWUsTUFDL0MsSUFDQ0MsS0FBSyxJQUFHLFNBR2pCLENBU0EsU0FBU0MsRUFBYXBCLEVBQW1CQyxHQUd2QyxPQUZvQkQsRUFBVXFCLE9BQU8sR0FBR0MsY0FDVCxLQUFLckIsQ0FFdEMsQ0FWQU0sRUFBY1IsRUFBUyxtQkFHdkJRLEVBQWNGLEVBQVcsb0JBVXpCLElBQU1rQixFQUFjSCxFQUFhckIsRUFBUUMsVUFBV0QsRUFBUUUsVUFHdER1QixFQUFlSixFQUFhZixFQUFVTCxVQUFXSyxFQUFVSixVQUczRHdCLEVBQXVCZCxTQUFTQyxlQUFlLGdCQUVqRGEsSUFDRkEsRUFBcUJDLFlBQWNILEdBSXJDLElBQU1JLEVBQXdCaEIsU0FBU0MsZUFBZSxpQkFFbERlLElBQ0ZBLEVBQXNCRCxZQUFjRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUZWFjaGVyIHtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XHJcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XHJcbiAgcmVhZG9ubHkgbG9jYXRpb246IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcclxuICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgdGVhY2hlcjogVGVhY2hlciA9IHtcclxuICBmaXJzdE5hbWU6ICdKb2huJyxcclxuICBsYXN0TmFtZTogJ0RvZScsXHJcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXHJcbiAgbG9jYXRpb246ICdMb25kb24nLFxyXG4gIGNvbnRyYWN0OiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xyXG4gIGZpcnN0TmFtZTogJ0phbmUnLFxyXG4gIGxhc3ROYW1lOiAnU21pdGgnLFxyXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXHJcbiAgbG9jYXRpb246ICdOZXcgWW9yaycsXHJcbiAgbnVtYmVyT2ZSZXBvcnRzOiAxNyxcclxufTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHJlbmRlciBvYmplY3QgZGV0YWlscyBpbiB0aGUgSFRNTCBjb250YWluZXJcclxuZnVuY3Rpb24gcmVuZGVyRGV0YWlscyhvYmo6IGFueSwgY29udGFpbmVySWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKTtcclxuXHJcbiAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGgyPkRldGFpbHM6PC9oMj5cclxuICAgICAgJHtPYmplY3QuZW50cmllcyhvYmopXHJcbiAgICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8cD4ke2tleX06ICR7dmFsdWUgPyAnWWVzJyA6ICdObyd9PC9wPmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYDxwPiR7a2V5fTogJHt2YWx1ZSA/PyAnTm90IHNwZWNpZmllZCd9PC9wPmA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbignJyl9XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ2FsbCB0aGUgcmVuZGVyRGV0YWlscyBmdW5jdGlvbiB3aXRoIHRoZSB0ZWFjaGVyIG9iamVjdCBhbmQgY29udGFpbmVyIElEXHJcbnJlbmRlckRldGFpbHModGVhY2hlciwgJ3RlYWNoZXItZGV0YWlscycpO1xyXG5cclxuLy8gQ2FsbCB0aGUgcmVuZGVyRGV0YWlscyBmdW5jdGlvbiB3aXRoIHRoZSBkaXJlY3RvcjEgb2JqZWN0IGFuZCBjb250YWluZXIgSURcclxucmVuZGVyRGV0YWlscyhkaXJlY3RvcjEsICdkaXJlY3Rvci1kZXRhaWxzJyk7XHJcblxyXG4vLyBGdW5jdGlvbiB0byBwcmludCB0ZWFjaGVyIG5hbWVcclxuZnVuY3Rpb24gcHJpbnRUZWFjaGVyKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBmaXJzdExldHRlciA9IGZpcnN0TmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcclxuICBjb25zdCBmdWxsTmFtZSA9IGAke2ZpcnN0TGV0dGVyfS4gJHtsYXN0TmFtZX1gO1xyXG4gIHJldHVybiBmdWxsTmFtZTtcclxufVxyXG5cclxuLy8gQ2FsbCB0aGUgcHJpbnRUZWFjaGVyIGZ1bmN0aW9uIHdpdGggdGVhY2hlcidzIGZpcnN0IGFuZCBsYXN0IG5hbWVcclxuY29uc3QgdGVhY2hlck5hbWUgPSBwcmludFRlYWNoZXIodGVhY2hlci5maXJzdE5hbWUsIHRlYWNoZXIubGFzdE5hbWUpO1xyXG5cclxuLy8gQ2FsbCB0aGUgcHJpbnRUZWFjaGVyIGZ1bmN0aW9uIHdpdGggZGlyZWN0b3IncyBmaXJzdCBhbmQgbGFzdCBuYW1lXHJcbmNvbnN0IGRpcmVjdG9yTmFtZSA9IHByaW50VGVhY2hlcihkaXJlY3RvcjEuZmlyc3ROYW1lLCBkaXJlY3RvcjEubGFzdE5hbWUpO1xyXG5cclxuLy8gUmVuZGVyIHRlYWNoZXIgbmFtZVxyXG5jb25zdCB0ZWFjaGVyTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFjaGVyLW5hbWUnKTtcclxuXHJcbmlmICh0ZWFjaGVyTmFtZUNvbnRhaW5lcikge1xyXG4gIHRlYWNoZXJOYW1lQ29udGFpbmVyLnRleHRDb250ZW50ID0gdGVhY2hlck5hbWU7XHJcbn1cclxuXHJcbi8vIFJlbmRlciBkaXJlY3RvciBuYW1lXHJcbmNvbnN0IGRpcmVjdG9yTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rvci1uYW1lJyk7XHJcblxyXG5pZiAoZGlyZWN0b3JOYW1lQ29udGFpbmVyKSB7XHJcbiAgZGlyZWN0b3JOYW1lQ29udGFpbmVyLnRleHRDb250ZW50ID0gZGlyZWN0b3JOYW1lO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ0ZWFjaGVyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJmdWxsVGltZUVtcGxveWVlIiwibG9jYXRpb24iLCJjb250cmFjdCIsImRpcmVjdG9yMSIsIm51bWJlck9mUmVwb3J0cyIsInJlbmRlckRldGFpbHMiLCJvYmoiLCJjb250YWluZXJJZCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidmFsdWUiLCJqb2luIiwicHJpbnRUZWFjaGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJ0ZWFjaGVyTmFtZSIsImRpcmVjdG9yTmFtZSIsInRlYWNoZXJOYW1lQ29udGFpbmVyIiwidGV4dENvbnRlbnQiLCJkaXJlY3Rvck5hbWVDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9