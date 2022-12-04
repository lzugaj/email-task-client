import * as path from "./paths";
import { EmailMessageRequest } from "./types";

// POST /api/v1/email-message
export async function sendEmailMessage(data: EmailMessageRequest): Promise<boolean> {
  const response = await fetch(path.emailTask.emailMessage, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.ok;
}
