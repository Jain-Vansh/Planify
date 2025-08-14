export default function Input(props){
    return(
        <div className="m-2">
            <label className="font-bold" htmlFor="">{props.label}</label>
            <input type="text" placeholder={props.placeholder} className={`${props.margin} bg-[#F2F2F2] text-[#C71E64] rounded-md p-1`} />
        </div>
    )
}