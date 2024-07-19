export const endpoint = `http://95.217.134.12:4010/create-pdf?apiKey=${import.meta.env.VITE_API_KEY}`;

export const createPdf = async (text: string) => {
  try {
    const results = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const response = await results.arrayBuffer();
    const base64String = btoa(String.fromCharCode(...new Uint8Array(response)));
    return base64String;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
