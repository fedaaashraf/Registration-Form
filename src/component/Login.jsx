import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const loginMutation = useMutation({
    mutationFn: async (values) => {
      const res = await axios.get("http://localhost:3000/users");
      const users = res.data;
      const user = users.find(
        (u) => u.email === values.email && u.password === values.password
      );
      if (user) return user;
      throw new Error("الإيميل أو كلمة المرور غير صحيحة");
    },
    onSuccess: (user) => {
      const username = user.email.split("@")[0];
      alert(`مرحباً ${username}\nتم تسجيل الدخول بنجاح`);
    },
    onError: (err) => alert(err.message),
  });

  const validationSchema = Yup.object({
    email: Yup.string().email("الإيميل غير صحيح").required("الإيميل مطلوب"),
    password: Yup.string().required("كلمة المرور مطلوبة"),
  });

  return (
    <>
      {/* الفيديو في الخلفية */}
      <video autoPlay loop muted playsInline id="bg-video">
        <source src="/src/assets/video.mp4" type="video/mp4" />
      </video>

      {/* الكونتينر السماوي الشفاف في النص */}
      <div className="login-container">
        <div className="login-card">
          <div className="top">
            <span>Have an account?</span>
            <h2>Login</h2>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              loginMutation.mutate(values, { onSettled: () => setSubmitting(false) });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="input-field">
                  <Field type="email" name="email" className="input" placeholder="Email" />
                  <i className="fa-solid fa-user"></i>
                  <ErrorMessage name="email" component="div" className="error" />
                </div>

                <div className="input-field">
                  <Field type="password" name="password" className="input" placeholder="Password" />
                  <i className="fa-solid fa-lock"></i>
                  <ErrorMessage name="password" component="div" className="error" />
                </div>

                <button type="submit" className="submit" disabled={isSubmitting}>
                  {isSubmitting ? "جاري..." : "Login"}
                </button>

                <div className="two-col">
                  <div className="one">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <a href="#">Forgot Password?</a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}