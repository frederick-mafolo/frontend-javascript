interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Cape Town",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Durban",
  };

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
table.border = "1";


const header = table.insertRow();
header.insertCell().textContent = "First Name";
header.insertCell().textContent = "Location";

studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

document.body.appendChild(table);
