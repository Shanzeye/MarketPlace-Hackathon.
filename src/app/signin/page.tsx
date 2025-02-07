import Link from "next/link";
import Image from "next/image";

export default function SigninPage() {
  return (
    <div className="min-h-screen bg-black">
      
      {/* Signin Form Section */}
      <section className="max-w-[1320px] mx-auto py-[50px] px-[20px] lg:px-[60px] relative bg-black">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-black">Sign In</h3>
          <form>
            <div className="mb-4 relative">
              <input
                type="email"
                className="w-full border rounded px-3 py-2 pl-10 focus:ring focus:ring-yellow-300"
                placeholder="Email"
              />
              <Image
                src="/images/EnvelopeSimple.png" // Use your desired icon here
                alt="Email Icon"
                width={20}
                height={20}
                className="absolute left-3 top-2.5"
              />
            </div> 

            {/* Password Input */}
            <div className="mb-4 relative">
              <input
                type="password"
                className="w-full border rounded px-3 py-2 pl-10 focus:ring focus:ring-yellow-300"
                placeholder="Password"
              />
              <Image
                src="/images/Lock.png" // Use your desired icon here
                alt="Lock Icon"
                width={20}
                height={20}
                className="absolute left-3 top-2.5"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2 " />
              <span>Remember me?</span>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign Ip
            </button>

            {/* Forgot Password Link */}
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
            </p>
          </form>

          {/* Social Media Signin Buttons */}
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <img src="images//Google.png" alt="Google" className="h-6 mr-2" />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <img src="/images/app.png" alt="Apple" className="h-6 mr-2" />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
















// "use client";


// // pages/signin.tsx
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function SignIn() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const response = await fetch('/api/auth/signin', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();

//     if (data.message === 'Successfully signed in') {
//       localStorage.setItem('user', JSON.stringify(data.user)); // Store user info
//       setMessage('You have successfully signed in! Redirecting to profile...');
//       setTimeout(() => router.push('/profile'), 2000);
//     } else {
//       setMessage(data.message);
//     }
//   };

//   return (
//     <div className="container text-white">
//       <h1>Sign In</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Sign In</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }
