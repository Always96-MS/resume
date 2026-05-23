/* Configuration — set this to your GitHub Pages URL before deploying */
const PAGE_URL = 'https://always96-ms.github.io/resume/';

/* =========================================================
   CONTENT
   All translatable strings live here.
   ========================================================= */
const CONTENT = {
  it: {
    lang: 'it',
    htmlLang: 'it',
    pageTitle: 'Marco Stefanelli — Data Scientist',
    metaDescription: 'CV online di Marco Stefanelli, Data Scientist e GenAI Engineer con esperienza in analisi KPI, dashboard interattive e sviluppo di applicazioni AI.',

    toggleLabel: 'EN',
    downloadFile: 'CV_MS2026_IT.pdf',
    downloadBtn: 'Scarica CV PDF',
    qrLabel: 'Scansiona per aprire questa pagina',
    footerNote: '© 2026 Marco Stefanelli',
    langToggleAria: 'Cambia lingua',
    menuAria: 'Apri menu di navigazione',

    nav: {
      experience:     'Esperienze',
      education:      'Formazione',
      skills:         'Competenze',
      projects:       'Progetti',
      certifications: 'Certificazioni',
      languages:      'Lingue',
      interests:      'Interessi',
    },

    hero: {
      kicker: 'Data Scientist · GenAI Engineer',
      name:   'Marco Stefanelli',
      bio:    'Data Analyst con esperienza pluriennale nel monitoring e analisi di KPI, sviluppo di dashboard interattive e formazione del personale. Forte background tecnico nella programmazione, con competenze in Python, SQL e JavaScript. Attualmente ricopro il ruolo di Data Scientist / GenAI Engineer per la valutazione, il design e lo sviluppo di applicazioni GenAI tramite Databricks. Spiccata capacità di problem-solving, gestione dello stress e orientamento ai risultati.',
    },

    expandLabel:   'Mostra dettagli',
    collapseLabel: 'Nascondi dettagli',

    sectionTitles: {
      experience:         'Esperienze Lavorative',
      previousExperience: 'Esperienze Precedenti',
      education:          'Formazione',
      skills:             'Competenze',
      projects:           'Progetti Personali',
      certifications:     'Certificazioni',
      languages:          'Lingue',
      interests:          'Interessi e Attività',
      contact:            'Download',
    },

    experience: [
      {
        role:    'Data Scientist — GenAI Engineer',
        company: 'Konecta',
        period:  '2025 – in corso',
        summary: 'Sviluppo di una soluzione proprietaria GenAI per l\'analisi automatica di dati, testi, audio e video in ambito BPO.',
        details: [
          'Sviluppo di una soluzione proprietaria che sfrutta l\'AI generativa per eseguire analisi automatiche su dati, testi, audio e video in ambito BPO, con l\'obiettivo di estrarre insight sull\'operato degli agenti e sul comportamento dei clienti (customer behaviour).',
          'Doppio utilizzo previsto: uso interno all\'azienda e potenziale commercializzazione verso clienti esterni in modalità SaaS.',
          'Attività quotidiane: valutazione e selezione di modelli AI, progettazione dell\'architettura della soluzione, sviluppo su piattaforma Databricks (AgentBricks), demo verso stakeholder tecnici e non tecnici.',
        ],
      },
      {
        role:    'Data Analyst e Specialista Q&F',
        company: 'Konecta',
        period:  '2024 – 2025',
        summary: 'Monitoraggio KPI, sviluppo di dashboard interattive e formazione del personale.',
        details: [
          'Progettazione e implementazione da zero dei processi di raccolta, visualizzazione e analisi dei dati operativi.',
          'Sviluppo di dashboard interattive in Looker Studio e Google Sheets (con automazioni in Google Apps Script) per il monitoraggio KPI in tempo reale.',
          'Le analisi hanno guidato azioni di training mirato che hanno portato la commessa a raggiungere e superare i target di budget previsti.',
          'Progettazione e gestione di programmi formativi per risorse junior e senior; valutazione tecnica delle risorse.',
        ],
      },
      {
        role:    'Team Leader',
        company: 'Konecta',
        period:  '2021 – 2024',
        summary: 'Gestione di oltre 200 operatori, analisi KPI, reporting e coaching.',
        details: [
          'Gestione di un team di oltre 200 operatori, con responsabilità diretta sul raggiungimento dei KPI a budget della commessa.',
          'Introduzione di processi strutturati di analisi delle performance e coaching continuativo, personalizzato sulle potenzialità di ogni risorsa.',
          'Approccio orientato alla valorizzazione delle persone, con un ambiente di lavoro basato sulla fiducia e sulla stima reciproca.',
          'Al momento del passaggio di ruolo, la risposta umana del team ha rappresentato il riscontro più significativo di quella esperienza.',
        ],
      },
      {
        role:    'Customer Service Specialist',
        company: 'Konecta',
        period:  '2017 – 2021',
        summary: 'Assistenza clienti, gestione casi complessi e mentoring.',
        details: [
          'Assistenza tecnica e commerciale clienti; gestione casi complessi.',
          'Formazione e mentoring nuove risorse.',
        ],
      },
    ],

    previousExperience: [
      {
        role:     'Aiutante Fotografo / Secondo Scatto',
        company:  'Pixel Photostudio (Part-time)',
        period:   'Luglio 2014 – Settembre 2016',
        location: 'Casarano, Puglia',
        summary:  'Produzione fotografica e video per cerimonie ed eventi, post-produzione e gestione clienti.',
        details: [
          'Produzione di materiale fotografico e video per cerimonie ed eventi.',
          'Post-produzione (fotoritocco e video-editing) con Adobe Photoshop e Apple Final Cut X.',
          'Gestione clienti, elaborazione ordini, presidio autonomo dello studio.',
        ],
      },
      {
        role:     'Esperienze Part-time',
        company:  'Varie',
        period:   '2014 – 2016',
        location: 'Casarano, Puglia',
        summary:  'Tutoraggio privato e ristorazione.',
        details: [
          'Tutoraggio privato: supporto allo studio e recupero debiti scolastici in Matematica, Fisica e Inglese per studenti di scuola secondaria.',
          'Ristorazione: primo aiuto caposala, organizzazione e allestimento sala, accoglienza e servizio clienti anche in lingua inglese.',
        ],
      },
    ],

    education: [
      {
        degree:      'Certified Generative AI Engineer',
        institution: 'Databricks',
        period:      'Dicembre 2025',
        summary:     'Certificazione in design, sviluppo e valutazione di applicazioni GenAI.',
        details: [
          'Percorso di formazione e certificazione ufficiale Databricks incentrato sulla progettazione, sviluppo e valutazione di applicazioni di AI Generativa.',
          'La certificazione attesta competenze su LLM, RAG, Agent frameworks e best practice per il deployment su piattaforma Databricks.',
        ],
      },
      {
        degree:      'Google Data Analytics (Coursera)',
        institution: 'Google / Coursera',
        period:      'Marzo – Maggio 2025',
        summary:     'Corso seguito in modalità audit; non completato in chiave certificativa.',
        details: [
          'Percorso professionale completo sulla data analytics: raccolta, pulizia, analisi e visualizzazione dei dati.',
          'Seguito in modalità audit nel periodo Marzo–Maggio 2025, senza completamento del percorso certificativo.',
        ],
      },
      {
        degree:      'Corso di Laurea in Fisica',
        institution: 'Università del Salento',
        period:      '2015 – 2018',
        summary:     'Percorso universitario interrotto per scelta consapevole; ottimi risultati accademici.',
        details: [
          'Percorso universitario interrotto per scelta consapevole, al fine di entrare nel mondo del lavoro.',
          'Gli anni di studio hanno fornito una solida base analitica e scientifica, con risultati eccellenti negli esami sostenuti: Analisi Matematica, Fisica I e II, Programmazione, Algebra e Geometria Lineare, Laboratorio e Analisi Dati I e II.',
        ],
      },
      {
        degree:      'Diploma Liceo Scientifico, indirizzo tradizionale',
        institution: 'Liceo Scientifico G.C. Vanini',
        period:      '2010 – 2015',
        summary:     'Valutazione Finale 100/100.',
        details: [
          'Diploma con valutazione finale 100/100.',
          'Partecipazione attiva a competizioni scientifiche nazionali (Olimpiadi di Matematica, Fisica, Chimica e Biologia), con costanti piazzamenti tra i primi posti a livello regionale.',
        ],
      },
    ],

    skills: [
      {
        category: 'Programmazione e Scripting',
        tags: ['Python (pandas, analytics)', 'SQL', 'JavaScript / Google Apps Script', 'HTML', 'CSS', 'TypeScript (basi)', 'React (basi)', 'Angular (basi)'],
      },
      {
        category: 'Analisi e Visualizzazione Dati',
        tags: ['Google Sheets (avanzato)', 'Excel (avanzato)', 'Looker Studio (avanzato)', 'Databricks: Genie Space', 'Databricks: SQL / Delta Lake', 'Databricks: AgentBricks', 'Apache Spark (base)'],
      },
      {
        category: 'AI e GenAI',
        tags: ['Certificato GenAI Engineer (Databricks)', 'Progettazione app GenAI', 'LLM / RAG / Agent frameworks', 'Vibe coding con LLM'],
      },
      {
        category: 'Software e Strumenti',
        tags: ['Google Workspace (avanzato)', 'Suite Microsoft Office', 'Adobe Photoshop (base)', 'Apple Final Cut X (base)'],
      },
      {
        category: 'Soft Skill',
        tags: ['Ponte tecnico-stakeholder', 'Mentoring e coaching', 'Problem-solving', 'Gestione dello stress', 'Orientamento ai risultati', 'Gestione del tempo e priorità'],
      },
      {
        category: 'In corso di apprendimento',
        tags: ['Spagnolo (principiante)'],
      },
    ],

    projects: [
      {
        title:        'Smart Home Display',
        description:  'Dashboard personale accessibile da qualsiasi dispositivo sulla rete locale, che mostra una selezione di foto personali insieme a informazioni in tempo reale: data e ora, eventi del calendario, meteo e notizie tramite feed RSS. Sviluppato interamente tramite vibe coding con LLM.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'RSS', 'API integration'],
      },
      {
        title:        'Diario del Benessere',
        description:  'Web app personale per il tracciamento quotidiano del benessere: forma fisica, esercizio, dieta, umore ed emicranie. Progettata per uso personale, sviluppata tramite vibe coding con LLM.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        title:        'CV Online (questa pagina)',
        description:  'Questa stessa pagina — un CV online interattivo costruito come versione estesa del CV in PDF, hostato su GitHub Pages.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      },
    ],

    certifications: [
      {
        name:        'Certified Generative AI Engineer',
        issuer:      'Databricks',
        date:        'Dicembre 2025',
        description: 'Percorso di formazione e certificazione ufficiale Databricks incentrato sulla progettazione, sviluppo e valutazione di applicazioni di AI Generativa. Attesta competenze su LLM, RAG, Agent frameworks e best practice per il deployment su Databricks.',
      },
      {
        name:        'Python Programming',
        issuer:      'Udemy',
        date:        'Dicembre 2025',
        description: 'Corso completo sulla programmazione in Python, con focus su fondamenti del linguaggio e applicazioni pratiche.',
      },
      {
        name:        'Cambridge First Certificate in English (FCE) — B2',
        issuer:      'Cambridge Assessment English',
        date:        '',
        description: 'Certificazione internazionale di lingua inglese di livello B2 del Quadro Comune Europeo di Riferimento (QCER).',
      },
    ],

    languages: [
      { language: 'Italiano',  level: 'Madrelingua',      note: '' },
      { language: 'Inglese',   level: 'Avanzato',         note: 'Cambridge First Certificate — B2' },
      { language: 'Spagnolo',  level: 'In apprendimento', note: '' },
    ],

    interests: [
      {
        name:         'International Cosmic Day',
        icon:         'atom',
        organization: 'UniSalento – CERN',
        date:         'Ottobre 2014',
        description:  'Partecipazione a una collaborazione scientifica tra università e liceo per la misurazione dei raggi cosmici a livello del mare tramite il rilevamento dei muoni — progetto culminato in una pubblicazione scientifica. Il Liceo ha finanziato un viaggio a Ginevra per la visita al CERN, con accesso diretto all\'acceleratore di particelle e al rilevatore LHC.',
        photos: ['international_cosmic_day.jpg', 'cern_1.jpg', 'cern_2.jpg'],
      },
      {
        name:         'Fotografia',
        icon:         'camera',
        organization: '',
        date:         '',
        description:  'Appassionato di fotografia, con esperienza professionale come aiutante fotografo e video editor (2014–2016). La fotografia rimane una passione personale.',
        photos: ['fotografia_1.JPG', 'fotografia_2.JPG'],
      },
      {
        name:          'Musica',
        icon:          'music',
        organization:  '',
        date:          '',
        description:   'La musica è una presenza costante nella mia quotidianità, dalla colonna sonora di una sessione di lavoro a quella di un pomeriggio di relax. Ascolto un po\' di tutto, con un debole per l\'elettronica, l\'indie e il pop internazionale. Ho studiato chitarra classica per quattro anni e sono autodidatta al pianoforte.',
        photos: ['musica_1.JPG', 'musica_2.jpg'],
        playlistUrl:   'https://music.apple.com/it/playlist/brani-preferiti/pl.u-lxU9xaDbg',
        playlistLabel: 'Ascolta la mia playlist su Apple Music',
      },
      {
        name:         'Viaggi',
        icon:         'globe',
        organization: '',
        date:         '',
        description:  'Viaggiatore appassionato — viaggio all\'estero almeno una volta l\'anno, munito di passaporto.',
        mapLocations: [
          { name: 'Ginevra',    lat: 46.2044, lng: 6.1432 },
          { name: 'Amsterdam',  lat: 52.3676, lng: 4.9041 },
          { name: 'Barcellona', lat: 41.3851, lng: 2.1734 },
          { name: 'Atene',      lat: 37.9838, lng: 23.7275 },
        ],
      },
      {
        name:         'Formula 1',
        icon:         'flag',
        organization: '',
        date:         '',
        description:  'Appassionato di Formula 1, con un interesse particolare per l\'aspetto analitico dello sport: timing di gara, dati live, telemetrie e strategie ai box. La complessità tecnica e la lettura dei dati rendono ogni weekend di gara un esercizio di analisi tanto quanto uno spettacolo.',
      },
    ],
  },

  en: {
    lang: 'en',
    htmlLang: 'en',
    pageTitle: 'Marco Stefanelli — Data Scientist',
    metaDescription: 'Online resume of Marco Stefanelli, Data Scientist and GenAI Engineer with experience in KPI analysis, interactive dashboards, and AI application development.',

    toggleLabel: 'IT',
    downloadFile: 'CV_MS2026_EN.pdf',
    downloadBtn: 'Download CV PDF',
    qrLabel: 'Scan to open this page',
    footerNote: '© 2026 Marco Stefanelli',
    langToggleAria: 'Change language',
    menuAria: 'Open navigation menu',

    nav: {
      experience:     'Experience',
      education:      'Education',
      skills:         'Skills',
      projects:       'Projects',
      certifications: 'Certifications',
      languages:      'Languages',
      interests:      'Interests',
    },

    hero: {
      kicker: 'Data Scientist · GenAI Engineer',
      name:   'Marco Stefanelli',
      bio:    'Data Analyst with extensive experience in KPI monitoring and analysis, interactive dashboard development, and team training. Strong technical programming background with expertise in Python, SQL, and JavaScript. Currently working as a Data Scientist / GenAI Engineer, specialising in the evaluation, design, and development of GenAI applications leveraging Databricks. Strong problem-solving abilities, stress management skills, and results-oriented mindset.',
    },

    expandLabel:   'Show details',
    collapseLabel: 'Hide details',

    sectionTitles: {
      experience:         'Work Experience',
      previousExperience: 'Previous Experience',
      education:          'Education',
      skills:             'Skills',
      projects:           'Personal Projects',
      certifications:     'Certifications',
      languages:          'Languages',
      interests:          'Interests & Activities',
      contact:            'Download',
    },

    experience: [
      {
        role:    'Data Scientist — GenAI Engineer',
        company: 'Konecta',
        period:  '2025 – present',
        summary: 'Developing a proprietary GenAI solution for automated analysis of data, text, audio, and video in a BPO context.',
        details: [
          'Developing a proprietary solution leveraging generative AI to perform automated analysis on data, text, audio, and video in a BPO context, with the goal of extracting insights on agent performance and customer behaviour.',
          'Dual use case: internal company use and potential SaaS commercialisation to external clients.',
          'Day-to-day activities: AI model evaluation and selection, solution architecture design, development on Databricks (AgentBricks), demos to both technical and non-technical stakeholders.',
        ],
      },
      {
        role:    'Data Analyst — Quality & Training Specialist',
        company: 'Konecta',
        period:  '2024 – 2025',
        summary: 'KPI monitoring, interactive dashboard development, and staff training programmes.',
        details: [
          'Designed and implemented from scratch the processes for collecting, visualising, and analysing operational data.',
          'Built interactive dashboards in Looker Studio and Google Sheets (with Google Apps Script automations) for real-time KPI monitoring.',
          'Analyses drove targeted training actions that led the business unit to meet and exceed its budget targets.',
          'Designed and managed training programmes for junior and senior staff; conducted technical assessments.',
        ],
      },
      {
        role:    'Team Leader',
        company: 'Konecta',
        period:  '2021 – 2024',
        summary: 'Management of 200+ agents, KPI analysis, reporting, and coaching.',
        details: [
          'Managed a team of over 200 agents, with direct accountability for the business unit\'s KPI targets.',
          'Introduced structured performance analysis and ongoing coaching processes, tailored to each person\'s potential.',
          'People-first approach — built a working environment grounded in trust and mutual respect.',
          'Upon transitioning roles, the response from the team was the most meaningful outcome of that experience.',
        ],
      },
      {
        role:    'Customer Service Specialist',
        company: 'Konecta',
        period:  '2017 – 2021',
        summary: 'Customer support, complex case management, and mentoring.',
        details: [
          'Technical and commercial customer support; management of complex cases.',
          'Training and mentoring of new hires.',
        ],
      },
    ],

    previousExperience: [
      {
        role:     'Assistant Photographer / Second Shooter',
        company:  'Pixel Photostudio (Part-time)',
        period:   'July 2014 – September 2016',
        location: 'Casarano, Puglia',
        summary:  'Photo and video production for events, post-production, and client management.',
        details: [
          'Photo and video production for ceremonies and events.',
          'Post-production (photo retouching and video editing) using Adobe Photoshop and Apple Final Cut X.',
          'Client management, order processing, and independent studio supervision.',
        ],
      },
      {
        role:     'Various Part-time Roles',
        company:  'Various',
        period:   '2014 – 2016',
        location: 'Casarano, Puglia',
        summary:  'Private tutoring and hospitality.',
        details: [
          'Private tutoring: study support and academic recovery in Mathematics, Physics, and English for secondary school students.',
          'Hospitality: assistant head waiter, room setup, customer welcome and service — also in English.',
        ],
      },
    ],

    education: [
      {
        degree:      'Certified Generative AI Engineer',
        institution: 'Databricks',
        period:      'December 2025',
        summary:     'Certification in GenAI application design, development, and evaluation.',
        details: [
          'Official Databricks training and certification programme focused on the design, development, and evaluation of Generative AI applications.',
          'Covers LLMs, RAG, Agent frameworks, and best practices for deployment on the Databricks platform.',
        ],
      },
      {
        degree:      'Google Data Analytics (Coursera)',
        institution: 'Google / Coursera',
        period:      'March – May 2025',
        summary:     'Attended as an audit — followed without completing the certification pathway.',
        details: [
          'Comprehensive professional programme covering data collection, cleaning, analysis, and visualisation.',
          'Attended in audit mode during March–May 2025, without completing the certification pathway.',
        ],
      },
      {
        degree:      "Bachelor's Degree in Physics",
        institution: 'Università del Salento',
        period:      '2015 – 2018',
        summary:     'Incomplete — deliberate choice to enter the workforce; outstanding academic results.',
        details: [
          'Deliberately left incomplete in order to enter the workforce.',
          'The years of study provided a solid analytical and scientific foundation, with excellent results in: Mathematical Analysis, Physics I & II, Programming, Algebra and Linear Geometry, Laboratory and Data Analysis I & II.',
        ],
      },
      {
        degree:      'High School Diploma — Scientific Curriculum',
        institution: 'Liceo Scientifico G.C. Vanini',
        period:      '2010 – 2015',
        summary:     'Graduation Score 100/100.',
        details: [
          'Graduated with a final score of 100/100.',
          'Active participant in national science competitions (Mathematics, Physics, Chemistry, and Biology Olympiads), consistently placing in the top rankings at regional level.',
        ],
      },
    ],

    skills: [
      {
        category: 'Programming & Scripting',
        tags: ['Python (pandas, analytics)', 'SQL', 'JavaScript / Google Apps Script', 'HTML', 'CSS', 'TypeScript (basics)', 'React (basics)', 'Angular (basics)'],
      },
      {
        category: 'Data Analysis & Visualization',
        tags: ['Google Sheets (advanced)', 'Excel (advanced)', 'Looker Studio (advanced)', 'Databricks: Genie Space', 'Databricks: SQL / Delta Lake', 'Databricks: AgentBricks', 'Apache Spark (basic)'],
      },
      {
        category: 'AI & GenAI',
        tags: ['Certified GenAI Engineer (Databricks)', 'GenAI app design & development', 'LLM / RAG / Agent frameworks', 'Vibe coding with LLMs'],
      },
      {
        category: 'Software & Tools',
        tags: ['Google Workspace (advanced)', 'Microsoft Office Suite', 'Adobe Photoshop (basic)', 'Apple Final Cut X (basic)'],
      },
      {
        category: 'Soft Skills',
        tags: ['Technical-to-stakeholder bridge', 'Mentoring & coaching', 'Problem-solving', 'Stress management', 'Results-oriented', 'Time & priority management'],
      },
      {
        category: 'Currently Learning',
        tags: ['Spanish (beginner)'],
      },
    ],

    projects: [
      {
        title:        'Smart Home Display',
        description:  'A personal dashboard that runs on any device on the local network and displays a curated selection of personal photos alongside real-time information: date and time, calendar events, weather forecast, and news via RSS feed. Built entirely through AI-assisted (vibe coding) development.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'RSS', 'API integration'],
      },
      {
        title:        'Personal Wellness Journal',
        description:  'A personal web app to track daily wellness metrics: physical condition, exercise, diet, mood, and migraine episodes. Designed for private use, built through AI-assisted development.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        title:        'Online Resume (this page)',
        description:  'This very page — an interactive online resume built as an extended version of the PDF CV, hosted on GitHub Pages.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      },
    ],

    certifications: [
      {
        name:        'Certified Generative AI Engineer',
        issuer:      'Databricks',
        date:        'December 2025',
        description: 'Official Databricks training and certification programme focused on the design, development, and evaluation of Generative AI applications. Covers LLMs, RAG, Agent frameworks, and best practices for deployment on Databricks.',
      },
      {
        name:        'Python Programming',
        issuer:      'Udemy',
        date:        'December 2025',
        description: 'Complete course on Python programming, covering language fundamentals and practical applications.',
      },
      {
        name:        'Cambridge First Certificate in English (FCE) — B2',
        issuer:      'Cambridge Assessment English',
        date:        '',
        description: 'International English language certification at B2 level of the Common European Framework of Reference (CEFR).',
      },
    ],

    languages: [
      { language: 'Italian',  level: 'Native',             note: '' },
      { language: 'English',  level: 'Advanced',           note: 'Cambridge First Certificate — B2' },
      { language: 'Spanish',  level: 'Currently learning', note: '' },
    ],

    interests: [
      {
        name:         'International Cosmic Day',
        icon:         'atom',
        organization: 'UniSalento – CERN',
        date:         'October 2014',
        description:  'Participated in a scientific collaboration between university and high school, measuring cosmic rays at sea level by detecting muon particles — the project resulted in a scientific publication. The school funded a trip to Geneva to visit CERN, with direct access to the particle accelerator and the LHC detector.',
        photos: ['international_cosmic_day.jpg', 'cern_1.jpg', 'cern_2.jpg'],
      },
      {
        name:         'Photography',
        icon:         'camera',
        organization: '',
        date:         '',
        description:  'Passionate about photography, with professional experience as an assistant photographer and video editor (2014–2016). Photography remains a personal passion.',
        photos: ['fotografia_1.JPG', 'fotografia_2.JPG'],
      },
      {
        name:          'Music',
        icon:          'music',
        organization:  '',
        date:          '',
        description:   'Music is a constant presence in my daily life, from the soundtrack of a work session to a relaxed afternoon. I listen to a wide range, with a soft spot for electronic, indie, and international pop. I studied classical guitar for four years and am self-taught on the piano.',
        photos: ['musica_1.JPG', 'musica_2.jpg'],
        playlistUrl:   'https://music.apple.com/it/playlist/brani-preferiti/pl.u-lxU9xaDbg',
        playlistLabel: 'Listen to my playlist on Apple Music',
      },
      {
        name:         'Travel',
        icon:         'globe',
        organization: '',
        date:         '',
        description:  'Avid traveller — I travel abroad at least once a year and hold a valid passport.',
        mapLocations: [
          { name: 'Geneva',    lat: 46.2044, lng: 6.1432 },
          { name: 'Amsterdam', lat: 52.3676, lng: 4.9041 },
          { name: 'Barcelona', lat: 41.3851, lng: 2.1734 },
          { name: 'Athens',    lat: 37.9838, lng: 23.7275 },
        ],
      },
      {
        name:         'Formula 1',
        icon:         'flag',
        organization: '',
        date:         '',
        description:  'A Formula 1 fan with a particular interest in the analytical side of the sport: race timing, live data, telemetry, and pit-stop strategy. The technical complexity and data-driven nature of every race weekend make it as much an exercise in analysis as a spectacle.',
      },
    ],
  },
};

/* =========================================================
   SVG ICONS (inline strings for render functions)
   ========================================================= */
const CHEVRON_SVG  = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';
const DOWNLOAD_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';

const INTEREST_ICONS = {
  atom:   '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>',
  camera: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  music:  '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  globe:  '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  flag:   '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
};

/* =========================================================
   LANGUAGE MANAGEMENT
   ========================================================= */
function detectDefaultLang() {
  const saved = localStorage.getItem('cv-lang');
  if (saved === 'it' || saved === 'en') return saved;
  return (navigator.language || '').toLowerCase().startsWith('it') ? 'it' : 'en';
}

let currentLang = detectDefaultLang();

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('cv-lang', lang);
  const c = CONTENT[lang];

  document.documentElement.lang = c.htmlLang;
  document.documentElement.className = 'lang-' + lang;
  document.title = c.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute('content', c.metaDescription);

  /* Nav links */
  document.querySelectorAll('.nav__link').forEach(link => {
    const key = link.dataset.section;
    if (c.nav[key]) link.textContent = c.nav[key];
  });

  /* Lang toggle */
  const itBtn = document.getElementById('langOptIT');
  const enBtn = document.getElementById('langOptEN');
  const wrap  = document.getElementById('langToggleWrap');
  if (itBtn) itBtn.setAttribute('aria-pressed', lang === 'it' ? 'true' : 'false');
  if (enBtn) enBtn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
  if (wrap) wrap.setAttribute('aria-label', c.langToggleAria);

  /* Hero */
  const heroKicker = document.getElementById('heroKicker');
  const heroName   = document.getElementById('heroName');
  const heroBio    = document.getElementById('heroBio');
  if (heroKicker) heroKicker.textContent = c.hero.kicker;
  if (heroName)   heroName.textContent   = c.hero.name;
  if (heroBio)    heroBio.textContent    = c.hero.bio;

  /* Section titles */
  const titles = {
    experienceSectionTitle:         c.sectionTitles.experience,
    previousExperienceSectionTitle: c.sectionTitles.previousExperience,
    educationSectionTitle:          c.sectionTitles.education,
    skillsSectionTitle:             c.sectionTitles.skills,
    projectsSectionTitle:           c.sectionTitles.projects,
    certificationsSectionTitle:     c.sectionTitles.certifications,
    languagesSectionTitle:          c.sectionTitles.languages,
    interestsSectionTitle:          c.sectionTitles.interests,
    contactSectionTitle:            c.sectionTitles.contact,
  };
  Object.entries(titles).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  /* Render all sections */
  renderTimeline('experienceList',         c.experience,         c);
  renderTimeline('previousExperienceList', c.previousExperience, c);
  renderTimeline('educationList',          c.education,          c);
  renderSkills('skillsGrid',               c.skills);
  renderProjects('projectsList',           c.projects);
  renderCertifications('certificationsList', c.certifications);
  renderLanguages('languagesList',         c.languages);
  renderActivities('interestsList',        c.interests);
  setTimeout(initTravelMap, 0);

  /* Footer */
  const btn = document.getElementById('downloadBtn');
  if (btn) {
    btn.innerHTML = DOWNLOAD_SVG + ' ' + c.downloadBtn;
    btn.setAttribute('href', c.downloadFile);
    btn.setAttribute('aria-label', c.downloadBtn);
  }
  const qrLabel   = document.getElementById('qrLabel');
  const footerNote = document.getElementById('footerNote');
  if (qrLabel)    qrLabel.textContent    = c.qrLabel;
  if (footerNote) footerNote.textContent = c.footerNote;

  /* Update thumb position after DOM settles */
  requestAnimationFrame(() => updateLangThumb(lang));
}

/* =========================================================
   RENDER FUNCTIONS
   ========================================================= */
function renderTimeline(containerId, items, c) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  items.forEach((item, index) => {
    const isExp   = 'role' in item;
    const heading = isExp ? item.role : item.degree;
    const sub     = isExp ? item.company : item.institution;
    const detailsId = 'acc-' + containerId + '-' + index;

    const locationHtml = item.location
      ? ' &middot; ' + item.location
      : '';

    const listHtml = item.details
      .map(d => '<li>' + d + '</li>')
      .join('');

    const article = document.createElement('article');
    article.className = 'ti fade-in';
    article.innerHTML =
      '<div class="ti__role">' + heading + '</div>' +
      '<div class="ti__company">' + sub + '</div>' +
      '<div class="ti__meta">' + item.period + locationHtml + '</div>' +
      '<div class="acc" data-open="false">' +
        '<button class="acc__head" aria-expanded="false" aria-controls="' + detailsId + '">' +
          '<span>' + c.expandLabel + '</span>' +
          '<span class="acc__chev">' + CHEVRON_SVG + '</span>' +
        '</button>' +
        '<div class="acc__body" id="' + detailsId + '" aria-hidden="true">' +
          '<ul class="acc__list">' + listHtml + '</ul>' +
        '</div>' +
      '</div>';

    article.querySelector('.acc__head').addEventListener('click', function() {
      toggleAccordion(this, c);
    });

    container.appendChild(article);
  });
}

function toggleAccordion(btn, c) {
  const acc      = btn.closest('.acc');
  const isOpen   = acc.dataset.open === 'true';
  const body     = acc.querySelector('.acc__body');
  const label    = btn.querySelector('span:first-child');
  acc.dataset.open = String(!isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
  body.setAttribute('aria-hidden', String(isOpen));
  if (label) label.textContent = isOpen ? c.expandLabel : c.collapseLabel;
}

function renderSkills(containerId, skills) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  skills.forEach(group => {
    const div = document.createElement('div');
    div.className = 'skill-card fade-in';
    const tagsHtml = group.tags.map(t => '<span class="tag">' + t + '</span>').join('');
    div.innerHTML = '<h4>' + group.category + '</h4><div class="tags">' + tagsHtml + '</div>';
    container.appendChild(div);
  });
}

function renderProjects(containerId, projects) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  projects.forEach(project => {
    const article = document.createElement('article');
    article.className = 'project-card fade-in';
    const techHtml = project.technologies.map(t => '<span class="tag">' + t + '</span>').join('');
    article.innerHTML =
      '<div class="project-card__title">' + project.title + '</div>' +
      '<p class="project-card__desc">' + project.description + '</p>' +
      '<div class="tags">' + techHtml + '</div>';
    container.appendChild(article);
  });
}

function renderCertifications(containerId, certifications) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  certifications.forEach(cert => {
    const article = document.createElement('article');
    article.className = 'cert fade-in';
    const dateHtml = cert.date ? '<span class="cert__meta">' + cert.date + '</span>' : '';
    article.innerHTML =
      '<div class="cert__row"><span class="cert__role">' + cert.name + '</span>' + dateHtml + '</div>' +
      '<div class="cert__issuer">' + cert.issuer + '</div>' +
      '<p class="cert__desc">' + cert.description + '</p>';
    container.appendChild(article);
  });
}

function renderLanguages(containerId, languages) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  languages.forEach(lang => {
    const li = document.createElement('li');
    li.className = 'fade-in';
    const noteHtml = lang.note ? '<span class="note">' + lang.note + '</span>' : '';
    li.innerHTML =
      '<span class="name">' + lang.language + '</span>' +
      '<span class="level">' + lang.level + '</span>' +
      noteHtml;
    container.appendChild(li);
  });
}

let _travelMapLocations = null;
let _travelMapInstance  = null;

function renderActivities(containerId, activities) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  _travelMapLocations = null;

  activities.forEach(act => {
    const article = document.createElement('article');
    article.className = 'activity fade-in';

    const iconHtml = act.icon && INTEREST_ICONS[act.icon]
      ? '<span class="activity__icon">' + INTEREST_ICONS[act.icon] + '</span>'
      : '';
    const dateHtml = act.date ? '<span class="activity__meta">' + act.date + '</span>' : '';
    const orgHtml  = act.organization ? '<div class="activity__issuer">' + act.organization + '</div>' : '';

    let extraHtml = '';
    if (act.photos && act.photos.length) {
      const imgs = act.photos.map(src =>
        '<div class="activity__photo"><img src="' + src + '" alt="" loading="lazy" /></div>'
      ).join('');
      extraHtml += '<div class="activity__photos">' + imgs + '</div>';
    }
    if (act.playlistUrl) {
      extraHtml +=
        '<a href="' + act.playlistUrl + '" class="activity__playlist-link" target="_blank" rel="noopener noreferrer">' +
        INTEREST_ICONS.music + act.playlistLabel +
        '</a>';
    }
    if (act.mapLocations) {
      _travelMapLocations = act.mapLocations;
      extraHtml += '<div id="travelMapContainer" class="travel-map"></div>';
    }

    article.innerHTML =
      '<div class="activity__row"><span class="activity__role">' + iconHtml + act.name + '</span>' + dateHtml + '</div>' +
      orgHtml +
      '<p class="activity__desc">' + act.description + '</p>' +
      extraHtml;
    container.appendChild(article);
  });
}

function initTravelMap() {
  if (typeof L === 'undefined' || !_travelMapLocations) return;
  const container = document.getElementById('travelMapContainer');
  if (!container) return;

  if (_travelMapInstance) { _travelMapInstance.remove(); _travelMapInstance = null; }

  const map = L.map(container, {
    scrollWheelZoom: false,
    dragging: !L.Browser.mobile,
    zoomControl: true,
    attributionControl: true,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  const markers = _travelMapLocations.map(loc => {
    const m = L.marker([loc.lat, loc.lng], {
      icon: L.divIcon({
        className: 'travel-pin',
        html: '<div class="travel-pin__dot"></div><span class="travel-pin__label">' + loc.name + '</span>',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
        popupAnchor: [0, -12],
      }),
    });
    m.bindPopup('<strong>' + loc.name + '</strong>');
    m.addTo(map);
    return m;
  });

  map.fitBounds(L.featureGroup(markers).getBounds().pad(0.35));
  _travelMapInstance = map;
}

/* =========================================================
   LANG TOGGLE — sliding thumb
   ========================================================= */
function updateLangThumb(lang) {
  const wrap   = document.getElementById('langToggleWrap');
  const target = document.getElementById(lang === 'it' ? 'langOptIT' : 'langOptEN');
  if (!wrap || !target) return;
  const wrapRect   = wrap.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  wrap.style.setProperty('--thumb-x', (targetRect.left - wrapRect.left - 3) + 'px');
  wrap.style.setProperty('--thumb-w', targetRect.width + 'px');
}

function initLangToggle() {
  document.getElementById('langOptIT').addEventListener('click', () => {
    setLang('it');
    initScrollAnimations();
  });
  document.getElementById('langOptEN').addEventListener('click', () => {
    setLang('en');
    initScrollAnimations();
  });
  /* Initial thumb placement after fonts settle */
  requestAnimationFrame(() => requestAnimationFrame(() => updateLangThumb(currentLang)));
}

/* =========================================================
   PORTRAIT TILT
   ========================================================= */
function initPortraitTilt() {
  const wrap     = document.getElementById('portraitWrap');
  const portrait = wrap && wrap.querySelector('.hero__portrait');
  if (!wrap || !portrait) return;

  wrap.addEventListener('mousemove', function(e) {
    const r = wrap.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    portrait.style.transform = 'rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg)';
  });
  wrap.addEventListener('mouseleave', function() {
    portrait.style.transform = '';
  });
}

/* =========================================================
   QR CODE
   ========================================================= */
function initQRCode() {
  const container = document.getElementById('qrcode');
  if (!container) return;
  if (typeof QRCode !== 'undefined') {
    new QRCode(container, {
      text: PAGE_URL,
      width: 112,
      height: 112,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M,
    });
  } else {
    const img = document.createElement('img');
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=112x112&data=' + encodeURIComponent(PAGE_URL);
    img.alt = '';
    img.width = 112;
    img.height = 112;
    img.style.borderRadius = '10px';
    img.style.display = 'block';
    container.appendChild(img);
  }
}

/* =========================================================
   SCROLLSPY
   ========================================================= */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id], section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('nav__link--active', link.dataset.section === entry.target.id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach(s => observer.observe(s));
}

/* =========================================================
   SCROLL ANIMATIONS
   ========================================================= */
function initScrollAnimations() {
  const reveal = el => el.classList.add('fade-in--visible');
  const inView = el => {
    const r  = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return r.top < vh && r.bottom > 0;
  };
  const revealVisible = () => {
    document.querySelectorAll('.fade-in:not(.fade-in--visible)').forEach(el => {
      if (inView(el)) reveal(el);
    });
  };

  revealVisible();
  requestAnimationFrame(revealVisible);
  setTimeout(revealVisible, 100);

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
      });
    },
    { threshold: 0.05 }
  );
  setTimeout(() => {
    document.querySelectorAll('.fade-in:not(.fade-in--visible)').forEach(el => io.observe(el));
  }, 150);
}

/* =========================================================
   HEADER SCROLL SHADOW
   ========================================================= */
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 8);
  }, { passive: true });
}

/* =========================================================
   MOBILE MENU
   ========================================================= */
function initMobileMenu() {
  const toggle    = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.classList.toggle('mobile-nav--open', !expanded);
    mobileNav.setAttribute('aria-hidden', String(expanded));
  });

  mobileNav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('mobile-nav--open');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  });
}

/* =========================================================
   SMOOTH SCROLL for nav links
   ========================================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
      }
    });
  });
}

/* =========================================================
   LIGHTBOX
   ========================================================= */
function initLightbox() {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML =
    '<button class="lightbox__close" aria-label="Chiudi">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
    '</button>' +
    '<img class="lightbox__img" src="" alt="" />';
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector('.lightbox__img');

  const open = src => {
    imgEl.src = src;
    overlay.classList.add('lightbox--open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    overlay.classList.remove('lightbox--open');
    document.body.style.overflow = '';
  };

  document.addEventListener('click', e => {
    const photo = e.target.closest('.activity__photo');
    if (photo) open(photo.querySelector('img').src);
  });
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  overlay.querySelector('.lightbox__close').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  initLangToggle();
  initPortraitTilt();
  initQRCode();
  initScrollSpy();
  initScrollAnimations();
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initLightbox();
});
