$('#btn').click(function () {
    let finalGrade = ((parseFloat($('#assignmentGrade').val()) * .55) + (parseFloat($('#groupGrade').val()) * .05) + (parseFloat($('#quizGrade').val()) * .1) + (parseFloat($('#examGrade').val()) * .2) + (parseFloat($('#intexGrade').val()) * .1))
    let letterGrade = '';

    if (finalGrade >= 94) {
        letterGrade = 'A'
    }
    else if (finalGrade >= 90) {
        letterGrade = 'A-'
    }
    else if (finalGrade >= 87) {
        letterGrade = 'B+'
    }
    else if (finalGrade >= 84) {
        letterGrade = 'B'
    }
    else if (finalGrade >= 80) {
        letterGrade = 'B-'
    }
    else if (finalGrade >= 77) {
        letterGrade = 'C+'
    }
    else if (finalGrade >= 74) {
        letterGrade = 'C'
    }
    else if (finalGrade >= 70) {
        letterGrade = 'C-'
    }
    else if (finalGrade >= 67) {
        letterGrade = 'D+'
    }
    else if (finalGrade >= 64) {
        letterGrade = 'D'
    }
    else if (finalGrade >= 60) {
        letterGrade = 'D-'
    }
    else {
        letterGrade = 'E'
    }

    alert('Final Grade: ' + finalGrade + '\nLetter Grade: ' + letterGrade);
})