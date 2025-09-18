"use client";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const LogInSignUpModal = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(null);

  // Check localStorage on mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) setLoggedInEmail(storedEmail);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleLogIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Please enter an email.");
    localStorage.setItem("userEmail", email);
    setLoggedInEmail(email);
    setShow(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("userEmail");
    setLoggedInEmail(null);
  };

  return (
    <>
      {!loggedInEmail ? (
        <Button
          variant="primary"
          onClick={handleShow}
          className="!bg-blue-800 !border-none hover:!bg-blue-900 hover:!scale-110 !transition-all duration-300"
        >
          Log In / Sign Up
        </Button>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-gray-800 font-semibold">{loggedInEmail}</span>
          <Button
            variant="danger"
            onClick={handleLogOut}
            className="!border-none"
          >
            Log Out
          </Button>
        </div>
      )}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? "Log In" : "Sign Up"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleLogIn} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-800 text-white p-2 rounded !font-bold"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>

          <div className="text-center mt-3">
            <Button
              variant="link"
              onClick={toggleForm}
              className="!text-blue-800"
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Log In"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LogInSignUpModal;
