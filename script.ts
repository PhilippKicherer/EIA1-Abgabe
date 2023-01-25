// Interface für eine Quizfrage als Objekt
interface Question {
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    correct: string;
}

// Funktionen für das ganze Script

let question: Question[] = [
    {
        question: "Frage 1",
        answer1: "Antwort 1",
        answer2: "Antwort 2",
        answer3: "Antwort 3",
        answer4: "Antwort 4",
        correct: "answer 2",
    }
];

