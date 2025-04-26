
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-32">
      <div className="text-center px-4">
        <h1 className="text-6xl font-serif font-bold text-manor-green mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          We're sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-manor-green hover:bg-manor-green/90 text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
