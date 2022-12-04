import * as paths from "./paths";
import { EmailMessageResponse } from "./types";

// GET /api/v1/email-message/id
export async function getEmailMessageById(id: string | undefined): Promise<EmailMessageResponse> {
  const response = await fetch(`${paths.emailTask.emailMessage}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

// GET /api/v1/email-message
export async function getEmailMessage(): Promise<EmailMessageResponse[]> {
  const response = await fetch(paths.emailTask.emailMessage, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
