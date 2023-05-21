import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import { Main, Container } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};

export default SharedLayout;
