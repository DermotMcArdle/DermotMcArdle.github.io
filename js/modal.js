var skills = {
    "image": "images/skills.jpg",
    "description": ["Electronics Technician - Studying for HNC in Electrical & Electronic Engineering",
        "Front-end webpage development using;<ul><li>JavaScript</li><li>HTML</li><li>CSS</li><li>jQuery</li><li>Bootstrap</li></ul>",
        "Writing Java code using BlueJ IDE",
        "Making simple Java animations using Processing IDE",
        "Developing mobile apps using Android Studio"
    ]
};
var education = {
    "schools": [{
        "name": "Queen Elizabeth's Grammar School",
        "exams": ["GCSE A* Geography", " GCSE A Mathematics", " GCSE A Chemistry", " GCSE A Physics",
            " GCSE B English Language", " GCSE B History", " GCSE B Spanish", " GCSE B Religious Studies",
            " GCSE C Classics", " GCSE C English Literature", "Junior Maths Challenge Intermediate Bronze"
        ]
    }, {
        "name": "Clitheroe Royal Grammar School",
        "exams": ["GCE A2 Level B Ethics & Philosophy", "GCE A2 Level D General Studies", "GCE A2 Level E Mathematics", "GCE A2 Level E Physics"]
    }]
};
var workExperience = {
    "jobs": [{
        "employer": "Tesco Stores LTD",
        "role": "Skilled Baker",
        "description": ["Production from start to finish of the full range of white and wholemeal breads, French sticks and soft roll.", "Packing & presentation of bakery products", "Organising & ordering in bakery stock", "Maintaining excellent cleaning & hygiene standards"]
    }, {
        "employer": "Protec Fire Detection plc",
        "role": "Electronics Assembly & Test Technician",
        "description": ["Testing & In-Circuit Programming Of SMT Circuit Assemblies", "Fault Finding And Component Level Repair", "Testing Completed Products Using PC Based Test Equipment", "Using Test Fixtures, Oscilloscopes, Sound & Light level Instrumentation.", "Hand Soldering Circuit Board Assembly"]
    }, {
        "employer": "First Bowl Burnley",
        "role": "Front of House",
        "description": ["Meeting and greeting", "Making reservations", "Organising Kid's parties", "Serving at the bar"]
    }]
};
var hobbies = {
    "hobbies": [{
        "name": "Submission Wrestling",
        "description": "My recent victory at Empire Grappling events"
    }, {
        "name": "My other hobbies & interests",
        "description": ["Brazilian Jiu-Jitsu", "Living a healthy and holistic lifestyle", "Self education: using on-line courses, podcasts and blogs", "<a href='http://cjm.comuf.com/philosophy.html'>Studying philosophy; particularly Existentialism & Socratic Philosophy</a> "]
    }]
};
var locations = [
    "Waterfoot, Rossendale, Lancashire, BB4 9TG",
    "Padiham, Lancashire, BB12 8DQ",
    "Nelson, Lancashire, BB9 6RT",
    "Picadilly, Manchester, M1 1HW",
    "Urmston, Manchester, M41 5PX",
    "Blackburn, Lancashire, BB2 6DF",
    "Clitheroe, Lancashire, BB7 2DJ",
    "Chorley, Lancashire, PR7 2LA"
];
var bio = {
    "name": "Casey McArdle",
    "desiredRole": "Aspiring Computer Programmer",
    "email": "casey_jgm@hotmail.com",
    "mobile": "+44 7496 072 777",
    "instagram": "Instagram.com/caseyjamess",
    "github": "CaseyJamess",
    "location": "Waterfoot, Rossendale, Lancashire, BB4 9TG"
};
var HTMLcontacts = '<li><span class="orange-text">%c%</span><span class="black-text">%d%</span></li>';

// Global Temp variable
var cjm;
// When the document is ready add the data
$(document).ready(function() {
    // initialize the googleMap
    initializeMap(locations);

    cjm = '<h4>%d%</h4>';
    cjm = cjm.replace("%d%", bio.name);
    $("#modalText5").append(cjm);
    $("#modalText5").append('<ul></ul>');
    // HTML spaces are encoded converting @ to &nbsp
    cjm = HTMLcontacts.replace("%d%", bio.location);
    cjm = cjm.replace("%c%", "location:@@");
    cjm = cjm.replace(/@/g, "&nbsp");
    $("#modalText5 ul").append(cjm);
    cjm = HTMLcontacts.replace("%d%", bio.email);
    cjm = cjm.replace("%c%", "email:@@@@@@");
    cjm = cjm.replace(/@/g, "&nbsp");
    $("#modalText5 ul").append(cjm);
    cjm = HTMLcontacts.replace("%d%", bio.mobile);
    cjm = cjm.replace("%c%", "mobile:@@@@");
    cjm = cjm.replace(/@/g, "&nbsp");
    $("#modalText5 ul").append(cjm);
    cjm = HTMLcontacts.replace("%d%", bio.github);
    cjm = cjm.replace("%c%", "github:@@@@");
    cjm = cjm.replace(/@/g, "&nbsp");
    $("#modalText5 ul").append(cjm);

    $("#modalText1").append('<img class="img-responsive" src="images/skills.jpg">');
    $("#modalText1").append('<ul></ul>');
    for (x in skills.description) {
        cjm = '<li>%d%</li>';
        cjm = cjm.replace("%d%", skills.description[x]);
        // append to ul in modalText
        $("#modalText1 ul").append(cjm);
    }

    $("#modalText21").append('<img class="img-responsive" src="images/school.jpg">');
    $("#modalText2").append('<ul></ul>');
    for (x in education.schools[0].exams) {
        cjm = '<li>%d%</li>';
        cjm = cjm.replace("%d%", education.schools[0].exams[x]);
        // append to ul in modalText
        $("#modalText2 ul").append(cjm);
    }

    $("#modalText25").append('<ul></ul>');
    for (x in education.schools[1].exams) {
        cjm = '<li>%d%</li>';
        cjm = cjm.replace("%d%", education.schools[1].exams[x]);
        // append to ul in modalText
        $("#modalText25 ul").append(cjm);
    }

    $("#modalText3").append('<img class="img-responsive" src="images/circuitboard2.jpg">');
    cjm = '<h4>%d%</h4>';
    cjm = cjm.replace("%d%", workExperience.jobs[1].role);
    $("#modalText3").append(cjm);
    $("#modalText3").append('<ul></ul>');
    for (x in workExperience.jobs[1].description) {
        cjm = '<li>%d%</li>';
        cjm = cjm.replace("%d%", workExperience.jobs[1].description[x]);
        $("#modalText3 ul").append(cjm);
    }

    $("#modalText4").append('<img class="img-responsive" src="images/jits.jpg">');
    $("#modalText4").append(hobbies.hobbies[0].description);
    cjm = '<h4>%d%</h4>';
    cjm = cjm.replace("%d%", hobbies.hobbies[0].name);
    $("#modalText4").append(cjm);

    cjm = '<h4>%d%</h4>';
    cjm = cjm.replace("%d%", hobbies.hobbies[1].name);
    $("#modalText4").append(cjm);
    $("#modalText4").append('<ul></ul>');
    for (x in hobbies.hobbies[1].description) {
        cjm = '<li>%d%</li>';
        cjm = cjm.replace("%d%", hobbies.hobbies[1].description[x]);
        $("#modalText4 ul").append(cjm);
    }
});
