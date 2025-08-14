export default function Input(props){
    return(
        <>
            <label htmlFor="">{props.label}</label>
            <input type="text" placeholder={props.placeholder} className="ml-2" />
        </>
    )
}