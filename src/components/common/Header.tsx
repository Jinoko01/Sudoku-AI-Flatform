import "./Header.scss";

const Header = () => {
  return (
    <div className="headerDiv">
      <h1>
        <span>스도쿠 자동 풀이</span>
      </h1>
      <div className="outer-scratch">
        <div className="inner-scratch">
          <div className="background grain"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
