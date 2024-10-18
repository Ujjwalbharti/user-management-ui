import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function SignUp({ updateSignUpStatus }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.firstName.value);
    updateSignUpStatus(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <form
        className="max-w-lg w-full bg-white p-6 sm:p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-6">
          Sign Up
        </h2>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <div className="flex items-center border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
            <span className="flex items-center px-3 text-gray-600">
              <UserIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full py-2 px-3 text-gray-700 rounded-r-lg focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="emailId"
          >
            Email Address
          </label>
          <div className="flex items-center border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
            <span className="flex items-center px-3 text-gray-600">
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <input
              type="email"
              name="Email"
              id="emailId"
              className="w-full py-2 px-3 text-gray-700 rounded-r-lg focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mobileNumber"
          >
            Mobile Number
          </label>
          <div className="flex items-center border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
            <span className="flex items-center px-3 text-gray-600">
              <DevicePhoneMobileIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <input
              type="tel"
              name="mobile"
              id="mobileNumber"
              className="w-full py-2 px-3 text-gray-700 rounded-r-lg focus:outline-none"
              placeholder="Enter your mobile number"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="flex items-center border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
            <span className="flex items-center px-3 text-gray-600">
              <KeyIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <input
              type="password"
              name="Password"
              id="password"
              className="w-full py-2 px-3 text-gray-700 rounded-r-lg focus:outline-none"
              placeholder="Enter the password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:from-blue-700 hover:to-purple-700 focus:outline-none"
        >
          Sign Up
        </button>

        <div className="flex flex-col items-center mt-4 text-center">
          <span className="text-gray-600">
            Already having an account? Click
            <button
              type="button"
              className="text-blue-500 underline ml-1 mr-1 
                      hover:text-purple-700 
                      transition 
                      duration-300 
                      ease-in-out 
                      transform 
                      hover:scale-105 
                      focus:outline-none"
              onClick={() => updateSignUpStatus(true)}
            >
              here
            </button>
            to sign in instead!
          </span>
        </div>
      </form>
    </div>
  );
}
