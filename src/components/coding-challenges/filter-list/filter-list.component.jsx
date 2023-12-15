import "./filter-list.styles.scss";
import { useRef } from "react";

import AddListItem from "./add-list-item/add-list-item.component";

const FilterList = () => {
  const listRef = useRef(null);

  const filterInput = (e) => {
    let { value } = e.target;
    console.log(value, listRef.current.children);
    let childList = listRef.current.children;
    let count = 0;
    while (count < childList.length) {
      let text = childList[count].innerText;
      if (!value.length) {
        childList[count].className = "";
      }
      if (text.toLowerCase().includes(value.toLowerCase())) {
        childList[count].className = ""; // Removes hidden class

        // Regex to add mark tag with highlight class anywhere the
        const regex = new RegExp(value, "gi");
        text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, "");
        const matchedText = text.replace(
          regex,
          '<mark class="highlight">$&</mark>'
        );
        childList[count].innerHTML = matchedText;
      } else {
        childList[count].className = "hide-list-item"; // Adds hidden class
      }
      count++;
    }
  };
  return (
    <div className="filter-list-wrapper">
      <h1 className="filter-list-header">Text Filtering Input Challenge</h1>
      <label className="filter-list-input">
        Type to filter: <input onChange={filterInput} />
      </label>
      <AddListItem />
      <ul ref={listRef} className="filter-list-list">
        <li>I love Jesus, he is the Lord of My Life!</li>
        <li>I am thankful every day for my God, my family, and friends</li>
        <li>If he is for us, who can be agaisnt us!</li>
        <li>Make sure to put on your armor daily to stand against the enemy</li>
        <li>Die to your flesh daily!</li>
        <li>
          Love the Lord your God with all your heart, might, soul, and strength!
        </li>
        <li>Love your neighbor as yourself!</li>
      </ul>
    </div>
  );
};

export default FilterList;
