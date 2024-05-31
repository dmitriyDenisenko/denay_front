import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Disciplines from "../student/Disciplines.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Disciplines">
                <Disciplines/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews