const UserCard = ({ email, first_name, last_name, avatar }) => {
  console.log(email);
  return (
    <div className="bg-white hover:scale-110 rounded-lg shadow-md gap-4 p-4">
      <div className="flex flex-col items-center">
        <img
          src={avatar}
          alt="Avatar"
          className="w-32 my-4 h-32 rounded-full"
        />
        <h2 className="text-lg text-indigo-600 font-semibold">
          {first_name} {last_name}
        </h2>

        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="gray"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <p className="text-gray-600 pb-1">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
