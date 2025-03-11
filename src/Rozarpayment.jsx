import React, { useState, useEffect } from "react";
import "./App.css";

function Rozarpayment({ inrAmount }) {
  const [conversionRate, setConversionRate] = useState(null); // INR to USD rate
  const [usdAmount, setUsdAmount] = useState(0);
  const [currency, setCurrency] = useState("INR");

  // Fetch the INR to USD conversion rate
  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/INR"
        );
        const data = await response.json();
        const rate = data.rates.USD;
        setConversionRate(rate);
        setUsdAmount((inrAmount * rate).toFixed(2)); // Convert INR to USD
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, [inrAmount]);

  // Detect user location
  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.country === "IN") {
          setCurrency("INR");
        } else {
          setCurrency("USD");
        }
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };

    fetchUserLocation();
  }, []);

  const orderPlace = () => {
    console.log("Order placed successfully!");
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const pay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const amountToPay =
      currency === "INR" ? parseInt(inrAmount * 100) : parseInt(usdAmount * 100);

    const options = {
      key: "rzp_live_rm0yFSFebZswtT", // Replace with your Razorpay API key
      amount: amountToPay, // Amount in paise
      currency: currency,
      name: "Litwits",
      description: `Payment of ${currency} ${
        currency === "INR" ? inrAmount : usdAmount
      }`,
      image: "litwits", // Replace with your logo
      handler: function (response) {
        orderPlace(); // Called after successful payment
      },
      prefill: {
        name: "litwits",
        email: "teamlitwits@litwits.in",
        contact: "9811701747",
      },
      notes: {
        address:
          "14 Second Floor Deerwood Chase Nirvana Sector 50 Gurugram, India",
      },
      theme: {
        color: "#158993",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="App">
      {conversionRate ? (
        <button
          className="choose-plan"
          onClick={() => {
            pay();
          }}
        >
          Checkout 
        </button>
      ) : (
        <p>Loading conversion rate...</p>
      )}
    </div>
  );
}

export default Rozarpayment;
