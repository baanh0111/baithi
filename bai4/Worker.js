class Worker {
    STT;
    name;
    birthday;
    address;
    salary;
    position;

    constructor(STT,name, birthday, address, salary, position) {
        this.STT = STT;
        this.name = name;
        this.birthday = birthday;
        this.address = address;
        this.salary = salary;
        this.position = position;
    }


}
function displayWorker() {
    // Sắp xếp workers theo tên
    workers.sort((a, b) => {
        if (a.name && b.name) {
            return a.name.localeCompare(b.name);
        }
        return 0; // Không thay đổi thứ tự nếu một trong hai là undefined
    });

    let temp = "<table style='width: 500px;' border='1'>";
    temp += "<tr>";
    temp += "<th>STT</th>";
    temp += "<th>Họ Và Tên</th>";
    temp += "<th>Ngày Sinh</th>";
    temp += "<th>Địa Chỉ</th>";
    temp += "<th>Lương</th>";
    temp += "<th>Chức Vụ</th>";
    temp += "<th>Hành Động</th>";
    temp += "</tr>";

    for (let index in workers) {
        const worker = workers[index];
        temp += "<tr>";
        temp += `<td>${worker.STT}</td>`;
        temp += `<td>${worker.name}</td>`;
        temp += `<td>${worker.birthday}</td>`;
        temp += `<td>${worker.address}</td>`;
        temp += `<td>${worker.salary}</td>`;
        temp += `<td>${worker.position}</td>`;
        temp += `<td><button onclick="removeWorker(${index})">Delete</button></td>`;
        temp += "</tr>";
    }

    temp += "</table>";
    document.getElementById("view").innerHTML = temp;
}


function addNewWorker() {
    let STT = document.getElementById("STT").value;
    let name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    let address = document.getElementById("address").value;
    let salary = document.getElementById("salary").value;
    let position = document.getElementById("position").value;

    workers.push(new Worker(STT, name, birthday, address, salary, position));
    displayWorker();
}

function removeWorker(index) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa công nhân này không?");
    if (confirmDelete) {
        workers.splice(index, 1);
        displayWorker();
    }
}