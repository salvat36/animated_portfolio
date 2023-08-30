const CV = () => {
  return (
    <div className="font-sans bg-transparent mt-20">
      <div className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm mt-4">
          Salvat36@gmail.com | (845) 754-6125 |{" "}
          <a href="https://github.com/yourgithub" class="text-blue-400">
            Github
          </a>{" "}
          |{" "}
          <a href="https://linkedin.com/in/yourlinkedin" class="text-blue-400">
            LinkedIn
          </a>
        </p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="mt-6">
          <h2 className="text-2x1 font-semibold">
            {" "}
            FULL-STACK APPLICATION DEVELOPMENT
          </h2>
          <p className="mt-2">
            Software engineer blending technical expertise with a sales
            background to drive digital innovation in business workflows.
          </p>
        </div>

        {/* technical projects */}
        <div className="mt-10">
          <h2 className="text-2x1 font-semibold">TECHNICAL SKILLS</h2>
          <p class="font-semibold mt-2">
            Javascript (ES6), React, Redux, Python, Postgres, SQL, Redux, HTML,
            CSS, Git, Framer Motion, NextJS, Figma, Flask
          </p>
        </div>
        {/* technical projects */}
        <div className="mt-4">
          <div variant='h3' className=""></div>
        </div>
      </div>
    </div>
  );
};

export default CV;
