import React from "react";
import "@/styles/__landing.scss";

const About = () => {
  return (
    <div className="displayitems__content-container">
      <span className="displayitems__content-title">
        Mbizmarket, Trendsetter B2B Marketplace di Indonesia
      </span>
      <span className="displayitems__about-description--grey">
        Mbizmarket adalah B2B Marketplace dengan solusi terlengkap untuk
        pebisnis, mulai dari solusi transaksi bisnis, solusi promosi bisnis,
        solusi e-procurement, hingga solusi pinjaman modal untuk pebisnis.
        Dengan dukungan sistem terbaik, ketersediaan puluhan ribu produk, dan
        juga ribuan penjual terpercaya, Mbizmarket.co.id siap memenuhi kebutuhan
        pengadaan perusahaan Anda.
      </span>

      <span className="displayitems__about-description--blue">
        Lihat Selengkapnya
      </span>
    </div>
  );
};

export default About;
