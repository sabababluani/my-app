'use client';

import { useState } from 'react';
import styles from './page.module.scss';

interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
}

interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
}

const Quiz = () => {
  const questions: Question[] = [
    {
      questionText: 'What is the capital of Georgia?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'Tbilisi', isCorrect: true },
        { answerText: 'Erevan', isCorrect: false },
        { answerText: 'Baku', isCorrect: false },
      ],
    },
    {
      questionText: 'What is your gender?',
      answerOptions: [
        { answerText: 'Ma genda, i ma mechanic', isCorrect: true },
        { answerText: 'Attack helicopter', isCorrect: false },
        { answerText: 'Email', isCorrect: false },
        { answerText: 'Shkipidi toilet', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the best rapper in the world?',
      answerOptions: [
        { answerText: '4 dasi, vache', isCorrect: true },
        { answerText: 'Diddy', isCorrect: false },
        { answerText: 'Vako', isCorrect: false },
        { answerText: 'Bickina', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const handleAnswerClick = (isCorrect: boolean, answerIndex: number) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setSelectedAnswers((prevAnswers) => [...prevAnswers, answerIndex]);

    const nextQuestion = currentQuestion + 1;
    setShowResult(true);

    setTimeout(() => {
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {quizCompleted ? (
          <div className={styles.result}>
            <h2>Quiz Completed!</h2>
            <p>
              Your score is: {score}/{questions.length}
            </p>
            <div className={styles.answerReview}>
              {questions.map((question, questionIndex) => (
                <div key={questionIndex} className={styles.questionReview}>
                  <h3>{question.questionText}</h3>
                  {question.answerOptions.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`${styles.answerOption} ${
                        selectedAnswers[questionIndex] === optionIndex
                          ? option.isCorrect
                            ? styles.correct
                            : styles.incorrect
                          : option.isCorrect
                          ? styles.correct
                          : ''
                      }`}
                    >
                      {option.answerText}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className={styles.containerWrapper}>
              <span>
                Question {currentQuestion + 1}/{questions.length}
              </span>
              <div>{questions[currentQuestion].questionText}</div>
            </div>
            <div>
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleAnswerClick(option.isCorrect, index)}
                  className={styles.answerOption}
                >
                  {option.answerText}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
