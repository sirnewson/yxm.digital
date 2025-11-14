// UMD-style fallback for aiTools
// Safe to include via a plain <script> tag in browsers (no ES module exports).
(function () {
  const tools = [
    // Chat & Conversational AI
    { name: 'ChatGPT', category: 'Chat', description: 'Advanced conversational AI for diverse tasks and dialogue.', url: 'https://chat.openai.com' },
    { name: 'Claude', category: 'Chat', description: 'Intelligent assistant by Anthropic for complex reasoning.', url: 'https://claude.ai' },
    { name: 'Gemini', category: 'Chat', description: 'Google\'s AI model for creative and analytical tasks.', url: 'https://gemini.google.com' },
    { name: 'Copilot', category: 'Chat', description: 'Microsoft\'s AI assistant powered by GPT-4.', url: 'https://copilot.microsoft.com' },
    { name: 'Perplexity AI', category: 'Chat', description: 'Research-focused AI that cites sources in conversations.', url: 'https://www.perplexity.ai' },
    { name: 'Mistral AI', category: 'Chat', description: 'Fast and efficient open-source AI model.', url: 'https://mistral.ai' },
    { name: 'TheQuickAssist', category: 'Chat', description: 'Build and deploy AI chatbots for websites.', url: 'https://www.livechat.com' },
    { name: 'Patter', category: 'Chat', description: 'Build AI chat agents for sales automation.', url: 'https://www.drift.com' },
    
    // Generative Art & Image
    { name: 'DALL-E 3', category: 'Generative Art', description: 'Generate detailed images from text descriptions.', url: 'https://openai.com/dall-e-3' },
    { name: 'Midjourney', category: 'Generative Art', description: 'Create high-quality artwork through AI imagination.', url: 'https://www.midjourney.com' },
    { name: 'Stable Diffusion', category: 'Generative Art', description: 'Open-source image generation model.', url: 'https://stablediffusionweb.com' },
    { name: 'Adobe Firefly', category: 'Generative Art', description: 'Generative art within Adobe Creative Suite.', url: 'https://www.adobe.com/products/firefly.html' },
    { name: 'Leonardo AI', category: 'Generative Art', description: 'Create unique production-ready game assets.', url: 'https://leonardo.ai' },
    { name: 'Copilot 3D', category: 'Generative Art', description: 'Convert 2D images into 3D models.', url: 'https://copilot3d.ai' },
    { name: 'LetzAI', category: 'Generative Art', description: 'Creates custom image generators trained on your photos.', url: 'https://letz.ai' },
    { name: 'Vibe3D', category: 'Generative Art', description: 'Turn 3D models into renders with text-based editing.', url: 'https://www.meshy.ai' },
    { name: 'Daisy.so', category: 'Image Improvement', description: 'Remix, edit, and animate images with custom styles.', url: 'https://daisy.so' },
    { name: 'GetRenders', category: 'Image Improvement', description: 'Create virtual staging for real estate photos.', url: 'https://www.virtualstaging.ai' },
    
    // Copywriting & Content
    { name: 'Jasper', category: 'Copywriting', description: 'AI writing assistant for marketing and content creation.', url: 'https://www.jasper.ai' },
    { name: 'Copy.ai', category: 'Copywriting', description: 'Generate marketing copy and social media content.', url: 'https://www.copy.ai' },
    { name: 'Grammarly', category: 'Copywriting', description: 'AI-powered writing assistant for grammar and clarity.', url: 'https://www.grammarly.com' },
    { name: 'Movable Type', category: 'Copywriting', description: 'Generate book manuscripts matching your writing style.', url: 'https://movabletype.ai' },
    { name: 'Writesonic', category: 'Copywriting', description: 'Create SEO content and marketing copy instantly.', url: 'https://writesonic.com' },
    
    // Video Generation & Editing
    { name: 'Runway', category: 'Generative Video', description: 'AI video creation and editing suite.', url: 'https://runwayml.com' },
    { name: 'Synthesia', category: 'Generative Video', description: 'Create videos from text with AI avatars.', url: 'https://www.synthesia.io' },
    { name: 'D-ID', category: 'Generative Video', description: 'Generate talking head videos from images.', url: 'https://www.d-id.com' },
    { name: 'Plotaverse', category: 'Generative Video', description: 'Transform static images into animated videos.', url: 'https://plotaverse.com' },
    { name: 'Vireel', category: 'Text-To-Video', description: 'Create short-form videos for social media.', url: 'https://vireel.ai' },
    { name: 'FrameZero', category: 'Video Editing', description: 'Sketch, animate, and share ideas online.', url: 'https://framezero.ai' },
    
    // Code Generation
    { name: 'GitHub Copilot', category: 'Generative Code', description: 'AI pair programmer that writes code for you.', url: 'https://github.com/features/copilot' },
    { name: 'Tabnine', category: 'Generative Code', description: 'AI code completion for any programming language.', url: 'https://www.tabnine.com' },
    { name: 'CodeWhisperer', category: 'Generative Code', description: 'AWS\'s AI code recommendation service.', url: 'https://aws.amazon.com/codewhisperer' },
    { name: 'Replit', category: 'Generative Code', description: 'AI-powered IDE for rapid development.', url: 'https://replit.com' },
    { name: 'Open Lovable', category: 'Generative Code', description: 'Convert websites into React applications.', url: 'https://openlovable.com' },
    { name: 'Vibecode', category: 'Generative Code', description: 'Build mobile apps like editing videos.', url: 'https://vibecode.com' },
    { name: 'Cline', category: 'Generative Code', description: 'Open source collaborative coding agent.', url: 'https://github.com/topics/ai-coding' },
    { name: 'Matter AI', category: 'Generative Code', description: 'Automate code reviews and find bugs.', url: 'https://www.codereview.ai' },
    
    // Text-to-Speech & Voice
    { name: 'ElevenLabs', category: 'Text-To-Speech', description: 'Lifelike text-to-speech and voice cloning.', url: 'https://elevenlabs.io' },
    { name: 'Google Cloud TTS', category: 'Text-To-Speech', description: 'Natural-sounding speech synthesis.', url: 'https://cloud.google.com/text-to-speech' },
    { name: 'Descript', category: 'Text-To-Speech', description: 'Edit audio and video by editing text.', url: 'https://www.descript.com' },
    { name: 'KittenTTS', category: 'Text-To-Speech', description: 'Convert text to speech efficiently.', url: 'https://kittentts.com' },
    { name: 'Wondercraft', category: 'Podcasting', description: 'AI audio studio for podcasts and content.', url: 'https://wondercraft.ai' },
    
    // Speech-to-Text
    { name: 'Whisper', category: 'Speech-To-Text', description: 'OpenAI\'s robust speech recognition model.', url: 'https://openai.com/research/whisper' },
    { name: 'Amical', category: 'Speech-To-Text', description: 'Transcribe meetings and capture voice notes.', url: 'https://amical.ai' },
    { name: 'Otter.ai', category: 'Speech-To-Text', description: 'Real-time transcription and recording.', url: 'https://otter.ai' },
    
    // Productivity & Organization
    { name: 'Notion', category: 'Productivity', description: 'All-in-one workspace with integrated AI.', url: 'https://www.notion.so' },
    { name: 'Obsidian', category: 'Productivity', description: 'Personal knowledge management with AI plugins.', url: 'https://obsidian.md' },
    { name: 'Enjo.ai', category: 'Productivity', description: 'Handle support with AI-powered context.', url: 'https://enjo.ai' },
    { name: 'Memara', category: 'Productivity', description: 'AI agents with persistent memory.', url: 'https://memara.ai' },
    { name: 'StatPecker', category: 'Productivity', description: 'Transform data into charts and infographics.', url: 'https://statpecker.com' },
    { name: 'Submind', category: 'Productivity', description: 'Privacy-first note-taking with AI.', url: 'https://submind.ai' },
    { name: 'Chopdi AI', category: 'Productivity', description: 'Note-taking with retrieval and summaries.', url: 'https://chopdi.ai' },
    
    // Marketing & Social Media
    { name: 'Canva', category: 'Inspiration', description: 'Design platform with AI-powered features.', url: 'https://www.canva.com' },
    { name: 'Buffer', category: 'Social Media', description: 'Schedule and analyze social media posts.', url: 'https://buffer.com' },
    { name: 'Hootsuite', category: 'Social Media', description: 'Manage multiple social platforms with AI.', url: 'https://www.hootsuite.com' },
    { name: 'Later', category: 'Social Media', description: 'Visual content calendar and scheduling.', url: 'https://www.later.com' },
    { name: 'Thumbler AI', category: 'Social Media', description: 'Generate YouTube thumbnails from prompts.', url: 'https://thumbler.ai' },
    { name: 'PostEverywhere', category: 'Social Media', description: 'Create and publish across platforms.', url: 'https://buffer.com' },
    { name: 'WisePPC', category: 'Marketing', description: 'Optimize Amazon advertising campaigns.', url: 'https://wiseppc.ai' },
    { name: 'Profound', category: 'Marketing', description: 'Monitor brand in AI search results.', url: 'https://profound.ai' },
    { name: 'Picky Assist', category: 'Marketing', description: 'Multi-channel communication management.', url: 'https://www.activecampaign.com' },
    { name: 'dynares', category: 'Marketing', description: 'Generate personalized landing pages.', url: 'https://www.unbounce.com' },
    { name: 'BrightStage AI', category: 'Marketing', description: 'Manage sales presentations and webinars.', url: 'https://www.sales.com' },
    
    // Translation & Localization
    { name: 'Perso.ai', category: 'Translation', description: 'Translate and lip-sync videos globally.', url: 'https://perso.ai' },
    { name: 'Google Translate', category: 'Translation', description: 'AI-powered translation for 100+ languages.', url: 'https://translate.google.com' },
    { name: 'DeepL', category: 'Translation', description: 'High-quality neural machine translation.', url: 'https://www.deepl.com' },
    
    // Research & Analysis
    { name: 'Semantic Scholar', category: 'Research', description: 'AI-powered research paper search.', url: 'https://www.semanticscholar.org' },
    { name: 'Company Research Agent', category: 'Research', description: 'Analyze company data for reports.', url: 'https://www.perplexity.ai' },
    { name: 'Elicit', category: 'Research', description: 'AI research assistant for literature.', url: 'https://elicit.org' },
    
    // Finance & Business
    { name: 'Endex', category: 'Finance', description: 'Financial data analysis in Excel.', url: 'https://endex.ai' },
    { name: 'Alpaca', category: 'Finance', description: 'AI-powered trading and portfolio analysis.', url: 'https://alpaca.markets' },
    
    // Automation & Workflow
    { name: 'Zapier', category: 'Productivity', description: 'Connect and automate workflows.', url: 'https://zapier.com' },
    { name: 'Make', category: 'Automation & Agents', description: 'Visual workflow automation platform.', url: 'https://www.make.com' },
    { name: 'Retool', category: 'Automation & Agents', description: 'Build internal tools fast.', url: 'https://www.retool.com' },
    { name: 'Klavis AI', category: 'Automation & Agents', description: 'Connect AI agents with MCP.', url: 'https://www.make.com' },
    { name: 'Yorph AI', category: 'Automation & Agents', description: 'No-code data analysis pipelines.', url: 'https://www.retool.com' },
    { name: 'GPTBots.ai', category: 'Automation & Agents', description: 'Build enterprise no-code agents.', url: 'https://www.gptbots.ai' },
    { name: 'Agenta', category: 'Automation & Agents', description: 'Open source LLM app platform.', url: 'https://agenta.ai' },
    
    // Avatar & Video
    { name: 'Ziddny', category: 'Avatar', description: 'Create customizable AI avatars.', url: 'https://ziddny.com' },
    { name: 'Keevx', category: 'Avatar', description: 'Create multilingual avatar videos.', url: 'https://keevx.com' },
    { name: 'Soul Machines', category: 'Avatar', description: 'Build lifelike digital humans.', url: 'https://www.soulmachines.com' },
    
    // Detection & Security
    { name: 'Polygraf AI', category: 'AI Detection', description: 'Detect AI-generated text.', url: 'https://polygraf.ai' },
    { name: 'Originality.AI', category: 'AI Detection', description: 'Detect AI content and plagiarism.', url: 'https://originality.ai' },
    
    // Design & Inspiration
    { name: 'AI HomeDesign', category: 'Inspiration', description: 'Interior design concepts from photos.', url: 'https://aihomedesign.com' },
    { name: 'Figma AI', category: 'Inspiration', description: 'Design tools with AI assistance.', url: 'https://www.figma.com' },
    
    // Gaming
    { name: 'Dreamcore', category: 'Gaming', description: 'Create mobile games from text.', url: 'https://dreamcore.ai' },
    { name: 'Unreal Engine', category: 'Gaming', description: 'Game engine with AI features.', url: 'https://www.unrealengine.com' },
    
    // Self-Improvement & Learning
    { name: 'DailyMe Journal', category: 'Self-Improvement', description: 'Analyze emotional patterns.', url: 'https://dailyme.app' },
    { name: 'MasterClass', category: 'Self-Improvement', description: 'Learn from experts with AI recommendations.', url: 'https://www.masterclass.com' },
    
    // Aggregators
    { name: 'CometAPI', category: 'Aggregators', description: 'Access 500+ AI models via API.', url: 'https://cometapi.com' },
    { name: 'Hugging Face', category: 'Aggregators', description: 'Hub for machine learning models.', url: 'https://huggingface.co' },
    
    // Prompt Management
    { name: 'Versuno AI', category: 'Prompt Guides', description: 'Organize and optimize prompts.', url: 'https://www.promptflow.microsoft.com' },
    { name: 'PromptBase', category: 'Prompt Guides', description: 'Marketplace for AI prompts.', url: 'https://www.promptbase.com' },
    
    // Additional Popular Tools
    { name: 'Zapier', category: 'Automation & Agents', description: 'Automate workflows between apps.', url: 'https://zapier.com' },
    { name: 'Quickfix AI', category: 'Productivity', description: 'Context-aware summaries anywhere.', url: 'https://www.grammarly.com' },
    { name: 'MemMachine', category: 'Automation & Agents', description: 'Persistent memory for AI agents.', url: 'https://github.com/lgrammel/ai' },
    { name: 'Kento', category: 'Automation & Agents', description: 'Cache queries to cut costs.', url: 'https://www.anthropic.com' },
    { name: 'iGPT', category: 'Automation & Agents', description: 'Convert emails to structured data.', url: 'https://www.zapier.com' },
    { name: 'Cekura', category: 'Automation & Agents', description: 'Test conversational AI quality.', url: 'https://www.promptquality.com' },
    { name: 'RightNow AI', category: 'Generative Code', description: 'AI CUDA code editor.', url: 'https://github.com' }
  ];

  const byCategory = tools.reduce((acc, t) => {
    const key = (t && t.category) ? t.category : 'Uncategorized';
    if (!acc[key]) acc[key] = [];
    acc[key].push(t);
    return acc;
  }, {});

  const aiTools = {
    tools,
    byCategory,
    categories: Object.keys(byCategory).sort(),
    get(category) {
      return byCategory[category] || [];
    }
  };

  if (typeof window !== 'undefined') {
    window.aiTools = aiTools;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = aiTools;
  }

})();
