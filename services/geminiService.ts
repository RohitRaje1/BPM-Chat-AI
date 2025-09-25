
import { GoogleGenAI, Chat } from "@google/genai";
import { ProcessData } from '../types';
import { SYSTEM_INSTRUCTION } from '../constants';

let chat: Chat | null = null;

const initializeChat = () => {
    if(!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    return ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
    });
};

export const getResponse = async (userInput: string, processData: ProcessData | null): Promise<string> => {
    if (!chat) {
        chat = initializeChat();
    }

    let prompt = userInput;
    if (processData) {
        prompt = `Context: ${JSON.stringify(processData)}\n\nUser query: "${userInput}"`;
    }

    try {
        const response = await chat.sendMessage({ message: prompt });
        return response.text;
    } catch (error) {
        console.error("Gemini API error:", error);
        // In case of an API error, re-initialize the chat for the next message
        chat = null;
        return "I'm having trouble connecting to my brain right now. Please try asking again in a moment.";
    }
};
