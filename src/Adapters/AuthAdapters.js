/** @format */

import { Auth } from "aws-amplify";
import { red } from "color-name";

// export async function signUp(userDetails) {
//   const { email, password, phoneNumber } = userDetails;

//   try {
//     const { user } = await Auth.signUp({
//       username: "876",
//       password: password,
//       attributes: {
//         email: email,
//         phone_number: phoneNumber,
//       },
//     });
//     console.log(user);
//     return user;
//   } catch (error) {
//     console.log("error signing up:", error);
//     throw error;
//   }
// }

// export async function confirmSignUp(userDetails) {
//   const { username, code } = userDetails;
//   try {
//     await Auth.confirmSignUp(username, code);
//   } catch (error) {
//     console.log("error confirming sign up", error);
//     throw error;
//   }
// }

// export async function signOut() {
//   try {
//     await Auth.signOut();
//   } catch (error) {
//     console.log("error signing out: ", error);
//     throw error;
//   }
// }

// export async function signIn(userDetails) {
//   const { username, password } = userDetails;
//   try {
//     const user = await Auth.signIn(username, password);
//     return user;
//   } catch (error) {
//     console.log("error signing in", error);
//     throw error;
//   }
// }

export const signUp = async (userDetails) => {
  const res = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });

  const body = await res.json();
  if (!res.ok) throw new Error(body.msg);

  console.log(`res is authAdapters is `, body);
  return body;
};

export const signIn = async (userDetails) => {
  const res = await fetch("http://localhost:3000/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });

  const body = await res.json();
  if (!res.ok) throw new Error(body.msg);
  return body;
};
