import React from "react";

interface LoyaltyCardProps {
  // Add any props and their types here if needed
}

const LoyaltyCard: React.FC<LoyaltyCardProps> = () => {
  return (
    <div className="loyaltyCardMain">
      <div>
        <h1>Carte de fidélité disponible!</h1>
      </div>
    </div>
  );
}

export default LoyaltyCard;