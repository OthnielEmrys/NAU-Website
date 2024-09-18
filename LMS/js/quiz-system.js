// quiz.js
function loadQuiz(quizId) {
    fetch(`quizzes/${quizId}.json`)
        .then(response => response.json())
        .then(quiz => {
            // Render quiz questions
            // Implement logic for checking answers and scoring
        });
}

// Example quiz JSON structure
{
    "id": "html-basics-quiz",
    "title": "HTML Basics Quiz",
    "questions": [
        {
            "question": "What does HTML stand for?",
            "options": ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
            "correctAnswer": 0
        },
        // More questions...
    ]
}
