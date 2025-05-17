// Header Component
import {MessageCircle, PlusSquare} from 'lucide-react';
function Header({ isMobile }) {
  return (
    <div className="sticky top-0 z-10 bg-green-100 border-b border-green-200 px-3 py-2 sm:p-3">
      <div className="max-w-xl mx-auto flex justify-between items-center">
        <h1 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-green-800`}>FarmApp</h1>
        <div className="flex space-x-3 sm:space-x-4">
          <button title='This button is for adding the posts' className="text-green-700 hover:text-green-900">
            <PlusSquare size={isMobile ? 22 : 24} />
          </button>
          <button title='This is for sending messages' className="text-green-700 hover:text-green-900">
            <MessageCircle size={isMobile ? 22 : 24} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;