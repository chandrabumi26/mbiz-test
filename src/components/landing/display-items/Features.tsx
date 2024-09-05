import "@/styles/__landing.scss";
import React from "react";

const Features = () => {
  const itemsArr = [
    {
      title: "Belanja Satuan / Grosiran",
      img: " https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Fwhy-mbizmarket%2Fopt-wholesale.png&w=256&q=75",
      description:
        "Tersedia harga satuan, grosiran, hingga harga dengan PPN khusus, penjual PKP (Pengusaha Kena Pajak).",
    },
    {
      title: "Pengadaan Anti Ribet",
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Fwhy-mbizmarket%2Fopt-procurement.png&w=256&q=75",
      description:
        "Nikmati fitur e-procurement gratis dari fitur persetujuan online, e-tendering, invoicing online, pelacakan persedian, dan lain-lain.",
    },
    {
      title: "Pembayaran Bervariasi",
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Fwhy-mbizmarket%2Fopt-lending.png&w=256&q=75",
      description:
        "Pilih bayar sekarang (Cash Before Delivery) atau nanti (Term of Payment).",
    },
    {
      title: "Pinjaman Modal",
      img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fstatic.mbizmarket.co.id%2Fassets%2Fimg%2Fwhy-mbizmarket%2Fopt-payment.png&w=256&q=75",
      description:
        "Ajukan pinjaman untuk pembeli & penjual (Syarat ketentuan berlaku).",
    },
  ];
  return (
    <div className="displayitems__content-container">
      <span className="displayitems__content-title">Kenapa Mbizmarket?</span>
      <div className="d-flex">
        {itemsArr.map((e, index) => (
          <div key={index} className="displayitems__features-card">
            <div className="displayitems__features-img-container">
              <img src={e.img} />
            </div>
            <span className="displayitems__features-text--title">
              {e.title}
            </span>
            <span className="displayitems__features-text--description">
              {e.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
