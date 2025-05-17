// Stories Component
import { Heart, MessageCircle, PlusSquare, Send, Home, Search, Camera, Menu } from 'lucide-react';
function Stories({ isMobile }) {
  const stories = [
    { id: 1, username: 'your_story', avatar: 'https://dummyjson.com/image/64x64', isYours: true },
    { id: 2, username: 'friend1', avatar: 'https://dummyjson.com/image/64x64' },
    { id: 3, username: 'friend2', avatar: 'https://dummyjson.com/image/64x64' },
    { id: 4, username: 'friend3', avatar: 'https://dummyjson.com/image/64x64' },
    { id: 5, username: 'friend4', avatar: 'https://dummyjson.com/image/64x64' },
    { id: 6, username: 'friend5', avatar: 'https://dummyjson.com/image/64x64' }
  ];

  const storySize = isMobile ? 14 : 16;

  return (
    <div className="bg-white border-b border-green-200">
      <div className="max-w-xl mx-auto py-2 sm:py-3 px-2 overflow-x-auto">
        <div className="flex space-x-3 sm:space-x-4">
          {stories.map(story => (
            <div key={story.id} className="flex flex-col items-center flex-shrink-0">
              <div className={`w-${storySize} h-${storySize} rounded-full p-0.5 ${story.isYours ? 'bg-gray-200' : 'bg-gradient-to-r from-green-400 to-green-600'}`}>
                <img 
                  src={story.avatar} 
                  alt={story.username} 
                  className="w-full h-full rounded-full border-2 border-white"
                />
              </div>
              <span className="text-xs mt-1 text-green-800 truncate w-14 sm:w-16 text-center">
                {story.username}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Stories;