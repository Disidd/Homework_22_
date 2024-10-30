class Student {
  constructor(name, surname, yearOfBirth, grades) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.grades = grades;
    this.attendance = new Array(25).fill(null)
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  }

  absent() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    } else {
      console.log("can't be more than 25");
    }
    return this;
  }

  present() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    } else {
      console.log("can't be more than 25");
    }
    return this;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce ((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  getAttendanceAverage() {
    let averageAttendance = 0;
    this.attendance.forEach(attendance => {
        if (attendance === true) {
          averageAttendance++;
        }
    });
    return averageAttendance / this.attendance.length;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceAverage();
    if (averageGrade > 90 && attendanceRate > 0.9) {
        return 'Молодець!';
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
        return 'Добре, але можна краще';
    } else {
        return 'Редиска!';
    }
  }
}

const student1 = new Student('Dima', 'Sydorenko', 1997, [12,10,11,9,10]);

student1.present().present().absent().present().present().absent().present().present().present().present();

console.log(`Ім'я студента: ${student1.name} ${student1.surname}`);
console.log(`Вік: ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getAverageGrade()}`);
console.log(`Середня відвідуваність: ${student1.getAttendanceAverage()}`);
console.log(`Підсумок: ${student1.summary()}`);
