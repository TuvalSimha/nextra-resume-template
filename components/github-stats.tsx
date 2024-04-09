import { useData } from 'nextra/hooks'
import { RiGitRepositoryFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GithubStatsType } from '../helpers/types';



const GITHUB_USER_NAME = 'tuvalsimha'

export const getStaticProps = ({ params }) => {
    return fetch(`https://api.github.com/users/${GITHUB_USER_NAME}`)
        .then(res => res.json())
        .then(repo => ({
            props: {
                // We add an `ssg` field to the page props,
                // which will be provided to the Nextra `useData` hook.
                ssg: {
                    githubUser: repo
                }
            },
        }))
}

export const GithubStats = () => {
    // Get the data from SSG, and render it as a component.
    const { githubUser } = useData() as { githubUser: GithubStatsType['data'] }
    return (
        <section>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl mb-4 font-bold leading-none tracking-tighter text-neutral-400 dark:text-white">GitHub Glance</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        I'm an active GitHub user, here are some stats about my activity.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4 text-center">

                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-[1px] border-gray-200 px-4 py-6 rounded">
                            <RiGitRepositoryFill className="text-black dark:text-neutral-200 w-10 h-10 mb-3 inline-block" />
                            <h2 className=" ont-bold leading-none tracking-tighter text-3xl text-black dark:text-neutral-300">{githubUser.public_repos}</h2>
                            <p className=" ont-bold leading-none tracking-tighter text-xl text-black dark:text-neutral-300">Public Repos</p>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-[1px] border-gray-200 px-4 py-6 rounded">
                            <FaUserFriends className="text-black dark:text-neutral-200 w-10 h-10 mb-3 inline-block" />
                            <h2 className=" ont-bold leading-none tracking-tighter text-3xl text-black dark:text-neutral-300">{githubUser.followers}</h2>
                            <p className=" ont-bold leading-none tracking-tighter text-xl text-black dark:text-neutral-300">Followers</p>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-[1px] border-gray-200 px-4 py-6 rounded">
                            <FaMagnifyingGlass className="text-black dark:text-neutral-200 w-10 h-10 mb-3 inline-block" />
                            <h2 className=" ont-bold leading-none tracking-tighter text-3xl text-black dark:text-neutral-300">{githubUser.following}</h2>
                            <p className=" ont-bold leading-none tracking-tighter text-xl text-black dark:text-neutral-300">Following</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
