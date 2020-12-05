import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Edict/r02/1/Edict_GW_1500x600._CB406612940_.png"
        alt="Home"
      />
      <div className="home__row">
        <Product
          id="L0001"
          title="ASUS TUF Gaming FX505 15.6 inch FHD 120Hz Laptop(Ryzen 5-3550H/8GB RAM/512GB PCIe SSD/GTX 1650 4GB/Windows 10/Stealth Black/2.20 Kg)"
          price={49700}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/914o5xV1%2B8L._SL1500_.jpg"
        />
        <Product
          id="P0001"
          title="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)"
          price={37999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="W0001"
          title="TP-Link AC1200 Archer A6 Smart WiFi, 5GHz Gigabit Dual Band MU-MIMO Wireless Internet Router, Long Range Coverage by 4 Antennas, Wireless Router Black"
          price={2499}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51%2BAGYLfveL._SL1000_.jpg"
        />
        <Product
          id="T0001"
          title="LG 139 cms (55 inches) 4K Ultra HD Smart OLED TV OLED55B9PTA | With Built-in Alexa (PCM Black) (2019 Model)"
          price={129990}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91ECSQ8NnuL._SL1500_.jpg"
        />
        <Product
          id="M0001"
          title="MSI Optix MAG241C 23.6 inch Full HD Curved Gaming Monitor, 144hz Refresh Rate, 1ms Response time, Anti Glare Panel and Adjustable Stand"
          price={18299}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51CzU6UCoFL._SL1000_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="L0001"
          title="WD Black SN750 1TB NVMe Internal Gaming SSD - Gen3 PCIe, M.2 2280, 3D NAND - WDS100T3X0C"
          price={11700}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81PXk%2BQyqFL._AC_SL1500_.jpg
          "
        />
      </div>
    </div>
  );
}

export default Home;
