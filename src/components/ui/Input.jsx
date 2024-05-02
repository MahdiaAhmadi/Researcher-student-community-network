

const Input = ({ className, ...props }) => {
    return (
        <input
            className={
                'flex h-10 w-full rounded-md border border-indigo-300 bg-transparent px-3 text-md text-gray-500 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2'
            }
            {...props}
        />
    )
}


export { Input }

