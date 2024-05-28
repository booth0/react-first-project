import './Header.css';

function Header() {
  return (
    <section id="menu">
      <div className="header">
        <div className="header-content">
          <div id="logo">
            <img src={`${process.env.PUBLIC_URL}/tasktrackr_logo_pic.png`} alt="Tasktrackr Logo" />
          </div>
          <div id="title">TaskTrack<span id='blue'>r</span></div>
        <div id="signinform">
          <a href="signin.js"><button type="button">Sign In</button></a>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
