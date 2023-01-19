import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="title">Story</div>
      <ul className="nav">
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
