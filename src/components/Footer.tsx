import React from "react";
import "@/styles/__footer.scss";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content-container">
          <div className="footer__group">
            <span className="footer__title">Mbizmarket.co.id</span>
            <span className="footer__link">Tentang Kami</span>
            <span className="footer__link">Syarat & Ketentuan</span>
            <span className="footer__link">Kebijakan Privasi</span>
            <span className="footer__link">Blog</span>
          </div>
          <div className="footer__group">
            <span className="footer__title">Hubungi Kami</span>
            <span className="footer__link">{`(021) 400 01 036`}</span>
            <span className="footer__link">help@mbizmarket.co.id</span>
            <span className="footer__link">Kirim</span>
          </div>
          <div className="footer__group">
            <span className="footer__title">Pembeli</span>
            <span className="footer__link">Cara Bertransaksi</span>
            <span className="footer__link">Masuk Sebagai Pembeli</span>
          </div>
          <div className="footer__group">
            <span className="footer__title">Penjual</span>
            <span className="footer__link">Cara Berjualan</span>
            <span className="footer__link">Masuk Sebagai Penjual</span>
            <span className="footer__link">Cara Ajukan Pinjaman Modal</span>
          </div>
          <div className="footer__group">
            <span className="footer__title">Promo & Info Terkini</span>
            <div className="searchbar">
              <input
                className="searchbar__input"
                type="text"
                placeholder="Search Poduk / Toko"
              />
              <button className="searchbar__button-search">
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
              </button>
            </div>
            <span className="footer__small-text">
              Dapatkan beragam penawaran spesial untuk segala kebutuhan bisnis
              Anda dari Mbizmarket.co.id
            </span>
            <span className="footer__small-text">
              Situs ini dilindungi oleh reCAPTCHA dan Google{" "}
              <span className="footer__small-text--link">
                Kebijakan Privasi{" "}
              </span>{" "}
              dan{" "}
              <span className="footer__small-text--link">
                Ketentuan Layanan{" "}
              </span>
              berlaku
            </span>
          </div>
        </div>
        <div className="footer__content-container">
          <div className="footer__group">
            <span className="footer__title">Unduh Aplikasi Kami</span>
            <img
              className="footer__google-btn"
              src="https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Ffooter%2Fgoogle-play-badge.png&w=1920&q=75"
            />
          </div>
          <div className="footer__group">
            <span className="footer__title">Mitra Resmi Dari</span>
            <img
              className="footer__google-btn"
              src="https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Ffooter%2Flkpp-logo.png&w=1920&q=75"
            />
          </div>
          <div className="footer__group">
            <span className="footer__title">Ikuti Kami</span>
            <div className="footer__social-media-container">
              <img src="https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Ffooter%2Flogo-socmed%2Ficon-linkedin.png&w=1920&q=75" />
              <img src="https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Ffooter%2Flogo-socmed%2Ficon-facebook.png&w=1920&q=75" />
              <img src="https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Ffooter%2Flogo-socmed%2Ficon-youtube.png&w=1920&q=75" />
              <img src="https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Ffooter%2Flogo-socmed%2Ficon-instagram.png&w=1920&q=75" />
            </div>
          </div>
          <div className="footer__group">
            <span className="footer__title">Metode Pembayaran</span>
            <div className="footer__payment-method-container">
              <div className="footer__payment-method-card">
                <img src="https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Ffooter%2Flogo-bank%2Fbank-bri.png&w=1920&q=75" />
              </div>
              <div className="footer__payment-method-card">
                <img src="https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Ffooter%2Flogo-bank%2Fbank-mandiri.png&w=1920&q=75" />
              </div>
              <div className="footer__payment-method-card">
                <img src="https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Ffooter%2Flogo-bank%2Fbank-bni.png&w=1920&q=75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
