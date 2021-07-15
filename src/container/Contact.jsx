import React, { useState } from "react";
import { Formik } from "formik";
import {
  Container,
  Form,
  Header,
  Message,
  Rail,
  Segment,
} from "semantic-ui-react";
import * as yup from "yup";
import emailjs from "emailjs-com";

const Contact = () => {
  document.title = "Contact";
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    message: "",
    email: "",
    company: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    company: yup.string().required(),
    message: yup.string().required(),
  });

  const handleSubmit = ({ name, message, company, email }) => {
    const templateParams = {
      from_name: name,
      from_company: company,
      message: message,
      email: email,
    };
    setLoading(true);
    emailjs
      .send(
        "service_zt1jiq5",
        "template_qt6ecuc",
        templateParams,
        "user_EBN2f6W4XVyOaeomnCTDR"
      )
      .then(
        (result) => {
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {success && (
        <Container style={{ width: "50%", marginTop: "10px" }}>
          <Message
            success
            header="Success!!"
            content="I am reading your email now. Thank You!!"
          />
        </Container>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          handleSubmit(values);
        }}
      >
        {({ values, handleSubmit, handleChange, errors, touched }) => {
          return (
            <Container style={styles.container}>
              <Form onSubmit={handleSubmit} loading={loading}>
                <Header as="h2">Send Message</Header>
                <Form.Field error={errors.name && touched.name}>
                  <label>Name</label>
                  <input
                    placeholder="Name"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                </Form.Field>
                <Form.Field error={errors.email && touched.email}>
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </Form.Field>
                <Form.Field error={errors.company && touched.company}>
                  <label>Company</label>
                  <input
                    placeholder="Company Name"
                    name="company"
                    id="company"
                    onChange={handleChange}
                    value={values.company}
                  />
                </Form.Field>
                <Form.TextArea
                  error={errors.message && touched.message}
                  label="Message"
                  placeholder="Please Type your message here..."
                  name="message"
                  id="message"
                  onChange={handleChange}
                  value={values.message}
                />
                <Form.Button type="submit">Submit</Form.Button>
              </Form>
            </Container>
          );
        }}
      </Formik>
      {success && <Container style={{ paddingBottom: "50px" }}></Container>}
    </>
  );
};

export default Contact;

const styles = {
  container: {
    padding: "50px",
  },
};
