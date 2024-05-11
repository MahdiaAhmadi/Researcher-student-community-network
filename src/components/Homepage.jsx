import FeaturesCard from "./FeaturesCard";
import Contact from "./contact";

export default function HomePage() {
  const svg1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-12 h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  );
  const svg2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-12 h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
  const svg3 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-12 h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    </svg>
  );

  return (
    <div className=" w-full ">
      <div
        className="bg-cover bg-center bg-no-repeat bg-blend-multiply h-60"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265046_1280.jpg')",
        }}
      >
        <div className="backdrop-blur-sm p-10 text-center ">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to The Research Hub
          </h1>
          <p className="text-blue-400 font-semibold">
            Communicate with your desired Researchers Easily
          </p>
        </div>
      </div>
      <section className=" py-12">
        <div className="w-full text-center">

          <h2 className="text-sm font-bold mb-4 text-fifth hover:underline">
            Our features{" "}
          </h2>
          <p className="text-white text-4xl mb-8 font-sans">
            The service we offer is specifically designed <br />
            to meet your Needs
          </p>

          <div className="features-card flex justify-between w-full mt-20">
            <FeaturesCard
              title="Publish Research"
              body="Publish your Research papers and make it accessible inside a community ."
              btn_title="Publish "
              svg_icon={svg1}
            />
            <FeaturesCard
              title="Find Research"
              body="Find Research Papers from different fields, Researchers, categories."
              btn_title="Find"
              svg_icon={svg2}
            />
            <FeaturesCard
              title="Become Researcher"
              body="measure the progression of your profile to become a researcher"
              btn_title="Measure "
              svg_icon={svg3}
            />
          </div>

        </div>
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
