import { UseRefFieldsActions } from "react-usereffields";
import { inputsName } from "./DeckForm";

type Props = {
  name: (typeof inputsName)[number];
  data: {
    label: string;
    image?: string;
    value: string;
  }[];
  // setRef: ReturnType<UseRefFieldsActions<'dish' | 'diet'>['setRef']>;
  setRef: UseRefFieldsActions<(typeof inputsName)[number]>["setRef"];
};

export function MyInputRadio({ name, setRef, data = [] }: Props) {
  return (
    <fieldset>
      <legend>Select a {name}:</legend>

      {data.map((item, index) => (
        <label key={index}>
          <input
            type="radio"
            name={name}
            value={item.value}
            ref={setRef(name)}
          />
          {item.image && <img src={item.image} alt={item.label} />}

          <span>{item.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
