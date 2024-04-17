// import reactImg from '../../assets/jsx-ui.png'
import './Header.css'

const reactDescription = ['Fundamentals ', 'Crucial ', 'Core '];

function genRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
  }
    
// Header
export default function Header(){
    return (
      <header>
        {/* <img src={reactImg} alt="Stylized atom" /> */}
        <h1>React Essentials</h1>
  
        <p>
          {/* {reactDescription} */}
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
}