import './App.scss';
import Counter from './components/Counter';
import Socials from './components/Socials';

function App() {

  return (
    <div className='bg-primary h-full'>
      <div className='bg-stars h-full'>
        <div className="bg-hills flex flex-col items-center justify-center h-full">
          <h1 className='text-white tracking-[5px] text-2xl mt-auto'>WE'RE LAUNCHING SOON</h1>
          <Counter />
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default App;
