import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 justify-start">
            <Link href="/">
              <h1 className="flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/logo.svg"
                  alt="Logo"
                />
                <span className="ml-2 text-white font-semibold">SRIC</span>
              </h1>
            </Link>
          </div>
          <div className="">
            <Link href={"/login"}>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
