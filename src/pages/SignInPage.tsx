import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="/logo.png" 
              alt="EVERLOOM Logo" 
              className="w-16 h-16 filter contrast-125 brightness-110"
            />
            <h1 className="text-4xl font-medium italic tracking-[0.03em] bg-gradient-to-r from-gray-900 via-gray-600 to-gray-800 bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif", textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <span className="relative">
                everloom
                <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>
              </span>
            </h1>
          </div>
          <p className="text-gray-600 font-light">Welcome back to your neighborhood</p>
        </div>
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-2xl border-0 bg-white/80 backdrop-blur-sm",
              headerTitle: "text-2xl font-bold text-gray-900",
              headerSubtitle: "text-gray-600",
              socialButtonsBlockButton: "border-2 border-gray-200 hover:border-gray-300 transition-all duration-300",
              formButtonPrimary: "bg-gray-900 hover:bg-gray-800 transition-all duration-300",
              footerActionLink: "text-gray-900 hover:text-gray-700"
            }
          }}
          afterSignInUrl="/dashboard"
          signUpUrl="/sign-up"
        />
      </div>
    </div>
  );
};

export default SignInPage; 