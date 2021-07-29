import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  Container,
  Image,
  Grid,
  Header,
  Divider,
  Button,
  Icon,
} from "semantic-ui-react";

const Language = () => {
  const [data, setData] = useState(null);

  const java = require("../images/language/java.png");
  const php = require("../images/language/php.png");
  const csharp = require("../images/language/csharp.png");
  const js = require("../images/language/javascript.png");
  const sql = require("../images/language/sql.png");
  const html = require("../images/language/html.png");

  useEffect(() => {
    const languages = require("../data/languages.json");

    if (languages) {
      setData([...languages]);
    }
  }, []);

  const handleCarousel = () => {
    if (data) {
      return data.map((language) => {
        const img = require(`../images/language/${language.image}`);

        return (
          <Carousel.Item>
            <Container style={styles.carouselContainer}>
              <Grid columns={2} stackable padded textAlign="center">
                <Grid.Row>
                  <Grid.Column width={7} only="computer">
                    <Container style={styles.imageContainer}>
                      <Image src={img.default} size="medium" centered />
                    </Container>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Container style={styles.descriptionContainer}>
                      <div style={styles.description}>
                        <h1 style={styles.heading}>{language.title}</h1>
                        <p>{language.description}</p>
                      </div>
                    </Container>
                    {language.link && (
                      <Button
                        color="black"
                        style={styles.carouselButtons}
                        onClick={() => window.open(language.link, "_blank")}
                      >
                        <Icon name="github" />
                        GitHub
                      </Button>
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Carousel.Item>
        );
      });
    }
  };

  return (
    <>
      <Container>
        <Divider horizontal>
          <Header as="h1" textAlign="center">
            Proficient Languages
          </Header>
        </Divider>
      </Container>
      <Carousel style={styles.carousel}>{data && handleCarousel()}</Carousel>
    </>
  );
};

export default Language;

const styles = {
  container: {
    marginTop: "2rem",
    marginBottom: "5rem",
    width: "100%",
    padding: "80px",
  },
  carousel: {
    marginBottom: "5%",
  },
  carouselButtons: {
    marginLeft: "2%",
    marginTop: "3%",
  },
  carouselContainer: {
    width: "100%",
    height: "100%",
  },
  descriptionContainer: {
    width: "100%",
    marginTop: "20%",
  },
  description: {
    textAlign: "justify",
    fontFamily: "Verdana",
    fontSize: "100%",
    marginLeft: "10%",
    marginTop: "10%",
    margin: "auto",
  },
  heading: {
    marginBottom: "5%",
  },
  imageContainer: {
    padding: "5rem",
  },
};
