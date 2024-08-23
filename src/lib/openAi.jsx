import axios from "axios";

class OpenAiClient {
  constructor() {
    this.apiKey = import.meta.env.VITE_OPEN_AI_API_KEY;
  }

  async completion(messages) {
    const requestData = {
      model: "gpt-4o-mini",
      messages,
    };
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  }
}

const openAi = new OpenAiClient();

export default openAi;
