import React, { useEffect, useState } from "react";
import {
  Divider,
  Container,
  Header,
  Grid,
  Image,
  Button,
  Icon,
  Transition,
} from "semantic-ui-react";

const SpecializedSkills = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  const img = require("../images/specialized_skills/nodejs.png");

  useEffect(() => {
    const skills = require("../data/specializedSkills.json");

    if (skills) {
      setData([...skills]);
    }
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position >= 1650 && visible !== true) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const HandleSkills = () => {
    if (data) {
      const loopLimit = Math.ceil(data.length / 2);
      const tempData = data;
      let index = 0;

      return [...Array(loopLimit)].map(() => {
        let limit = index + 2;
        let currentData = tempData.slice(index, limit);
        index += 2;

        return <Grid.Row>{HandleIndividualSkills(currentData)}</Grid.Row>;
      });
    }
    return null;
  };

  const HandleIndividualSkills = (skills) => {
    return skills.map((skill) => {
      let img = require(`../images/specialized_skills/${skill.img}`);
      return (
        <Grid.Column width={8}>
          <Transition.Group
            animation={skill.animation}
            duration={skill.transition}
          >
            {visible && (
              <Container style={styles.descriptionContainer}>
                <center>
                  <Image src={img.default} size="large" centered />
                  <Header as="h2" textAlign="center">
                    {skill.title}
                  </Header>
                  <p>{skill.description}</p>
                  {skill.link && (
                    <Button
                      color="black"
                      onClick={() => window.open(skill.link, "_blank")}
                    >
                      <Icon name="github" />
                      GitHub
                    </Button>
                  )}
                </center>
              </Container>
            )}
          </Transition.Group>
        </Grid.Column>
      );
    });
  };

  return (
    <div>
      <Container>
        <Divider horizontal>
          <Header as="h1" textAlign="center">
            Other SpecializedSkills Languages
          </Header>
        </Divider>
        <Grid columns={2}>{data && HandleSkills()}</Grid>
      </Container>
    </div>
  );
};

export default SpecializedSkills;

const styles = {
  descriptionContainer: {
    padding: "50px",
  },
  paragraph: {
    fontFamily: "verdana",
    fontSize: "1.1rem",
  },
};
