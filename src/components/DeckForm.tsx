import { UseRefFieldsActions } from "react-usereffields";
import styles from "./DeckForm.module.css";
import { MyInputRadio } from "./MyInputRadio";

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  setRef: UseRefFieldsActions<(typeof inputsName)[number]>["setRef"];
};

export const inputsName = ["name", "desc", "radio_test", "select"] as const;

const radio_test = [
  {
    label: "Label 1",
    value: "label1",
  },
  {
    label: "Label 2",
    value: "label2",
  },
  {
    label: "Label 3",
    value: "label3",
  },
];

export function DeckForm({ onSubmit, setRef }: Props) {
  return (
    <form onSubmit={onSubmit} className={styles.wrapper}>
      <input
        type="text"
        ref={setRef("name")}
        className={styles.input}
        placeholder="Deck name"
      />
      <textarea
        cols={30}
        rows={10}
        ref={setRef("desc")}
        placeholder="Description"
      />
      <MyInputRadio name="radio_test" data={radio_test} setRef={setRef} />
      <select ref={setRef("select")} className={styles.input} defaultValue={"default"}>
        <option value="default" disabled>
          Choisir un deck
        </option>
        <option value="rouge">Deck Rouge</option>
        <option value="bleu">Deck Bleu</option>
        <option value="vert">Deck Vert</option>
        <option value="jaune">Deck Jaune</option>
        <option value="rose">Deck Rose</option>
        <option value="powerrangers">Deck Power Rangers</option>
      </select>
      <button type="submit">Valider</button>
    </form>
  );
}
