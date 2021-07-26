import React, { useState, useEffect } from "react";
import {
  Divider,
  Header,
  Image,
  Container,
  Button,
  Icon,
  Transition,
} from "semantic-ui-react";

const About = () => {
  document.title = "About";
  const [visible, setVisible] = useState(false);
  const profile = require("../images/profile.png");

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <Transition.Group animation="scale" duration={1000}>
        {visible && (
          <Container>
            <Image
              src={profile.default}
              style={styles.profilePic}
              circular
              centered
              size="large"
            />
            <Divider horizontal>
              <Header as="h1" textAlign="center">
                About
              </Header>
            </Divider>
            <p style={styles.aboutDescription}>
              I am Kevin Jeevanandham. Graduate Programmer Analyst from NBCC
              with Honours. I am a passionate full-stack
              developer/Programmer—experience in back-end and front-end
              technologies. I am an Independent and fast learner with a focus on
              attention to detail. I am keen on learning new skills in terms of
              technical and non-technical aspects. I have hands-on experience in
              React, Java, C#.Net, JavaScript, SQL, PHP, Nodejs, and AWS.
            </p>
            <p style={styles.aboutDescription}>
              I am creative and problem-solving in complex sets. I am a team
              player and worked with various groups of programmers on different
              projects at NBCC. I am adaptive to the new environment and an
              autodidactic.
            </p>

            <Container style={styles.buttonContainer}>
              <center>
                <Button
                  color="linkedin"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/kevin-jeevanandham-daniel-46b0ab194/",
                      "_blank"
                    )
                  }
                >
                  <Icon name="linkedin" />
                  LinkedIn
                </Button>
                <Button
                  color="black"
                  onClick={() =>
                    window.open("https://github.com/kevin-jeeva", "_blank")
                  }
                >
                  <Icon name="github" />
                  GitHub
                </Button>
              </center>
            </Container>
          </Container>
        )}
      </Transition.Group>
    </>
  );
};

export default About;

const styles = {
  profilePic: {
    padding: "5rem",
  },
  aboutDescription: {
    fontSize: "1.1rem",
    fontFamily: "Verdana",
    lineHeight: "1.5",
    textAlign: "center",
    padding: "15px",
  },
  buttonContainer: {
    padding: "25px",
    width: " 50%",
    margin: "auto",
    marginBottom: "3rem",
  },
};
