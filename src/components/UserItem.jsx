const UserItem = ({ data, click }) => {

    return (
        <div className='mb-8 mt-4 border-2 border-white p-2 rounded-lg flex items-center'>
            <div className='w-full'>
                {Object.keys(data).map((el, i) => (
                    <div className="flex" key={i}>
                        <div className="w-1/4">{`${Object.keys(data)[i]} Name: `}</div>
                        <div className='text-green-300 ml-8 w-1/4'>{data[el]}</div>
                    </div>
                ))}
            </div>
            <div onClick={click} className="cursor-pointer">X</div>
        </div>
    )
}

export default UserItem;