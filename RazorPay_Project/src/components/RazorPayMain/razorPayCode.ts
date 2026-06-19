import axios from "axios";

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export function loadScript(src: string): Promise<boolean> {
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
}

export async function displayRazorpay() {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  console.log(res, "res of checkout");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const option = {
    amount: 450,
  };

  // creating a new order
  const result = await axios.post(
    "http://localhost:5500/payment/orders",
    option,
  );

  if (!result) {
    alert("Server error. Are you online?");
    return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: "rzp_test_T2h86QRIDQ93yM", // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: "Soumya Corp.",
    description: "Test Transaction",
    order_id: order_id,
    handler: async function (response: RazorpayResponse) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await axios.post(
        "http://localhost:5500/payment/success",
        data,
      );

      alert(result.data.msg);
    },
    prefill: {
      name: "Soumya Dey",
      email: "SoumyaDey@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Soumya Dey Corporate Office",
    },
    theme: {
      color: "#61dafb",
    },
  };

  const paymentObject = new (window as any).Razorpay(options);
  console.log(Response.error);

  alert(Response.error);
  paymentObject.open();
}
