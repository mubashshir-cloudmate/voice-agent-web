import { Agent } from "@/app/modules/agents/interface";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AudioLines,
  Brain,
  ChartBar,
  Mic,
  Parentheses,
  Phone,
} from "lucide-react";
import React from "react";
import LLMSection from "./sections/llm";
import { KnowledgeBase } from "@/app/modules/knowledgebase/interface";
import TranscriberSection from "./sections/transcriber";
import VoiceSection from "./sections/voice";
import CallSection from "./sections/call";

interface Props {
  agent: Agent;
  knowledgeBases: KnowledgeBase[];
}

const ConfigurationSection = ({ agent, knowledgeBases }: Props) => {
  return (
    <div className="flex-1 px-6 py-4 bg-card overflow-y-auto rounded-lg">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="functions">
          <AccordionTrigger className="text-sm font-medium">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              <span>LLM</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <LLMSection agent={agent} knowledgeBases={knowledgeBases} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="knowledge-base">
          <AccordionTrigger className="text-sm font-medium">
            <div className="flex items-center gap-2">
              <Mic className="h-4 w-4" />
              <span>Transcriber</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <TranscriberSection agent={agent} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="speech">
          <AccordionTrigger className="text-sm font-medium">
            <div className="flex items-center gap-2">
              <AudioLines className="h-4 w-4" />
              <span>Voice</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <VoiceSection agent={agent} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="call">
          <AccordionTrigger className="text-sm font-medium">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Call</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <CallSection agent={agent} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="functions">
          <AccordionTrigger className="text-sm font-medium">
            <div className="flex items-center gap-2">
              <Parentheses className="h-4 w-4" />
              <span>Functions</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>{/* Functions content */}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="post-call">
          <AccordionTrigger className="text-sm font-medium">
            <div className="flex items-center gap-2">
              <ChartBar className="h-4 w-4" />
              <span>Post-Call Analysis</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {/* Post-Call Analysis content */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ConfigurationSection;
