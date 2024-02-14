import Heading from "@/components/Heading";
import { MessagesSquare } from "lucide-react";
import React from "react";

const ConversationPage = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessagesSquare}
        iconColor="text-violet-500"
        bgColor="text-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        
      </div>
    </div>
  );
};

export default ConversationPage;
