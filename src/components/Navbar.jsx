import Logo from "../assets/react.png";

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt=""/>
      <h1>ReactFacts</h1>
      <h2>React Course - Project 1</h2>
    </nav>
  );
}