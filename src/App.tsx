import React, {useEffect} from "react";
import Cipher from "@ibnlanre/cipher";
import Layout from "./layout";

function App() {
  // const encryption_key = "uEKBcN7kMKayW6SF8d0BtaJq60Musbp0";
  // const initialization_vector = "hA7wB3e4v87ihj6R";

  // const cipher = new Cipher({
  //   initialization_vector,
  //   algorithm: "aes-256-cbc",
  //   output_decoding: "base64",
  //   input_encoding: "utf-8",
  //   encryption_key,
  // });

  // const { encrypt, decrypt } = cipher;


  // function handleSubmit({ params }) {
  //   const form_data = { otp: params.otp };
  //   const encryptedData = encrypt(form_data);

  //   const headers = new Headers();
  //   headers.set("Content-Type", "application/json");
  //   // headers.set("Authorization", `Bearer ${
  //   //   sessionStorage.getItem("user.auth.token") ?? context.user?.token
  //   // }`);

  //   fetch('wss://comx-sand-api.afexnigeria.com/stream/client-positions?cid=9900153747', {
  //     method: "GET",
  //     // body: JSON.stringify(form_data),
  //     headers
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //     decrypt(response) // impure decryption
  //       console.log(response) // something intelligible
  //     });
  // }

  
  return (
    <div className="">
      <Layout />
    </div>
  );
}

export default App;
