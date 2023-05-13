import React from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <header>
        <img src="/logo.png" alt="My App" />
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        <div >Login</div>
        <div>Signup</div>
      </div>
    </header>
  );
};

export default Header;
