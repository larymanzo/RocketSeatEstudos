import { Outlet } from "react-router";
import Container from "../components/container";

export default function LayoutMain() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
