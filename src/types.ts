export type ChatRequest = {
  sender: string;
  message: string;
};

export type ChatResponse = {
  id: number;
  message: string;
  sender: string;
  sentAt: string;
};
