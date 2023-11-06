import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: var(--color-grey-50);

  @media (min-width: 500px) {
    grid-template-columns: 48rem;
    gap: 3.2rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: 35rem;
    gap: 1.5rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
      <p>Contact app administrator if you would like a demo account.</p>
    </LoginLayout>
  );
}

export default Login;
