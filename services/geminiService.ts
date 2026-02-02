
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTravelAssistance = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are RailTrack Assistant, an authoritative and professional expert on Indian Railways. 
        Tone: Professional, precise, and helpful. 
        Help users with:
        1. PNR confirmation probability analysis.
        2. Optimal train routes between stations.
        3. Indian Railway regulations (Tatkal, Refunds, Baggage rules).
        4. High-quality station amenities and food recommendations.
        Provide information in a structured, concise Markdown format.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "I am currently unable to fetch travel assistance data. Please try again shortly.";
  }
};

export const getLiveTrainStatus = async (trainNo: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a realistic live status for Indian Railways train number ${trainNo}. Include source, destination, current location, delay, and trip progress percentage.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            number: { type: Type.STRING },
            name: { type: Type.STRING },
            source: { type: Type.STRING },
            destination: { type: Type.STRING },
            status: { type: Type.STRING },
            delay: { type: Type.STRING },
            nextStation: { type: Type.STRING },
            lastUpdated: { type: Type.STRING },
            progress: { type: Type.NUMBER }
          },
          required: ["number", "name", "source", "destination", "status", "progress"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Status Error:", error);
    return null;
  }
};

export const simulatePNRStatus = async (pnr: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a detailed PNR status report for ${pnr}. Simulate realistic booking data.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            pnr: { type: Type.STRING },
            trainNo: { type: Type.STRING },
            trainName: { type: Type.STRING },
            date: { type: Type.STRING },
            passengers: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  no: { type: Type.INTEGER },
                  bookingStatus: { type: Type.STRING },
                  currentStatus: { type: Type.STRING }
                }
              }
            },
            chartStatus: { type: Type.STRING }
          },
          required: ["pnr", "trainNo", "trainName", "passengers"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    return null;
  }
};
