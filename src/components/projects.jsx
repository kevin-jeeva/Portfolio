import React, { useState, useEffect } from "react";
import {
  Container,
  Divider,
  Header,
  Card,
  Image,
  Icon,
  Button,
  Grid,
  Transition,
} from "semantic-ui-react";

const Projects = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const projects = require("../data/projects.json");

    if (projects) {
      setData([...projects]);
    }
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 800 && visible !== true) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const HandleProjects = () => {
    if (data) {
      return data.map((value) => {
        return (
          <Grid.Column>
            <Transition.Group animation="slide up" duration={value.transition}>
              {visible && (
                <Card>
                  <div style={styles.imgContainer}>
                    <Image
                      src={require(`../images/projects/${value.img}`).default}
                      style={styles.img}
                    />
                  </div>
                  <Card.Content>
                    <Card.Header>{value.title}</Card.Header>
                    <Card.Meta>
                      <span className="date">{value.date}</span>
                    </Card.Meta>
                    <Card.Description>{value.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Button
                        color="black"
                        onClick={() => window.open(value.link, "_blank")}
                      >
                        <Icon name="github" />
                        GitHub
                      </Button>
                    </a>
                  </Card.Content>
                </Card>
              )}
            </Transition.Group>
          </Grid.Column>
        );
      });
    }
    return null;
  };

  return (
    <div onWheel={() => console.log("here")}>
      <Container style={styles.container}>
        <Divider horizontal>
          <Header as="h1" textAlign="center">
            Projects
          </Header>
        </Divider>
        <Grid columns={3} style={styles.grid}>
          <Grid.Row>{data && HandleProjects()}</Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;

const styles = {
  imgContainer: {
    height: "250px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "cover",
  },
  container: {
    marginBottom: "70px",
  },
  grid: {
    marginTop: "30px",
  },
};
