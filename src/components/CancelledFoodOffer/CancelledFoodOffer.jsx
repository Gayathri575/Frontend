import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Clock, ShoppingCart } from "lucide-react";

const CancelledFoodOffer = () => {
  const [showOffer, setShowOffer] = useState(true);
  const [timeLeft, setTimeLeft] = useState(300); // 5 mins countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowOffer(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {showOffer ? (
        <Card className="w-96 p-4 shadow-lg bg-white text-center border border-green-500 transition-opacity duration-1000">
          <CardContent>
            <div className="flex items-center justify-center mb-4 text-red-600">
              <AlertCircle size={30} />
              <h2 className="ml-2 text-lg font-semibold">Cancelled Order Available!</h2>
            </div>
            <p className="text-gray-700">
              Biryani & Raita - Now at <span className="font-bold text-green-600">20% OFF</span>!
            </p>
            <div className="flex justify-center items-center mt-3 text-orange-500 font-bold">
              <Clock size={18} className="mr-2" />
              Offer expires in: {Math.floor(timeLeft / 60)}:
              {String(timeLeft % 60).padStart(2, "0")} mins
            </div>
            <Button
              className="mt-4 bg-green-600 text-white w-full flex items-center justify-center disabled:bg-gray-400"
              disabled={timeLeft === 0}
            >
              <ShoppingCart size={20} className="mr-2" /> 
              {timeLeft > 0 ? "Grab Now at 20% Off" : "Offer Expired"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <p className="text-gray-600 text-lg animate-fade-out">
          No cancelled food available at the moment.
        </p>
      )}
    </div>
  );
};

export default CancelledFoodOffer;
