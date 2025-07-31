"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, RotateCcw, Languages } from "lucide-react"

type Language = "en" | "ar"

const translations = {
  en: {
    questions: [
      {
        question: "What is the burden of proof required in criminal cases?",
        options: [
          "Preponderance of evidence",
          "Clear and convincing evidence",
          "Beyond a reasonable doubt",
          "Substantial evidence",
        ],
        correct: 2,
      },
      {
        question: "Which principle establishes that evidence obtained illegally cannot be used in court?",
        options: ["Miranda Rule", "Exclusionary Rule", "Hearsay Rule", "Best Evidence Rule"],
        correct: 1,
      },
      {
        question: "In contract law, what makes an agreement legally binding?",
        options: ["Written documentation", "Consideration and mutual assent", "Notarization", "Witness signatures"],
        correct: 1,
      },
      {
        question: "What is the statute of limitations for most felonies?",
        options: ["1 year", "3 years", "5 years", "Varies by jurisdiction"],
        correct: 3,
      },
      {
        question: "Which constitutional amendment protects against self-incrimination?",
        options: ["Fourth Amendment", "Fifth Amendment", "Sixth Amendment", "Eighth Amendment"],
        correct: 1,
      },
      {
        question: "What is required for a valid search warrant?",
        options: ["Police suspicion", "Reasonable doubt", "Probable cause", "Beyond reasonable doubt"],
        correct: 2,
      },
      {
        question: "In tort law, what are the three elements of negligence?",
        options: [
          "Intent, action, harm",
          "Duty, breach, causation",
          "Duty, breach, damages",
          "Action, causation, intent",
        ],
        correct: 2,
      },
      {
        question: "What is the difference between murder and manslaughter?",
        options: ["Premeditation and intent", "Weapon used", "Location of crime", "Age of victim"],
        correct: 0,
      },
    ],
    ui: {
      question: "Question",
      of: "of",
      score: "Score",
      quizComplete: "Legal Quiz Complete!",
      perfectScore: "Perfect Score! Outstanding legal knowledge! ⚖️",
      greatJob: "Excellent Work! Strong legal foundation! 👨‍⚖️",
      goodWork: "Good Performance! Keep studying! 📚",
      keepPracticing: "More Practice Needed! Review your materials! 📖",
      tryAgain: "Try Again",
      correct: "⚖️ Correct! Well reasoned!",
      incorrect: "❌ Incorrect! Review this topic!",
      nextQuestion: "Next Question",
      viewResults: "View Results",
      switchToArabic: "العربية",
      switchToEnglish: "English",
      backToMenu: "Back to Menu",
    },
  },
  ar: {
    questions: [
      {
        question: "ما هو عبء الإثبات المطلوب في القضايا الجنائية؟",
        options: ["رجحان الأدلة", "أدلة واضحة ومقنعة", "ما وراء الشك المعقول", "أدلة جوهرية"],
        correct: 2,
      },
      {
        question: "أي مبدأ ينص على أن الأدلة المحصلة بطريقة غير قانونية لا يمكن استخدامها في المحكمة؟",
        options: ["قاعدة ميراندا", "قاعدة الاستبعاد", "قاعدة الإشاعة", "قاعدة أفضل دليل"],
        correct: 1,
      },
      {
        question: "في قانون العقود، ما الذي يجعل الاتفاقية ملزمة قانونياً؟",
        options: ["التوثيق المكتوب", "المقابل والموافقة المتبادلة", "التوثيق", "توقيعات الشهود"],
        correct: 1,
      },
      {
        question: "ما هي مدة التقادم لمعظم الجنايات؟",
        options: ["سنة واحدة", "3 سنوات", "5 سنوات", "تختلف حسب الولاية القضائية"],
        correct: 3,
      },
      {
        question: "أي تعديل دستوري يحمي من الإدانة الذاتية؟",
        options: ["التعديل الرابع", "التعديل الخامس", "التعديل السادس", "التعديل الثامن"],
        correct: 1,
      },
      {
        question: "ما المطلوب لإذن تفتيش صالح؟",
        options: ["شك الشرطة", "شك معقول", "سبب محتمل", "ما وراء الشك المعقول"],
        correct: 2,
      },
      {
        question: "في قانون الضرر، ما هي العناصر الثلاثة للإهمال؟",
        options: [
          "القصد، الفعل، الضرر",
          "الواجب، الإخلال، السببية",
          "الواجب، الإخلال، الأضرار",
          "الفعل، السببية، القصد",
        ],
        correct: 2,
      },
      {
        question: "ما الفرق بين القتل العمد والقتل غير العمد؟",
        options: ["سبق الإصرار والقصد", "السلاح المستخدم", "مكان الجريمة", "عمر الضحية"],
        correct: 0,
      },
    ],
    ui: {
      question: "السؤال",
      of: "من",
      score: "النتيجة",
      quizComplete: "انتهى الاختبار القانوني! ⚖️",
      perfectScore: "نتيجة مثالية! معرفة قانونية متميزة! ⚖️",
      greatJob: "عمل ممتاز! أساس قانوني قوي! 👨‍⚖️",
      goodWork: "أداء جيد! استمر  ! 📚",
      keepPracticing: "تحتاج لمزيد من التدريب! راجع موادك! ",
      tryAgain: "حاول مرة أخرى",
      correct: "⚖️ صحيح! استنتاج سليم!",
      incorrect: "❌ خطأ! راجع هذا الموضوع!",
      nextQuestion: "السؤال التالي",
      viewResults: "عرض النتائج",
      switchToArabic: "العربية",
      switchToEnglish: "English",
      backToMenu: "العودة للقائمة",
    },
  },
}

export default function Component() {
  const [showStartMenu, setShowStartMenu] = useState(true)
  const [language, setLanguage] = useState<Language>("ar")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [animationState, setAnimationState] = useState<"idle" | "correct" | "wrong">("idle")
  const [quizComplete, setQuizComplete] = useState(false)

  const t = translations[language]
  const isRTL = language === "ar"

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === t.questions[currentQuestion].correct

    if (isCorrect) {
      setScore(score + 1)
      setAnimationState("correct")
    } else {
      setAnimationState("wrong")
    }

    setShowResult(true)
  }

  const nextQuestion = () => {
    if (currentQuestion < t.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setAnimationState("idle")
    } else {
      setQuizComplete(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setAnimationState("idle")
    setQuizComplete(false)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
    // Reset quiz when language changes
    resetQuiz()
  }

  const progress = ((currentQuestion + 1) / t.questions.length) * 100

  const startQuiz = () => {
    setShowStartMenu(false)
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center p-4 ${isRTL ? "rtl" : "ltr"} relative overflow-hidden font-arabic`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Improved Background Flash Effects */}
      {animationState === "correct" && (
        <div
          className="fixed inset-0 pointer-events-none z-40 transition-all duration-700 ease-out"
          style={{
            background: "linear-gradient(45deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.25))",
            animation: "correctFlash 1.2s ease-out forwards",
          }}
        />
      )}
      {animationState === "wrong" && (
        <div
          className="fixed inset-0 pointer-events-none z-40 transition-all duration-500 ease-out"
          style={{
            background: "linear-gradient(45deg, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0.25))",
            animation: "wrongFlash 1s ease-out forwards",
          }}
        />
      )}

      {/* Start Menu */}
      {showStartMenu && (
        <div className="relative w-full max-w-2xl">
          <Button
            onClick={toggleLanguage}
            variant="outline"
            className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} mb-4 z-10`}
          >
            <Languages className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
            {language === "en" ? t.ui.switchToArabic : t.ui.switchToEnglish}
          </Button>

          <Card className="w-full mt-12 text-center">
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-6">
                <img
                  src="logo.png?height=120&width=120&text=⚖️+Law+Quiz"
                  alt="Legal Quiz Logo"
                  className="w-70 h-70 shadow-lg p-3"
                />
              </div>
              <CardTitle className="text-4xl font-bold text-gray-800 mb-4">
                {language === "en" ? "Legal Knowledge Quiz" : "نظام القمة تسأل  "}
              </CardTitle>
              <p className="text-lg text-gray-600">
                {language === "en"
                  ? "Test your legal expertise with challenging questions!"
                  : "اختبر خبرتك القانونية بأسئلة تحدي!"}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">

              <Button onClick={startQuiz} size="lg" className="text-xl px-12 py-4 bg-gray-700 hover:bg-gray-800">
                {language === "en" ? "Start Legal Quiz" : "ابدأ الاختبار القانوني"}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quiz Complete Screen */}
      {!showStartMenu && quizComplete && (
        <div className="relative w-full max-w-2xl">
          <Button
            onClick={toggleLanguage}
            variant="outline"
            className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} mb-4 z-10`}
          >
            <Languages className="mr-2 h-4 w-4" />
            {language === "en" ? t.ui.switchToArabic : t.ui.switchToEnglish}
          </Button>

          <Card className="w-full mt-12">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-700">{t.ui.quizComplete}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl font-bold text-gray-600">
                {score}/{t.questions.length}
              </div>
              <div className="text-xl text-gray-600">
                {score === t.questions.length
                  ? t.ui.perfectScore
                  : score >= t.questions.length * 0.8
                    ? t.ui.greatJob
                    : score >= t.questions.length * 0.6
                      ? t.ui.goodWork
                      : t.ui.keepPracticing}
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} className="text-lg px-8 py-3">
                  <RotateCcw className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t.ui.tryAgain}
                </Button>
                <Button onClick={() => setShowStartMenu(true)} variant="outline" className="text-lg px-8 py-3">
                  {language === "en" ? "Back to Menu" : "العودة للقائمة"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quiz Questions */}
      {!showStartMenu && !quizComplete && (
        <div className="relative w-full max-w-2xl">
          <Button
            onClick={toggleLanguage}
            variant="outline"
            className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} mb-4 z-10`}
          >
            <Languages className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
            {language === "en" ? t.ui.switchToArabic : t.ui.switchToEnglish}
          </Button>

          <Card
            className={`w-full mt-12 transition-all duration-300 ${
              animationState === "correct"
                ? "bg-gray-50 border-gray-400 shadow-gray-300 shadow-lg"
                : animationState === "wrong"
                  ? "bg-gray-100 border-gray-500 shadow-gray-400 shadow-lg"
                  : "shadow-xl bg-white"
            }`}
          >
            <CardHeader>
              <div className={`flex justify-between items-center mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="text-sm font-medium text-gray-500">
                  {t.ui.question} {currentQuestion + 1} {t.ui.of} {t.questions.length}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {t.ui.score}: {score}/{t.questions.length}
                </div>
              </div>
              <Progress value={progress} className="mb-4" />
              <CardTitle className="text-2xl font-bold text-center">
                {t.questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {t.questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 font-medium ${
                    isRTL ? "text-right" : "text-left"
                  } ${
                    selectedAnswer === null
                      ? "border-gray-300 hover:border-gray-500 hover:bg-gray-100"
                      : selectedAnswer === index
                        ? index === t.questions[currentQuestion].correct
                          ? "border-gray-600 bg-gray-200 text-gray-800"
                          : "border-gray-700 bg-gray-300 text-gray-900"
                        : index === t.questions[currentQuestion].correct && showResult
                          ? "border-gray-600 bg-gray-200 text-gray-800"
                          : "border-gray-200 bg-gray-50 text-gray-400"
                  }`}
                >
                  <div className={`flex items-center justify-between `}>
                    <span>{option}</span>
                    {showResult && selectedAnswer === index && (
                      <div className="animate-pulse">
                        {index === t.questions[currentQuestion].correct ? (
                          <CheckCircle className="h-6 w-6 text-gray-600" />
                        ) : (
                          <XCircle className="h-6 w-6 text-gray-700" />
                        )}
                      </div>
                    )}
                    {showResult && index === t.questions[currentQuestion].correct && selectedAnswer !== index && (
                      <CheckCircle className="h-6 w-6 text-gray-600 animate-pulse" />
                    )}
                  </div>
                </button>
              ))}

              {showResult && (
                <div className="text-center pt-6">
                  <div
                    className={`text-lg font-bold mb-4 ${
                      selectedAnswer === t.questions[currentQuestion].correct ? "text-gray-700" : "text-gray-800"
                    } ${isRTL ? "font-arabic" : ""}`}
                  >
                    {selectedAnswer === t.questions[currentQuestion].correct ? t.ui.correct : t.ui.incorrect}
                  </div>
                  <Button onClick={nextQuestion} className="text-lg px-8 py-3">
                    {currentQuestion < t.questions.length - 1 ? t.ui.nextQuestion : t.ui.viewResults}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Green stars celebration effects for correct answers */}
      {animationState === "correct" && (
        <div className="fixed inset-0 pointer-events-none z-30">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-600 animate-ping opacity-70 text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: "0.8s",
              }}
            >
              ⭐
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
