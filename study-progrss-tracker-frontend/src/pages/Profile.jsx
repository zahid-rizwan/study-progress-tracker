import React, { useState } from 'react';

const Profile = () => {
  const units = [
    {
      id: 1,
      name: "Unit 1: Introduction to Cyber Law",
      questions: [
        {
          id: 1,
          question:
            "What is the importance of cyber law in the digital age?",
          options: [
            { id: 1, text: "To regulate internet usage", isCorrect: false },
            { id: 2, text: "To prevent cyber crimes", isCorrect: false },
            { id: 3, text: "To provide legal framework for cyberspace", isCorrect: true },
            { id: 4, text: "To restrict online activities", isCorrect: false },
          ],
        },
        {
          id: 2,
          question:
            "What is the need for cyber law?",
          options: [
            { id: 1, text: "To regulate internet usage", isCorrect: false },
            { id: 2, text: "To prevent cyber crimes", isCorrect: true },
            { id: 3, text: "To provide legal framework for cyberspace", isCorrect: false },
            { id: 4, text: "To restrict online activities", isCorrect: false },
          ],
        },
        {
          id: 3,
          question:
            "What is cyber jurisprudence?",
          options: [
            { id: 1, text: "Study of cyber warfare tactics", isCorrect: false },
            { id: 2, text: "Legal principles and precedents related to cyber law", isCorrect: true },
            { id: 3, text: "Enforcement of cyber laws in international jurisdictions", isCorrect: false },
            { id: 4, text: "Regulation of internet service providers", isCorrect: false },
          ],
        },
        {
          id: 4,
          question:
            "What are the issues of jurisdiction in cyberspace?",
          options: [
            { id: 1, text: "Determining the legal framework for online transactions", isCorrect: false },
            { id: 2, text: "Establishing boundaries for cyber warfare", isCorrect: true },
            { id: 3, text: "Resolving conflicts in international cybercrime cases", isCorrect: false },
            { id: 4, text: "Regulating internet access within national borders", isCorrect: false },
          ],
        },
        {
          id: 5,
          question:
            "What is the Minimum Contacts Theory related to jurisdiction?",
          options: [
            { id: 1, text: "Minimum number of cyber crimes required to establish jurisdiction", isCorrect: false },
            { id: 2, text: "Minimum level of technological proficiency required to participate in cyberspace", isCorrect: false },
            { id: 3, text: "Minimum level of contact a defendant must have with a jurisdiction to be subject to its laws", isCorrect: true },
            { id: 4, text: "Minimum encryption standards required for online transactions", isCorrect: false },
          ],
        },
        {
          id: 6,
          question:
            "Which theory of jurisdiction involves assessing the effects of a cyber activity on a particular jurisdiction?",
          options: [
            { id: 1, text: "Minimum Contacts Theory", isCorrect: false },
            { id: 2, text: "Sliding Scale Theory", isCorrect: false },
            { id: 3, text: "Effects Test", isCorrect: true },
            { id: 4, text: "International targeting", isCorrect: false },
          ],
        },
        {
          id: 7,
          question:
            "What is the Sliding Scale Theory in jurisdiction?",
          options: [
            { id: 1, text: "Determines jurisdiction based on the geographical location of the cyber activity", isCorrect: false },
            { id: 2, text: "Allows jurisdictions to slide jurisdictional boundaries based on the severity of the cyber crime", isCorrect: true },
            { id: 3, text: "Sliding scale penalties for cyber crimes", isCorrect: false },
            { id: 4, text: "Determines jurisdiction based on the sliding scale of technological advancement in a jurisdiction", isCorrect: false },
          ],
        },
        {
          id: 8,
          question:
            "What does the International targeting theory of jurisdiction involve?",
          options: [
            { id: 1, text: "Targeting international organizations for cyber crimes", isCorrect: false },
            { id: 2, text: "Targeting specific individuals across international borders for cyber crimes", isCorrect: true },
            { id: 3, text: "Targeting international cooperation in cyber law enforcement", isCorrect: false },
            { id: 4, text: "Targeting international cyber infrastructure for regulation", isCorrect: false },
          ],
        },
        {
          id: 9,
          question:
            "What legislation governs jurisdiction in cyberspace in India?",
          options: [
            { id: 1, text: "Cyber Security Act, 2010", isCorrect: false },
            { id: 2, text: "Information Technology Act, 2000", isCorrect: true },
            { id: 3, text: "Cyber Crime Prevention Act", isCorrect: false },
            { id: 4, text: "Electronic Transactions Act", isCorrect: false },
          ],
        },
        {
          id: 10,
          question:
            "What is the purpose of jurisdiction under the IT Act, 2000?",
          options: [
            { id: 1, text: "To restrict access to the internet", isCorrect: false },
            { id: 2, text: "To regulate online behavior and transactions", isCorrect: true },
            { id: 3, text: "To establish boundaries for cyber warfare", isCorrect: false },
            { id: 4, text: "To protect individuals and organizations from cyber crimes", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Unit 2: Cyber Crimes & Legal Framework",
      questions: [
        {
          id: 1,
          question:
            "What constitutes cyber crimes against individuals?",
          options: [
            { id: 1, text: "Hacking", isCorrect: false },
            { id: 2, text: "Digital forgery", isCorrect: false },
            { id: 3, text: "All of the above", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 2,
          question:
            "What legislation in India deals with cyber crimes and legal framework?",
          options: [
            { id: 1, text: "Cyber Crime Prevention Act", isCorrect: false },
            { id: 2, text: "Information Technology Act, 2000", isCorrect: true },
            { id: 3, text: "Cyber Security Act, 2010", isCorrect: false },
            { id: 4, text: "Electronic Transactions Act", isCorrect: false },
          ],
        },
        {
          id: 3,
          question:
            "What is cyber terrorism?",
          options: [
            { id: 1, text: "Utilizing digital means to cause disruption or harm", isCorrect: true },
            { id: 2, text: "Legitimate online activities", isCorrect: false },
            { id: 3, text: "Anonymously browsing the internet", isCorrect: false },
            { id: 4, text: "Unauthorized access to computer systems", isCorrect: false },
          ],
        },
        {
          id: 4,
          question:
            "What are the penalties for cyber defamation under the IT Act, 2000?",
          options: [
            { id: 1, text: "Imprisonment up to 2 years", isCorrect: false },
            { id: 2, text: "Fine up to Rs. 2 lakhs", isCorrect: false },
            { id: 3, text: "Both a and b", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 5,
          question:
            "What is cyber espionage?",
          options: [
            { id: 1, text: "Stealing sensitive information through digital means", isCorrect: true },
            { id: 2, text: "Legitimate online research", isCorrect: false },
            { id: 3, text: "Unauthorized access to computer systems", isCorrect: false },
            { id: 4, text: "Using digital means to attack enemy nations' infrastructure", isCorrect: false },
          ],
        },
        {
          id: 6,
          question:
            "What is the purpose of cyber security?",
          options: [
            { id: 1, text: "To limit technological advancements", isCorrect: false },
            { id: 2, text: "To protect digital assets and infrastructure", isCorrect: true },
            { id: 3, text: "To promote cyber espionage", isCorrect: false },
            { id: 4, text: "To restrict online activities", isCorrect: false },
          ],
        },
        {
          id: 7,
          question:
            "What are the types of cyber security threats?",
          options: [
            { id: 1, text: "Cyber warfare", isCorrect: false },
            { id: 2, text: "Cyber crime", isCorrect: false },
            { id: 3, text: "All of the above", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 8,
          question:
            "What is the need for a comprehensive cyber security policy?",
          options: [
            { id: 1, text: "To restrict access to the internet", isCorrect: false },
            { id: 2, text: "To regulate online behavior and transactions", isCorrect: false },
            { id: 3, text: "To protect digital assets from cyber threats", isCorrect: true },
            { id: 4, text: "To promote censorship on the internet", isCorrect: false },
          ],
        },
        {
          id: 9,
          question:
            "What is a nodal authority in cyber security?",
          options: [
            { id: 1, text: "Central agency responsible for coordinating cyber security efforts", isCorrect: true },
            { id: 2, text: "Individual responsible for cyber espionage", isCorrect: false },
            { id: 3, text: "Digital platform for reporting cyber crimes", isCorrect: false },
            { id: 4, text: "Regulator for internet service providers", isCorrect: false },
          ],
        },
        {
          id: 10,
          question:
            "What is the need for an international convention on cyberspace?",
          options: [
            { id: 1, text: "To limit international cooperation in cyberspace", isCorrect: false },
            { id: 2, text: "To establish norms and rules for behavior in cyberspace", isCorrect: true },
            { id: 3, text: "To restrict access to the internet", isCorrect: false },
            { id: 4, text: "To promote cyber espionage", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Unit 3: Overview of Cyber Security",
      questions: [
        {
          id: 1,
          question:
            "What are the challenges and constraints in Internet Governance?",
          options: [
            { id: 1, text: "Lack of international cooperation", isCorrect: false },
            { id: 2, text: "Cyber warfare", isCorrect: false },
            { id: 3, text: "All of the above", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 2,
          question:
            "What are the different types of cyber threats?",
          options: [
            { id: 1, text: "Cyber warfare", isCorrect: false },
            { id: 2, text: "Cyber crime", isCorrect: false },
            { id: 3, text: "All of the above", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 3,
          question:
            "What is the need for a comprehensive cyber security policy?",
          options: [
            { id: 1, text: "To restrict access to the internet", isCorrect: false },
            { id: 2, text: "To regulate online behavior and transactions", isCorrect: false },
            { id: 3, text: "To protect digital assets from cyber threats", isCorrect: true },
            { id: 4, text: "To promote censorship on the internet", isCorrect: false },
          ],
        },
        {
          id: 4,
          question:
            "What is the need for a nodal authority in cyber security?",
          options: [
            { id: 1, text: "To restrict access to the internet", isCorrect: false },
            { id: 2, text: "To regulate online behavior and transactions", isCorrect: false },
            { id: 3, text: "To coordinate efforts and responses to cyber threats", isCorrect: true },
            { id: 4, text: "To promote censorship on the internet", isCorrect: false },
          ],
        },
        {
          id: 5,
          question:
            "What is the need for an international convention on cyberspace?",
          options: [
            { id: 1, text: "To limit international cooperation in cyberspace", isCorrect: false },
            { id: 2, text: "To establish norms and rules for behavior in cyberspace", isCorrect: true },
            { id: 3, text: "To restrict access to the internet", isCorrect: false },
            { id: 4, text: "To promote cyber espionage", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Unit 4: Cyber Security Vulnerabilities",
      questions: [
        {
          id: 1,
          question:
            "What are the vulnerabilities in software?",
          options: [
            { id: 1, text: "Weak authentication", isCorrect: false },
            { id: 2, text: "Unprotected broadband communications", isCorrect: false },
            { id: 3, text: "All of the above", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 2,
          question:
            "What are the vulnerabilities in system administration?",
          options: [
            { id: 1, text: "Limited access controls", isCorrect: false },
            { id: 2, text: "Unauthorized access", isCorrect: false },
            { id: 3, text: "All of the above", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 3,
          question:
            "What are the vulnerabilities in complex network architectures?",
          options: [
            { id: 1, text: "Weak encryption", isCorrect: false },
            { id: 2, text: "Open access to organizational data", isCorrect: true },
            { id: 3, text: "Limited access controls", isCorrect: false },
            { id: 4, text: "Unauthorized access", isCorrect: false },
          ],
        },
        {
          id: 4,
          question:
            "What are the vulnerabilities in open access to organizational data?",
          options: [
            { id: 1, text: "Weak encryption", isCorrect: false },
            { id: 2, text: "Unauthorized access", isCorrect: false },
            { id: 3, text: "All of the above", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 5,
          question:
            "What are the vulnerabilities in weak authentication?",
          options: [
            { id: 1, text: "Limited access controls", isCorrect: false },
            { id: 2, text: "Unauthorized access", isCorrect: false },
            { id: 3, text: "All of the above", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Unit 5: Securing Web Application",
      questions: [
        {
          id: 1,
          question:
            "What are the basic security measures for HTTP applications?",
          options: [
            { id: 1, text: "Authorization patterns", isCorrect: false },
            { id: 2, text: "Intrusion detection and prevention", isCorrect: false },
            { id: 3, text: "All of the above", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 2,
          question:
            "What are the basic security measures for SOAP services?",
          options: [
            { id: 1, text: "Authorization patterns", isCorrect: false },
            { id: 2, text: "Intrusion detection and prevention", isCorrect: false },
            { id: 3, text: "All of the above", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
        {
          id: 3,
          question:
            "What is identity management in web services?",
          options: [
            { id: 1, text: "Verifying user identity based on physical characteristics", isCorrect: false },
            { id: 2, text: "Verifying user identity before granting access to resources", isCorrect: true },
            { id: 3, text: "Monitoring user activities for accountability", isCorrect: false },
            { id: 4, text: "Encrypting data transmissions", isCorrect: false },
          ],
        },
        {
          id: 4,
          question:
            "What are the authorization patterns in web services?",
          options: [
            { id: 1, text: "Verifying user identity based on physical characteristics", isCorrect: false },
            { id: 2, text: "Verifying user identity before granting access to resources", isCorrect: false },
            { id: 3, text: "Controlling access to resources based on user permissions", isCorrect: true },
            { id: 4, text: "Encrypting data transmissions", isCorrect: false },
          ],
        },
        {
          id: 5,
          question:
            "What are the challenges in securing web applications?",
          options: [
            { id: 1, text: "Physical theft", isCorrect: false },
            { id: 2, text: "Malware infection", isCorrect: false },
            { id: 3, text: "All of the above", isCorrect: true },
            { id: 4, text: "None of the above", isCorrect: false },
          ],
        },
      ],
    },
    // Add more units as needed
  ];
  
  const [selectedUnit, setSelectedUnit] = useState(null);

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
  };

  const QuestionDisplay = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }

      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowScore(true);
      }
    };

    const resetQuiz = () => {
      setCurrentQuestionIndex(0);
      setScore(0);
      setShowScore(false);
    };

    return (
      <div className="container mx-auto p-10">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Your Score: {score} out of {questions.length}
            </h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded shadow"
              onClick={resetQuiz}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Question {currentQuestionIndex + 1}/{questions.length}
            </h2>
            <p className="mb-4">{questions[currentQuestionIndex].question}</p>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option.id}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow"
                  onClick={() => handleAnswerOptionClick(option.isCorrect)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-10">
      <h2 className="text-2xl font-bold mb-4">Select Unit Test</h2>
      <div className="flex flex-wrap">
        <select className=" px-4 py-2 rounded shadow mb-4" onChange={(e) => handleUnitSelect(JSON.parse(e.target.value))}>
          <option value="">Select Unit</option>
          {units.map((unit) => (
            <option key={unit.id} value={JSON.stringify(unit)}>
              {unit.name}
            </option>
          ))}
        </select>
      </div>
      {selectedUnit && (
        <QuestionDisplay questions={selectedUnit.questions} />
      )}
    </div>
  );
};

export default Profile;
