
export function Wrapper(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}