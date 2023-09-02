// @ts-nocheck
import { Person, Student, Customer, Employee, ListPerson, TypePerson } from '../models/index.js'
// them ng dùng
const listPerson = new ListPerson();

const submitForm = (event) =>{
    
    // dung event.preventDefault()
    event.preventDefault();
    let person = new Person();
    let arrUser = document.querySelectorAll("#formUser input ,#formUser select")
    console.log(arrUser);

    for (let person of arrUser) {
        let { value, id } = user;
        person[id] = value;
    }
    // them user
    listPerson.add(person)
    RenderListPerson()
    console.log(listPerson.add(person));
}
window.submitForm = submitForm
// render
const RenderListPerson = (data = listPerson) => {
    const content = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i].type === TypePerson.STUDENT) {

            content += `
        <tr>
        <td>${data[i].hoTen}</td>
        <td>${data[i].diaChi}</td>
        <td>${data[i].ma}</td>
        <td>${data[i].email}</td>
        <td>${data[i].toan}</td>
        <td>${data[i].ly}</td>
        <td>${data[i].hoa}</td>
        <td>${data[i].tinhDiemTrungBinh()}</td>
     <td>
     <button class="btn btn-primary">Sua</button>
     <button class="btn btn-danger">Xoa</button>
     </td>
        </tr>
        `
        }
        // content += data[i]

    }
    document.getElementById('tbodyUser').innerHTML = content
}

