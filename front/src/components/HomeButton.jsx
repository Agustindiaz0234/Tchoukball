import pelotaTchouk from "../assets/img/pelotaTchouk.png";

function HomeButton({ link, label }) {
  return (
    <a href={link} className="home-button">
      <img src={pelotaTchouk}></img>
      {label}
    </a>
  );
}

export default HomeButton;
