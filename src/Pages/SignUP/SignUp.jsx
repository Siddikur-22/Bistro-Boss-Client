import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Componentes/Hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // const [disabled, setDisabled] = useState(true);

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.PhotoURL)
                    .then(() => {
                        console.log("user profile info updated")
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Profile Picture Updated",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/')
                    })
                    .catch(error => {
                        console.log(error);
                    }

                    )
            })
    }


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>



            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="email" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" required />
                                {errors.PhotoURL && <span className="text-red-600"> Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password  is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password Must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password Must be 20 characters</p>
                                )}
                                {errors.pattern?.type === "pattern" && (
                                    <p className="text-red-600">Pattern Must have one Uppercase,one lower case,one number and one special character</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className="text-center p-4">
                            <p><small>New Here ? <Link to='/login'>Already have an account</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;