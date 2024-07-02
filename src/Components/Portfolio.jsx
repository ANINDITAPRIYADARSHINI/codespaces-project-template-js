/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Cosmic Explorer",
    description:
      "Unlock the Cosmos: Navigate a galaxy of stunning images with Cosmic Explorer, powered by NASA's Image Library API. Here, One can search Images and learn more about them.",
    url: "cosmic-explorerr.netlify.app/",
  },
  {
    title: "Tenzies A Game",
    description: "A fun dice game.",
    url: "tenzies-a-game.netlify.app/",
  },
  {
    title: "Wild Paws",
    description:
      "Save the Wild Ones: The sole purpose of this site is to raise awareness towards protecting and taking care of the wild animals by adopting & taking the initiative towards this noble cause, by taking responsibility for those faunas.",
    url: "wild-paws.netlify.app/",
  },
  {
    title: "Gallery",
    description:
      "Explore Gallery Arena: Immerse in a diverse collection of projects. From a single-page website to a multipage website, it's a place of my creativity and innovation. Take a journey through my projects and discover the artistry within.",
    url: "gallerry.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center", color: "#96ABA3" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
