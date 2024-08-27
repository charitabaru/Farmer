import Animalwrapper from "../common/page-animation";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import InputBox from "../components/InputBox";

const AuthForm = ({ type }) => {
  return (
    <Animalwrapper keyvalue={type}>
      <section className="h-cover flex justify-center items-center mt-[-50px]">
        <Toaster />
        <form className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24 text-dark-green">
            {type === "sign-in" ? "Welcome Back" : "Join Us Today"}
          </h1>

          {type !== "sign-in" && (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon="fi-rr-user"
            />
          )}

          {type === "sign-in" ? (
            <InputBox
              name="identifier"
              type="text"
              placeholder="Email or Phone Number"
              icon="fi-rr-envelope"
            />
          ) : (
            <>
              <InputBox
                name="email"
                type="email"
                placeholder="Email"
                icon="fi-rr-envelope"
              />
              <InputBox
                name="phonenumber"
                type="tel"
                placeholder="Phone Number"
                icon="fi-rr-phone-call"
              />
            </>
          )}

          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="fi-rr-key"
          />

          <button
            className="btn btn-dark bg-customGreen mt-14 mb-14 center"
            type="submit"
          >
            {type.replace("-", " ")}
          </button>

          {type === "sign-in" ? (
            <p className="mt-6 text-center text-dark-grey text-xl">
              Don't have an account?
              <Link
                to="/signup"
                className="text-dark-green font-semibold ml-1 hover:underline"
              >
                Join us today
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-center text-dark-grey text-xl">
              Already a member?
              <Link to="/signin" className="text-black underline text-xl ml-1">
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
