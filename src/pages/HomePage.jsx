//import logo from '../images/logo.svg';
// import arch from './rose_may_flower_arch.jpg';
// <img src={arch} alt="logo" />
import Menu from '../Menu';
import '../styles/App.css';

export default function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Homepage for Rose and May's wedding.
        </p>
        <Menu />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mawwaige is rose + may
        </a> */}
      </header>
    </div>
  );
}
