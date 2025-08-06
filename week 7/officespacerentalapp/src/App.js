import React from "react";
import dbsImg from "./image.png";
import regusImg from "./image1.png";
import weworkImg from "./image2.png";
import smartworksImg from "./image3.png";

const App = () => {
  const heading = "Office Space Rentals";

  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai", Img: dbsImg },
    { Name: "Regus", Rent: 65000, Address: "Bangalore", Img: regusImg },
    { Name: "WeWork", Rent: 55000, Address: "Hyderabad", Img: weworkImg },
    { Name: "Smartworks", Rent: 70000, Address: "Mumbai", Img: smartworksImg }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "600px", margin: "0 auto" }}>
      <h1>{heading}</h1>
      <div>
        {officeList.map((office, index) => {
          const rentColor = office.Rent <= 60000 ? "red" : "green";
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "8px",
                gap: "15px"
              }}
            >
              <img
                src={office.Img}
                alt={office.Name}
                width="150"
                height="100"
                style={{ borderRadius: "6px", objectFit: "cover" }}
              />
              <div>
                <h2>Name: {office.Name}</h2>
                <h3 style={{ color: rentColor }}>Rent: Rs. {office.Rent}</h3>
                <h3>Address: {office.Address}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
