import "./coding-challenges.styles.scss";
import FileInputPyramid from "../../components/coding-challenges/file-input-pyramid/file-input-pyramid.component";
import ColorBox from "../../components/coding-challenges/color-box/color-box.component";
import FilterList from "../../components/coding-challenges/filter-list/filter-list.component";
import RandomTests from "../../components/coding-challenges/random-tests/random-tests.component";
import DirectoryTree from "../../components/coding-challenges/directory-tree/directory-tree.component";
import SelectCorrectColor from "../../components/coding-challenges/select-correct-color/select-correct-color.component";
const CodingChallenges = () => {
  return (
    <div className="coding-challeneges-wrapper">
      <FileInputPyramid />
      <ColorBox />
      <FilterList />
      <RandomTests />
      <DirectoryTree />
      <SelectCorrectColor />
    </div>
  );
};

export default CodingChallenges;
