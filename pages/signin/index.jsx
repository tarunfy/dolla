import Link from "next/link";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Link href="/" passHref>
            <Icon>dolla</Icon>
          </Link>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput htmlFor="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput htmlFor="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
