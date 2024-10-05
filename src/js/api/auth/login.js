import { API_AUTH_LOGIN, API_KEY } from '../constants';

  
export async function apiLogin({ email, password }) {
  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": API_KEY,
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed. Please check your credentials.");
    }

    const data = await response.json();
    console.log('API response data:', data);

    if (!data || !data.data || !data.data.accessToken || !data.data.name) {
      throw new Error('Invalid API response data');
    }

    return {
      accessToken: data.data.accessToken,
      userID: data.data.name,
    };
  } catch (error) {
    console.error('Error occurred during login:', error);
    console.error('Error stack trace:', error.stack);
    return { error: 'An unknown error occurred. Please try again later.' };
  }
}