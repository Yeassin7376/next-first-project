export const fetchNews = async (category: string = '', search: string = '') => {
  try {
    const response = await fetch(`https://next-1st-project-server.vercel.app/api/news?category=${category}&search=${search}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news data', error);
    return [];
  }
};
