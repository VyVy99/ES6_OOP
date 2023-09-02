
export const TypePerson = {
    STUDENT:"STUDENT",
    EMPLOYEE: "EMPLOYEE",
    CUSTOMER: "CUSTOMER"
}
export class Person {
    constructor(hoTen, diaChi, ma, email) {
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.ma = ma;
        this.email = email;
    }
}
export class Student extends Person {
    constructor(toan, ly, hoa, hoTen, diaChi, ma, email) {
        super(hoTen, diaChi, ma, email)
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
        this.type = TypePerson.STUDENT

    }
    tinhDiemTrungBinh() {
        return (this.toan + this.ly + this.hoa) / 3
    }
}
export class Employee extends Person {
    constructor(soNgayLamViec, luongTheoNgay, hoTen, diaChi, ma, email) {
        super(hoTen, diaChi, ma, email)
        this.soNgayLamViec = soNgayLamViec;
        this.luongTheoNgay = luongTheoNgay;
        this.type = TypePerson.EMPLOYEE

    }
    tinhLuong() {
        return this.soNgayLamViec * this.luongTheoNgay;
    }
}
export class Customer extends Person {
    constructor(tenCongTy, triGiaHoaDon, danhGia, hoTen, diaChi, ma, email) {
        super(hoTen, diaChi, ma, email)
        this.tenCongTy = tenCongTy;
        this.triGiaHoaDon = triGiaHoaDon;
        this.danhGia = danhGia;
        this.type = TypePerson.CUSTOMER

    }

}

export class ListPerson {
    constructor() {
        this.persons = [];
    }

    // Thêm người dùng vào danh sách
    add(person) {
        this.persons.push(person);
    }
    // Xóa người dùng khỏi danh sách theo mã
    removeById(id) {
        this.persons = this.persons.filter(person => person.ma !== id);
    }

    // Cập nhật thông tin người dùng
    update(id, updatedPerson) {
        // dua theo ma de cpa nhat ng dung
        const index = this.persons.findIndex(person => person.ma === id);
        if (index !== -1) {
            this.persons[index] = updatedPerson;
        }
    }

    // Sắp xếp danh sách theo thứ tự họ tên
    sortByName() {
        this.persons.sort((a, b) => a.hoTen.localeCompare(b.hoTen));
    }

    // Lọc danh sách người dùng theo loại người dùng
    filterByType(type) {
        return this.persons.filter(person => person instanceof type);
    }
}




