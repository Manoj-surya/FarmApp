// Bottom Navigation
import { Heart, MessageCircle, PlusSquare, Send, Home, Search, Camera, Menu } from 'lucide-react'
function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-green-200">
      <div className="max-w-xl mx-auto flex justify-around p-2 sm:p-3">
        <button className="text-green-800 hover:text-green-600">
          <Home size={24} />
        </button>
        <button className="text-green-800 hover:text-green-600">
          <Search size={24} />
        </button>
        <button className="text-green-800 hover:text-green-600">
          <PlusSquare size={24} />
        </button>
        <button className="text-green-800 hover:text-green-600">
          <Heart size={24} />
        </button>
        <button className="text-green-800 hover:text-green-600">
          <img 
            src="/api/placeholder/24/24" 
            alt="Profile" 
            className="w-6 h-6 rounded-full" 
          />
        </button>
      </div>
    </div>
  );
}
export default BottomNav;