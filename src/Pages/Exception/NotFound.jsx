import { useNavigate } from "react-router-dom"


export const NotFound = () => {
    const navigate =  useNavigate();
    const BackToHome = () => {
        navigate("/");
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you're looking for does not exist.</p>
      <button onClick={BackToHome} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Back Home
      </button>
    </div>
    )
}