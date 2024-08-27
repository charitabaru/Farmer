import Animalwrapper from "../common/page-animation";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import InputBox from "../components/InputBox";
import logo from "../imgs/logo.png";

const AuthForm = ({ type }) => {
  return (
    <Animalwrapper keyvalue={type}>
      <section className="h-cover flex justify-center items-center bg-light-green">
        <Toaster />
        <form className="w-[80%] max-w-[400px] bg-white p-8 rounded-lg shadow-md">
          <img
            src={logo}
            alt="InstaFarm Logo"
            className="w-24 h-24 mx-auto mb-6"
          />
          <h1 className="text-4xl font-gelasio capitalize text-center mb-12 text-dark-green">
            {type == "sign-in" ? "Welcome Back" : "Join us today"}
          </h1>

          {type != "sign-in" && (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon="fi-rr-user"
            />
          )}

          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon="fi-rr-envelope"
          />

          <InputBox
            name="Phonenumber"
            type="tel"
            placeholder="Phone Number"
            icon="fi-rr-phone-call"
          />

          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="fi-rr-key"
          />

          <button
            className="bg-dark-green text-white w-full mt-8 py-3 rounded-md font-semibold hover:bg-green-700 transition duration-300"
            type="submit"
          >
            {type.replace("-", " ")}
          </button>

          {type == "sign-in" ? (
            <p className="mt-6 text-center text-dark-grey text-sm">
              Don't have an account?
              <Link
                to="/signup"
                className="text-dark-green font-semibold ml-1 hover:underline"
              >
                Join us today
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-center text-dark-grey text-sm">
              Already a member?
              <Link
                to="/signin"
                className="text-dark-green font-semibold ml-1 hover:underline"
              >
                Sign in here
              </Link>
            </p>
          )}
        </form>
      </section>
    </Animalwrapper>
  );
};

export default AuthForm;
