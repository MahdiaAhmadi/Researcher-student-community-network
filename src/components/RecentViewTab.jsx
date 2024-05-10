import RecentViewPostCards from './RecentViewPostCard'
export default function RecentViewTab({children}){
    return(
        <div className="bg-gray-100 px-5 py-3 mt-6 shadow-md rounded-md flex-wrap">
            <h1 className='font-black text-2xl text-black'>Recent Views</h1>
            <RecentViewPostCards/>
        </div>
    )
}