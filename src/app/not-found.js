import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
