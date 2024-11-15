import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("afelixjdev@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* About Me Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext text-center">Hello, I am Antonio!</p>
              <p className="grid-subtext">
                Hi, I&apos;m Antonio Felix, a Software Engineer based in NY.
                I&apos;m passionate about full-stack development and have a
                strong background in managing cross-functional projects. My
                experience in project management has helped me drive operational
                excellence and deliver impactful solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext text-center">Tech Stack</p>
              <p className="grid-subtext ">
                I specialize in technologies like React, Django, Node.js, and
                Python. I&apos;m always exploring new tools and frameworks to
                stay current. My approach to software engineering focuses on
                delivering user-centered solutions, optimizing performance, and
                working within agile environments. I also have a background in
                project management, which allows me to align technical projects
                with business goals and streamline workflows for teams.
              </p>
            </div>
          </div>
        </div>

        {/* Globe and Remote Work Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40.7128,
                    lng: -74.006,
                    text: "Here I am!!",
                    color: "white",
                    size: 500,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext text-center">
                I work remotely across various time zones!
              </p>
              <p className="grid-subtext text-center">
                I&apos;m located in New York City and available for remote work.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext text-center">
                GRIT: My Driving Force
              </p>
              <p className="grid-subtext">
                <p className="grid-subtext">
                  I believe in GRIT—having the passion and perseverance to
                  achieve long-term goals, even when faced with challenges.
                  It&apos;s about showing up every day, staying focused, and
                  continuing to move forward. I take pride in my integrity and
                  always aim to do the right thing, even when no one is
                  watching. This dedication drives my approach to both personal
                  and professional growth, pushing me to not only meet
                  expectations but exceed them.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  afelixjdev@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
