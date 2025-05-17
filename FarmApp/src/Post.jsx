import { Heart, MessageCircle, PlusSquare, Send, Home, Search, Camera, Menu } from 'lucide-react'
// Post Component
function Post({ post, onLike, isMobile }) {
  return (
    <div className="bg-white border border-green-200 rounded-md my-3 sm:my-4 overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center p-2 sm:p-3">
        <img 
          src={post.avatar} 
          alt={post.username} 
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full mr-2"
        />
        <span className="font-medium text-green-900 text-sm sm:text-base">{post.username}</span>
        <button className="ml-auto text-green-800">
          <Menu size={isMobile ? 18 : 20} />
        </button>
      </div>
      
      {/* Post Image/Video */}
      <div className="relative">
        <img src={post.image} alt="Post content" className="w-full" />
        {post.isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-6 sm:border-t-8 border-t-transparent border-l-12 sm:border-l-16 border-l-white border-b-6 sm:border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Post Actions */}
      <div className="p-2 sm:p-3">
        <div className="flex space-x-3 sm:space-x-4">
          <button 
            onClick={onLike}
            className={`${post.isLiked ? 'text-red-500' : 'text-green-800'} hover:opacity-70`}
          >
            <Heart size={isMobile ? 22 : 24} fill={post.isLiked ? 'currentColor' : 'none'} />
          </button>
          <button className="text-green-800 hover:opacity-70">
            <MessageCircle size={isMobile ? 22 : 24} />
          </button>
          <button className="text-green-800 hover:opacity-70">
            <Send size={isMobile ? 22 : 24} />
          </button>
        </div>
        
        {/* Like Count */}
        <div className="mt-2 font-medium text-green-900 text-sm sm:text-base">
          {post.likes} likes
        </div>
        
        {/* Caption */}
        <div className="mt-1 text-green-900 text-sm sm:text-base">
          <span className="font-medium mr-1">{post.username}</span>
          {post.caption}
        </div>
        
        {/* Comments Count */}
        <div className="mt-1 text-xs sm:text-sm text-green-600">
          View all {post.comments} comments
        </div>
        
        {/* Comment Input */}
        <div className="mt-2 sm:mt-3 flex items-center border-t border-green-100 pt-2 sm:pt-3">
          <input 
            type="text" 
            placeholder="Add a comment..." 
            className="flex-1 bg-transparent text-green-900 text-sm sm:text-base outline-none"
          />
          <button className="text-green-500 font-medium ml-2 text-sm sm:text-base">Post</button>
        </div>
      </div>
    </div>
  );
}
export default Post;