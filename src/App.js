import "./App.css";
import { useState } from "react";
import UserCard from "./components/userCard";

function App() {
  const url = "https://reqres.in/api/users?page=1";
  const [state, setState] = useState("welcome");
  const [data, setData] = useState(null);

  async function fetchData() {
    setState("loading");
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.data);
      setState("success");
    } catch (error) {
      setState("error");
    }
  }

  return (
    <div className="flex min-h-screen gap-1 bg-gray-400">
      <aside className="md:w-64 w-24 bg-white flex-col p-8 flex items-center">
        <h2 className="text-indigo-600 my-4 text-2xl font-bold">AirData</h2>
        <button
          onClick={() => fetchData()}
          className="px-4 my-16 py-2 text-xl text-white bg-indigo-600 rounded-md"
        >
          Get Users
        </button>
      </aside>
      {state === "welcome" && (
        <div className="text-4xl p-8 md:p-36 text-center bg-white grow font-bold">
          Welcome to <span className="text-indigo-600">AirData</span>
        </div>
      )}
      {state === "loading" && (
        <div className="text-white grow flex items-center justify-center">
          <svg
            aria-hidden="true"
            class="w-24 h-24 mr-2 text-gray-200 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
      {state === "success" && (
        <div className=" grow">
          <h2 className="text-2xl text-indigo-600 w-full p-4 bg-white font-semibold">
            Customer Data
          </h2>
          <div className="grid p-8 gap-8 grid-cols-1 md:grid-cols-3">
            {data.map((item) => (
              <UserCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
      {state === "error" && (
        <div className="text-white grow flex items-center justify-center">
          <h1 className="text-4xl">There was an error fetching data</h1>
        </div>
      )}
    </div>
  );
}

export default App;
