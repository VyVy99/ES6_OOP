// @ts-nocheck
import { Person, Student, Customer, Employee, ListPerson } from '../models/index'
// them ng dùng
const listPerson = new ListPerson();
document.getElementById("formUser").onsubmit = (event) => {
    // dung event.preventDefault()
    event.preventDefault();
    let person = new Person();
    let arrUser = document.querySelectorAll("#formUser input ,#formUser select")
    console.log(arrUser);

    for (let person of arrUser) {
        let { value  , id} = user;
        person[id] = value;
    }
    let person = new Person(hoTen, diaChi, ma, email);
    // them user
    listPerson.addPerson(person)
    console.log(listPerson.addPerson(person));
}
