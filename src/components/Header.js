import Logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="logo" />
            <span>TaskMate</span>
        </div>
        <div className="themeSelector">
            <span className="light"></span>
            <span className="medium activeTheme"></span>
            <span className="dark"></span>
            <span className="gOne"></span>
            <span className="gTwo"></span>
            <span className="gThree"></span>
        </div>
    </header>
  )
}