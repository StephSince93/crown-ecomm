import './coding-challenges.styles.scss'
import FileInputPyramid from "../../components/coding-challenges/file-input-pyramid/file-input-pyramid.component";
import ColorBox from '../../components/coding-challenges/color-box/color-box.component';
import FilterList from '../../components/coding-challenges/filter-list/filter-list.component';
const CodingChallenges = () => {
    return (
        <div className="coding-challeneges-wrapper">
        <FileInputPyramid />
        <ColorBox />
        <FilterList/>
        {/* <FileInputPyramid />
        <FileInputPyramid /> */}
        </div>
    )
}

export default CodingChallenges;