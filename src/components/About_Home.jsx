import React from "react";
import {
  Divider,
  Header,
  Image,
  Container,
  Button,
  Icon,
} from "semantic-ui-react";

const AboutHome = () => {
  const profile = require("../images/profile.png");
  return (
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
        I am Kevin Jeevanandham. Graduate Programmer Analyst from NBCC with
        Honours. I am interested and enthusiastic to learn new skills and
        technology in the computer field. Prominently creative and learn new
        thing quickly when comes to computer. Some of my favorite programming
        languages are React, Java, JavaScript, SQL, PHP and C#. I have developed
        some projects in PHP, Java, Nodejs, React and React Native.
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
  );
};

export default AboutHome;

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
