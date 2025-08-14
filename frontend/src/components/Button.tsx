export default function Button(props){
    return(
        <>
            <button className="hover:bg-[#F2F2F2] hover:text-[#C71E64] transition-all duration-200 py-2 px-4 rounded-xl bg-[#C71E64] mt-8">{props.text}</button>
        </>
    )
}