function addStudentToClass(student) {
    const myPromise = new Promise((resolve, reject) => {
        const randomDelay = Math.floor(Math.random() * 3000) + 1000;

        setTimeout(() => {
            if (student.age > 18) {
                resolve(`${student.name} added to the class after ${randomDelay / 1000} seconds delay.`)
            } else {
                reject(`${student.name} is too young for this class after ${randomDelay / 1000} seconds delay.`)
            }
        }, randomDelay);
    });

    return myPromise;
}

async function registerStudent(student) {
    try {
        const result = await addStudentToClass(student);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
];

for (const student of students) {
    registerStudent(student);
}
