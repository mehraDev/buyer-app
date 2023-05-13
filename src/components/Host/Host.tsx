import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Header from "components/ui/Header/Header";


function ShopDetailsWrapper() {
  const { shopId } = useParams<{ shopId: string }>();
  return <>Welcome to {shopId}</>
}

function Host() {
  return (
    <>
     <Router>
        <Header onSearch={() => console.log("Searching")} />
        <Routes>
          <Route path="/:shopId" element={<ShopDetailsWrapper />} />
          <Route path="/" element={<div>I am main body</div>} />
        </Routes>
      </Router>
    <div>I am main body</div>
    </>
  )
}

export default Host



