import "./App.css";
import RazorPay from "./components/RazorpayMain/RazorPay";
import { displayRazorpay } from "./components/RazorPayMain/razorPayCode";

function App() {
  return (
    <>
      <RazorPay />
      <button className="App-link" onClick={displayRazorpay}>
        Pay ₹500
      </button>
    </>
  );
}

export default App;
