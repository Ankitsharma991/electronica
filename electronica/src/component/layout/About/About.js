import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import img from "../../../images/2.jpg"
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/an_kit.11";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={img}
              alt="Founder"
            />
            <Typography>Ankit Sharma</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample electronica gadgetry website made by
              @AnkitSharma. Only with the purpose to Learn MERN Stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Reach Out to Us</Typography>
            <a href="/" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
