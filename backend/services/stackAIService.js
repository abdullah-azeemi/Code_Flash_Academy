const queryStackAI = async (data) => {
  try {
    const response = await fetch(
      'https://api.stack-ai.com/inference/v0/run/9bc16ff6-e103-42e5-a0fd-9cdea2fc0bfe/66d0697101c53c2913ea538e',
      {
        headers: {
          Authorization: 'Bearer 26f23416-0f2b-4830-b864-6a1f515b160f',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error querying Stack AI:', error);
    throw new Error('Failed to generate roadmap');
  }
};

module.exports = { queryStackAI };
