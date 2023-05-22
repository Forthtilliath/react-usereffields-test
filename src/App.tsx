import "./App.css";
import { DeckForm, inputsName } from "./components/DeckForm";
import { useRefFields } from "react-usereffields";

type InputName = (typeof inputsName)[number];

function App() {
  const [, { setRef, getAllRef, getField, isFieldNotNull, getRef }] =
    useRefFields(inputsName);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(getRef("radio_test"));
    console.log(getAllRef());

    focusIfEmpty("name");
  };

  const focusIfEmpty = (key: InputName) => {
    const field = getField(key);
    if (isFieldNotNull(field)) {
      if (field.value === "") field.focus();
    } else {
      throw new Error(`The field with ${key} key is null`);
    }
  };

  return (
    <>
      <DeckForm onSubmit={handleSubmit} setRef={setRef} />
    </>
  );
}

export default App;
