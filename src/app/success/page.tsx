
import Link from "next/link";
import Navbar from "../components/navbar";

const SuccessPage = () => {

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-green-600">Payment Successful! 🎉</h1>
        <p>Thank you for your purchase!</p>

      </div>
    </div>
  );
};

export default SuccessPage;