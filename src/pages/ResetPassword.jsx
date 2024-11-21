import { useContext } from "react";
import { AuthContext } from "../providers/Provider";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const {email, passwordResetEmail, logOutUser} = useContext(AuthContext);
    
    const handleResetPassword = (event) => {
        event.preventDefault();

        passwordResetEmail(email)
        .then(() => {
            logOutUser();
            window.open('https://mail.google.com/', '_blank');
        })

        .catch(error => {
            const errorMessage = error.message;
            // console.log(errorMessage);
            toast.error("Failed to Reset");
        })
    };

  return (
    <div className="md:w-full w-11/12 mx-auto flex flex-col justify-center items-center py-14">
        <h2 className="w-4/5 mx-auto md:text-3xl text-2xl font-bold pt-7 text-center pb-6">
          Reset Your Password
        </h2>
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-md border border-gray-300">

        <form className="card-body" onSubmit={handleResetPassword}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type Your Email"
              className="input input-bordered"
              value={email}
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-info text-base text-white font-bold rounded-full">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
