// Interface für eine Quizfrage als Objekt
interface Question {
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    correct: string;
}

// Hier ist der Objekt-Array mit allen Fragen und Antworten, sowie welche der Antworten die richtige ist.

let quizData: Question[] = [
    {
        question: "Was ist der Zweck des 'doctype'-Tags in HTML?",
        answer1: "Es definiert die Art des Dokuments.",
        answer2: "Es hat keine Funktion und kann entfernt werden.",
        answer3: "Es dient als Platzhalter für zukünftige Funktionen des Dokuments.",
        answer4: "Es gibt dem Browser Anweisungen, wie das Dokument formatiert werden soll.",
        correct: "answer2",
    },
    {
        question: "Wofür steht die Abkürzung 'HTML'?",
        answer1: "Hypertext Markup Language",
        answer2: "Hypertext Markdown Language",
        answer3: "Hyperloop Machine Language",
        answer4: "Hyperactive Text Modern Language",
        correct: "answer1",
    },
    {
        question: "Welche Rolle spielt HTML im Zusammenhang mit dem World Wide Web?",
        answer1: "Es ist die Datenbank-Sprache, die für das World Wide Web verwendet wird",
        answer2: "Es ist das Protokoll, das verwendet wird, um Daten im World Wide Web zu übertragen",
        answer3: "Es ist die primäre Programmiersprache für das World Wide Web",
        answer4: "Es dient als Formatierungs-Sprache für Webseiten",
        correct: "answer4",
    },
    {
        question: "Was ist der Hauptzweck von HTML?",
        answer1: "Um Styles und Layouts für eine Website zu definieren",
        answer2: "Um Interaktivität für eine Website bereitzustellen",
        answer3: "Um Inhalte für eine Website zu strukturieren und zu definieren",
        answer4: "Um Animationen für eine Website zu erstellen",
        correct: "answer3",
    },
    {
        question: "Was ist der Unterschied zwischen einem Block-Element und einem Inline-Element in HTML?",
        answer1: "Block-Elemente haben einen festen Platz, während Inline-Elemente sich an den Text anpassen",
        answer2: "Block-Elemente können mehrere Inhaltselemente enthalten, während Inline-Elemente nur ein einziges enthalten können",
        answer3: "Block-Elemente können nur in Absätzen verwendet werden, während Inline-Elemente in jeder Textzeile verwendet werden können",
        answer4: "Block-Elemente haben eine feste Breite und Höhe, während Inline-Elemente flexibel sind",
        correct: "answer1",
    },
    {
        question: "Wofür steht die Abkürzung 'CSS'",
        answer1: "Central Style Sheets",
        answer2: "Cascading Simple Sheets",
        answer3: "Cascading Style Sheets",
        answer4: "Central Simple Sheets",
        correct: "answer3",
    },
    {
        question: "Was ist der richtige Befehl um die Ausrichtung von Text in CSS zu ändern?",
        answer1: "text-align:",
        answer2: "letter-align:",
        answer3: "word-align:",
        answer4: "paragraph-align:",
        correct: "answer1",
    },
    {
        question: "Was ist der richtige Befehl um die Schriftfarbe in CSS zu ändern?",
        answer1: "letter-color:",
        answer2: "color:",
        answer3: "text-color:",
        answer4: "font-color:",
        correct: "answer2",
    },
    {
        question: "Was ist der Unterschied zwischen einer ID und einer Klasse in CSS?",
        answer1: "Eine ID kann nur einmal verwendet werden, während eine Klasse mehrfach verwendet werden kann.",
        answer2: "Eine ID hat eine höhere Priorität als eine Klasse.",
        answer3: "ine ID ist ein Pflichtfeld, während eine Klasse optional ist.",
        answer4: "Eine ID kann nur innerhalb eines Elements verwendet werden, während eine Klasse auf mehrere Elemente angewendet werden kann.",
        correct: "answer4",
    },
    {
        question: "Was ist der Unterschied zwischen padding und margin in CSS?",
        answer1: "Padding vergrößert den Abstand innerhalb eines Elements, während Margin den Abstand außerhalb eines Elements vergrößert.",
        answer2: "Padding ist für die Änderung der Hintergrundfarbe zuständig, während Margin die Schriftgröße beeinflusst.",
        answer3: "Padding und Margin sind dasselbe",
        answer4: "Padding ist für die Schriftart zuständig, während Margin für die Schriftgröße zuständig ist.",
        correct: "answer1",
    },
    {
        question: "Was ist der richtige Befehl um eine Variable in TypeScript zu deklarieren?",
        answer1: "var",
        answer2: "const",
        answer3: "define",
        answer4: "let",
        correct: "answer4",
    },
    {
        question: "Was ist der richtige Befehl um einen Array in TypeScript zu deklarieren?",
        answer1: "array",
        answer2: "[]",
        answer3: "set",
        answer4: "list",
        correct: "answer2",
    },
    {
        question: "Was ist der Vorteil von TypeScript gegenüber JavaScript?",
        answer1: "TypeScript bietet eine bessere Fehlerbehandlung",
        answer2: "TypeScript ermöglicht die Verwendung von OOP-Prinzipien",
        answer3: "TypeScript besitzt eine schnellere Ausführungszeit",
        answer4: "TypeScript ist überall browser-kompatibler",
        correct: "answer1",
    },
    {
        question: "Was ist Typescript?",
        answer1: "Eine Art von JavaScript",
        answer2: "Ein Framework für die Entwicklung von Webanwendungen",
        answer3: "Eine Programmiersprache, die auf JavaScript aufbaut",
        answer4: "Eine Bibliothek für die Verwendung von TypeScript in JavaScript-Projekten",
        correct: "answer4",
    },
    {
        question: "Wie wird Typescript in ein JavaScript-Projekt eingebunden?",
        answer1: "Es muss in den HTML-Code eingebunden werden",
        answer2: "Es muss als Abhängigkeit in package.json hinzugefügt werden",
        answer3: "Es muss als transpilierte JavaScript-Datei zusammen mit dem Projekt aufgenommen werden",
        answer4: "Es muss als globale Variable in der JavaScript-Datei definiert werden",
        correct: "answer3",
    },

];

//Hier sind dummy-arrays, für die HTML, CSS und Typescript spezifischen Quizzes ----------------------------------------------------------------------------------------------------

let newquizData: Question[] = [];

// Hier stehen die Konstanten, um die Elementauswahl abzukürzen

const quiz = document.querySelector("#quiz");
const answers = document.querySelectorAll("input");
const question = document.querySelector("#question");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");
const text4 = document.querySelector("#text4");
const submitbtn: HTMLButtonElement = document.querySelector("#submit");
const selectbtn_html = document.querySelector("#html");
const selectbtn_css = document.querySelector("#css");
const selectbtn_typescript = document.querySelector("#typescript");
const selectbtn_mixed = document.querySelector("#mixed");
const selectbtn = document.querySelectorAll(".quiz-selection");
const list = document.querySelector("ul");
const title = document.querySelector("h2");
const choose = document.querySelector("h1");
const progressbar: HTMLDivElement = document.querySelector(".progress");

//Variablen, um die aktuelle Frage und den Score abzuzählen -----------------------------------------------------------------------------------------------------------------------

let currentquiz: number = 0;
let score: number = 0;

list.style.display = "none";
title.style.display = "none";
submitbtn.style.display = "none";

//Funktion, um das Quiz zu starten ------------------------------------------------------------------------------------------------------------------------------------------------
function startQuiz() {

    deselectanswers();

    const currentQuizData = newquizData[currentquiz];

    question.innerHTML = currentQuizData.question
    text1.innerHTML = currentQuizData.answer1
    text2.innerHTML = currentQuizData.answer2
    text3.innerHTML = currentQuizData.answer3
    text4.innerHTML = currentQuizData.answer4
}

// Funktion, um die Antwort zu Deselektieren
function deselectanswers() {
    answers.forEach(answerE1 => answerE1.checked = false)
}

//Funktion, um die gewählte Antwort auszuwählen
function getSelected() {
    let answer
    answers.forEach(answerE1 => {
        if (answerE1.checked) {
            answer = answerE1.id
        }
    })
    return answer
}

//Funktion, um das Quiz anzuzeigen
function loadquiz() {
    list.style.display = "block";
    title.style.display = "block";
    submitbtn.style.display = "block";
    for (let i = 0; i < selectbtn.length; i++) {
        selectbtn[i].classList.add("hidden");
    }
    choose.style.display = "none";

    startQuiz()
}

// Funktion, um die Progress Leiste aufzufüllen
function updateprogress() {
    let percentage = (score / newquizData.length) * 100;
    progressbar.style.width = `${percentage}%`;
}

//Event Listener, um die verschiedenen Quizzes zu starten --------------------------------------------------------------------------------------------------------------------------
// HTML Quiz start button
selectbtn_html.addEventListener("click", () => {
    newquizData.splice(0, newquizData.length);
    newquizData.push(quizData[0], quizData[1], quizData[2], quizData[3], quizData[4]);
    loadquiz()
})

// CSS Quiz start button
selectbtn_css.addEventListener("click", () => {
    newquizData.splice(0, newquizData.length);
    newquizData.push(quizData[5], quizData[6], quizData[7], quizData[8], quizData[9]);
    loadquiz()
})

// Typescript Quiz start button
selectbtn_typescript.addEventListener("click", () => {
    newquizData.splice(0, newquizData.length);
    newquizData.push(quizData[10], quizData[11], quizData[12], quizData[13], quizData[14]);
    loadquiz()
})

// Mixed Quiz start button
selectbtn_mixed.addEventListener("click", () => {
    newquizData.splice(0, newquizData.length);
    newquizData.push(quizData[0], quizData[1], quizData[2], quizData[3], quizData[4], quizData[5], quizData[6], quizData[7], quizData[8], quizData[9], quizData[10], quizData[11], quizData[12], quizData[13], quizData[14]);
    loadquiz()
})

// Event Listener auf dem Submit Button
submitbtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === newquizData[currentquiz].correct) {
            score++
        }

        currentquiz++
        updateprogress();

        if (currentquiz < newquizData.length) {
            startQuiz()
        }
        else {
            quiz.innerHTML = "<h2>You answered " + score + " / " + newquizData.length + " questions correctly</h2><button onclick='location.reload()'>Restart</button>"
        }
    }
})
