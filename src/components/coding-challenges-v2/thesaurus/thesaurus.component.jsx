import "./thesaurus.styles.scss";
import { useEffect, useState } from "react";

const BASE_URL = 'https://api.datamuse.com';
const Thesaurus = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState("");
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://api.datamuse.com/words?ml=ringing+in+the+ears"
      ).then((res) => {
        return res.json();
      });
      console.log(res);
    }
    getData();
  }, []);

  const searchWord = async (e) => {
    e && e.preventDefault();
    console.log(word);
    const res = await fetch(
      `${BASE_URL}/words?rel_syn=${word}`
    ).then((res) => {
      return res.json();
    });
    console.log(res);
    res.length && setSynonyms(res);
  };
  const updateWord = (word) => {
    setWord(word);
    searchWord();
  }
  return (
    <div className="thesauras-wrapper">
      <h2>Thesauras Search</h2>
      <form onSubmit={searchWord}>
        <label htmlFor="search-input">Type word you want searched:</label>
        <input
          value={word}
          id="search-input"
          className="search-input"
          type="text"
          onChange={(e) => setWord(e.target.value)}
        ></input>
        <br />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <br />
      {synonyms ? (
        <div>
          <p>Results Count: {synonyms.length}</p>
          <ul className="search-list">
            {synonyms.map((s) => {
              return <li key={s.word} onClick={() => updateWord(s.word)}>{s.word}</li>;
            })}
          </ul>
        </div>
      ) : (
        <p>No Synonyms found!</p>
      )}
    </div>
  );
};

export default Thesaurus;
