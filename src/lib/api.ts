const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const APP_TOKEN = import.meta.env.VITE_APP_TOKEN || 'CMS-V3-SECURE-ACCESS';

interface RequestOptions extends RequestInit {
  data?: any;
}

export const apiCall = async (endpoint: string, options: RequestOptions = {}) => {
  const token = localStorage.getItem('token');
  
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  headers.set('x-cms-app-token', APP_TOKEN);
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const { data, ...rest } = options;
  const config: RequestInit = {
    credentials: 'include', // Always send cookies for session support
    ...rest,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }

    return result;
  } catch (error: any) {
    throw new Error(error.message || 'Network error');
  }
};
