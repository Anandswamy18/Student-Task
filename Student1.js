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
    let userInput = readline.question("select one of these statement:\n 1. Take Test\n 2. Generate Result\n 3. View Student Result \n 4. display class wise result \n 5. Details Analysis of Result \n 6. View Top Performer \n")
    if (userInput == 1) {
        takeTest();
        
    }

    if (userInput == 2) {
        generateResult();
    }

    if (userInput == 3) {
        viewStudentsResult();
    }

    if (userInput == 4) {
        viewClasswiseResult();
    }

    if (userInput == 5) {
        detailAnalysisOfResult();
    }

    if (userInput == 6) {
        viewTopPerformers();
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

            let totalMarks = mathMarks + scienceMarks + physicsMarks;
            let averageMarks = ((totalMarks / 300) * 100).toFixed(2);

            
            studentList[i].totalMarks = totalMarks;
            studentList[i].averageMarks = averageMarks;
            
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





function viewClasswiseResult() {
    console.log("Classwise Results:");
    let classResults = {};

    studentList.map(student => {
        if (!classResults[student.Class]) {
            classResults[student.Class] = [];
        }
        classResults[student.Class].push(student);
    });

    for (let cls in classResults) {
        console.log(`Class ${cls} Results:`);
        let table = new Table({
            head: ['Roll No', 'Name', 'Total Marks', 'Average Marks']
        });
        classResults[cls].forEach(student => {
            table.push([
                student.Roll_no,
                student.Name,
                student.totalMarks,
                student.averageMarks
            ]);
        });
        console.log(table.toString());
    }
}



function detailAnalysisOfResult() {
    let classDetails = {};

    
    studentList.forEach(student => {
        if (!classDetails[student.Class]) {
            classDetails[student.Class] = {
                totalStudents: 0,
                totalMarksSum: 0,
                percentageSum: 0,
                failedStudentsCount: 0,
                passedStudentsCount: 0
            };
        }

        classDetails[student.Class].totalStudents++;
        classDetails[student.Class].totalMarksSum += student.totalMarks;
        classDetails[student.Class].percentageSum += parseFloat(student.percentage) || 0;

        if (student.percentage < 40) {
            classDetails[student.Class].failedStudentsCount++;
        } else {
            classDetails[student.Class].passedStudentsCount++;
        }
    });


    for (let cls in classDetails) {
        let classData = classDetails[cls];
        classData.averageTotalMarks = (classData.totalMarksSum / classData.totalStudents).toFixed(2);
        classData.averagePercentage = classData.totalStudents ? (classData.percentageSum / classData.totalStudents).toFixed(2) : 0;
        classData.failedStudentsPercentage = ((classData.failedStudentsCount / classData.totalStudents) * 100).toFixed(2);
        classData.passedStudentsPercentage = ((classData.passedStudentsCount / classData.totalStudents) * 100).toFixed(2);

      
        if (classData.averagePercentage >= 80) {
            classData.overallGrade = 'A';
        } else if (classData.averagePercentage >= 60) {
            classData.overallGrade = 'B';
        } else if (classData.averagePercentage >= 40) {
            classData.overallGrade = 'C';
        } else {
            classData.overallGrade = 'D';
        }
    }

 
    let table = new Table({
        head: ['Class', 'Total Students Count', 'Average Total Marks', 'Average Percentage', 'Overall Grade', 'Failed Students Count', 'Failed Students Percentage', 'Passed Students Count', 'Passed Students Percentage']
    });

  
    for (let cls in classDetails) {
        let classData = classDetails[cls];
        table.push([
            cls,
            classData.totalStudents,
            classData.averageTotalMarks,
            classData.averagePercentage,
            classData.overallGrade,
            classData.failedStudentsCount,
            classData.failedStudentsPercentage + '%',
            classData.passedStudentsCount,
            classData.passedStudentsPercentage + '%'
        ]);
    }

    
    console.log(table.toString());
}


function viewTopPerformers() {
    let topPerformers = {};
    let table = new Table({
        head: ['Class', 'Top Performers'],
        colWidths: [10, 40]
    });

    studentList.forEach(student => {
        if (!topPerformers[student.Class]) {
            topPerformers[student.Class] = [];
        }
        topPerformers[student.Class].push(student);
    });

    for (let cls in topPerformers) {
        topPerformers[cls].sort((a, b) => b.totalMarks - a.totalMarks);
        topPerformers[cls] = topPerformers[cls].slice(0, 3); 
    }

    for (let cls in topPerformers) {
        let topThree = topPerformers[cls].map(student => student.Name).join(", ");
        table.push([cls, topThree]);
    }

    console.log(table.toString());
}

