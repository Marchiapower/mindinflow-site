import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Main landing page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <!-- Basic Meta Tags -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <!-- Primary Meta Tags -->
        <title>Mind In Flow - Consultoria de Posicionamento Digital e Conversão | Método 7 Dias</title>
        <meta name="title" content="Mind In Flow - Consultoria de Posicionamento Digital e Conversão | Método 7 Dias">
        <meta name="description" content="Transformamos sua presença digital em máquina de conversão. Consultoria especializada em SEO, design e captação de leads. Método Mind In Flow: 7 dias para autoridade digital. WhatsApp: (11) 91853-4654">
        <meta name="keywords" content="consultoria digital, posicionamento digital, SEO, conversão de leads, marketing digital, autoridade digital, consultoria SEO, design web, captação de leads, agência digital, Mind In Flow">
        <meta name="author" content="Mind In Flow">
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <meta name="language" content="pt-BR">
        <meta name="geo.region" content="BR-SP">
        <meta name="geo.placename" content="São Paulo">
        
        <!-- Canonical URL -->
        <link rel="canonical" href="https://powerbrand.pages.dev/">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://powerbrand.pages.dev/">
        <meta property="og:title" content="Mind In Flow - Consultoria de Posicionamento Digital e Conversão">
        <meta property="og:description" content="Transformamos sua presença digital em máquina de conversão. Método Mind In Flow: 7 dias para autoridade digital. Consultoria especializada em SEO, design e captação de leads.">
        <meta property="og:image" content="https://powerbrand.pages.dev/hero-background.jpg">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:locale" content="pt_BR">
        <meta property="og:site_name" content="Mind In Flow">
        
        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:url" content="https://powerbrand.pages.dev/">
        <meta name="twitter:title" content="Mind In Flow - Consultoria de Posicionamento Digital">
        <meta name="twitter:description" content="Transformamos sua presença digital em máquina de conversão. Método Mind In Flow: 7 dias para autoridade digital.">
        <meta name="twitter:image" content="https://powerbrand.pages.dev/hero-background.jpg">
        
        <!-- Additional SEO -->
        <meta name="theme-color" content="#FF8C42">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="apple-mobile-web-app-title" content="Mind In Flow">
        <meta name="format-detection" content="telephone=no">
        
        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <link rel="icon" type="image/png" href="/mindinflow-logo.png">
        <link rel="apple-touch-icon" href="/mindinflow-logo.png">
        
        <!-- Preload Critical Resources -->
        <link rel="preload" href="/hero-background.jpg" as="image" type="image/jpeg">
        <link rel="preload" href="https://cdn.tailwindcss.com" as="script">
        <link rel="dns-prefetch" href="https://cdn.tailwindcss.com">
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
        <link rel="dns-prefetch" href="https://fonts.googleapis.com">
        <link rel="dns-prefetch" href="https://fonts.gstatic.com">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- FontAwesome Icons -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        
        <!-- Schema.org JSON-LD for Rich Snippets -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Mind In Flow",
          "description": "Consultoria especializada em posicionamento digital, SEO e conversão de leads. Transformamos sua presença digital em máquina de conversão.",
          "url": "https://powerbrand.pages.dev",
          "logo": "https://powerbrand.pages.dev/mindinflow-logo.png",
          "image": "https://powerbrand.pages.dev/hero-background.jpg",
          "telephone": "+55-11-91853-4654",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-23.550520",
            "longitude": "-46.633308"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://wa.me/5511918534654"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "Brasil"
          },
          "serviceType": ["Consultoria Digital", "SEO", "Marketing Digital", "Design Web", "Conversão de Leads"],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "3",
            "bestRating": "5",
            "worstRating": "5"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Andrea Cotrim"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Meu site de psicologia online agora atrai os pacientes certos. A Mind In Flow entendeu minha abordagem terapêutica e traduziu isso em um posicionamento digital que triplicou meu agendamento de consultas em 2 meses."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Bruno Prieto"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Como nutricionista, eu precisava de uma presença digital forte. A Mind In Flow criou um site que me posicionou como referência em nutrição esportiva. Minha lista de espera cresceu 400% e dobrei meu ticket médio."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Marlise Meneghe"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Fiquei impressionada com o profissionalismo e atendimento. Com uma sensibilidade ímpar, conseguiram capturar e transmitir exatamente a essência do que eu buscava. O resultado ficou sensacional."
            }
          ]
        }
        </script>
        
        <style>
            * {
                font-family: 'Inter', sans-serif;
            }
            
            :root {
                --primary-orange: #FF8C42;
                --primary-gold: #FFB347;
                --dark-bg: #0a0a0a;
                --dark-card: #1a1a1a;
                --dark-border: #2a2a2a;
            }
            
            body {
                background-color: var(--dark-bg);
                color: #ffffff;
                overflow-x: hidden;
            }
            
            .gradient-text {
                background: linear-gradient(135deg, var(--primary-orange), var(--primary-gold));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .btn-primary {
                background: linear-gradient(135deg, var(--primary-orange), var(--primary-gold));
                color: white;
                font-weight: 700;
                padding: 1.25rem 3rem;
                border-radius: 0.75rem;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s ease;
                box-shadow: 0 8px 25px rgba(255, 140, 66, 0.5);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                font-size: 0.95rem;
            }
            
            .btn-primary:hover {
                transform: translateY(-3px);
                box-shadow: 0 12px 35px rgba(255, 140, 66, 0.7);
            }
            
            .section-container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 2rem;
            }
            
            .hero-section {
                background-image: url('/hero-background.jpg');
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
                position: relative;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .hero-overlay {
                background: linear-gradient(135deg, rgba(10, 10, 10, 0.97), rgba(26, 26, 26, 0.92));
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
            
            .hero-content {
                position: relative;
                z-index: 10;
                width: 100%;
            }
            
            .card-pillar {
                background: var(--dark-card);
                border: 2px solid transparent;
                border-radius: 1.25rem;
                padding: 2.5rem;
                transition: all 0.4s ease;
                height: 100%;
                position: relative;
                overflow: hidden;
            }
            
            .card-pillar::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 1.25rem;
                padding: 2px;
                background: linear-gradient(135deg, var(--primary-orange), var(--primary-gold));
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                opacity: 0;
                transition: opacity 0.4s ease;
            }
            
            .card-pillar:hover::before {
                opacity: 1;
            }
            
            .card-pillar:hover {
                transform: translateY(-8px);
                box-shadow: 0 15px 40px rgba(255, 140, 66, 0.3);
            }
            
            .icon-circle {
                width: 100px;
                height: 100px;
                background: linear-gradient(135deg, var(--primary-orange), var(--primary-gold));
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem;
                box-shadow: 0 8px 25px rgba(255, 140, 66, 0.4);
                transition: all 0.3s ease;
            }
            
            .card-pillar:hover .icon-circle {
                transform: scale(1.1) rotate(5deg);
                box-shadow: 0 12px 35px rgba(255, 140, 66, 0.6);
            }
            
            .icon-circle .icon-img {
                width: 100px;
                height: 100px;
                object-fit: contain;
            }
            
            .social-proof {
                background: linear-gradient(180deg, var(--dark-card) 0%, var(--dark-bg) 100%);
                border-top: 3px solid var(--primary-orange);
                padding: 4rem 0;
            }
            
            .stats-number {
                font-size: 3.5rem;
                font-weight: 900;
                background: linear-gradient(135deg, var(--primary-orange), var(--primary-gold));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                line-height: 1;
            }
            
            .vision-section {
                background: linear-gradient(135deg, var(--primary-orange), var(--primary-gold));
                padding: 6rem 3rem;
                margin: 5rem 0;
                position: relative;
                overflow: hidden;
            }
            
            .vision-section::before {
                content: '';
                position: absolute;
                top: 50%;
                right: 5%;
                width: 40%;
                height: 80%;
                transform: translateY(-50%);
                background: url('/vision-connection.jpg') center right/contain no-repeat;
                opacity: 0.25;
            }
            
            /* Ocultar imagem de fundo apenas em mobile */
            @media (max-width: 768px) {
                .vision-section::before {
                    display: none;
                }
            }
            
            /* Melhor contraste para textos na Vision Section */
            .vision-section .drop-shadow-lg {
                text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
            }
            
            .vision-section .drop-shadow-md {
                text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
            }
            
            .timeline-step {
                background: var(--dark-card);
                border-left: 4px solid var(--primary-orange);
                padding: 2rem;
                margin-bottom: 2rem;
                border-radius: 0.75rem;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }
            
            .timeline-step:hover {
                transform: translateX(10px);
                box-shadow: 0 8px 25px rgba(255, 140, 66, 0.2);
            }
            
            .step-number {
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, var(--primary-orange), var(--primary-gold));
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                font-weight: 900;
                color: white;
                flex-shrink: 0;
                box-shadow: 0 4px 15px rgba(255, 140, 66, 0.4);
            }
            
            .testimonial-card {
                background: var(--dark-card);
                border: 2px solid var(--dark-border);
                border-radius: 1rem;
                padding: 2rem;
                transition: all 0.3s ease;
            }
            
            .testimonial-card:hover {
                border-color: var(--primary-orange);
                box-shadow: 0 10px 30px rgba(255, 140, 66, 0.2);
            }
            
            .logo-client {
                width: 150px;
                height: 80px;
                background: var(--dark-card);
                border: 1px solid var(--dark-border);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                opacity: 0.7;
                transition: all 0.3s ease;
                font-size: 0.9rem;
                text-align: center;
                color: #888;
            }
            
            .logo-client:hover {
                opacity: 1;
                border-color: var(--primary-orange);
                transform: scale(1.05);
            }
            
            @media (max-width: 768px) {
                .hero-section {
                    min-height: 70vh;
                }
                
                .stats-number {
                    font-size: 2.5rem;
                }
                
                .btn-primary {
                    padding: 1rem 2rem;
                    font-size: 0.85rem;
                }
            }
            
            .whatsapp-float {
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: #25D366;
                color: white;
                width: 65px;
                height: 65px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
                box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
                z-index: 1000;
                transition: all 0.3s ease;
                cursor: pointer;
                animation: pulse 2s infinite;
            }
            
            .whatsapp-float:hover {
                transform: scale(1.15);
                box-shadow: 0 8px 30px rgba(37, 211, 102, 0.8);
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            .fade-in {
                animation: fadeIn 1s ease-in;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .expertise-highlight {
                background: var(--dark-card);
                border-left: 4px solid var(--primary-orange);
                padding: 2.5rem;
                border-radius: 1rem;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            }
        </style>
    </head>
    <body>
        <!-- WhatsApp Floating Button -->
        <a href="https://wa.me/5511918534654?text=Olá! Quero falar com um Estrategista Mind In Flow sobre meu posicionamento digital" 
           class="whatsapp-float" 
           target="_blank"
           aria-label="Contato WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>

        <!-- 1. HERO SECTION - CONVERSÃO MÁXIMA -->
        <section class="hero-section">
            <div class="hero-overlay"></div>
            <div class="hero-content section-container flex flex-col items-center justify-center text-center py-32 fade-in">
                <!-- Conteúdo Centralizado -->
                <div class="max-w-5xl space-y-10">
                    
                    <h1 class="text-6xl lg:text-8xl font-black leading-tight">
                        <span class="gradient-text">Mind In Flow:</span><br>
                        <span class="text-white">A Inteligência Humana por Trás da Sua</span><br>
                        <span class="gradient-text">Máquina de Conversão Digital</span>
                    </h1>
                    
                    <p class="text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium max-w-4xl mx-auto">
                        Entregamos <strong class="text-white">visibilidade orgânica</strong>, 
                        <strong class="text-white">conversão</strong> e o 
                        <strong class="text-white">agente de vendas</strong> que o seu negócio precisa.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
                        <a href="https://wa.me/5511918534654?text=Olá! Quero falar com um Estrategista Mind In Flow sobre meu posicionamento digital" 
                           class="btn-primary text-center text-xl px-12 py-5"
                           target="_blank">
                            <i class="fas fa-rocket mr-3"></i>
                            Quero Minha Consultoria de Posicionamento Digital
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. SOCIAL PROOF (PROVA IMEDIATA) -->
        <section class="social-proof fade-in">
            <div class="section-container">
                <h2 class="text-3xl lg:text-4xl font-bold text-center mb-4">
                    Empresas de Elite que Multiplicaram o <span class="gradient-text">Faturamento Digital</span>
                </h2>
                <p class="text-center text-gray-400 mb-12 text-lg">
                    Confiado por líderes de mercado em diversos segmentos
                </p>
                
                <!-- Client Logos Grid - 6 Clientes Reais -->
                <div class="mb-12">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto items-center">
                        <!-- Alma Viva - Consultório de Psicologia -->
                        <div class="flex items-center justify-center p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            <img src="/logo-alma-viva.png" 
                                 alt="Alma Viva - Consultório de Psicologia" 
                                 class="max-h-32 w-auto opacity-80 hover:opacity-100 transition-opacity">
                        </div>
                        
                        <!-- Contex -->
                        <div class="flex items-center justify-center p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            <img src="/logo-contex.png" 
                                 alt="Contex Assessoria Contábil" 
                                 class="max-h-32 w-auto opacity-80 hover:opacity-100 transition-opacity">
                        </div>
                        
                        <!-- Insight Builders -->
                        <div class="flex items-center justify-center p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            <img src="/logo-insight-builders.png" 
                                 alt="Insight Builders" 
                                 class="max-h-32 w-auto opacity-80 hover:opacity-100 transition-opacity">
                        </div>
                        
                        <!-- Tina Óticas -->
                        <div class="flex items-center justify-center p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            <img src="/logo-tina-oticas.png" 
                                 alt="Tina Óticas" 
                                 class="max-h-32 w-auto opacity-80 hover:opacity-100 transition-opacity">
                        </div>
                        
                        <!-- Marlise Meneghe -->
                        <div class="flex items-center justify-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            <img src="/logo-marlise-meneghe.png" 
                                 alt="Marlise Meneghe Mentora" 
                                 class="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity">
                        </div>
                        
                        <!-- Cellavi -->
                        <div class="flex items-center justify-center p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            <img src="/logo-cellavi.png" 
                                 alt="Cellavi" 
                                 class="max-h-32 w-auto opacity-80 hover:opacity-100 transition-opacity">
                        </div>
                    </div>
                </div>
                
                <!-- Stats -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 border-t border-orange-500/30">
                    <div>
                        <div class="stats-number">150+</div>
                        <p class="text-gray-400 text-lg font-medium mt-2">Projetos Entregues</p>
                    </div>
                    <div>
                        <div class="stats-number">98%</div>
                        <p class="text-gray-400 text-lg font-medium mt-2">Taxa de Conversão Aumentada</p>
                    </div>
                    <div>
                        <div class="stats-number">7 dias</div>
                        <p class="text-gray-400 text-lg font-medium mt-2">Prazo Médio de Entrega</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. A VISÃO (QUEBRANDO A MONOTONIA) -->
        <section class="vision-section fade-in">
            <div class="section-container relative z-10">
                <div class="max-w-4xl text-left">
                    <!-- MANCHETE PRINCIPAL - Impacto máximo -->
                    <h2 class="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                        <span class="text-white">A Diferença Entre Ter</span><br>
                        <span class="text-black drop-shadow-lg">Visibilidade Orgânica</span><br>
                        <span class="text-white">e Ter</span><br>
                        <span class="text-black drop-shadow-lg">Conversão Lucrativa</span>
                    </h2>
                    
                    <!-- SUBMANCHETE - Qualificação e diferencial -->
                    <div class="mb-10">
                        <p class="text-xl lg:text-2xl text-white leading-relaxed font-bold mb-2">
                            Trabalhamos com <span class="text-black drop-shadow-md">sensibilidade e humanidade</span><br>
                            para entender a sua essência,
                        </p>
                        <p class="text-xl lg:text-2xl text-white leading-relaxed font-bold">
                            mas aplicamos a melhor <span class="text-black drop-shadow-md">Tecnologia Construtiva</span><br>
                            em cada projeto.
                        </p>
                    </div>
                    
                    <!-- CORPO DE APOIO - CTA soft e prova -->
                    <div class="bg-black/25 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/40 max-w-2xl shadow-2xl">
                        <p class="text-lg lg:text-xl text-white leading-relaxed font-semibold mb-4">
                            Esta é a única forma de garantir que o seu site
                            não apenas <strong class="text-black">apareça no Google</strong>, 
                            mas que <strong class="text-black">converta visitantes em clientes</strong>.
                        </p>
                        <div class="flex items-center gap-3 text-base text-white/95 font-medium mt-4">
                            <i class="fas fa-arrow-right text-black"></i>
                            <span>Damos consultoria de posicionamento digital e conversão de lead.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 4. PROCESSO POWERBRAND (MATAR OBJEÇÃO TEMPO) -->
        <section class="section-container py-20 fade-in">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-black mb-4">
                    O Método <span class="gradient-text">Mind In Flow</span> de 7 Dias<br>
                    para a Sua Nova Autoridade Digital
                </h2>
                <p class="text-xl text-gray-400 max-w-3xl mx-auto">
                    Processo estratégico e comprovado que elimina o risco e garante resultados rápidos
                </p>
            </div>
            
            <div class="max-w-4xl mx-auto">
                <!-- Step 1 -->
                <div class="timeline-step">
                    <div class="flex items-start gap-6">
                        <div class="step-number">1</div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold mb-3 gradient-text">Estratégia Humana</h3>
                            <p class="text-gray-300 text-lg leading-relaxed">
                                Mergulho profundo na essência do seu negócio. Identificamos sua proposta única de valor, 
                                seu público ideal e as objeções que impedem a conversão. Definimos a estratégia de 
                                captação de leads e posicionamento de autoridade.
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Step 2 -->
                <div class="timeline-step">
                    <div class="flex items-start gap-6">
                        <div class="step-number">2</div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold mb-3 gradient-text">Design Construtivo</h3>
                            <p class="text-gray-300 text-lg leading-relaxed">
                                Criação do layout de alta conversão que traduz sua autoridade. Desenvolvemos a arquitetura 
                                de conteúdo estratégico que guia o visitante pela jornada de compra, eliminando objeções 
                                e construindo confiança.
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Step 3 -->
                <div class="timeline-step">
                    <div class="flex items-start gap-6">
                        <div class="step-number">3</div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold mb-3 gradient-text">Tecnologia Máxima</h3>
                            <p class="text-gray-300 text-lg leading-relaxed">
                                Implementação de SEO técnico avançado, integração com agentes de IA para vendas 24/7, 
                                captação automatizada via WhatsApp, segurança máxima e velocidade de carregamento otimizada. 
                                Seu site vira uma máquina de conversão.
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Step 4 -->
                <div class="timeline-step">
                    <div class="flex items-start gap-6">
                        <div class="step-number">4</div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold mb-3 gradient-text">Lançamento e Mentoria</h3>
                            <p class="text-gray-300 text-lg leading-relaxed">
                                Seu site entra no ar com toda infraestrutura funcionando. Você recebe mentoria completa 
                                para extrair o máximo da plataforma e suporte premium dedicado para garantir que cada 
                                lead seja aproveitado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. PILARES (O QUE ENTREGAMOS) -->
        <section class="section-container py-20 fade-in">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-black mb-4">
                    Pilares <span class="gradient-text">Mind In Flow</span>
                </h2>
                <p class="text-xl text-gray-400">
                    Performance, Autoridade e Captação de Leads 24/7
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Pillar 1: Tecnologia de Captação -->
                <div class="card-pillar">
                    <div class="icon-circle">
                        <img src="/icon-captacao.png" alt="Tecnologia de Captação" class="icon-img">
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4 gradient-text">
                        Tecnologia de Captação
                    </h3>
                    <p class="text-gray-300 text-center leading-relaxed">
                        Do botão direto do WhatsApp até integração com agentes de IA que fazem 
                        todo o processo de venda. Seus leads são capturados e qualificados 24/7.
                    </p>
                </div>
                
                <!-- Pillar 2: Performance SEO Max -->
                <div class="card-pillar">
                    <div class="icon-circle">
                        <img src="/icon-seo.png" alt="Performance SEO Max" class="icon-img">
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4 gradient-text">
                        Performance SEO Max
                    </h3>
                    <p class="text-gray-300 text-center leading-relaxed">
                        Sites otimizados para a melhor visibilidade orgânica. Seu público ideal 
                        te encontra no Google antes de encontrar a concorrência.
                    </p>
                </div>
                
                <!-- Pillar 3: Design de Elite -->
                <div class="card-pillar">
                    <div class="icon-circle">
                        <img src="/icon-design.png" alt="Design de Elite" class="icon-img">
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4 gradient-text">
                        Design de Elite
                    </h3>
                    <p class="text-gray-300 text-center leading-relaxed">
                        Layouts de alta conversão, 100% sob medida, que traduzem sua real 
                        autoridade e posicionam você como referência absoluta no mercado.
                    </p>
                </div>
                
                <!-- Pillar 4: Entrega Turbo -->
                <div class="card-pillar">
                    <div class="icon-circle">
                        <img src="/icon-entrega.png" alt="Entrega Turbo" class="icon-img">
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4 gradient-text">
                        Entrega Turbo & Suporte Premium
                    </h3>
                    <p class="text-gray-300 text-center leading-relaxed">
                        Sua plataforma no ar em 7 dias. Consultoria e suporte dedicados para 
                        garantir que você aproveite cada oportunidade de conversão.
                    </p>
                </div>
            </div>
        </section>

        <!-- 6. PROVA DEFINITIVA (MATAR OBJEÇÃO RISCO) -->
        <section class="section-container py-20 fade-in">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-black mb-4">
                    Por Trás do Código:<br>
                    <span class="gradient-text">Expertise que Multiplica a Sua Autoridade</span>
                </h2>
            </div>
            
            <!-- Expertise Narrative -->
            <div class="expertise-highlight mb-16 max-w-5xl mx-auto">
                <div class="flex flex-col lg:flex-row gap-8 items-center">
                    <div class="lg:w-1/3">
                        <img src="/mentor-photo.png" 
                             alt="Mentor Mind In Flow" 
                             class="rounded-xl shadow-xl border-2 border-orange-500/30 w-full">
                    </div>
                    <div class="lg:w-2/3">
                        <p class="text-xl text-gray-300 leading-relaxed mb-6">
                            Com anos de experiência em <strong class="text-white">Agências de Criação</strong> de alta performance 
                            e formação sólida em <strong class="text-white">Inteligência Emocional</strong>, entendo que 
                            tecnologia sem humanidade é apenas código.
                        </p>
                        <p class="text-xl text-gray-300 leading-relaxed mb-6">
                            A Mind In Flow nasceu da fusão entre <strong class="gradient-text">domínio técnico absoluto</strong> 
                            e a <strong class="gradient-text">sensibilidade necessária</strong> para entender o que realmente 
                            move o seu público a tomar decisões.
                        </p>
                        <p class="text-xl text-gray-300 leading-relaxed">
                            Não entregamos apenas sites. Entregamos <strong class="text-white">autoridade digital mensurável</strong>, 
                            <strong class="text-white">conversão lucrativa</strong> e a tranquilidade de ter um parceiro estratégico 
                            ao seu lado.
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Testimonials -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="testimonial-card">
                    <div class="flex items-center mb-4">
                        <img src="/andrea-cotrim.jpg" alt="Andrea Cotrim" class="w-16 h-16 rounded-full mr-4 object-cover border-2 border-orange-500/30">
                        <div>
                            <p class="font-bold text-lg">Andrea Cotrim</p>
                            <p class="text-sm text-gray-400">Psicóloga Clínica</p>
                        </div>
                    </div>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        "Meu site de psicologia online agora <strong class="text-white">atrai os pacientes certos</strong>. 
                        A Mind In Flow entendeu minha abordagem terapêutica e traduziu isso em um posicionamento 
                        digital que <strong class="text-white">triplicou meu agendamento</strong> de consultas em 2 meses."
                    </p>
                    <div class="flex text-orange-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="flex items-center mb-4">
                        <img src="/bruno-prieto.jpg" alt="Bruno Prieto" class="w-16 h-16 rounded-full mr-4 object-cover border-2 border-orange-500/30">
                        <div>
                            <p class="font-bold text-lg">Bruno Prieto</p>
                            <p class="text-sm text-gray-400">Nutricionista Esportivo</p>
                        </div>
                    </div>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        "Como nutricionista, eu precisava de uma presença digital forte. A Mind In Flow criou 
                        um site que me posicionou como <strong class="text-white">referência em nutrição esportiva</strong>. 
                        Minha lista de espera cresceu 400% e <strong class="text-white">dobrei meu ticket médio</strong>."
                    </p>
                    <div class="flex text-orange-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="flex items-center mb-4">
                        <img src="/marlise-meneghe.jpg" alt="Marlise Meneghe" class="w-16 h-16 rounded-full mr-4 object-cover border-2 border-orange-500/30">
                        <div>
                            <p class="font-bold text-lg">Marlise Meneghe</p>
                            <p class="text-sm text-gray-400">Mentora de Negócios</p>
                        </div>
                    </div>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        "Fiquei impressionada com o <strong class="text-white">profissionalismo e atendimento</strong>. 
                        Com uma <strong class="text-white">sensibilidade ímpar</strong>, conseguiram capturar e transmitir 
                        exatamente a essência do que eu buscava. O resultado ficou <strong class="text-white">sensacional</strong>. 
                        Um trabalho que une técnica e sensibilidade!"
                    </p>
                    <div class="flex text-orange-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. CTA FINAL -->
        <section class="py-20 fade-in" id="contato">
            <div class="section-container">
                <div class="bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute inset-0" style="background-image: url('/hero-background.jpg'); background-size: cover; background-position: center;"></div>
                    </div>
                    <div class="relative z-10">
                        <h2 class="text-4xl lg:text-6xl font-black mb-6 text-white">
                            Pronto Para Parar de Ser Invisível<br>
                            e Começar a Ser a <span class="text-black">Referência</span>?
                        </h2>
                        <p class="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white font-medium">
                            Agende agora sua consultoria de posicionamento digital e descubra como a 
                            Mind In Flow pode transformar sua presença digital em uma máquina de conversão.
                        </p>
                        <a href="https://wa.me/5511918534654?text=Olá! Quero falar com um Estrategista Mind In Flow sobre como multiplicar minha autoridade digital e conversão" 
                           class="inline-block bg-black text-white font-bold px-10 py-5 rounded-xl text-xl hover:bg-gray-900 transition-all shadow-2xl border-4 border-white"
                           target="_blank">
                            <i class="fab fa-whatsapp mr-3"></i>
                            Falar com um Estrategista Mind In Flow Agora
                        </a>
                        <p class="mt-6 text-white/90 text-sm">
                            ⚡ Resposta em até 2 horas • 🔒 Consulta sem compromisso
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black py-12 mt-20 border-t border-orange-500/20">
            <div class="section-container text-center">
                <img src="/mindinflow-logo.png" alt="Mind In Flow Logo" class="w-40 mx-auto mb-6 opacity-80 rounded-full bg-white/10 p-3">
                <p class="text-gray-400 mb-2 text-lg font-medium">
                    &copy; 2024 Mind In Flow - Inteligência Comercial
                </p>
                <p class="text-gray-500">
                    Sensibilidade Humana + Tecnologia Construtiva
                </p>
                <div class="mt-6 flex justify-center gap-6">
                    <a href="#" class="text-gray-400 hover:text-orange-500 transition-colors">
                        <i class="fab fa-instagram text-2xl"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-orange-500 transition-colors">
                        <i class="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a href="https://wa.me/5511918534654" target="_blank" class="text-gray-400 hover:text-orange-500 transition-colors">
                        <i class="fab fa-whatsapp text-2xl"></i>
                    </a>
                </div>
            </div>
        </footer>

        <!-- Scroll Animation Script -->
        <script>
            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Fade in elements on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });

            // WhatsApp button pulse effect
            const whatsappBtn = document.querySelector('.whatsapp-float');
            setInterval(() => {
                whatsappBtn.style.animation = 'none';
                setTimeout(() => {
                    whatsappBtn.style.animation = 'pulse 2s infinite';
                }, 10);
            }, 5000);
        </script>
    </body>
    </html>
  `)
})

// API Health Check
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
