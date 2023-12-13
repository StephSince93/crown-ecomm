import './color-box-input.styles.scss';

const ColorBoxInput = ({ updateData }) => {
    const handleChange = (e) => {
        console.log(e.target.value);
    
        updateData({backgroundColor: e.target.value });
      };
  return (
    <label>
        Type Color Name:
        <input
          className="color-box-input"
          type="text"
          name="colorName"
          onChange={handleChange}
        />
      </label>
  );
};

export default ColorBoxInput;
