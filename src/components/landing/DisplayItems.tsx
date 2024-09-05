import React from "react";
import "@/styles/__landing.scss";
import CarouselItems from "@/components/landing/display-items/CarouselItems";
import Collaboration from "./display-items/Collaboration";
import Features from "./display-items/Features";

const DisplayItems = () => {
  const items = [
    {
      label: "Laptop",
      banner:
        "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F500x500%2F2023%2F10%2F02%2Fb36a4d8d65c9c347de16270275f6b6ae.jpg&w=1920&q=75",
      itemsArr: [
        {
          title:
            "ThinkBook 14 G4 ABA Ryzen 7-5825U 8GB 512GB SSD 14 IPS Win11H OHS2021 RID",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F02%2F01%2Fe59a4a0a23fec608f4f523c2c9e7fcc9.jpg&w=1920&q=75",
          isVerified: false,
          vendor: "Think.ID",
          taxtStatus: "PKP",
          location: "Jawa Timur",
          price: "Rp 10.576.577,00",
        },
        {
          title: "Asus VivoBook 14 A1404VA I3 1315 8GB 512GB W11 OHS",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F08%2F16%2F9b9778a65ff4a2295b8f1e1be0b147ea.jpg&w=1920&q=75",
          isVerified: true,
          vendor: "CV YASA",
          taxtStatus: "PKP",
          location: "Jawa Timur",
          price: "Rp 9.279.279,00",
        },
        {
          title:
            "Acer Travelmate P414 Core i5-1240P 8/512 GB TMP414/RN/0001 TKDN 28.88%",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2023%2F05%2F06%2F6d014556aafa5ae0fd4d9101ac775edb.jpg&w=1920&q=75",
          isVerified: false,
          vendor: "CV Sangria Mandiri Communica",
          taxtStatus: "PKP",
          location: "Jawa Barat",
          price: "Rp 20.786.000,00",
        },
        {
          title:
            "Acer Travelmate P214 Core i3-1315U 8/512 GB TMP214/0037 14 inch TKDN 26.55%",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F01%2F30%2F33ef5857b17bc8004e344175a20fd62d.jpg&w=1920&q=75",
          isVerified: false,
          vendor: "CV Sangria Mandiri Communica",
          taxtStatus: "PKP",
          location: "Jawa Barat",
          price: "Rp Rp 10.780.000,00",
        },
        {
          title: "Asus VivoBook 14 i5-1135U",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F08%2F19%2F78d9dcb5f5a38a887b8a92ee29ad065b.jpg&w=1920&q=75",
          isVerified: false,
          vendor: "CV DIGSA UTAMA",
          taxtStatus: "PKP",
          location: "Jawa Barat",
          price: "Rp 18.957.250,00",
        },
      ],
    },
    {
      label: "Perlengkapan Elektronik",
      banner:
        "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F500x500%2F2022%2F05%2F20%2F182c6adb0816a14264efafba3866f674.jpg&w=1920&q=75",
      itemsArr: [
        {
          title: "LCD Proyektor Acer XII26AH DLP",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F08%2F16%2F4ab9e8d4c5f8090aaa176de9e3ed9dbc.jpg&w=1920&q=75",
          isVerified: true,
          vendor: "ARINDA ABADI",
          taxtStatus: "Non PKP",
          location: "Jawa Timur",
          price: "Rp.4.504.504,55",
        },
        {
          title: "AC Polytron PAC-09VH01 PK",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F01%2F09%2F465c7cbce5b870e6e3943a150cdaf898.jpg&w=1920&q=75",
          isVerified: false,
          vendor: "CV. Kafalo Abadi",
          taxtStatus: "PKP",
          location: "Lampung",
          price: "Rp.5.585.500,00",
        },
        {
          title: "Speaker Aktif Huper 15HA400",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F08%2F14%2F9caf6224e6a7e0ddf41e37f788676b82.jpg&w=1920&q=75",
          isVerified: false,
          vendor: "CV. Hanema",
          taxtStatus: "PKP",
          location: "Kalimantan Barat",
          price: "Rp.16.590.000,00",
        },
        {
          title: "AC Polytron 1PK PAC09VSZ + Pasang",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F08%2F01%2F87778b6a9938c3f0f15f22bc1f916d9c.jpg&w=1920&q=75",
          isVerified: true,
          vendor: "CV. Krisna Global Sarana",
          taxtStatus: "PKP",
          location: "Bali",
          price: "Rp.5.900.000,00",
        },
        {
          title: "INFOCUS IN2115",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F07%2F22%2F7bdc598ee14232ac3de1fe069249784a.jpg&w=1920&q=75",
          isVerified: false,
          vendor: "CV. Mestakung",
          taxtStatus: "Non PKP",
          location: "Sulawesi Barat",
          price: "Rp.8.900.000,00",
        },
        {
          title: "Samsung SMART 43 Inch",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F08%2F06%2Ffcece2f178553840273fba6b696cc55a.jpg&w=1920&q=75",
          isVerified: false,
          vendor: "CV Mutiara Raya",
          taxtStatus: "PKP",
          location: "Jawa Timur",
          price: "Rp.5.177.200,00",
        },
        {
          title: "Smart TV LED Sharp 42 Inch 2T-C4DF1I TKDN",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F08%2F02%2F24eff657401487e8afb25aeab8a05493.jpg&w=1920&q=75",
          isVerified: true,
          vendor: "CV Rahmat Ilahi Santosa",
          taxtStatus: "PKP",
          location: "Jawa Timur",
          price: "Rp.4.340.000,00",
        },
      ],
    },
    {
      label: "Furniture Kantor",
      banner:
        "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fmarketing_images%2Fthumbs%2F500x500%2F2022%2F05%2F20%2F2343e4ea5d0256c51e228b0b4fccfeb7.jpg&w=1920&q=75",
      itemsArr: [
        {
          title: "Meja Kerja YM-51",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F08%2F03%2Ff5127f4011dcb79fecae22ea32ab27a1.jpg&w=1920&q=75",
          isVerified: true,
          vendor: "CV Berdikari Jaya Abadi",
          taxtStatus: "PKP",
          location: "Jawa Barat",
          price: "RRp 2.390.000,00",
        },
        {
          title: "Meja Minimalis",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2024%2F07%2F23%2F494069b82a859cc9a5e25f1cd25b0ac0.jpg&w=1920&q=75",
          isVerified: false,
          vendor: "PT. SULTHAN PUTRA SENDAWAR",
          taxtStatus: "Non PKP",
          location: "Kalimantan Barat",
          price: "Rp 3.389.000,00",
        },
        {
          title: "Sofa Tamu Kantor",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2023%2F03%2F08%2Fa732eac1ccce0a71ffe19f000bafaf9c&w=1920&q=75",
          isVerified: false,
          vendor: "Global Fit Indonesia",
          taxtStatus: "Non PKP",
          location: "DKI Jakarta",
          price: "Rp 19.400.000,00",
        },
        {
          title: "Sofa minimalis - Sofa | Sofa Ruang Tamu - Merah Tua",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2023%2F10%2F30%2Ffa6de0fa2168af0a7ef3eed706603961.jpg&w=1920&q=75",
          isVerified: false,
          vendor: "CV. SINAR PEPABRI",
          taxtStatus: "Non PKP",
          location: "Gorontalo Utara",
          price: "Rp 8.700.000,00",
        },
        {
          title: "Meja Kantor",
          img: "https://www.mbizmarket.co.id/_next/image?url=https%3A%2F%2Fimg.mbizmarket.co.id%2Fproducts%2Fthumbs%2F180x180%2F2023%2F05%2F04%2F27878d057c54284835cf7485b5794e7e.jpg&w=1920&q=75",
          isVerified: true,
          vendor: "PT Andalan Sentosa Padu Gemilang",
          taxtStatus: "PKP",
          location: "Jawa Barat",
          price: "Rp 5.860.000,00",
        },
      ],
    },
  ];
  return (
    <div className="displayitems">
      <div className="displayitems__content">
        {items.map((e, index) => (
          <CarouselItems key={index} items={e}></CarouselItems>
        ))}
        <Collaboration></Collaboration>
        <Features></Features>
      </div>
    </div>
  );
};

export default DisplayItems;
