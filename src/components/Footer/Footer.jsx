import React, { useState } from "react";
import styles from "./Footer.module.css";
import Modal from "../Modal/Modal";
import Portfolio from "../Portfolio/Portfolio";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; {new Date().getFullYear()} Truck Management System. All rights
          reserved.
        </p>
        <p>
          Developed by{" "}
          <span className={styles.portfolioLink} onClick={openModal}>
            GOIT Student 💛
          </span>
        </p>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Portfolio />
      </Modal>
    </footer>
  );
};

export default Footer;
