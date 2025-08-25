export default function Input(props){
    return(
        <div className="m-2">
            <label className="font-bold" htmlFor="">{props.label}</label>
            <input type="text" placeholder={props.placeholder} className={`${props.margin} bg-[#EEEEEE] text-[#222831] rounded-md p-1`} />
        </div>
    )
}