import React from "react";
import { Container, Row, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = () => {};

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="h-50 bg-light align-items-center text-center w-50 px-5">
          <Form onSubmit={handleSubmit}>
            <h1>Bienvenido a ForaneosApp</h1>
            <Form.Group className="my-5" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Usuario" />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Link to='/home'>
              <Button variant="primary" type="submit" className="w-75">
                Iniciar Sesion
              </Button>
            </Link>
            <p className="mt-2 mb-5">
              ¿No tienes cuenta? <b>Consulta con soporte.</b>
            </p>

            <Form.Text className="text-muted">
              ¿Olvidaste tu contraseña?
            </Form.Text>
          </Form>
        </Row>
      </Container>
    </>
  );
}

export default Login;
