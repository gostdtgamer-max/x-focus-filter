/* ============================================================
   X Focus Filter — Options Page
   ============================================================ */

// --------------- i18n ---------------
const I18N = {
  en: {
    settings: 'Settings',
    builtinCategories: 'Built-in Categories',
    builtinDesc: 'These keyword lists are used to match tweets in your timeline. They are read-only.',
    customCategories: 'Custom Categories',
    customDesc: 'Create your own keyword categories to extend filtering.',
    addCategory: '+ Add Category',
    settingsTitle: 'Settings',
    showBadge: 'Show floating badge',
    showBadgeDesc: 'Display the filter status badge on the timeline page',
    filterAds: 'Filter ads & promoted tweets',
    filterAdsDesc: 'Automatically hide promoted and advertisement tweets',
    importExport: 'Import / Export',
    importExportDesc: 'Backup or restore your configuration as a JSON file.',
    export: 'Export Config',
    import: 'Import Config',
    keywordsHint: 'One keyword per line',
    namePlaceholder: 'Category name',
    emojiPlaceholder: '📌',
    exportSuccess: 'Config exported successfully!',
    importSuccess: 'Config imported successfully!',
    importError: 'Failed to import: invalid JSON file.',
    deleteConfirm: 'Delete this category?',
  },
  zh: {
    settings: '设置',
    builtinCategories: '内置分类',
    builtinDesc: '这些关键词列表用于匹配时间线中的推文，仅供查看。',
    customCategories: '自定义分类',
    customDesc: '创建你自己的关键词分类来扩展过滤能力。',
    addCategory: '+ 新增分类',
    settingsTitle: '设置',
    showBadge: '显示浮动徽标',
    showBadgeDesc: '在时间线页面上显示过滤状态徽标',
    filterAds: '过滤广告和推广推文',
    filterAdsDesc: '自动隐藏推广和广告推文',
    importExport: '导入 / 导出',
    importExportDesc: '将配置备份或恢复为 JSON 文件。',
    export: '导出配置',
    import: '导入配置',
    keywordsHint: '每行一个关键词',
    namePlaceholder: '分类名称',
    emojiPlaceholder: '📌',
    exportSuccess: '配置导出成功！',
    importSuccess: '配置导入成功！',
    importError: '导入失败：无效的 JSON 文件。',
    deleteConfirm: '确定删除此分类？',
  },
};

// --------------- Built-in keywords ---------------
const BUILTIN_CATEGORIES = {
  tech: {
    emoji: '💻',
    name: { en: 'Tech', zh: '科技' },
    keywords: [
      'software', 'hardware', 'programming', 'developer', 'engineering',
      'code', 'coding', 'debug', 'deploy', 'devops', 'sre',
      'frontend', 'backend', 'fullstack', 'full-stack', 'full stack',
      'api', 'sdk', 'cli', 'saas', 'paas', 'iaas',
      'cloud', 'aws', 'azure', 'gcp', 'vercel', 'cloudflare',
      'docker', 'kubernetes', 'k8s', 'terraform', 'ansible',
      'microservice', 'serverless', 'lambda',
      'database', 'sql', 'nosql', 'postgres', 'mysql', 'redis', 'mongodb',
      'linux', 'unix', 'ubuntu', 'debian', 'macos',
      'javascript', 'typescript', 'python', 'rust', 'golang', 'java', 'swift', 'kotlin',
      'react', 'vue', 'svelte', 'nextjs', 'next.js', 'nuxt', 'angular',
      'node.js', 'nodejs', 'deno', 'bun',
      'cybersecurity', 'infosec', 'zero-day', 'vulnerability', 'cve',
      'startup', 'silicon valley',
      'apple', 'google', 'microsoft', 'meta', 'amazon', 'nvidia', 'tsmc',
      'semiconductor', 'chip', 'cpu', 'gpu', 'tpu',
      'algorithm', 'data structure',
      'mobile app', 'ios', 'android', 'flutter', 'react native',
      'wasm', 'webassembly', 'webgpu', 'webgl',
      'vscode', 'neovim', 'jetbrains', 'cursor',
      '技术', '编程', '开发者', '程序员', '代码', '架构', '部署',
      '前端', '后端', '全栈', '运维', '服务器', '数据库',
      '云计算', '微服务', '容器', '虚拟化',
      '半导体', '芯片', '处理器',
      '科技', '互联网', '软件', '硬件',
      '阿里', '腾讯', '字节', '百度', '华为', '小米', '美团',
    ],
  },
  ai: {
    emoji: '🤖',
    name: { en: 'AI', zh: '人工智能' },
    keywords: [
      'artificial intelligence', 'machine learning', 'deep learning',
      'neural network', 'transformer', 'attention mechanism',
      'llm', 'large language model', 'foundation model',
      'gpt', 'chatgpt', 'gpt-4', 'gpt-5', 'o1', 'o3',
      'claude', 'anthropic', 'sonnet', 'opus', 'haiku',
      'gemini', 'bard',
      'llama', 'mistral', 'mixtral', 'qwen', 'deepseek',
      'openai', 'hugging face', 'huggingface',
      'stable diffusion', 'midjourney', 'dall-e', 'dalle', 'flux', 'sora',
      'diffusion model', 'image generation', 'text-to-image',
      'nlp', 'natural language', 'computer vision',
      'reinforcement learning', 'rlhf',
      'fine-tuning', 'fine tuning', 'finetuning', 'lora', 'qlora',
      'rag', 'retrieval augmented', 'vector database', 'embedding',
      'prompt engineering', 'chain of thought',
      'agent', 'ai agent', 'agentic', 'tool use', 'function calling',
      'inference', 'training', 'pre-training', 'pretraining',
      'benchmark', 'evaluation',
      'tokenizer', 'context window',
      'multimodal', 'vision language', 'vlm',
      'robotics', 'autonomous', 'self-driving',
      'text-to-speech', 'speech-to-text', 'tts', 'whisper', 'elevenlabs',
      'copilot', 'claude code', 'devin', 'windsurf', 'bolt',
      'mcp', 'model context protocol',
      'comfyui', 'comfy ui', 'controlnet', 'img2img',
      '人工智能', '机器学习', '深度学习', '大模型', '大语言模型',
      '神经网络', '训练', '推理', '微调', '量化',
      '智能体', 'AIGC', '生成式',
      '通义', '文心', '混元', '星火', '豆包', '智谱', 'kimi',
      '扩散模型', '多模态',
    ],
  },
  business: {
    emoji: '💼',
    name: { en: 'Business', zh: '商业' },
    keywords: [
      'startup', 'ipo', 'acquisition', 'merger', 'funding',
      'series a', 'series b', 'series c', 'seed round', 'pre-seed',
      'venture capital', 'angel investor', 'yc', 'y combinator',
      'revenue', 'profit', 'earnings', 'valuation', 'market cap',
      'ceo', 'cto', 'cfo', 'founder', 'co-founder',
      'product market fit', 'growth', 'scale',
      'b2b', 'b2c', 'enterprise',
      'strategy', 'business model', 'monetization',
      'layoff', 'hiring', 'talent', 'remote work',
      'antitrust', 'regulation', 'sec', 'ftc',
      'nasdaq', 'nyse', 's&p',
      'fintech', 'neobank', 'payment', 'stripe',
      '融资', '创业', '上市', '收购', '估值', '营收', '利润',
      '投资', '风投', '天使轮',
      '商业模式', '增长', '盈利', '市值',
      '裁员', '招聘', '管理', '创始人', '企业家',
    ],
  },
  opensource: {
    emoji: '📦',
    name: { en: 'Open Source', zh: '开源' },
    keywords: [
      'open source', 'open-source', 'opensource', 'oss',
      'github', 'gitlab', 'gitea', 'forgejo',
      'mit license', 'apache license', 'gpl', 'bsd license',
      'pull request', 'merge', 'commit', 'fork',
      'repository', 'repo', 'contributor',
      'release', 'changelog', 'semver',
      'npm', 'pypi', 'crates.io', 'cargo', 'pip install',
      'linux', 'kernel', 'gnu',
      'firefox', 'chromium', 'electron',
      'homebrew', 'apt', 'pacman',
      '开源', '开源项目', '开源社区', '贡献者',
      'gitee', '仓库', '源码', '源代码',
    ],
  },
  design: {
    emoji: '🎨',
    name: { en: 'Design', zh: '设计' },
    keywords: [
      'ui', 'ux', 'ui/ux', 'user interface', 'user experience',
      'figma', 'sketch', 'framer', 'principle', 'adobe xd',
      'design system', 'design token', 'component library',
      'typography', 'typeface', 'font', 'color palette',
      'responsive', 'adaptive', 'layout', 'grid',
      'prototype', 'wireframe', 'mockup', 'pixel',
      'tailwindcss', 'tailwind', 'shadcn', 'radix',
      'motion design', 'animation', 'lottie', 'rive',
      'accessibility', 'a11y', 'wcag',
      'dribbble', 'behance',
      '设计', '交互', '界面', '视觉', '排版', '字体',
      '配色', '原型', '设计系统', '无障碍',
    ],
  },
  crypto: {
    emoji: '🪙',
    name: { en: 'Crypto', zh: '加密货币' },
    keywords: [
      'web3', 'blockchain', 'ethereum', 'bitcoin', 'solana',
      'crypto', 'cryptocurrency', 'token', 'defi', 'dex', 'cex',
      'nft', 'smart contract', 'solidity', 'wallet',
      'mining', 'staking', 'yield', 'liquidity',
      'dao', 'governance', 'on-chain', 'onchain',
      'layer 2', 'l2', 'rollup', 'zk', 'zero knowledge',
      'binance', 'coinbase', 'uniswap', 'opensea',
      'btc', 'eth', 'sol', 'matic', 'polygon',
      '加密', '区块链', '代币', '虚拟货币', '数字货币',
      '挖矿', '质押', '钱包', '去中心化', '链上',
    ],
  },
  indie: {
    emoji: '🚀',
    name: { en: 'Indie Hacker', zh: '独立开发' },
    keywords: [
      'indie hacker', 'indiehacker', 'indie maker',
      'side project', 'sideproject', 'solo founder',
      'bootstrapped', 'bootstrap', 'ramen profitable',
      'mrr', 'arr', 'monthly recurring', 'annual recurring',
      'product hunt', 'producthunt', 'launch day',
      'saas', 'micro saas', 'no-code', 'nocode', 'low-code',
      'landing page', 'waitlist', 'beta launch',
      'stripe', 'lemon squeezy', 'gumroad', 'paddle',
      'build in public', 'buildinpublic', '#buildinpublic',
      '独立开发', '独立开发者', '副业', '个人项目',
      '独立产品', '小而美', '出海',
    ],
  },
  career: {
    emoji: '👔',
    name: { en: 'Career', zh: '职业' },
    keywords: [
      'hiring', 'job', 'career', 'resume', 'interview',
      'offer', 'salary', 'compensation', 'equity', 'stock option',
      'remote work', 'remote job', 'work from home', 'wfh',
      'freelance', 'contractor', 'consulting',
      'tech lead', 'staff engineer', 'principal engineer',
      'promotion', 'performance review', 'mentorship',
      'leetcode', 'system design', 'coding interview',
      'linkedin', 'job board',
      '招聘', '求职', '面试', '简历', '薪资', '跳槽',
      '远程', '远程办公', '自由职业', '外包',
      '晋升', '职业发展', '转行', '内推',
    ],
  },
};

// --------------- State ---------------
let config = null;
let lang = 'en';

// --------------- Init ---------------
document.addEventListener('DOMContentLoaded', async () => {
  await loadConfig();
  lang = config.lang || 'en';
  renderAll();
  bindEvents();
});

async function loadConfig() {
  const result = await chrome.storage.local.get('xfilter_config');
  config = result.xfilter_config || getDefaultConfig();
}

function getDefaultConfig() {
  return {
    enabled: true,
    mode: 'whitelist',
    filterMode: 'normal',
    showStats: true,
    showBadge: true,
    filterAds: true,
    opacity: 0.0,
    categories: { tech: true, ai: true, business: true, opensource: true, design: false, crypto: false, indie: false, career: false },
    customCategories: [],
    customWhitelist: [],
    customBlacklist: [],
    whitelistedUsers: [],
    lang: 'zh',
  };
}

// --------------- Save ---------------
async function saveConfig() {
  await chrome.storage.local.set({ xfilter_config: config });
  // Notify all X/Twitter tabs
  const tabs = await chrome.tabs.query({ url: ['*://x.com/*', '*://twitter.com/*'] });
  for (const tab of tabs) {
    chrome.tabs.sendMessage(tab.id, { type: 'config_updated', config }).catch(() => {});
  }
}

// --------------- Render ---------------
function renderAll() {
  applyI18n();
  renderBuiltinCategories();
  renderCustomCategories();
  renderSettings();
  document.getElementById('langToggle').textContent = lang === 'en' ? 'ZH' : 'EN';
}

function applyI18n() {
  const t = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
}

function t(key) {
  return (I18N[lang] || I18N.en)[key] || key;
}

// --------------- Built-in Categories ---------------
function renderBuiltinCategories() {
  const container = document.getElementById('builtinList');
  container.innerHTML = '';
  for (const [id, cat] of Object.entries(BUILTIN_CATEGORIES)) {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
      <div class="category-header" data-id="${id}">
        <span class="category-emoji">${cat.emoji}</span>
        <span class="category-name">${cat.name[lang] || cat.name.en}</span>
        <span class="category-count">${cat.keywords.length}</span>
        <span class="category-chevron">▶</span>
      </div>
      <div class="category-body">
        <div class="keyword-chips">
          ${cat.keywords.map(kw => `<span class="keyword-chip">${escapeHtml(kw)}</span>`).join('')}
        </div>
      </div>
    `;
    card.querySelector('.category-header').addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
    container.appendChild(card);
  }
}

// --------------- Custom Categories ---------------
function renderCustomCategories() {
  const container = document.getElementById('customList');
  container.innerHTML = '';
  const customs = config.customCategories || [];
  for (const cat of customs) {
    container.appendChild(createCustomCard(cat));
  }
}

function createCustomCard(cat) {
  const card = document.createElement('div');
  card.className = 'custom-card';
  card.dataset.id = cat.id;
  card.innerHTML = `
    <div class="custom-card-header">
      <input class="emoji-input" type="text" value="${escapeHtml(cat.emoji || '')}" placeholder="${t('emojiPlaceholder')}" maxlength="4">
      <input class="name-input" type="text" value="${escapeHtml(cat.name || '')}" placeholder="${t('namePlaceholder')}">
      <button class="btn-delete" title="Delete">&times;</button>
    </div>
    <textarea placeholder="${t('keywordsHint')}">${escapeHtml((cat.keywords || []).join('\n'))}</textarea>
    <div class="textarea-hint">${t('keywordsHint')}</div>
  `;

  // Auto-save on changes
  const emojiInput = card.querySelector('.emoji-input');
  const nameInput = card.querySelector('.name-input');
  const textarea = card.querySelector('textarea');

  const save = () => {
    const customs = config.customCategories || [];
    const entry = customs.find(c => c.id === cat.id);
    if (entry) {
      entry.emoji = emojiInput.value.trim();
      entry.name = nameInput.value.trim();
      entry.keywords = textarea.value.split('\n').map(s => s.trim()).filter(Boolean);
      saveConfig();
    }
  };

  emojiInput.addEventListener('change', save);
  nameInput.addEventListener('change', save);
  textarea.addEventListener('change', save);

  card.querySelector('.btn-delete').addEventListener('click', () => {
    if (!confirm(t('deleteConfirm'))) return;
    config.customCategories = (config.customCategories || []).filter(c => c.id !== cat.id);
    saveConfig();
    card.remove();
  });

  return card;
}

// --------------- Settings Toggles ---------------
function renderSettings() {
  document.getElementById('showBadge').checked = config.showBadge !== false;
  document.getElementById('filterAds').checked = config.filterAds !== false;
}

// --------------- Events ---------------
function bindEvents() {
  // Language toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'zh' : 'en';
    config.lang = lang;
    saveConfig();
    renderAll();
  });

  // Add custom category
  document.getElementById('addCategoryBtn').addEventListener('click', () => {
    const newCat = {
      id: Date.now().toString(36),
      name: '',
      emoji: '📌',
      keywords: [],
    };
    if (!config.customCategories) config.customCategories = [];
    config.customCategories.push(newCat);
    saveConfig();
    const container = document.getElementById('customList');
    const card = createCustomCard(newCat);
    container.appendChild(card);
    card.querySelector('.name-input').focus();
  });

  // Setting toggles
  document.getElementById('showBadge').addEventListener('change', (e) => {
    config.showBadge = e.target.checked;
    saveConfig();
  });

  document.getElementById('filterAds').addEventListener('change', (e) => {
    config.filterAds = e.target.checked;
    saveConfig();
  });

  // Export
  document.getElementById('exportBtn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `xfilter-config-${date}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showFeedback('success', t('exportSuccess'));
  });

  // Import
  document.getElementById('importBtn').addEventListener('click', () => {
    document.getElementById('importFile').click();
  });

  document.getElementById('importFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        if (typeof imported !== 'object' || imported === null) throw new Error('Invalid');
        // Merge imported config into current config
        Object.assign(config, imported);
        await saveConfig();
        renderAll();
        showFeedback('success', t('importSuccess'));
      } catch {
        showFeedback('error', t('importError'));
      }
      // Reset file input so same file can be re-imported
      e.target.value = '';
    };
    reader.readAsText(file);
  });
}

// --------------- Feedback ---------------
function showFeedback(type, message) {
  const el = document.getElementById('feedback');
  el.textContent = message;
  el.className = `feedback ${type}`;
  setTimeout(() => {
    el.className = 'feedback hidden';
  }, 3000);
}

// --------------- Util ---------------
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
