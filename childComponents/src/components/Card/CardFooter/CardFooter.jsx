
export function CardFooter(props){
    const footerContent = props.footerContent || 'mangler footer content'
    return(
        <footer>
            <h6>{footerContent}</h6>
        </footer>
    )
}