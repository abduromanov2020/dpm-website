import React, { useState } from "react";

import Navbar from "../../components/navbar/Navbar";

import Button from "../../components/ui/button/Button";
import Container from "../../components/ui/container/Container";
import Form from "../../components/ui/form/Form";
import Label from "../../components/ui/label/Label";
import Title from "../../components/ui/title/Title";
import Wrapper from "../../components/ui/wrapper/Wrapper";

import loginimg from "../../assets/login.svg";

import { useLogin } from "../../hooks/useLogin";
import StyledLogin from "./Login.styled";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <>
      <Navbar isLoginPage={true} />
      <Wrapper>
        <StyledLogin>
          <Form onSubmit={handleSubmit} sm>
            <Title>Login</Title>
            <Label>
              <span>Email </span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Label>
            <Label>
              <span>Password </span>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Label>
            <Button disabled={isPending}>
              {isPending ? "Loading..." : "Login"}
            </Button>
            {error && <p className="error">{error}</p>}
          </Form>
          <Container>
            <img src={loginimg} alt="" />
          </Container>
        </StyledLogin>
      </Wrapper>
    </>
  );
}

export default Login;
