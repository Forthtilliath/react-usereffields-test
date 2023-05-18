import './App.css';
import { DeckForm, inputsName } from './components/DeckForm';
import { useRefFields } from './utils/hooks/useRefFields';

function App() {
  const [, { setRef, getAllRef }] = useRefFields(inputsName);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(getAllRef());
  };

  return (
    <>
      <DeckForm onSubmit={handleSubmit} setRef={setRef} />
    </>
  );
}

export default App;
