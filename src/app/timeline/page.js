"use client";

import PostCards from '@/components/PostCard';
import RecentViewPostCards from '@/components/RecentViewCard';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function TimeLine() {

    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/')
        },
    });

    return (
        <div className=" flex h-[79.3dvh]">
            <div className="w-8/12 pl-12 no-scrollbar">
                <div className='max-h-[79dvh] pl-2 overflow-y-scroll no-scrollbar'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => {
                        return <PostCards key={i} postId={i} />
                    })
                    }
                </div>

            </div>
            <div className="w-4/12 px-4">
                <div className="bg-gray-100 px-5 py-3 mt-6 shadow-md rounded-md flex-wrap">
                    <h1 className='font-black text-2xl text-black'>Recent Views</h1>
                    <RecentViewPostCards />
                </div>
            </div>
        </div>


    )
}
