const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-col2-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hello, I am Antonio!</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem quo, veniam alias facere eos et sunt numquam id quae
                maiores facilis exercitationem odit repudiandae vero minus quos
                ex blanditiis voluptas?
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
                <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>
                <div>
                    <p className="grid-headtext">Tech Stack</p>
                    <p className="grid-subtext">I specialize Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem adipisci vero architecto, enim voluptates minima cumque molestias sint esse pariatur quod voluptate, perspiciatis aperiam praesentium ipsum porro impedit quia.</p>
                </div>

            </div>

        </div>
        <div>
            
        </div>
      </div>
    </section>
  );
};

export default About;
