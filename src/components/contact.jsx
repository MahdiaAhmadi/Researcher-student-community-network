const Contact = () => {
  return (
    <div className="bg-white mt-4 w-full flex space-x-10 ">
      <div className="md:flex-shrink-0 w-[50%]">
        <img
          className=" object-cover rounded-lg"
          src="/social-media.png"
          alt="Team Discussion"
        ></img>
      </div>

      <div className="mt-12  ">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-400 ">About Us</h2>
        </div>
        <div className="flex justify-center items-start ">
          <p className="mt-8 text-gray-600 text-center font-semibold">
            We are a community of Researchers from Diverse Fields publishing
            research papers in different fields. <br />
            get Connected with your scientific community Share your research,
            collaborate with your peers,
            <br /> and get the support you need to advance your career.
          </p>
        </div>
        <div className="Our-work mt-12 inline-block">
          <h2 className="text-blue-400 font-bold mb-3">Explore</h2>
          <ul>
            <li>
              <a
                href="#"
                class="font-medium text-gray-600 hover:underline hover:text-fifth "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-medium text-gray-600 hover:underline hover:text-fifth"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-medium text-gray-600 hover:underline hover:text-fifth"
              >
                Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
