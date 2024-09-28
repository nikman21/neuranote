import Link from 'next/link';
import LogoutButton from './Buttons/logoutButton';

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar leftsidebar bg-secondary-blue">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        <ul>
          <li className="mb-4">
            <Link href="/notes" className="text-white hover:text-blue-400 font-bold">
              <p className="text-lg">Notes</p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/todos" className="text-white hover:text-blue-400 font-bold">
              <p className="text-lg">Todos</p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/journals" className="text-white hover:text-blue-400 font-bold">
              <p className="text-lg">Journals</p>
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-6 px-6">
        <LogoutButton />
      </div>
      </div>
    </section>
  );
};

export default LeftSidebar;

