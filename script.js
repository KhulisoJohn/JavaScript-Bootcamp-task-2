const form = document.getElementById("studentForm");
const studentName = document.getElementById("studentName");
const studentMark = document.getElementById("studentMark");
const result = document.getElementById("result");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = studentName.value.trim();
    const mark = parseInt(studentMark.value);

    if (name === "") {
        showMessage("Please enter a student name.", "error");
        return;
    }

    if (isNaN(mark) || mark < 0 || mark > 100) {
        showMessage("Mark must be between 0 and 100.", "error");
        return;
    }

    let grade;
    let status;

    if (mark >= 80) {
        grade = "Distinction";
        status = "PASS";
    } else if (mark >= 65) {
        grade = "Merit";
        status = "PASS";
    } else if (mark >= 50) {
        grade = "Pass";
        status = "PASS";
    } else {
        grade = "Fail";
        status = "FAIL";
    }

    showMessage(
        `${name} scored ${mark}% - ${status} (${grade})`,
        status === "PASS" ? "pass" : "fail"
    );

    
    const li = document.createElement("li");
    li.textContent = `${name} - ${mark}% - ${status} (${grade})`;
    studentList.appendChild(li);

    form.reset();
    studentName.focus();
});

function showMessage(message, type) {
    result.textContent = message;
    result.className = `result ${type}`;
}