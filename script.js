/*FACULTY ADDING*/
var selectedRow = null

function onFormSubmitFaculty(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["iD"] = document.getElementById("iD").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["firstName"] = document.getElementById("firstName").value;
    formData["middleInitial"] = document.getElementById("middleInitial").value;
    formData["subjectHandled"] = document.getElementById("subjectHandled").value;
    formData["class"] = document.getElementById("class").value;
    formData["section"] = document.getElementById("section").value;
    formData["age"] = document.getElementById("age").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["homeAddress"] = document.getElementById("homeAddress").value;
    formData["religion"] = document.getElementById("religion").value;
    formData["birthDay"] = document.getElementById("birthDay").value;
    formData["birthPlace"] = document.getElementById("birthPlace").value;
    formData["mothersName"] = document.getElementById("mothersName").value;
    formData["mothersOccupation"] = document.getElementById("mothersOccupation").value;
    formData["mcontactNo"] = document.getElementById("mcontactNo").value;
    formData["fathersName"] = document.getElementById("fathersName").value;
    formData["fathersOccupation"] = document.getElementById("fathersOccupation").value;
    formData["fcontactNo"] = document.getElementById("fcontactNo").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("facultyList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.iD;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.firstName;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.middleInitial;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.subjectHandled;
    cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.class;
    cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.section;
    cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.age;
    cell9 = newRow.insertCell(8);
        cell9.innerHTML = data.gender;
    cell10 = newRow.insertCell(9);
        cell10.innerHTML = data.homeAddress;
    cell11 = newRow.insertCell(10);
        cell11.innerHTML = data.religion;
    cell12 = newRow.insertCell(11);
        cell12.innerHTML = data.birthDay;
    cell13 = newRow.insertCell(12);
        cell13.innerHTML = data.birthPlace;
    cell14 = newRow.insertCell(13);
        cell14.innerHTML = data.mothersName;
    cell15 = newRow.insertCell(14);
        cell15.innerHTML = data.mothersOccupation;
    cell16 = newRow.insertCell(15);
        cell16.innerHTML = data.mcontactNo;
    cell17 = newRow.insertCell(16);
        cell17.innerHTML = data.fathersName;
    cell18 = newRow.insertCell(17);
        cell18.innerHTML = data.fathersOccupation;
    cell19 = newRow.insertCell(18);
        cell19.innerHTML = data.fcontactNo;
    cell19 = newRow.insertCell(19);
        cell19.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("iD").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("firstName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("middleInitial").value = selectedRow.cells[3].innerHTML;
    document.getElementById("subjectHandled").value = selectedRow.cells[4].innerHTML;
    document.getElementById("class").value = selectedRow.cells[5].innerHTML;
    document.getElementById("section").value = selectedRow.cells[6].innerHTML;
    document.getElementById("age").value = selectedRow.cells[7].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[8].innerHTML;
    document.getElementById("homeAddress").value = selectedRow.cells[9].innerHTML;
    document.getElementById("religion").value = selectedRow.cells[10].innerHTML;
    document.getElementById("birthDay").value = selectedRow.cells[11].innerHTML;
    document.getElementById("birthPlace").value = selectedRow.cells[12].innerHTML;
    document.getElementById("mothersName").value = selectedRow.cells[13].innerHTML;
    document.getElementById("mothersOccupation").value = selectedRow.cells[14].innerHTML;
    document.getElementById("mcontactNo").value = selectedRow.cells[15].innerHTML;
    document.getElementById("fathersName").value = selectedRow.cells[16].innerHTML;
    document.getElementById("fathersOccupation").value = selectedRow.cells[17].innerHTML;
    document.getElementById("fcontactNo").value = selectedRow.cells[18].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.iD;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.firstName;
    selectedRow.cells[3].innerHTML = formData.middleInitial;
    selectedRow.cells[4].innerHTML = formData.subjectHandled;
    selectedRow.cells[5].innerHTML = formData.class;
    selectedRow.cells[6].innerHTML = formData.section;
    selectedRow.cells[7].innerHTML = formData.age;
    selectedRow.cells[8].innerHTML = formData.gender;
    selectedRow.cells[9].innerHTML = formData.homeAddress;
    selectedRow.cells[10].innerHTML = formData.religion;
    selectedRow.cells[11].innerHTML = formData.birthDay;
    selectedRow.cells[12].innerHTML = formData.birthPlace;
    selectedRow.cells[13].innerHTML = formData.mothersName;
    selectedRow.cells[14].innerHTML = formData.mothersOccupationo;
    selectedRow.cells[15].innerHTML = formData.mcontactNo;
    selectedRow.cells[16].innerHTML = formData.fathersName;
    selectedRow.cells[17].innerHTML = formData.fathersOccupation;
    selectedRow.cells[18].innerHTML = formData.fcontactNo;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('facultyList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("iD").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("firstName").value = '';
    document.getElementById("middleInitial").value = '';
    document.getElementById("subjectHandled").value = '';
    document.getElementById("class").value = '';
    document.getElementById("section").value = '';
    document.getElementById("age").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("homeAddress").value = '';
    document.getElementById("religion").value = '';
    document.getElementById("birthDay").value = '';
    document.getElementById("birthPlace").value = '';
    document.getElementById("mothersName").value = '';
    document.getElementById("mothersOccupation").value = '';
    document.getElementById("mcontactNo").value = '';
    document.getElementById("fathersName").value = '';
    document.getElementById("fathersOccupation").value = '';
    document.getElementById("fcontactNo").value = '';
    selectedRow = null;
}



