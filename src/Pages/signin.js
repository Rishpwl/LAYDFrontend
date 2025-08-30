import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  // Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/send-otp", { email }, {
        headers: { "Content-Type": "application/json" }
      });
      alert(res.data.msg);
      setOtpSent(true);
    } catch (err) {
      console.error("❌ Error sending OTP:", err.response?.data || err.message);
      alert(err.response?.data?.msg || "Failed to send OTP");
    }
  };

  // Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/verify-otp", { email, otp }, {
        headers: { "Content-Type": "application/json" }
      });
      alert(res.data.msg);

      if (res.data.success) {
        window.location.href = "/dashboard"; // ✅ redirect after success
      }
    } catch (err) {
      console.error("❌ Error verifying OTP:", err.response?.data || err.message);
      alert(err.response?.data?.msg || "Failed to verify OTP");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign In</h2>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              maxLength={6}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg tracking-widest text-center"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
