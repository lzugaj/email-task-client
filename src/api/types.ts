export type EmailMessageRequest = {
  from: string;
  to: string;
  cc: string;
  subject: string;
  importance: string;
  content: string;
};

export type EmailMessageResponse = {
  id: string;
  from: string;
  to: string;
  cc?: string;
  subject: string;
  importance: string;
  content?: string;
  sendAt: string;
};
