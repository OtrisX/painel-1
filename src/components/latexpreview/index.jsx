import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';



function LatexPreview(props){
    return (
        <Viewer fileUrl={require("../tempFiles/temp.pdf")} />
    )
}       

export default LatexPreview 