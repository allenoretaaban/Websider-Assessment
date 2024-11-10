export const apiRequest = async (url, method = 'GET', body = null) => {
  try {
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : null,
    };
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || 'An error occurred');
    }
    return data;
  } catch (error) {
    console.error('API Request Error:', error.message);
    throw error;
  }
};

export const AuthModel = {
  login: async (email, password) => {
    return apiRequest('https://nathaniels.com.ph/mobapp/login.php', 'POST', { username: email, password: password });
  },
};