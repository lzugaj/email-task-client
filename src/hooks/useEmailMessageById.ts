import { useEffect, useState } from "react";

import { getEmailMessageById } from "../api/getEmailMessage";
import { EmailMessageResponse } from "../api/types";

export const useEmailMessageById = (id: string | undefined) => {
  const [emailMessage, setEmailMessage] = useState<EmailMessageResponse>({
    cc: "",
    content: "",
    from: "",
    id: "0",
    importance: "",
    sendAt: "",
    subject: "",
    to: "",
  });

  useEffect(() => {
    getEmailMessageById(id)
      .then((data: EmailMessageResponse) => setEmailMessage(data))
      .catch((error) => console.log(error));
  }, []);

  return emailMessage;
};
