import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">🛒MyCartList</h1>
      <p className="mb-6 text-gray-600 max-w-md">
        Easily create, manage, and track your shopping items. Check off items as you go.
      </p>
      <Link
        to="/list"
        className="bg-teal-600 text-white p-2 rounded shadow hover:bg-teal-700 transition"
      >
        Go to shopping list
      </Link>
    </div>
  );
};

export default Home;
