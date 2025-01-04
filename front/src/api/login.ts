import { IloginProps } from "@/interfaces/TypesLogin";
const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function login(userData: IloginProps) {
  try {
    const response = await fetch(`${APIURL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      const errorData = await response.json();
      return { success: false, errorData };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error al comunicarse con el servidor",
      error,
    };
  }
}
