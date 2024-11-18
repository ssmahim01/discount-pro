import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="flex justify-center items-center py-14">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-md border border-gray-300">
           <h2 className="animate__animated animate__fadeInLeft md:text-3xl text-xl font-bold pt-7 text-center">Registration Form!</h2>
         <form className="card-body">
           <div className="form-control border-t border-gray-300 pt-4">
             <label className="label">
               <span className="label-text font-bold">Name</span>
             </label>
             <input
               type="text"
               name="name"
               placeholder="Type your Name"
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text font-bold">Email</span>
             </label>
             <input
               type="email"
               name="email"
               placeholder="Type your Email"
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text font-bold">Photo-URL</span>
             </label>
             <input
               type="text"
               name="photoURL"
               placeholder="Provide a Photo URL"
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text font-bold">Password</span>
             </label>
             <input
               type="password"
               name="password"
               placeholder="Type your Password"
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control mt-6">
             <button className="btn bg-purple-500 text-base text-white font-bold">Register</button>
           </div>
         </form>
   
         <p className="text-gray-700 font-bold pb-8 text-center">Already have an Account? Please <Link to="/authentication/login" className="text-success underline">Login</Link></p>
       </div>
      </div>
    );
};

export default Registration;