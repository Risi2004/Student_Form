document.addEventListener("DOMContentLoaded", function () {
    var saveButton = document.querySelector("#btn");
    var table2 = document.getElementById("table2");

    saveButton.addEventListener("click", function (event) {
        event.preventDefault();

        var name = document.getElementById("intputBox1").value.trim();
        var age = document.getElementById("intputBox2").value.trim();
        var gender = document.querySelector('input[name="gender"]:checked')?.value || "";
        var courseDropdown = document.getElementById("myDropdown");
        var course = courseDropdown.options[courseDropdown.selectedIndex].text;
        var email = document.getElementById("intputBox5").value.trim();

        // Validate input
        if (!name || !age || !gender || !course || !email) {
            alert("Please fill in all fields.");
            return;
        }

        var newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${course}</td>
            <td>${gender}</td>
            <td>${email}</td>
            <td><button class="delete-btn" style="background-color: red; color: white; border: none; padding: 5px 10px;">Delete</button></td>
        `;

        table2.appendChild(newRow);

        document.getElementById("intputBox1").value = "";
        document.getElementById("intputBox2").value = "";
        document.querySelectorAll('input[name="gender"]').forEach(el => el.checked = false);
        document.getElementById("myDropdown").selectedIndex = 0;
        document.getElementById("intputBox5").value = "";

        newRow.querySelector(".delete-btn").addEventListener("click", function () {
            newRow.remove();
        });
    });
});
