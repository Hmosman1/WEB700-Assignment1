/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Hafsa Osman Student ID:168312239  Date: 07/06/2024
*
********************************************************************************/

// Step 1: Import the collegeData module
const collegeData = require('./modules/collegeData');

// Step 2: Initialize the collegeData module and retrieve data
collegeData.initialize().then(() => {
    
    // Step 3: Retrieve all students
    collegeData.getAllStudents().then(students => {
        console.log(`Successfully retrieved ${students.length} students`);
    }).catch(err => {
        console.log(`Error retrieving students: ${err}`);
    });

    // Step 4: Retrieve all courses
    collegeData.getCourses().then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses`);
    }).catch(err => {
        console.log(`Error retrieving courses: ${err}`);
    });

    // Step 5: Retrieve all TAs
    collegeData.getTAs().then(TAs => {
        console.log(`Successfully retrieved ${TAs.length} TAs`);
    }).catch(err => {
        console.log(`Error retrieving TAs: ${err}`);
    });

}).catch(err => {
    console.log(`Error initializing collegeData module: ${err}`);
});
