import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div>
        <h1>Not Found Page</h1>
        <Link href="/">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
