import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/images/home/logo.png";
import desktop from "../../assets/images/home/desktop.png";

export const AuthLayout = (props) => {
  const { children, title, type } = props;

  return (
    <div className="login">
      <div className="col d-flex justify-content-center align-items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <motion.div
              className="w-100 mb-3"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img src={logo} alt="Logo" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {title}
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {children}
          </motion.div>
          <motion.div
            className="have-account mt-3 d-flex gap-2 justify-content-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p>
              {type === "login"
                ? "Don’t have an account?"
                : "Do you have an account?"}
            </p>
            {type === "login" && (
              <Link to="/register" className="text-decoration-none">
                Sign Up for free
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="text-decoration-none">
                Sign In for free
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-images col d-none d-xl-block">
        <motion.div
          className="images"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <img src={desktop} alt="Landing-page-Desktop" />
        </motion.div>
      </div>
    </div>
  );
};
