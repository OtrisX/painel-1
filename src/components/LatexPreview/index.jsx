function LatexPreview({ pdfURL }){
    return (
        <embed height="400px" width="600px" src={pdfURL ? `${pdfURL}#zoom=75%` : ""}></embed>
    )
}       

export default LatexPreview 