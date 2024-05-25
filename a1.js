/**********************************************************************************
WEB700 – Assignment 1
I declare that this assignment is my own work in accordance with Seneca Academic Policy.
No part of this assignment has been copied manually or electronically from any other source
(including web sites) or distributed to other students.
Name: Hafsa Mohamed Osman Student ID: [168312239 Date: 24/05/2024
*********************************************************************************/

// Step 3: Define server data arrays
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This course name is WEB700. This assignment was prepared by Hafsa Osman",
    "Hmosman1@myseneca.ca",
    "Hello User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye"
];

// Step 4: Implement the httpRequest function
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Step 5: Manually test the httpRequest function
console.log(httpRequest("GET", "/")); 
console.log(httpRequest("GET", "/about")); 
console.log(httpRequest("GET", "/contact")); 
console.log(httpRequest("POST", "/login")); 
console.log(httpRequest("GET", "/panel")); 
console.log(httpRequest("POST", "/logout")); 
console.log(httpRequest("PUT", "/")); 

// Step 6: Utility function to generate random integers
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Step 6: Implement the automateTests function
function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }

    setInterval(randomRequest, 1000);
}

// Step 7: Invoke the automateTests function
automateTests();
