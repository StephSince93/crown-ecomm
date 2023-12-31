import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import CodingChallenges from "./routes/coding-challenges/coding-challenges.component";
import CodingChallengesVTwo from "./routes/coding-challenges-v2/coding-challenges-v2.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="coding-challenges" element={<CodingChallenges />} />
        <Route path="coding-challenges-v2" element={<CodingChallengesVTwo />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
