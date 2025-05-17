import { useState, useEffect } from 'react';
import Header from './Header';
import Stories from './Stories';
import Post from './Post';
import BottomNav from './BottomNav';

// Main App Component
export default function FarmInstaClone() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'nature_lover',
      avatar: 'https://dummyjson.com/image/45x45',
      image: 'https://dummyjson.com/image/400x500',
      caption: 'Beautiful view with the farm today! 🌅',
      likes: 243,
      isLiked: false,
      comments: 42,
      isVideo: false
    },
    {
      id: 2, 
      username: 'travel_addict',
      avatar: 'https://dummyjson.com/image/45x45',
      image: 'https://dummyjson.com/image/400x400',
      caption: 'Exploring the farm on mountains this weekend ⛰️',
      likes: 189,
      isLiked: false,
      comments: 23,
      isVideo: true
    },
    {
      id: 3,
      username: 'foodie_adventures',
      avatar: 'https://dummyjson.com/image/45x45',
      image: 'https://dummyjson.com/image/400x450',
      caption: 'Homemade fretilizer Recipe in comments 🍝',
      likes: 421,
      isLiked: false,
      comments: 56,
      isVideo: false
    }
  ]);
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [isMobile, setIsMobile] = useState(false);

  // Track window size for responsiveness
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setIsMobile(window.innerWidth < 640);
      };
      
      // Set initial state
      handleResize();
      
      // Add event listener
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  return (
    <div className="flex flex-col h-screen bg-green-50">
      {/* Top Header */}
      <Header isMobile={isMobile} />
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-16">
        {/* Stories */}
        <Stories isMobile={isMobile} />
        
        {/* Feed */}
        <div className="w-full max-w-xl mx-auto px-2 sm:px-0">
          {posts.map(post => (
            <Post 
              key={post.id} 
              post={post} 
              onLike={() => handleLike(post.id)} 
              isMobile={isMobile}
            />
          ))}
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}