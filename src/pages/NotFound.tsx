import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold">404 – Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page you were looking for doesn't exist.</p>
      <Link
        to={"/"}
        className="mt-6 px-6 py-2 rounded-lg bg-black text-white hover:opacity-80 transition"
      >
        Go Home
      </Link>
    </div>
  );
}