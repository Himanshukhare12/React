import { useLoaderData } from 'react-router-dom';

export default function Github() {
    const Profile=useLoaderData()
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Repos: {Profile.public_repos} </div>
    <div className='flex justify-center'>
    <img src={Profile.avatar_url} alt='Github picture' className='w-300' />
    </div>
    
    </>
    
  )
}

export const githubLoader= async () => {
    const response=await fetch('https://api.github.com/users/Himanshukhare12')
    return response.json()
}
