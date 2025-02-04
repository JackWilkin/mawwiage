import Menu from '../Menu';
import '../styles/App.css';

export default function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Homepage for Rose and May's wedding.
        </p>
        <Menu />
      </header>
    </div>
  );
}
