import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";


const RightNav = () => {
  const { googleLogin } = useAuth()
  const handleGoogleLogin = () => {
    googleLogin()
      .then(res => {
        console.log(res.user);
        toast.success('Log in successful')
      })
      .catch(error => {
      console.log(error);
    })
  }
  return (
      <div className="sticky overflow-y-auto max-h-screen  top-0  ">
          
        {/* login section  */}
      <div className="space-y-3 p-2 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button onClick={handleGoogleLogin} className="btn btn-sm btn-outline w-full  border border-blue-500 bg-white text-blue-500">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-sm btn-outline w-full ">
          <FaGithub></FaGithub>
          Login with Github
        </button>
          </div>
          
         {/* Find us on section  */}
      <div className="  p-2 mb-6">
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <a className="flex items-center p-4  text-lg border rounded-t-lg">
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a className="flex items-center p-4  text-lg border-x rounded-t-lg">
           <FaTwitter className="mr-3"></FaTwitter>
         Twitter
        </a>
        <a href=""  className="flex items-center p-4  text-lg border rounded-b-lg">
          <FaInstagram className="mr-3"></FaInstagram>
         Instagram
        </a>
          </div>
          
          {/* q-zone section  */}
          <div className="space-y-3 p-2 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
           <img src={qzone1} alt="qzone1" />
           <img src={qzone2} alt="qzone2" />
           <img src={qzone3} alt="qzone3" />
          </div>
    </div>
  );
};

export default RightNav;
