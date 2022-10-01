import lostZoro from '../assets/zoro-lost.jpg';

export default function NotFound() {
  return (
    <div className='flex h-full justify-center items-center'>
      <img className="w-1/3" src={lostZoro} alt="" />
    </div>
  );
}