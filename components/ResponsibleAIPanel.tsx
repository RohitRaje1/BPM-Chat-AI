
import React from 'react';
import InfoIcon from './icons/InfoIcon';

const ResponsibleAIPanel: React.FC = () => {
  return (
    <div className="text-slate-400 text-sm h-full flex flex-col">
        <h2 className="text-xl font-semibold text-slate-200 mb-4 flex items-center">
            <InfoIcon className="mr-2" />
            About This AI
        </h2>

        <div className="space-y-6 flex-1 custom-scrollbar overflow-y-auto pr-2">
            <div>
                <h3 className="font-semibold text-slate-300 mb-1">Purpose</h3>
                <p>This AI assistant is designed to provide quick insights into Business Process Management (BPM) tasks. It helps you track service requests, identify delays, and understand who is responsible for the next step.</p>
            </div>

            <div>
                <h3 className="font-semibold text-slate-300 mb-1">Data Source</h3>
                <p>The AI's responses are based exclusively on a pre-defined, mock dataset representing typical BPM scenarios. It does not have access to live production data or any information beyond what is in its context for each query.</p>
            </div>

            <div>
                <h3 className="font-semibold text-slate-300 mb-1">How It Works</h3>
                <p>When you ask about a Service ID, the system retrieves the relevant data and provides it to a large language model (LLM). The LLM then analyzes this data to answer your question, identify bottlenecks (tasks marked 'Blocked'), and generate actionable recommendations.</p>
            </div>

            <div>
                <h3 className="font-semibold text-slate-300 mb-1">Limitations & Disclaimers</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>The information provided is for demonstration purposes only.</li>
                    <li>The AI's suggestions are generated based on patterns in the data and should not be considered definitive commands.</li>
                    <li>Always consult with your team lead or process manager before taking significant actions based on the AI's recommendations.</li>
                    <li>The AI can make mistakes. Please verify critical information through official channels.</li>
                </ul>
            </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-700/50 text-xs text-center text-slate-500">
            <p>Built with Responsible AI Principles in Mind</p>
        </div>
    </div>
  );
};

export default ResponsibleAIPanel;
