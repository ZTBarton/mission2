$('#btn').click(function () {
    let finalGrade = ((parseFloat($('#assignmentGrade').val()) * .55) + (parseFloat($('#groupGrade').val()) * .05) + (parseFloat($('#quizGrade').val()) * .1) + (parseFloat($('#examGrade').val()) * .2) + (parseFloat($('#intexGrade').val()) * .1))

    alert('Final Grade: ' + finalGrade);
})