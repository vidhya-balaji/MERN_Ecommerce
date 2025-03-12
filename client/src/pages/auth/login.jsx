import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  
  //firebase vidhya code change for user already login navigate to home page
// useEffect(() => {
//   window.scrollTo(0, 0);
//   auth.onAuthStateChanged(function (user) {
//       if (user) {
//         navigate("/shopping-view/home")
//       } else {
//           navigate("/auth/login")
//       }
//     })
// }, []);
const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    //Firebase login vidhya code change signIn with register user
    signInWithEmailAndPassword(auth,formData.email,formData.password).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        navigate("/shopping-view/home");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });

    // dispatch(loginUser(formData)).then((data) => {
    //   if (data?.payload?.success) {
    //     toast({
    //       title: data?.payload?.message,
    //     });
    //   } else {
    //     toast({
    //       title: data?.payload?.message,
    //       variant: "destructive",
    //     });
    //   }
    // });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
