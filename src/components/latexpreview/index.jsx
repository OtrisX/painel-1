import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';



function LatexPreview({ pdfURL }){
    return (
        <embed height="100%" width="100%" src={pdfURL ? `${pdfURL}#zoom=75%` : ""}></embed>
    )
}       

export default LatexPreview 