import './App.scss';
import Counter from './components/Counter';
import Headertext from './components/Headertext';
import Socials from './components/Socials';

function App() {

  return (
    <div className='bg-primary h-full'>
      <div className='bg-stars h-full'>
        <div className="bg-hills flex flex-col items-center justify-center h-full">
          <Headertext text={`WE'RE LAUNCHING SOON`} />
          <Counter />
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default App;
