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
        question: "When was the law regulating the legal profession in Kuwait issued?",
        options: ["1960", "1962", "1970", "1985"],
        correct: 1,
      },
      {
        question: "Which authority is responsible for registering lawyers in Kuwait?",
        options: ["Ministry of Justice", "Ministry of Interior", "National Assembly", "Constitutional Court"],
        correct: 0,
      },
      {
        question: "To be registered as a practicing lawyer in Kuwait, one must:",
        options: ["Be a Kuwaiti citizen", "Be a non-Kuwaiti resident", "Be a government employee", "Work in a private company"],
        correct: 0,
      },
      {
        question: "What is the required academic qualification for a lawyer in Kuwait?",
        options: ["High school diploma", "College diploma", "Bachelor of Law", "Master’s degree"],
        correct: 2,
      },
      {
        question: "Who is entitled to hire a lawyer in Kuwait?",
        options: ["Individuals", "Companies", "Government ministries", "All of the above"],
        correct: 3,
      },
      {
        question: "A lawyer appearing before the Constitutional Court in Kuwait must be:",
        options: ["A fresh graduate", "Registered before the Court of Cassation", "A government employee", "A trainee"],
        correct: 1,
      },
      {
        question: "What is the training period required before registration as a practicing lawyer?",
        options: ["6 months", "1 year", "2 years", "3 years"],
        correct: 2,
      },
      {
        question: "Who is prohibited from combining their job with practicing law?",
        options: ["University professor", "Government employee", "Cooperative society member", "Private consultant"],
        correct: 1,
      },
      {
        question: "In Kuwait, the Public Prosecution is considered part of:",
        options: ["Executive authority", "Judicial authority", "Legislative authority", "Ministerial committee"],
        correct: 1,
      },
      {
        question: "Which court in Kuwait has jurisdiction over administrative disputes?",
        options: ["Criminal Court", "Commercial Court", "Court of First Instance – Administrative Circuit", "Sharia Court"],
        correct: 2,
      },
      {
        question: "Which of the following is a principle of the legal profession in Kuwait?",
        options: ["Independence of lawyers", "Complete subordination to the client", "No ethical obligations", "Absolute freedom without limits"],
        correct: 0,
      },
      {
        question: "Which of the following is a disciplinary penalty for lawyers in Kuwait?",
        options: ["Warning", "Imprisonment", "Deportation", "Fine only"],
        correct: 0,
      },
      {
        question: "Which body is responsible for disciplinary accountability of lawyers in Kuwait?",
        options: ["Registration Committee", "Disciplinary Committee", "National Assembly", "Supreme Court"],
        correct: 1,
      },
      {
        question: "Which of the following is a court of fact and appeal in Kuwait?",
        options: ["Court of Cassation", "Court of Appeal", "Constitutional Court", "Court of First Instance"],
        correct: 1,
      },
      {
        question: "The Constitutional Court in Kuwait has jurisdiction over:",
        options: ["Misdemeanor cases", "Electoral appeals", "Civil disputes", "Commercial disputes"],
        correct: 1,
      },
      {
        question: "The legal profession in Kuwait is described as:",
        options: ["A commercial activity", "A professional mission", "A government job", "An unregulated social service"],
        correct: 1,
      },
      {
        question: "Which right is granted to lawyers while performing their duties?",
        options: ["Immunity for defense statements", "Absolute freedom without law", "Exemption from all taxes", "Complete immunity from accountability"],
        correct: 0,
      },
      {
        question: "A lawyer can be removed from the register of practicing lawyers if:",
        options: ["They voluntarily leave the profession", "They suffer from a minor illness", "They take a side job", "The client requests it"],
        correct: 0,
      },
      {
        question: "Can non-lawyers plead before Kuwaiti courts?",
        options: ["Yes, in all cases", "Yes, in minor cases only", "No, unless pleading on their own behalf", "Yes, with a temporary permit"],
        correct: 2,
      },
      {
        question: "What is the minimum age for registration as a lawyer in Kuwait?",
        options: ["18 years", "21 years", "23 years", "25 years"],
        correct: 1,
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
        question: "متى صدر قانون تنظيم مهنة المحاماة في الكويت؟",
        options: ["1960", "1962", "1970", "1985"],
        correct: 1,
      },
      {
        question: "من هي الجهة المسؤولة عن قيد المحامين في الكويت؟",
        options: ["وزارة العدل", "وزارة الداخلية", "مجلس الأمة", "المحكمة الدستورية"],
        correct: 0,
      },
      {
        question: "يشترط لقيد المحامي بجدول المحامين المشتغلين أن يكون:",
        options: ["كويتي الجنسية", "غير كويتي لكن مقيم", "موظف حكومي", "موظف في شركة خاصة"],
        correct: 0,
      },
      {
        question: "ما هو شرط المؤهل العلمي للمحامي في الكويت؟",
        options: ["شهادة ثانوية", "شهادة دبلوم", "شهادة بكالوريوس في الحقوق", "شهادة ماجستير"],
        correct: 2,
      },
      {
        question: "من الجهات التي يحق لها الاستعانة بمحامٍ:",
        options: ["الأفراد", "الشركات", "الوزارات", "جميع ما سبق"],
        correct: 3,
      },
      {
        question: "المحامي أمام المحكمة الدستورية في الكويت يجب أن يكون:",
        options: ["حديث التخرج", "مقيدًا بجدول المحامين المقبولين أمام التمييز", "موظفًا حكوميًا", "متدربًا"],
        correct: 1,
      },
      {
        question: "مدة التدريب قبل القيد في جدول المحامين المشتغلين هي:",
        options: ["6 أشهر", "سنة واحدة", "سنتان", "ثلاث سنوات"],
        correct: 2,
      },
      {
        question: "من لا يجوز له الجمع بين المحاماة وبين وظيفته:",
        options: ["أستاذ الجامعة", "موظف الدولة", "عضو الجمعية التعاونية", "مستشار خاص"],
        correct: 1,
      },
      {
        question: "يقصد بالنيابة العامة في الكويت أنها:",
        options: ["سلطة تنفيذية", "سلطة قضائية", "سلطة تشريعية", "لجنة وزارية"],
        correct: 1,
      },
      {
        question: "المحكمة المختصة بنظر المنازعات الإدارية في الكويت هي:",
        options: ["المحكمة الجزائية", "المحكمة التجارية", "المحكمة الكلية – الدائرة الإدارية", "المحكمة الشرعية"],
        correct: 2,
      },
      {
        question: "أحد مبادئ المحاماة في الكويت:",
        options: ["استقلالية المحامي", "تبعية المحامي للموكل دائمًا", "عدم خضوع المحامي لأخلاقيات", "حرية مطلقة بلا قيود"],
        correct: 0,
      },
      {
        question: "من العقوبات التأديبية للمحامي:",
        options: ["الإنذار", "السجن", "الطرد من الدولة", "الغرامة فقط"],
        correct: 0,
      },
      {
        question: "الهيئة المسؤولة عن مساءلة المحامي تأديبيًا هي:",
        options: ["لجنة القيد", "لجنة التأديب", "مجلس الأمة", "المحكمة العليا"],
        correct: 1,
      },
      {
        question: "أي من المحاكم التالية تعتبر محكمة موضوع واستئناف في الكويت؟",
        options: ["محكمة التمييز", "محكمة الاستئناف", "المحكمة الدستورية", "المحكمة الكلية"],
        correct: 1,
      },
      {
        question: "المحكمة الدستورية في الكويت تختص بـ:",
        options: ["قضايا الجنح", "الطعون الانتخابية", "المنازعات المدنية", "القضايا التجارية"],
        correct: 1,
      },
      {
        question: "مهنة المحاماة في الكويت توصف بأنها:",
        options: ["عمل تجاري", "رسالة مهنية", "وظيفة حكومية", "خدمة اجتماعية بلا تنظيم"],
        correct: 1,
      },
      {
        question: "من الحقوق التي يتمتع بها المحامي أثناء عمله:",
        options: ["الحصانة في ما يبدِيه من دفاع", "حرية مطلقة دون قانون", "الإعفاء من جميع الضرائب", "عدم محاسبته نهائيًا"],
        correct: 0,
      },
      {
        question: "يمكن شطب المحامي من جدول المشتغلين إذا:",
        options: ["ترك المهنة بإرادته", "مرض بسيط", "انتقل لعمل إضافي", "طلب من الموكل"],
        correct: 0,
      },
      {
        question: "هل يجوز لغير المحامي الترافع أمام المحاكم في الكويت؟",
        options: ["نعم، في جميع الدعاوى", "نعم، في القضايا الصغيرة فقط", "لا، إلا إذا ترافع عن نفسه", "نعم، إذا حصل على تصريح مؤقت"],
        correct: 2,
      },
      {
        question: "ما هو السن الأدنى للقيد بجدول المحامين في الكويت؟",
        options: ["18 سنة", "21 سنة", "23 سنة", "25 سنة"],
        correct: 1,
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
    <>
      <style jsx global>{`
        footer {
          display: none !important;
        }
      `}</style>
      <div
        className={`h-screen w-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center p-4 ${isRTL ? "rtl" : "ltr"} overflow-hidden font-arabic fixed inset-0`}
        dir={isRTL ? "rtl" : "ltr"}
        style={{ touchAction: 'none', userSelect: 'none' }}
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
            <CardTitle className="text-4xl font-bold text-gray-800 ">
                {language === "en" ? "Legal Knowledge Quiz" : " القمة تسأل ... "}
              </CardTitle>
              <p className="text-lg text-gray-600">
                {language === "en"
                  ? "because ignorance of the law is no excuse!"
                  : "لأن الجهل بالقانون ليس عذرا!"}
              </p>
              <div className="flex justify-center ">
                <img
                  src="tablet.png?height=120&width=120&text=⚖️+Law+Quiz"
                  alt="Legal Quiz Logo"
                  className="w-80 h-70"
                />
              </div>
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
    </>
  )
}
