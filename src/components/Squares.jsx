function Squares({value,onClick}) {
    return ( <>
    <div onClick={onClick} className="p-10 border-zinc-400 border border-solid flex justify-center items-center" style={{width:"8rem", height:"7rem"}}>
        <h1 className="text-4xl">{value}</h1>
    </div>
    </> );
}

export default Squares;