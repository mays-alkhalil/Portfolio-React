import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { authInfo, login } from "../content/auth";
import "./styles/DashboardLogin.css";

const DashboardLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const success = login(email.trim(), password);
    if (success) {
      setError("");
      navigate("/dashboard");
      return;
    }
    setError("بيانات الدخول غير صحيحة. حاول مرة أخرى.");
  };

  return (
    <div className="dashboard-login-page">
      <Navbar />
      <section className="dashboard-login-card">
        <h1>تسجيل الدخول للوحة التحكم</h1>
        <p>
          استخدم البريد المصرّح ({authInfo.email}) وكلمة المرور للوصول
          للمحتوى.
        </p>
        <form onSubmit={handleSubmit} className="dashboard-login-form">
          <label>
            البريد الإلكتروني
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            كلمة المرور
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          {error && <p className="dashboard-login-error">{error}</p>}
          <button type="submit" className="btn">
            دخول
          </button>
        </form>
      </section>
    </div>
  );
};

export default DashboardLogin;
