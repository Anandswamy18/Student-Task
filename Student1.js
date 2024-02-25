let studentList=[
    {
        Roll_no: 501,
        Name: "Liam Garcia",
        Class: 5,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 502,
        Name: "Ava Robinson",
        Class: 5,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 503,
        Name: "Lucas Cooper",
        Class: 5,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 504,
        Name: "Emma Reed",
        Class: 5,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 505,
        Name: "Mia Hughes",
        Class: 5,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 601,
        Name: "Sophia Smith",
        Class: 6,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 602,
        Name: "Ethan Johnson",
        Class: 6,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 603,
        Name: "Ava Williams",
        Class: 6,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 604,
        Name: "Noah Brown",
        Class: 6,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 605,
        Name: "Olivia Jones",
        Class: 6,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 701,
        Name: "Liam Davis",
        Class: 7,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 702,
        Name: "Emma Martinez",
        Class: 7,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 703,
        Name: "Mia Wilson",
        Class: 7,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 704,
        Name: "Lucas Taylor",
        Class: 7,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 705,
        Name: "Aiden Anderson",
        Class: 7,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 801,
        Name: "Isabella Thomas",
        Class: 8,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 802,
        Name: "James White",
        Class: 8,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 803,
        Name: "Avery Clark",
        Class: 8,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 804,
        Name: "Mason Turner",
        Class: 8,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 805,
        Name: "Charlotte Harris",
        Class: 8,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 801,
        Name: "Evelyn Scott",
        Class: 9,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 802,
        Name: "Logan King",
        Class: 9,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 803,
        Name: "Harper Turner",
        Class: 9,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 804,
        Name: "Jackson Lee",
        Class: 9,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 805,
        Name: "Abigail Baker",
        Class: 9,
        Gender: "Female",
        test_score: []
    }	
] 



const readline = require("readline-sync");
const Table = require('cli-table3');
let condition = true;

while (condition) {
    let userInput = readline.question("select one of these statement:\n 1. Take Test\n 2. Generate Result\n 3. View Student Result \n ")
    if (userInput == 1) {
        takeTest();
        
    }

    if (userInput == 2) {
        generateResult();
    }

    if (userInput == 3) {
        viewStudentsResult();
    }

   
}

function takeTest() {
    for (let i = 0; i < studentList.length; i++) {
        
        if (studentList[i].test_score.length === 0) {
            let mathMarks = Math.floor(Math.random() * 101);
            let scienceMarks = Math.floor(Math.random() * 101);
            let physicsMarks = Math.floor(Math.random() * 101);

            let subjectObject = [
                {
                    subject_name: "Maths",
                    marks: mathMarks,
                },
                {
                    subject_name: "Science",
                    marks: scienceMarks,
                },
                {
                    subject_name: "Physics",
                    marks: physicsMarks,
                }
            ];

            
            studentList[i].test_score.push(...subjectObject);
        }
    }

    
}

function generateResult() {
    for (let i = 0; i < studentList.length; i++) {
        let totalMarks = 0;
        let totalSubjects = studentList[i].test_score.length;
        for (let j = 0; j < studentList[i].test_score.length; j++) {
            totalMarks += studentList[i].test_score[j].marks;
        }
        let averageMarks = totalMarks / totalSubjects;
        studentList[i].totalMarks = totalMarks;
        studentList[i].averageMarks = averageMarks.toFixed(2);
    }
}






function viewStudentsResult() {
    console.log("Students' Results:");
    let table = new Table({
        head: ['Roll No', 'Name', 'Total Marks', 'Average Marks']
    });

    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].totalMarks && studentList[i].averageMarks) {
            table.push([
                studentList[i].Roll_no,
                studentList[i].Name,
                studentList[i].totalMarks,
                studentList[i].averageMarks
            ]);
        } else {
            console.log(`Result not available for ${studentList[i].Name}. Generating result...`);
            generateResult();
        }
    }

    console.log(table.toString());
}




