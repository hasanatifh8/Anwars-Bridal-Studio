import React from "react";

const VideoShowcase = () => {
  return (
    <>
      <section className="bg-IcyBreeze dark:bg-darklight">
        <div className="container">
          <div className="text-center pb-10">
            <h2 className="pb-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              Watch Us In Action
            </h2>
            <p
              className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-920 m-auto"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              A quick look at our work behind the scenes.
            </p>
          </div>
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className="rounded-22 overflow-hidden shadow-round-box">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1616072506630667%2F&show_text=true&width=267&t=0"
                width="267"
                height="591"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoShowcase;
