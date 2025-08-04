var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Cape Town",
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Durban",
};
var studentsList = [student1, student2];
var table = document.createElement("table");
table.border = "1";
var header = table.insertRow();
header.insertCell().textContent = "First Name";
header.insertCell().textContent = "Location";
studentsList.forEach(function (student) {
    var row = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map