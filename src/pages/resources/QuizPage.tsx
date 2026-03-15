import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, XCircle, Award, Clock, BarChart2, ChevronRight } from "lucide-react";

const quizTopics = [
  "Agile Manifesto",
  "Scrum Theory",
  "Scrum Events",
  "Scrum Roles",
  "Scrum Artifacts",
  "Kanban",
  "SAFe",
  "Project Management",
];

const quizzes: Record<string, {
  id: number;
  question: string;
  options: string[];
  answer: number;
}[]> = {
  "Agile Manifesto": [
    {
      id: 1,
      question: "How many principles are in the Agile Manifesto?",
      options: ["10 principles", "12 principles", "14 principles", "16 principles"],
      answer: 1,
    },
    {
      id: 2,
      question: "Which of the following is a core value in the Agile Manifesto?",
      options: [
        "Negotiating contracts over collaboration",
        "Individuals and interactions over processes and tools",
        "Following a plan over responding to change",
        "Documentation over working software",
      ],
      answer: 1,
    },
    {
      id: 3,
      question: "The Agile Manifesto was created in which year?",
      options: ["1999", "2001", "2003", "2005"],
      answer: 1,
    },
  ],
  "Scrum Theory": [
    {
      id: 1,
      question: "Scrum is founded on which theory?",
      options: ["Waterfall Theory", "Empirical Process Control Theory", "Lean Manufacturing Theory", "Six Sigma Theory"],
      answer: 1,
    },
    {
      id: 2,
      question: "Which of the following is a pillar of empiricism in Scrum?",
      options: ["Documentation", "Planning", "Transparency", "Reporting"],
      answer: 2,
    },
  ],
  "Scrum Events": [
    {
      id: 1,
      question: "What is the maximum length of a Sprint?",
      options: ["2 weeks", "3 weeks", "1 month", "6 weeks"],
      answer: 2,
    },
    {
      id: 2,
      question: "How long is the Daily Scrum?",
      options: ["30 minutes", "15 minutes", "45 minutes", "1 hour"],
      answer: 1,
    },
  ],
  "Scrum Roles": [
    {
      id: 1,
      question: "Who is responsible for maximizing the value of the product?",
      options: ["Scrum Master", "Development Team", "Product Owner", "Stakeholders"],
      answer: 2,
    },
  ],
};

const QuizPage: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState("Agile Manifesto");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const currentQuiz = quizzes[activeTopic] || quizzes["Agile Manifesto"];

  const handleAnswer = (questionId: number, optionIndex: number) => {
    if (!submitted) {
      setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    }
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => { setSelectedAnswers({}); setSubmitted(false); };

  const correctCount = submitted
    ? currentQuiz.filter(q => selectedAnswers[q.id] === q.answer).length
    : 0;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-violet-600 to-purple-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-pink-400 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <Award className="w-4 h-4" /> Test Your Knowledge
              </div>
              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                Scrum Master Quiz:{" "}
                <span className="text-yellow-300">Challenge Your Expertise</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto font-medium">
                Test your certification knowledge with our expert-designed quiz series. Instant feedback and detailed explanations included.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex items-center gap-2 text-purple-200 font-medium">
                  <Clock className="w-5 h-5 text-yellow-300" /> <span>No time limit</span>
                </div>
                <div className="flex items-center gap-2 text-purple-200 font-medium">
                  <BarChart2 className="w-5 h-5 text-yellow-300" /> <span>Instant results</span>
                </div>
                <div className="flex items-center gap-2 text-purple-200 font-medium">
                  <CheckCircle className="w-5 h-5 text-yellow-300" /> <span>Detailed explanations</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quiz Content */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="font-black text-slate-900 mb-4 text-sm uppercase tracking-wider">Quiz Topics</h3>
                  <div className="space-y-1">
                    {quizTopics.map((topic, i) => (
                      <button
                        key={i}
                        onClick={() => { setActiveTopic(topic); handleReset(); }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                          activeTopic === topic
                            ? "bg-violet-50 text-violet-600 border border-violet-200"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>{topic}</span>
                        <span className="text-xs text-slate-300">{(quizzes[topic] || []).length}Q</span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-5 text-white">
                    <div className="flex items-center gap-2 text-yellow-200 text-5xl font-black mb-2">⭐</div>
                    <h4 className="font-black mb-1">4.9/5 Rating</h4>
                    <p className="text-purple-200 text-xs font-medium">Based on 18,000+ quiz attempts</p>
                  </div>
                </div>
              </div>

              {/* Quiz Questions */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black text-slate-900">{activeTopic}</h2>
                  {submitted && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-xl text-sm font-black">
                      Score: {correctCount}/{currentQuiz.length}
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {currentQuiz.map((q, qi) => (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: qi * 0.1 }}
                      className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
                    >
                      <div className="flex items-start gap-3 mb-5">
                        <span className="w-7 h-7 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                          {qi + 1}
                        </span>
                        <h3 className="font-bold text-slate-900 text-[15px] leading-relaxed">{q.question}</h3>
                      </div>
                      <div className="space-y-2">
                        {q.options.map((option, oi) => {
                          let optionStyle = "bg-slate-50 hover:bg-violet-50 hover:border-violet-300 border-slate-100";
                          if (submitted) {
                            if (oi === q.answer) optionStyle = "bg-green-50 border-green-300";
                            else if (selectedAnswers[q.id] === oi) optionStyle = "bg-red-50 border-red-300";
                            else optionStyle = "bg-slate-50 border-slate-100 opacity-50";
                          } else if (selectedAnswers[q.id] === oi) {
                            optionStyle = "bg-violet-50 border-violet-400";
                          }

                          return (
                            <button
                              key={oi}
                              onClick={() => handleAnswer(q.id, oi)}
                              className={`w-full text-left px-5 py-3.5 rounded-xl border-2 text-sm font-bold transition-all flex items-center justify-between ${optionStyle}`}
                            >
                              <span className="text-slate-700">{option}</span>
                              {submitted && oi === q.answer && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
                              {submitted && selectedAnswers[q.id] === oi && oi !== q.answer && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  {!submitted ? (
                    <button
                      onClick={handleSubmit}
                      className="bg-violet-600 hover:bg-violet-700 text-white font-black px-8 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-violet-200"
                    >
                      Submit Answers <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleReset}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-3.5 rounded-xl transition-all flex items-center gap-2"
                    >
                      Retry Quiz <ArrowRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuizPage;
