<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>GHOST_OS - Stealth Beta</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=JetBrains+Mono:wght@400;500;700&amp;family=Space+Grotesk:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://unpkg.com/@splinetool/viewer@1.9.3/build/spline-viewer.js" type="module"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-low": "#131315",
                        "surface-bright": "#2c2c2f",
                        "on-error-container": "#ffa8a3",
                        "on-tertiary-fixed": "#2c003f",
                        "primary-dim": "#00e2ed",
                        "inverse-surface": "#fcf8fb",
                        "secondary": "#ff7073",
                        "primary": "#96f8ff",
                        "primary-container": "#00f1fd",
                        "on-secondary-container": "#fff6f5",
                        "secondary-fixed": "#ffc3c1",
                        "tertiary-dim": "#bb00fc",
                        "on-primary-fixed": "#004145",
                        "on-tertiary-container": "#000000",
                        "inverse-primary": "#006a6f",
                        "on-secondary-fixed": "#6f0014",
                        "surface-container": "#19191c",
                        "outline-variant": "#48474a",
                        "on-tertiary-fixed-variant": "#600083",
                        "surface-container-highest": "#262528",
                        "secondary-container": "#bf002a",
                        "on-primary": "#005f64",
                        "on-primary-container": "#00565a",
                        "surface-variant": "#262528",
                        "on-secondary": "#49000a",
                        "tertiary-container": "#be0dff",
                        "surface-tint": "#96f8ff",
                        "background": "#0e0e10",
                        "surface": "#0e0e10",
                        "error-dim": "#d7383b",
                        "secondary-fixed-dim": "#ffafae",
                        "surface-container-lowest": "#000000",
                        "primary-fixed-dim": "#00e2ed",
                        "surface-dim": "#0e0e10",
                        "error-container": "#9f0519",
                        "on-error": "#490006",
                        "outline": "#767577",
                        "inverse-on-surface": "#565457",
                        "tertiary-fixed-dim": "#d97dff",
                        "on-tertiary": "#390050",
                        "error": "#ff716c",
                        "on-background": "#f9f5f8",
                        "on-surface-variant": "#adaaad",
                        "on-secondary-fixed-variant": "#a50023",
                        "surface-container-high": "#1f1f22",
                        "primary-fixed": "#00f1fd",
                        "on-primary-fixed-variant": "#006065",
                        "tertiary": "#d674ff",
                        "tertiary-fixed": "#e192ff",
                        "on-surface": "#f9f5f8",
                        "secondary-dim": "#e90036"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "fontFamily": {
                        "headline": ["Space Grotesk", "sans-serif"],
                        "body": ["Inter", "sans-serif"],
                        "label": ["JetBrains Mono", "monospace"]
                    },
                    "backgroundImage": {
                        'cyber-grid': "linear-gradient(to right, rgba(150, 248, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(150, 248, 255, 0.05) 1px, transparent 1px)"
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .bg-cyber-grid {
            background-size: 40px 40px;
        }
    </style>
</head>
<body class="bg-[#0a0a0c] text-on-background font-body antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary">
<!-- TopAppBar JSON Component -->
<header class="fixed docked full-width top-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 shadow-[0_0_30px_rgba(0,243,255,0.1)] w-full">
<div class="flex justify-between items-center w-full px-8 py-6 max-w-[1440px] mx-auto">
<div class="text-2xl font-black tracking-[0.2em] text-[#96f8ff] font-['Space_Grotesk'] active:scale-95 cursor-crosshair">GHOST_OS</div>
<nav class="hidden md:flex gap-8 items-center">
<a class="text-[#96f8ff] font-bold border-b border-[#96f8ff] pb-1 font-['Space_Grotesk'] tracking-tighter uppercase text-sm hover:drop-shadow-[0_0_8px_rgba(150,248,255,0.5)] transition-all duration-300" href="#">PROTOCOL</a>
<a class="text-white/40 font-['JetBrains_Mono'] text-[10px] tracking-widest hover:text-[#96f8ff] hover:drop-shadow-[0_0_8px_rgba(150,248,255,0.5)] transition-all duration-300" href="#">SPECS</a>
<a class="text-white/40 font-['JetBrains_Mono'] text-[10px] tracking-widest hover:text-[#96f8ff] hover:drop-shadow-[0_0_8px_rgba(150,248,255,0.5)] transition-all duration-300" href="#">ENCRYPT</a>
<a class="text-white/40 font-['JetBrains_Mono'] text-[10px] tracking-widest hover:text-[#96f8ff] hover:drop-shadow-[0_0_8px_rgba(150,248,255,0.5)] transition-all duration-300" href="#">ACCESS</a>
</nav>
<button class="bg-primary-container text-on-primary font-label px-6 py-2 rounded-DEFAULT shadow-[0_0_30px_rgba(0,243,255,0.2)] hover:bg-primary-fixed hover:scale-105 transition-all duration-300 text-sm font-bold tracking-wider active:scale-95 cursor-crosshair hidden md:block">
                JOIN_WAITLIST
            </button>
</div>
</header>
<main>
<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 lg:px-12 bg-cyber-grid bg-cyber-grid overflow-hidden">
<div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
<spline-viewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"></spline-viewer>
</div>
<div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0c]/80 to-[#0a0a0c] z-0 pointer-events-none"></div>
<div class="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-start lg:items-center lg:text-center mt-20 gap-8">
<div class="flex items-center gap-2 px-3 py-1 bg-tertiary-container/10 rounded-sm border border-tertiary/20">
<span class="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_10px_rgba(214,116,255,0.8)]"></span>
<span class="text-tertiary font-label text-xs uppercase tracking-widest">System Status: Online</span>
</div>
<h1 class="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-background leading-[0.9] drop-shadow-2xl">
                    ENTER THE <br class="hidden md:block"/> <span class="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim shadow-[0_0_60px_rgba(0,243,255,0.15)] inline-block">NEXT ERA</span>
</h1>
<p class="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl font-light tracking-wide border-l-2 border-primary/30 pl-4 lg:border-none lg:pl-0">
                    Join the stealth beta. Limited access. Secure your node in the neural network before the protocol locks.
                </p>
<div class="w-full max-w-md mt-8 relative group">
<div class="absolute -inset-1 bg-gradient-to-r from-primary/30 to-tertiary/30 blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div class="relative flex flex-col gap-4 p-6 bg-surface/80 backdrop-blur-xl border border-white/5 rounded-DEFAULT shadow-2xl">
<div class="flex items-center gap-3 border-b border-outline-variant/40 pb-2 focus-within:border-primary/80 focus-within:shadow-[0_1px_10px_rgba(0,243,255,0.2)] transition-all duration-300">
<span class="text-primary font-label text-lg">&gt;</span>
<input class="w-full bg-transparent border-none text-on-surface font-label placeholder:text-on-surface-variant/50 focus:ring-0 px-0 h-10 outline-none" placeholder="enter your email_" type="email"/>
</div>
<button class="w-full bg-primary-container text-on-primary font-label uppercase tracking-widest font-bold py-3 px-4 rounded-sm shadow-[0_0_30px_rgba(0,243,255,0.2)] hover:bg-primary-fixed hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                            INITIALIZE UPLINK
                            <span class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
<!-- Features Section -->
<section class="py-32 px-6 lg:px-12 bg-surface-container-lowest relative z-10">
<div class="max-w-7xl mx-auto">
<div class="mb-16 md:flex justify-between items-end">
<div>
<h2 class="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-background mb-4">CORE_SYS <span class="text-white/20">MODULES</span></h2>
<p class="font-label text-primary text-sm tracking-widest uppercase">Decentralized Architecture v2.4</p>
</div>
<div class="hidden md:block">
<span class="font-label text-xs text-on-surface-variant tracking-widest border border-white/10 px-4 py-2 rounded-sm bg-surface-container-low/50 backdrop-blur-sm">SECURE_CONNECTION: ESTABLISHED</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
<!-- Feature 1 -->
<div class="group relative bg-[#111116]/80 backdrop-blur-md p-8 rounded-DEFAULT border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,243,255,0.1)] flex flex-col h-full overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
<div class="w-12 h-12 flex items-center justify-center rounded-sm bg-surface-container-highest border border-white/10 mb-8 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300">
<span class="material-symbols-outlined text-primary" data-icon="network_node">network_node</span>
</div>
<h3 class="font-headline text-xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">Neural Uplink</h3>
<p class="font-body text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                            Direct cognitive interface bypassing standard ISP routing. Seamless integration with localized synaptic hubs for instant data retrieval.
                        </p>
<div class="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
<span class="font-label text-[10px] text-on-surface-variant tracking-widest uppercase">Latency: &lt;1ms</span>
<span class="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(0,243,255,0.8)]"></span>
</div>
</div>
<!-- Feature 2 -->
<div class="group relative bg-[#111116]/80 backdrop-blur-md p-8 rounded-DEFAULT border border-white/5 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(255,112,115,0.1)] flex flex-col h-full overflow-hidden mt-0 md:mt-8">
<div class="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-500"></div>
<div class="w-12 h-12 flex items-center justify-center rounded-sm bg-surface-container-highest border border-white/10 mb-8 group-hover:border-secondary/50 group-hover:shadow-[0_0_15px_rgba(255,112,115,0.3)] transition-all duration-300">
<span class="material-symbols-outlined text-secondary" data-icon="memory">memory</span>
</div>
<h3 class="font-headline text-xl font-bold mb-3 text-on-surface group-hover:text-secondary transition-colors">Zero-Latency Core</h3>
<p class="font-body text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                            Quantum-state processing architecture. Calculations resolve before user intent is fully crystallized.
                        </p>
<div class="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
<span class="font-label text-[10px] text-on-surface-variant tracking-widest uppercase">Status: Optimal</span>
<span class="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_5px_rgba(255,112,115,0.8)]"></span>
</div>
</div>
<!-- Feature 3 -->
<div class="group relative bg-[#111116]/80 backdrop-blur-md p-8 rounded-DEFAULT border border-white/5 hover:border-tertiary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(214,116,255,0.1)] flex flex-col h-full overflow-hidden mt-0 md:mt-16">
<div class="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-3xl group-hover:bg-tertiary/10 transition-colors duration-500"></div>
<div class="w-12 h-12 flex items-center justify-center rounded-sm bg-surface-container-highest border border-white/10 mb-8 group-hover:border-tertiary/50 group-hover:shadow-[0_0_15px_rgba(214,116,255,0.3)] transition-all duration-300">
<span class="material-symbols-outlined text-tertiary" data-icon="lock">lock</span>
</div>
<h3 class="font-headline text-xl font-bold mb-3 text-on-surface group-hover:text-tertiary transition-colors">Encrypted Protocols</h3>
<p class="font-body text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                            Multi-layered polymorphic encryption. Data packets shift signatures dynamically to evade algorithmic detection.
                        </p>
<div class="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
<span class="font-label text-[10px] text-on-surface-variant tracking-widest uppercase">Sec-Level: Alpha-9</span>
<span class="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_5px_rgba(214,116,255,0.8)]"></span>
</div>
</div>
</div>
</div>
</section>
<!-- Pricing Section -->
<section class="py-32 px-6 lg:px-12 bg-[#0a0a0c] relative z-10 border-t border-white/5">
<div class="max-w-7xl mx-auto">
<div class="text-center mb-20">
<h2 class="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-on-background mb-4">ACCESS <span class="text-white/20">TIERS</span></h2>
<p class="font-label text-primary text-sm tracking-widest uppercase">Select Authorization Level</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
<!-- Tier 1 -->
<div class="bg-surface-container-low p-8 rounded-DEFAULT border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col">
<div class="mb-8 border-b border-white/10 pb-6">
<h3 class="font-label text-lg font-bold text-on-surface mb-2">Hacker</h3>
<div class="flex items-baseline gap-2">
<span class="font-headline text-4xl font-bold text-on-surface">0.0</span>
<span class="font-label text-sm text-on-surface-variant">/mo</span>
</div>
</div>
<ul class="font-body text-sm text-on-surface-variant space-y-4 mb-10 flex-grow">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check">check</span>
                                Basic Node Access
                            </li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check">check</span>
                                Standard Encryption (256-bit)
                            </li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check">check</span>
                                Community Terminal
                            </li>
</ul>
<button class="w-full bg-transparent border border-white/20 text-on-surface font-label text-sm uppercase py-3 rounded-sm hover:bg-white/5 transition-colors">
                            INIT_BASIC
                        </button>
</div>
<!-- Tier 2 (Highlighted) -->
<div class="relative bg-surface p-8 rounded-DEFAULT border border-transparent flex flex-col transform md:-translate-y-4 shadow-[0_0_40px_rgba(150,248,255,0.05)] hover:shadow-[0_0_60px_rgba(150,248,255,0.15)] transition-shadow duration-500 z-10">
<div class="absolute inset-0 rounded-DEFAULT p-[1px] bg-gradient-to-b from-tertiary to-primary opacity-50">
<div class="absolute inset-0 bg-surface rounded-DEFAULT h-full w-full"></div>
</div>
<div class="relative z-10 flex flex-col h-full">
<div class="absolute top-4 right-4 bg-primary/10 text-primary font-label text-[10px] px-2 py-1 rounded-sm border border-primary/20 tracking-widest uppercase">
                                Recommended
                            </div>
<div class="mb-8 border-b border-white/10 pb-6">
<h3 class="font-label text-lg font-bold text-primary mb-2 shadow-primary/50 drop-shadow-md">Cyber</h3>
<div class="flex items-baseline gap-2">
<span class="font-headline text-5xl font-bold text-on-surface">49.0</span>
<span class="font-label text-sm text-on-surface-variant">/mo</span>
</div>
</div>
<ul class="font-body text-sm text-on-surface-variant space-y-4 mb-10 flex-grow">
<li class="flex items-start gap-3 text-on-surface">
<span class="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check">check</span>
                                    Priority Node Routing
                                </li>
<li class="flex items-start gap-3 text-on-surface">
<span class="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check">check</span>
                                    Polymorphic Encryption
                                </li>
<li class="flex items-start gap-3 text-on-surface">
<span class="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check">check</span>
                                    Dedicated Terminal Instance
                                </li>
<li class="flex items-start gap-3 text-on-surface">
<span class="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check">check</span>
                                    Ghost Protocol Access
                                </li>
</ul>
<button class="w-full bg-primary-container text-on-primary font-label font-bold text-sm uppercase py-3 rounded-sm shadow-[0_0_20px_rgba(0,243,255,0.2)] hover:bg-primary-fixed transition-colors">
                                UPGRADE_LINK
                            </button>
</div>
</div>
<!-- Tier 3 -->
<div class="bg-surface-container-low p-8 rounded-DEFAULT border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col">
<div class="mb-8 border-b border-white/10 pb-6">
<h3 class="font-label text-lg font-bold text-on-surface mb-2">God-Mode</h3>
<div class="flex items-baseline gap-2">
<span class="font-headline text-4xl font-bold text-on-surface">299.0</span>
<span class="font-label text-sm text-on-surface-variant">/mo</span>
</div>
</div>
<ul class="font-body text-sm text-on-surface-variant space-y-4 mb-10 flex-grow">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check">check</span>
                                Unrestricted Protocol Access
                            </li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check">check</span>
                                Quantum Encryption Keys
                            </li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check">check</span>
                                Root Admin Rights
                            </li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check">check</span>
                                24/7 Neural Support
                            </li>
</ul>
<button class="w-full bg-transparent border border-white/20 text-on-surface font-label text-sm uppercase py-3 rounded-sm hover:bg-white/5 transition-colors">
                            REQ_ACCESS
                        </button>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-32 px-6 lg:px-12 bg-surface-container-lowest relative z-10 border-t border-white/5 flex flex-col items-center justify-center text-center">
<div class="max-w-3xl mx-auto">
<h2 class="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-on-background mb-6 drop-shadow-lg">
                    READY TO UPLOAD <br/> YOUR CONSCIOUSNESS?
                 </h2>
<p class="font-body text-on-surface-variant text-lg mb-12 max-w-xl mx-auto font-light">
                     The grid is waiting. Enter your coordinates below to begin the synchronization process.
                 </p>
<div class="w-full max-w-lg mx-auto relative group">
<div class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur opacity-50 group-focus-within:opacity-100 transition duration-500"></div>
<div class="relative flex flex-col md:flex-row gap-4 p-2 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-DEFAULT shadow-xl items-center">
<div class="flex items-center gap-3 w-full px-4 border-b md:border-b-0 md:border-r border-outline-variant/40 pb-2 md:pb-0 h-12 focus-within:border-primary/80 transition-colors">
<span class="text-primary font-label text-lg">&gt;</span>
<input class="w-full bg-transparent border-none text-on-surface font-label placeholder:text-on-surface-variant/50 focus:ring-0 px-0 outline-none" placeholder="enter your email_" type="email"/>
</div>
<button class="w-full md:w-auto bg-primary text-on-primary-fixed font-label uppercase tracking-widest font-bold py-3 md:py-0 h-12 px-8 rounded-sm hover:bg-primary-container transition-colors flex-shrink-0 flex items-center justify-center">
                            EXECUTE
                        </button>
</div>
</div>
</div>
</section>
</main>
<!-- Footer JSON Component -->
<footer class="full-width py-12 mt-20 bg-[#0a0a0c] border-t border-white/5 flat no shadows">
<div class="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-8">
<div class="text-[#96f8ff] font-bold font-['Space_Grotesk'] text-xl tracking-widest">
                GHOST_OS
            </div>
<nav class="flex flex-wrap justify-center gap-6 md:gap-8">
<a class="font-['JetBrains_Mono'] text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-[#d674ff] transition-colors duration-200 hover:translate-x-1 transition-transform" href="#">TERMINAL</a>
<a class="font-['JetBrains_Mono'] text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-[#d674ff] transition-colors duration-200 hover:translate-x-1 transition-transform" href="#">ENCRYPTION_DOCS</a>
<a class="font-['JetBrains_Mono'] text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-[#d674ff] transition-colors duration-200 hover:translate-x-1 transition-transform" href="#">SITEMAP</a>
<a class="font-['JetBrains_Mono'] text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-[#d674ff] transition-colors duration-200 hover:translate-x-1 transition-transform" href="#">LEGAL</a>
</nav>
<div class="font-['JetBrains_Mono'] text-[10px] tracking-[0.15em] uppercase text-white/30 text-center md:text-right">
                ©2024 NEURAL_STEALTH_SYSTEMS. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>
</body></html>