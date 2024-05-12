"use client"

// Component for a single publication
const PublicationCard = ({ title, authors, date, doi, isbn, images }) => {
  const publicationType = title.includes("Conference Paper") ? "Conference Paper" : "Article";

  return (
    <div className="py-4 px-6 mb-4 border border-solid border-gray-300 rounded-lg bg-white">
      <div className="text-3xl font-extrabold text-black">{title}</div>
      <div className="justify-center px-10 py-1 mt-2.5 text-center text-emerald-800 whitespace-nowrap bg-cyan-400 bg-opacity-60 max-md:px-5">
        {publicationType}
      </div>
      <div className="flex items-center gap-4 mt-4">
        {images && images.map((image, index) => (
          <div key={index} className="flex items-center">
            <img
              loading="lazy"
              src={image}
              alt={`Author ${index + 1} Image`}
              className="w-12 h-12 rounded-full mr-2"
              style={{ flexShrink: 0 }}
            />
            <div className="text-black">{authors[index]}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-end text-sm text-black mt-4">
        {date} DOI: {doi} ISBN: {isbn}
      </div>
    </div>
  );
};

// Component for a single conference paper
const ConferencePaperCard = ({ title, authors, date, doi, isbn }) => {
  return (
    <div className="py-4 px-6 mb-4 border border-solid border-gray-300 rounded-lg bg-white">
      <div className="text-3xl font-extrabold text-black">{title}</div>
      <div className="justify-center px-10 py-1 mt-2.5 text-center text-emerald-800 whitespace-nowrap bg-cyan-400 bg-opacity-60 max-md:px-5">
        Conference Paper
      </div>
      <div className="flex flex-col gap-1 mt-4">
        {authors.map((author, index) => (
          <div key={index} className="text-black">
            {author}
          </div>
        ))}
      </div>
      <div className="flex justify-end text-sm text-black mt-4">
        {date} DOI: {doi} ISBN: {isbn}
      </div>
    </div>
  );
};

// Component for a single author
const AuthorCard = ({ name, image }) => {
  return (
    <div className="py-4 px-6 mb-4 border border-solid border-gray-300 rounded-lg bg-white">
      <div className="flex gap-1.5">
        <img
          loading="lazy"
          src={image}
          className="shrink-0 aspect-[1.25] w-[25px]"
        />
        <div className="my-auto text-black">{name}</div>
      </div>
    </div>
  );
};

// Component for a single question
const QuestionCard = ({ question }) => {
  return (
    <div className="py-4 px-6 mb-4 border border-solid border-gray-300 rounded-lg bg-white">
      <div className="text-black">{question}</div>
    </div>
  );
};

// Component for Publications section
const PublicationsSection = ({ publications }) => {
  return (
    <div className="max-w-full">
      {publications.map((publication, index) => (
        <PublicationCard
          key={index}
          {...publication}
          images={publication.images}
        />
      ))}
    </div>
  );
};

// Component for Conference Papers section
const ConferencePapersSection = ({ conferencePapers }) => {
  return (
    <div className="max-w-full">
      {conferencePapers.map((paper, index) => (
        <ConferencePaperCard key={index} {...paper} />
      ))}
    </div>
  );
};

// Component for Authors section
const AuthorsSection = ({ authors }) => {
  return (
    <div className="max-w-full">
      {authors.map((author, index) => (
        <AuthorCard key={index} {...author} />
      ))}
    </div>
  );
};

// Component for Questions section
const QuestionsSection = ({ questions }) => {
  return (
    <div className="max-w-full">
      {questions.map((question, index) => (
        <QuestionCard key={index} {...question} />
      ))}
    </div>
  );
};

export {
  AuthorsSection, ConferencePapersSection, PublicationsSection, QuestionsSection
};

