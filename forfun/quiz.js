// quiz.js

document.addEventListener('DOMContentLoaded', function() {
  const answers = [
    'purple',
    'livermore',
    'pesto pasta',
    'greece',
    'unicorn'
  ];

  const correctDisplay = [
    'Purple',
    'Livermore',
    'Pesto Pasta',
    'Greece',
    'Unicorn'
  ];

  const quizForm = document.getElementById('prishaQuiz');
  const submitBtn = document.querySelector('.quiz-submit');
  const resetBtn = document.querySelector('.quiz-reset');
  const successDiv = document.getElementById('quiz-success');

  quizForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let allCorrect = true;
    for (let i = 1; i <= 5; i++) {
      const input = document.getElementById(`q${i}`);
      const feedback = document.getElementById(`q${i}-feedback`);
      const userAnswer = input.value.trim().toLowerCase();
      if (userAnswer === answers[i-1]) {
        input.classList.remove('incorrect');
        feedback.textContent = 'Correct!';
        feedback.classList.add('correct');
      } else {
        input.classList.add('incorrect');
        feedback.textContent = `Correct answer: ${correctDisplay[i-1]}`;
        feedback.classList.remove('correct');
        allCorrect = false;
      }
    }
    if (allCorrect) {
      successDiv.textContent = '5/5 Correct! So proud of you!';
      successDiv.style.display = 'block';
      submitBtn.style.display = 'none';
    } else {
      successDiv.style.display = 'none';
      submitBtn.style.display = 'inline-block';
    }
  });

  resetBtn.addEventListener('click', function() {
    for (let i = 1; i <= 5; i++) {
      const input = document.getElementById(`q${i}`);
      const feedback = document.getElementById(`q${i}-feedback`);
      input.value = '';
      input.classList.remove('incorrect');
      feedback.textContent = '';
      feedback.classList.remove('correct');
    }
    successDiv.style.display = 'none';
    submitBtn.style.display = 'inline-block';
  });
}); 