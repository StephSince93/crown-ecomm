import "./add-list-item.styles.scss";
const AddListItem = () => {
  return (
    <div className="add-list-item-wrapper">
      <label className="add-list-item-input">
        Add List Item:
        <input type="text" />
      </label>
      <button className="add-list-item-button" type="button">
        Add Item
      </button>
    </div>
  );
};

export default AddListItem;
