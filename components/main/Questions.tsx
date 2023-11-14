import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const FAQData = [
  {
    question: "What is a hackathon ?",
    answer:
      "A hackathon is a programming competition in which competitors use technology to build innovative projects within a fixed time duration. There will be opportunities to win cool prizes, learn from our key-note speakers, and network with our sponsors.",
  },
  {
    question: "Who can participate in HackSRM ?",
    answer:
      "Anyone! Whether you are a total beginner or a tech wizard, it doesn’t matter. We encourage anyone who is interested in learning more about Hackathons, programming, and the tech industry to join HackSRM!",
  },
  {
    question: "Do I have to know how to code to join ?",
    answer:
      "Nope! You can learn along the way or team up with experienced programmers. Skills such as designing, business planning, and etc are all going to impact the projects in various ways!",
  },
  {
    question: "How much does it cost to participate in HackSRM ?",
    answer:
      "Zero. Zip. Zilch. Nada. Nothing. Admission to HackSRM is completely free, thanks to our sponsors!",
  },
  {
    question: "Is it a team event ?",
    answer:
      "Yes, you can form teams of up to 4 people. If you don't have a team, don't worry! We will have a few workshops and talks to help you get started. You can also join our Discord server to find teammates before the event!",
  },
  {
    question: "Can I apply individually ?",
    answer: "Yes, you can also form a team after you get selected.",
  },

  {
    question: "Is there a code of conduct ?",
    answer:
      "Attendees must abide by our Code of Conduct. We want to respect each other and keep HackSRM a safe environment for all participants.",
  },
  {
    question: "What is the venue of the hackathon ?",
    answer:
      "HackSRM will be hosted on May 19th - 20th 2023 through Online. All you need is to create a Discord account to communicate with our HackSRM community.",
  },
];

export function Questions() {
  return (
    <section id="#questions" className="max-h-screen">
      <div className="mb-20 text-center text-4xl font-semibold sm:text-5xl  bg-clip-text text-transparent Welcome-text sourcecodebold">
        Frequently Asked Questions
      </div>
      <div className="mx-auto px-3">
        <div className="mx-auto flex max-w-2xl font-roboto-mono flex-col space-y-3 rounded-md">
          {FAQData.map((faq) => {
            
            return (
              <div key={faq.question} className="z-10">
                <QuestionsAndAnswers key={faq.question} faq={faq} />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className='w-full h-full opacity-30 z-[-30] flex items-center justify-center bg-cover'>
          <video
          loop
          autoPlay
          playsInline
          muted
          className='h-full w-full mb-[1350px]'
          preload='false'
          src="/encryption.webm"></video>

        </div>
    </section>
  );
}

const QuestionsAndAnswers = ({
  faq,
}: {
  faq: { question: string; answer: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
    id="questions">
    <div className="px-4 shadow" key={faq.question}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex cursor-pointer justify-between gap-2 py-3 text-white hover:text-purple-500 active:text-purple-200 sourcecode"
      >
        <span className="z-10 text-xl sourcecode transition duration-100">
          {faq.question}
        </span>
        <span>
          {isOpen ? (
            <IconChevronUp stroke={1.5} size={24} />
          ) : (
            <IconChevronDown size={24} stroke={1.5} />
          )}
        </span>
      </div>
      {isOpen ? (
        <p className="mb-4 py-2 font-normal text-gray-300 sourcecode">
          {faq.answer}
        </p>
      ) : null}
    </div>
    </section>
    
  );
};