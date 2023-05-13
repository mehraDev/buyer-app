import Header from "components/ui/Header/Header";
import React from "react";

interface WelcomeProps {
  name: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return (
    <div>
        <Header onSearch={() => console.log("Searcing")}/>
      <h1>Welcome, {name}!</h1>
      <p>Thank you for using our app.</p>
    </div>
  );
};

export default Welcome;
