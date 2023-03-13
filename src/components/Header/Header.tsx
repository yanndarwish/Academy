import logo from "../../assets/logo/head-logo.png"
export interface IHeaderProps {

}

export default function Header (props: IHeaderProps) {
  return (
    <header>
      <a href="" className="logo"><img src={logo} alt="Logo" /></a>
      <nav>
        <ul>
            <li><a href="">Categories</a></li>
            <li><a href="">Teach</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Aout Us</a></li>
        </ul>
        {/* search input here */}
        <div className="separator"></div>
        {/* userProfile here */}
      </nav>
    </header>
  );
}
