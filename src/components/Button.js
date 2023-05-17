import "./button.css"

export default function Button(props) {
    return (
        <button

            onClick={() => props.click(props.label)}
            className={`button
                ${props.operation ? "operation" : ""}
                ${props.double ? "double" : ""}
                ${props.triple ? "triple" : ""}
                `}>
            {props.label}
        </button>
    )
}