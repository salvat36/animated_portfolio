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
      <div class="min-h-screen flex flex-col justify-start items-center">
        <div class="w-full max-w-screen-md p-4 mt-4 overflow-x-hidden overflow-y-auto">
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">FULL-STACK ENGINEER</h2>
            <p className="mt-2">
              Software engineer blending technical expertise with a sales
              background to drive digital innovation in business workflows.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">TECHNICAL SKILLS</h2>
            <p class="font-semibold mt-2">
              Javascript (ES6), React, Redux, Python, Postgres, SQL, Redux,
              HTML, CSS, Git, Framer Motion, NextJS, Figma, Flask
            </p>
          </div>
          {/* Technical Projects */}
          <div className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold">TECHNICAL PROJECTS</h2>
            <div className="mt-4">
              {/* Project 1 */}
              <h3 className="font-semibold"> EndlessEasel</h3>
              <p className="mt-2">
                A captivating full-stack application designed for art
                enthusiasts to unleash their creativity by generating,
                collecting, and sharing AI-generated artwork.
              </p>
              <p className="mt-2">
                Built front-end using JavaScript and React, coupled with a
                dynamic back-end powered by Flask, SQLAlchemy, and Postgres.
              </p>
              <p className="mt-2">
                Seamlessly integrated OpenAI's API through HuggingFace's
                transformers library, enabling users to generate AI artwork with
                flair.
              </p>
              <p className="mt-2">
                Future enhancements entail crafting precise prompts, empowering
                users to personalize art styles, color schemes, and more.
              </p>
            </div>
            <div className="mt-4">
              {/* Project 2 */}
              <h3 className="font-semibold">Python Adventure</h3>
              <p className="mt-2">
                A compelling CLI-based game meticulously crafted to impart
                foundational version control concepts via Git.
              </p>
              <p>
                Innovatively devised and executed the core gameplay loop,
                skillfully embedding randomized situational text for engaging
                gameplay.
              </p>
              <p>
                Engineered a tailor-made ORM solution for efficient storage and
                retrieval of player data, optimizing the gaming experience.
              </p>
              <p className="mt-2">
                Employed a rich text formatting library to dynamically style the
                CLI; elevating player interactions, warnings, and item drops.
              </p>
            </div>
            <div className="mt-4">
              {/* Project 3 */}
              <h3 className="font-semibold">Guitar Trader</h3>
              <p className="mt-2">
                A captivating e-commerce platform, driven by React, catering to
                guitar aficionados seeking to trade, buy, or sell equipment.
              </p>
              <p className="mt-2">
                Orchestrated seamless search functionality, empowering users to
                fluidly sort products by make, model, or year.
              </p>
              <p className="mt-2">
                Skillfully harnessed MUI to craft a distinctive user experience,
                ensuring intuitive navigation and aesthetic appeal.
              </p>
              <p className="mt-2">
                Introduced a cart feature that empowers users to conveniently
                track their saved items along with associated pricing details,
                enhancing the overall shopping experience.
              </p>
            </div>
            {/* PROFESSIONAL EXPERIENCE */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
