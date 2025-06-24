const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="relative">
            <img 
              src="/logo.png" 
              alt="EVERLOOM Logo" 
              className="w-20 h-20 animate-pulse filter contrast-125 brightness-110"
            />
            <div className="absolute inset-0 w-20 h-20 border-2 border-blue-300 rounded-full animate-spin opacity-30"></div>
          </div>
          <h1 className="text-5xl font-medium italic tracking-[0.05em] text-black animate-pulse" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <span className="relative inline-block">
              everloom
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 animate-pulse"></div>
            </span>
          </h1>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-gray-600 font-light mt-4">Connecting you to your neighborhood...</p>
      </div>
    </div>
  );
};

export default LoadingScreen; 