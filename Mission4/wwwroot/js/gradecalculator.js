//Kitt Mori Mission 4

$("#btnSend").click(function () {

    //grab the values of each grade category that was inputted from the forms in the index.html
    //parseFloat will cast the string to a float
    var assignments= parseFloat($("#assignments").val());
    var groupProjects = parseFloat($("#group_projects").val());
    var quizzes = parseFloat($("#quizzes").val());
    var midterm = parseFloat($("#midterm").val());
    var final = parseFloat($("#final").val());
    var intex = parseFloat($("#intex").val());

    //calculate finalgrade
    var finalgrade = (assignments * 0.5) + (groupProjects * 0.1) + (quizzes * 0.1) + (midterm * 0.1) + (final * 0.1) + (intex * 0.1);

    //declare a variable for letter grade
    var lettergrade = ""

    //assign a grade letter to lettergrade depending on finalgrade value
    if (finalgrade >= 94) {
        lettergrade = "A"
    }
    else if (finalgrade >= 90) {
        lettergrade = "A-"
    }
    else if (finalgrade >= 87) {
        lettergrade = "B+"
    }
    else if (finalgrade >= 84) {
        lettergrade = "B"
    }
    else if (finalgrade >= 80) {
        lettergrade = "B-"
    }
    else if (finalgrade >= 77) {
        lettergrade = "C+"
    }
    else if (finalgrade >= 74) {
        lettergrade = "C"
    }
    else if (finalgrade >= 70) {
        lettergrade = "C-"
    }
    else if (finalgrade >= 67) {
        lettergrade = "D+"
    }
    else if (finalgrade >= 64) {
        lettergrade = "D"
    }
    else if (finalgrade >= 60) {
        lettergrade = "D-"
    }
    else {
        lettergrade = "E"
    }

    //this will display the value of finalgrade rounded to two decimal places with a percent sign at the end where the id="finalpercent" in the index.html
    $("#finalpercent").html(finalgrade.toFixed(2) + "%");
    //this will display the letter grade where the id="finalletter" in the index.html
    $("#finalletter").html(lettergrade);
})