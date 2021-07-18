import React, { useEffect, useState } from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Transition,
} from "semantic-ui-react";

const SkillsLearned = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  const img = require("../images/skills_learned_from/nbcc.png");

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 3080 && visible !== true) {
      setVisible(true);
    }
  };

  useEffect(() => {
    const learnedSkill = require("../data/skillsLearned.json");

    if (learnedSkill) {
      setData([...learnedSkill]);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const HandleSkillsLearned = () => {
    if (data) {
      const loopLimit = Math.ceil(data.length / 3);
      let tempData = data;
      let index = 0;

      return [...Array(loopLimit)].map(() => {
        let limit = index + 3;
        let currentData = tempData.slice(index, limit);
        index += 3;

        return <Grid.Row>{HandleIndividual(currentData)}</Grid.Row>;
      });
    }
  };

  const HandleIndividual = (institutions) => {
    return institutions.map((institute) => {
      let img = require(`../images/skills_learned_from/${institute.img}`);

      return (
        <Grid.Column>
          <Container style={styles.container}>
            <center>
              <div style={styles.header}>
                <Header as="h2" textAlign="center">
                  {institute.title}
                </Header>
              </div>
              <Container style={styles.imgContainer}>
                <Transition.Group
                  animation={"vertical flip"}
                  duration={institute.transition}
                >
                  {visible && (
                    <Image src={img.default} size="huge" style={styles.img} />
                  )}
                </Transition.Group>
              </Container>
              <div style={styles.subTitle}>
                <Header as="h3" textAlign="center">
                  {institute.subTitle}
                </Header>
              </div>
              <p style={styles.description}>{institute.description}</p>
            </center>
          </Container>
        </Grid.Column>
      );
    });
  };

  return (
    <div>
      <Container>
        <Divider horizontal>
          <Header as="h1" textAlign="center">
            Skills Learned From
          </Header>
        </Divider>
        <Grid columns={3}>{data && HandleSkillsLearned()}</Grid>
      </Container>
    </div>
  );
};

export default SkillsLearned;

const styles = {
  container: {
    padding: "50px",
  },
  description: {
    textAlign: "center",
    fontFamily: "verdana",
    fontSize: "1.1rem",
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "230px",
    overflow: "hidden",
  },
  header: {
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "70px",
  },
};
