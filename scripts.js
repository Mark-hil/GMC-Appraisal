const HR_CREDENTIALS = {
    username: 'hradmin',
    password: 'hr2024'
};
const ROLE_PASSWORDS = {
    hod: 'hod2024',
    hr: 'hr2024'
};
const STORAGE_KEYS = {
    reviews: 'APR_REVIEWS_v2',
    kpas: 'HR_CUSTOM_KPAS',
    tasks: 'HR_ASSIGNED_TASKS',
    settings: 'HR_SYSTEM_SETTINGS'
};

const departmentData = {
    DEFAULT: {
        objectives: ["Complete Task 1", "Complete Task 2", "Complete Task 3", ],
        kpas: [],
        jobTitles: []
    },
    "MINE OPERATION": {
        objectives: [
            "Ensure safe mining operations",
            "Meet production targets",
            "Maintain equipment efficiency"
        ],
        kpas: [
            "Production efficiency",
            "Safety compliance",
            "Equipment management",
            "Total",
            "GRAND TOTAL FOR SECTION B"
        ],
        jobTitles: [
            "ADMINISTRATIVE & LIASON OFFICER",
            "ASSISTANT TRAINING OFFICER",
            "BENCH FOREMAN",
            "BIT SHARPENER",
            "BLAST HELPER",
            "BLASTHOLE DRILLER",
            "BULLDOZER OPERATOR",
            "DATA ANALYST",
            "DOZER OPERATOR",
            "DRILL & BLAST DATA ANALYST/HELPER",
            "DRILL ASSISTANT",
            "DRILL HELPER",
            "DRILL SHIFT BOSS",
            "DUMP SPOTTER",
            "DUMP TRUCK OPERATOR",
            "DUMPER OPERATOR",
            "EXCAVATOR OPERATOR",
            "GRADER OPERATOR",
            "MINE CAPTAIN",
            "MINE MANAGER",
            "MINE SUPERINTENDENT",
            "MINING ENGINEER",
            "MULTI SKILLED OPERATOR",
            "ROAD MAINTENANCE SUPERVISOR",
            "SENIOR MINE CAPTAIN",
            "SENIOR MINE TRAINING COORDINATOR",
            "SHIFT BOSS",
            "SNR DATA ANALYST",
            "TIRE MANAGEMENT SUPERVISOR",
            "WHEEL DOZER OPERATOR"
        ]
    },
    "MINE PLANNING AND ENGINEERING": {
        objectives: [
            "Develop mine plans",
            "Optimize resource utilization",
            "Ensure geotechnical stability"
        ],
        kpas: [
            "Planning accuracy",
            "Resource optimization",
            "Technical compliance"
        ],
        jobTitles: [
            "GEOTECHNICAL ENGINEER",
            "MINE ENGINEERING & PLANNING MANAGER",
            "MINE PLANNING SUPERINTENDENT"
        ]
    },
    "PORT OPERATION": {
        objectives: [
            "Ensure efficient port operations",
            "Maintain shipping schedule",
            "Manage inventory and quality control"
        ],
        kpas: [
            "Operational efficiency",
            "Shipping accuracy",
            "Equipment maintenance"
        ],
        jobTitles: [
            "LOADER/FORKLIFT OPERATOR",
            "ADMINISTRATIVE ASSISTANT",
            "ASSISTANT SECURITY OFFICER",
            "AUTO ELECTRICIAN",
            "BELT SPLICER",
            "CIVIL ENGINEERING TECHNICIAN",
            "ELECT. TECHNICIAN /SHIFT LEADER",
            "ELECTRICAL TECHNICIAN",
            "ENGINEERING SUPERINTENDENT",
            "FRONT END LOADER OPERATOR",
            "GENERAL ADMINISTRATIVE CLERK",
            "HEALTH & SAFETY OFFICER",
            "HEAVY DUTY MECHANIC",
            "INVENTORY CONTROL OFFICER",
            "LEAD AUTO MECHANICAL TECHNICIAN",
            "LOADER OPERATOR",
            "LOADER OPERATOR/WELDER",
            "MACHINIST/FORKLIFT OPERATOR",
            "MECHANIC",
            "PLANT MECHANIC",
            "PLANT MECHANIC/SHIFT LEADER",
            "PORT HR/ADMIN. SUPERINTENDENT",
            "SAMPLER",
            "SAMPLER/AUTO ELECTRICIAN",
            "SENIOR WELDING SUPERVISOR",
            "SHIFT FOREMAN",
            "SHIPPING COORDINATOR",
            "SHIPPING OFFICER",
            "SHIPPING SUPERINTENDENT",
            "STORES CLERK",
            "TALLY CLERK",
            "TECHNICAL OPERATIONS MANAGER-TDI",
            "WELDER",
            "WELDER /SPLICER",
            "WELDER/SHIFT LEADER"
        ]
    },
    "SECURITY": {
        objectives: [
            "Maintain site security",
            "Conduct security patrols",
            "Manage access control"
        ],
        kpas: [
            "Security compliance",
            "Incident response",
            "Access management"
        ],
        jobTitles: [
            "SECURITY AND INTELLIGENCE OFFICER",
            "SECURITY AND INTELLIGENCE SUPERINTENDENT",
            "SECURITY OFFICER/GUARD",
            "SECURITY OPERATIONS SUPERVISOR",
            "SECURITY PATROL GUARD"
        ]
    },
    "SUPPLY CHAIN": {
        objectives: [
            "Ensure timely procurement",
            "Maintain inventory levels",
            "Manage supplier relationships"
        ],
        kpas: [
            "Procurement efficiency",
            "Inventory accuracy",
            "Cost management"
        ],
        jobTitles: [
            "ASSISTANT INVENTORY CONTROL OFFICER",
            "ASSISTANT RECEIVING  / QUALITY CONTROL OFFICER",
            "CONTRACT ADMINISTRATOR",
            "CONTRACT COORDINATOR",
            "DEPUTY SUPPLY CHAIN MANAGER",
            "DRIVER/MECHANIC",
            "EXPEDITING COORDINATOR",
            "FUEL BOWSER ATTENDANT",
            "FUEL FARM & BOWSER ATTENDANT",
            "INVENTORY CONTROL OFFICER",
            "INVENTORY CONTROL SUPERINTENDENT",
            "INVENTORY COORDINATOR",
            "MATERIALS PLANNING COORDINATOR",
            "MATERIALS REQUIREMENT PLANNING  OFFICER",
            "PROCUREMENT COORDINATOR",
            "PROCUREMENT OFFICER",
            "PROCUREMENT SUPERINTENDENT",
            "RECEIVING & DISPATCHING-FUEL BOWSER",
            "SUPPLY OPERATIONS MANAGER",
            "WAREHOUSE & MATERIAL UNIT MANAGER"
        ]
    },
    "ASSAY LAB": {
        objectives: [
            "Ensure accurate assay results",
            "Maintain lab quality standards",
            "Process samples efficiently"
        ],
        kpas: [
            "Result accuracy",
            "Quality control",
            "Turnaround time"
        ],
        jobTitles: [
            "LABORATORY MANAGER",
            "ASSAY LABORATORY SUPERINTENDENT",
            "SHIFT SUPERVISOR",
            "SAMPLE PREP. LEAD HAND",
            "LABORATORY TECHNICIAN",
            "LABORATORY SUPERVISOR",
            "SAMPLE PREP. TECHNICIAN I",
            "SAMPLE PREP. TECHNICIAN II",
            "LABORATORY TECHNOLOGIST",
            "LABORATORY ASSISTANT"
        ]
    },
    "ASSET MANAGEMENT": {
        objectives: [
            "Optimize asset reliability",
            "Manage maintenance schedules",
            "Control parts inventory"
        ],
        kpas: [
            "Equipment uptime",
            "Maintenance efficiency",
            "Resource planning"
        ],
        jobTitles: [
            "RELIABILITY ENGINEER - PLANT",
            "SENIOR MAINTENANCE SUPERVISOR",
            "PARTS & RESOURCE COORDINATOR - PLANT",
            "PARTS & RESOURCE COORDINATOR - HD",
            "RELIABILITY ENGINEER - HME"
        ]
    },
    "CARBONATE PLANT": {
        objectives: [
            "Maintain production targets",
            "Ensure plant efficiency",
            "Manage maintenance schedules"
        ],
        kpas: [
            "Production output",
            "Equipment reliability",
            "Safety compliance"
        ],
        jobTitles: [
            "BELT SPLICER",
            "CONTROL ROOM OPERATOR/ELECTRICIAN",
            "ENGINEERING MANAGER",
            "ENGINEERING TRAINING COORDINATOR",
            "FRONT END LOADER OPERATOR",
            "PLANT ELECTRICIAN",
            "PLANT ELECTRICIAN /OPERATOR",
            "PLANT MAINTENANCE PLANNING ENGINEER",
            "PLANT OPERATOR/MECHANICS",
            "PLANT OPERATOR/ROCK BREAKER",
            "PLANT OPERATOR/SAFETY REP.",
            "PLANT OPERTATOR/WELDER",
            "PLANT PRODUCTION SUPERINTENDENT",
            "PLANT WELDER",
            "PLANT WELDER /PLANT OPERATOR",
            "RIGGER",
            "SENIOR PLANNING ENGINEER",
            "SENIOR PLANT ELECTRICAL SUPERVISOR",
            "SENIOR PLANT SUPERVISOR",
            "TEAM LEADER - PLANT OPERATION",
            "TOOLS CLERK",
            "UNIT MANAGER - ENGINEERING",
            "WELDER",
            "PLANT OPERATOR/ELECTRICAL",
            "ENGINEERING TRAINING ASSISTANT",
            "PAYLOADER OPERATOR",
            "LOADER OPERATOR",
            "CONTROL ROOM OPERATOR",
            "PLANT OPERATOR",
            "PRODUCTION TEAM LEAD",
            "PLANT SHIFT SUPERVISOR",
            "BOB CAT OPERATOR",
            "PLANT MECHANIC"
        ]
    },
    "CIVIL": {
        objectives: [
            "Maintain civil infrastructure",
            "Execute construction projects",
            "Manage civil maintenance"
        ],
        kpas: [
            "Project completion",
            "Quality standards",
            "Safety compliance"
        ],
        jobTitles: [
            "CIVIL ENGINEER",
            "MULTISKILLED OPERATOR",
            "DRIVER GRADE I",
            "PLUMBER",
            "TILER/MASON",
            "PAINTER/SIGN WRITER",
            "CONCRETE MIXING TRUCK DRIVER",
            "CIVIL ARTISAN",
            "BACKHOE/PAYLOADER OPERATOR",
            "LEAD PLUMBER",
            "PAINTER",
            "SNR PROJECT ENGINEER - CIVIL",
            "CIVIL SUPERINTENDENT",
            "BACKHOLE OPERATOR"
        ]
    },
    "COMMUNITY RELATIONS": {
        objectives: [
            "Manage stakeholder engagement",
            "Address community concerns",
            "Implement CSR initiatives"
        ],
        kpas: [
            "Stakeholder satisfaction",
            "Complaint resolution",
            "Community impact"
        ],
        jobTitles: [
            "SOCIAL RESPONSIBILITY & EXTERNAL RELATIONS MANAGER",
            "COMMUNICATION AND PR OFFICER",
            "COMPLAINTS, IMPACT MITIGATION & ADMINISTRATION OFFICER",
            "GRIEVANCE AND COMPLAINTS ASSISTANT",
            "COMMUNITY SANITATION & HYGIENE OFFICER",
            "GRIEVANCE & RESOLUTION OFFICER",
            "EXTERNAL RELATIONS OFFICER",
            "SENIOR STAKEHOLDER ENGAGEMENT OFFICER"
        ]
    },
    "ELECTRIC SHOP": {
        objectives: [
            "Maintain electrical systems",
            "Ensure power distribution",
            "Manage HVAC systems"
        ],
        kpas: [
            "System uptime",
            "Maintenance efficiency",
            "Safety compliance"
        ],
        jobTitles: [
            "ELECTRICAL SUPERINTENDENT - SERVICES & INFRASTRUCTURES",
            "ELECTRICAL ENGINEER",
            "RADIO MAINTENANCE ENGINEER",
            "ELECTRICAL TECHNICIAN",
            "LEAD ELECTRICAL TECHNICIAN - HVAC",
            "PLANT ELECTRICAL TECHNICIAN - LEAD",
            "33KV SUB ST'N OPERATOR/GEN. ELECTR. WORKS",
            "POWER HSE/POWER LINE/GEN. ELECTRCALS",
            "INSTALLATION, REPAIRS & MAINT ON HVAC EQUIP",
            "POWER HSE/GENERAL ELECTRICAL WORKS",
            "LEAD ELECTRICAL TECHNICIAN",
            "AUTO ELECTRICAL TECHNICIAN",
            "ELECTRICAL TECHNICIAN - HVAC",
            "ELECTRICAL SUPERVISOR - POWER DIST. NETWORK/EXTERNAL WKS",
            "POWER HSE OPERARTION & MAINTENANCE",
            "SENIOR AIR CONDITION & REFRIGERATION SUPERVISOR",
            "33KV SUB ST'N. OPRTOR/PWERLINES/GEN ELECTR WORKS"
        ]
    },
    "ENVIRONMENT": {
        objectives: [
            "Ensure environmental compliance",
            "Monitor environmental impact",
            "Implement sustainability initiatives"
        ],
        kpas: [
            "Regulatory compliance",
            "Environmental monitoring",
            "Sustainability metrics"
        ],
        jobTitles: [
            "ENVIRONMENT MANAGER",
            "ENVIRONMENTAL MONITORING SUPERVISOR",
            "PLANT SUPERVISOR/ENGINEER",
            "LABORATORY ANALYST",
            "ENVIRONMENT ASSISTANT",
            "ENVIRONMENTAL TECHNICIAN",
            "ENVIRONMENTAL ASSISTANT",
            "EXECUTIVE ASSISTANT",
            "SENIOR OFFICER - ENVIRONMENT"
        ]
    },
    "FINANCE": {
        objectives: [
            "Ensure financial accuracy",
            "Manage accounts payable/receivable",
            "Prepare financial reports"
        ],
        kpas: [
            "Financial reporting accuracy",
            "Budget adherence",
            "Cost optimization"
        ],
        jobTitles: [
            "FINANCE MANAGER",
            "ACCOUNTS SUPERVISOR",
            "FINANCIAL SUPERINTENDENT",
            "ACCOUNTS PAYABLE COORDINATOR",
            "SENIOR ACCOUNTANT - FINANCIAL REPORTING AND TAX",
            "ACCOUNTS PAYABLE ASSISTANT",
            "SENIOR BUSINESS ANALYST",
            "ACCOUNTS PAYABLE OFFICER",
            "TREASURER",
            "MANAGER, CONTRACTS MANAGEMENT",
            "DEPUTY FINANCIAL CONTROLLER"
        ]
    },
    "GEOLOGY & SURVEY": {
        objectives: [
            "Conduct geological surveys",
            "Manage resource data",
            "Ensure survey accuracy"
        ],
        kpas: [
            "Survey accuracy",
            "Resource modeling",
            "Data management"
        ],
        jobTitles: [
            "EXPLORATION & MINERAL RESOURCE MANAGER",
            "SUPERINTENDENT RESOURCE GEOLOGIST",
            "SENIOR RESOURCE GEOLOGIST",
            "SENIOR PRODUCTION/EXPLORATION GEOLOGIST",
            "SENIOR PRODUCTION GEOLOGIST",
            "GEOLOGIST",
            "SURVEY TECHNICIAN",
            "GEOLOGICAL SAMPLER",
            "SENIOR SURVEYOR",
            "DRILLER/SAMPLING SUPERVISOR",
            "SENIOR  SUVERYOR",
            "SUPERINTENDENT MINE GEOLOGIST",
            "SAMPLER",
            "SUPERINTENDENT MINE SURVEYOR",
            "FIELD ASSISTANT - SURVEY"
        ]
    },
    "HD/EME": {
        objectives: [
            "Maintain heavy equipment",
            "Ensure equipment availability",
            "Manage maintenance schedules"
        ],
        kpas: [
            "Equipment uptime",
            "Maintenance efficiency",
            "Cost management"
        ],
        jobTitles: [
            "DEPUTY MINE MAINTENANCE MANAGER",
            "AUTO ELECTRICAL SUPERINTENDENT",
            "MAINTENANCE SUPERINTENDANT - HME",
            "DEWATERING SUPERINTENDENT",
            "DEWATERING SUPERVISOR",
            "AUTO ELECTRICAL SUPERVISOR",
            "DRILL RIG SUPERVISOR",
            "DRILL RIG MAINTENANCE SUPERINTENDENT",
            "FOREMAN - HD",
            "MECHANIC - HD",
            "FOREMAN - HD WELDER",
            "FOREMAN - ANCILLARY",
            "AUTO ELECTRICAL TECHNICIAN",
            "AUTO ELECTRICIAN",
            "CONTROL ASSISTANT",
            "DRILL RIG MECHANIC",
            "DRIVER MECHANIC",
            "ELECTRICAL TECHNICIAN",
            "FOREMAN - DEWATERING",
            "HD - MECHANIC",
            "HD - MECHANIC FOREMAN",
            "HEAVY DUTY MECHANIC",
            "HEAVY EQUIPMENT MECHANIC",
            "JUNIOR MAINTENANCE PLANNER",
            "LEAD AUTO ELECTRICAL TECHNICIAN",
            "MAINTENANCE PLANNER",
            "PUMP ATTENDANT",
            "PUMP MECHANIC",
            "PUMP MECHANIC - LEAD HAND",
            "PUMP MECHANIC/ATTENDANT",
            "PUMP WELDER",
            "SHIFT SUPERVISOR - DRILL RIG MAINTENANCE",
            "SNR SUPERVISOR - ANCILLARY",
            "SUPERVISOR - EXCAVATORS",
            "SUPERVISOR - HD",
            "TECHNICAL SERVICE MANAGER",
            "TOOLS CLERK",
            "TOOLS CLERK / ATTENDANT",
            "TOOLS ROOM CLERK",
            "UNIT MANAGER - MINE MAINTENANCE",
            "WELDER",
            "WELDER - HD",
            "WORKSHOP MANAGER"
        ]
    },
    "HEALTH & SAFETY": {
        objectives: [
            "Ensure workplace safety",
            "Conduct safety audits",
            "Manage emergency response"
        ],
        kpas: [
            "Safety compliance",
            "Incident reduction",
            "Emergency preparedness"
        ],
        jobTitles: [
            "SAFETY & HEALTH MANAGER",
            "HEALTH & SAFETY SUPERINTENDENT",
            "PARAMEDIC",
            "TOOLS CLERK",
            "AMBULANCE DRIVER",
            "AMBULANCE DRIVER/EMERGENCY MEDICAL TECHNICIAN",
            "HEALTH & SAFETY OFFICER",
            "FIRST AIDER",
            "HEALTH & SAFETY ASSISTANT"
        ]
    },
    "HOSPITAL": {
        objectives: [
            "Provide medical services",
            "Maintain hospital operations",
            "Ensure patient care quality"
        ],
        kpas: [
            "Patient care quality",
            "Service availability",
            "Facility maintenance"
        ],
        jobTitles: [
            "CHIEF MEDICAL OFFICER",
            "ANAESTHETIST",
            "MEDICAL ASSISTANT",
            "BIOMEDICAL SCIENTIST/HEAD OF LABORATORY",
            "DISPENSING TECHNOLOGIST",
            "NURSE/ANAESTHETIST",
            "DEPUTY HOSPITAL ADMINISTRATOR",
            "PARAMEDIC/EMT",
            "HEALTH ASSISTANT (PHARMACY OPTION)",
            "HEAD ORDERLY/HEAD OF MAINTENANCE",
            "OPD IN-CHARGE",
            "AUXILLARY THEATRE STAFF",
            "WARD ORDERLY",
            "SENIOR NURSING OFFICER/OH COORDINATOR",
            "AMBULANCE DRIVER - EMERGENCY"
        ]
    },
    "HUMAN CAPITAL": {
        objectives: [
            "Manage HR operations",
            "Ensure employee welfare",
            "Support learning & development"
        ],
        kpas: [
            "HR service delivery",
            "Employee satisfaction",
            "Training effectiveness"
        ],
        jobTitles: [
            "HEAD HUMAN CAPITAL",
            "BENEFITS & PAYROLL SUPERINTENDENT",
            "EMPLOYEE WELFARE & PROJECTS COORDINATOR",
            "LEARNING AND DEVELOPMENT COORDINATOR",
            "EMPLOYEE ADMIN & INDUSTRIAL RELATIONS COORDINATOR",
            "ESTATE ADMIN COORDINATOR",
            "EXECUTIVE ASSISTANT / LOGISTICS & SUPPLY CO-ORDINATOR",
            "HR SYSTEMS & ANALYTICS COORDINATOR",
            "PERSONAL ASSISTANT TO THE MANAGING DIRECTOR",
            "PERSONNEL OFFICE ASSISTANT",
            "ESTATES OFFICER",
            "LV DRIVER",
            "LEARNING AND DEVELOPMENT OFFICER"
        ]
    },
    "I.T.": {
        objectives: [
            "Maintain IT systems",
            "Provide technical support",
            "Ensure system security"
        ],
        kpas: [
            "System uptime & reliability",
            "Support response time",
            "Security compliance"
        ],
        jobTitles: [
            "IT SERVICE DELIVERY MANAGER",
            "SENIOR I. T SYSTEMS ADMINISTRATOR",
            "END-USER SUPPORT TECHNICIAN",
            "APPLICATION AND DATABASE TECHNICIAN",
            "ASSISTANT DATABASE TECHNICIAN"
        ]
    },
    "LIGHT DUTY": {
        objectives: [
            "Maintain light vehicles",
            "Ensure fleet availability",
            "Manage vehicle operations"
        ],
        kpas: [
            "Vehicle uptime",
            "Maintenance efficiency",
            "Operational safety"
        ],
        jobTitles: [
            "SUPERINTENDENT - VEHICLES & AUXILIARIES",
            "SUPERVISOR - VEHICLES & AUXILIARIES",
            "MECHANIC -  VEHICLES & AUXILIARIES",
            "LV DRIVER",
            "ANCILLARY OPERATIONS SUPERVISOR",
            "MECHANIC - LIGHT VEHICLES",
            "FOREMAN - LIGHT TRUCKS",
            "FOREMAN - LIGHT VEHICLES",
            "OPERATOR - CRANE",
            "DRIVER - DRIVER MULTI SKILLED",
            "OPERATOR - MULTI SKILLED",
            "MECHANIC - LIGHT TRUCKS",
            "SPRAYER",
            "FOREMAN - PANEL BEATING/WELDING",
            "LUBRICANT TRUCK ATTENDANT",
            "OPERATOR  - MULTI SKILLED",
            "OPERATOR -MULTI SKILLED",
            "AUTO ELECTRICIAN",
            "OPERATOR - FORKLIFT",
            "DRIVER",
            "LIGHT DUTY MECHANIC",
            "MULTI-SKILLED DRIVER",
            "MULTI-SKILLED OPERATOR"
        ]
    },
    "MECHANICAL WORKSHOP": {
        objectives: [
            "Provide mechanical services",
            "Maintain workshop equipment",
            "Support plant operations"
        ],
        kpas: [
            "Service delivery",
            "Quality standards",
            "Response time"
        ],
        jobTitles: [
            "SENIOR PLANT MAINTENENCE SUPERVISOR",
            "ELECTRICAL AND INSTRUMENTATION SUPERINTENDENT",
            "PLANT MAINTENANCE SUPERVISOR",
            "SENIOR MECHANICAL PROJECT ENGINEER",
            "MECHANICAL PROJECT ENGINEER",
            "WELDER",
            "MULTI SKILLED PLANT TECNICIAN",
            "LEAD  WELDER",
            "LEAD LATHE TURNER",
            "TEAM LEADER - PLANT MAINTENANCE",
            "LEAD MACHINIST",
            "LIFTING EQUIPMENT MAINTENANCE TECHNICIAN"
        ]
    },
    "METALLURGY": {
        objectives: [
            "Optimize metallurgical processes",
            "Ensure product quality",
            "Manage sampling operations"
        ],
        kpas: [
            "Process efficiency",
            "Quality control",
            "Recovery rates"
        ],
        jobTitles: [
            "METALLURGICAL MANAGER",
            "SENIOR METALLURGIST",
            "SHIFT METALLURGIST",
            "LEAD HAND - METALLURGY",
            "WEIGHBRIDGE ATTENDANT",
            "FRONT END LOADER OPERATOR",
            "SAMPLER",
            "SAMPLER/LOADING CLERK"
        ]
    }
};

const coreKPAs = [{
    title: "1. SENSE OF RESPONSIBILITY",
    bullets: [
        "Shows responsibility for assets under his/her purview",
        "Is conscientious and reliable, delivering what he/she promises and accepts responsibility for errors or mistakes",
        "Encourages others to consider the cost, benefit and reasons for actions",
        "Maintains a professional approach - separating friendship from corporate decisions",
        "Exhibits high levels of knowledge required for work, is willing to learn and be tutored and uses mistakes as learning opportunities"
    ]
}, {
    title: "2. TIME USE",
    bullets: [
        "Uses time wisely by reporting to work on time and remains productively engaged",
        "Avoids undue delays in submissions",
        "Does not delay the work of others",
        "Can multi-task and manage a number of issues at the same time"
    ]
}, {
    title: "3. RELIABILITY & RISK MANAGEMENT",
    bullets: [
        "Can be depended upon, can be delegated to, shows initiative in coming up with ideas and solutions",
        "Willing and able to take responsibility, maintains Company property and avoids bringing the Company into disrepute",
        "Assesses constraints/obstacles before making a firm commitment to action",
        "Demonstrates the personal drive and resilience to overcome problems and checks assumptions to avoid potential problems"
    ]
}, {
    title: "4. LEADERSHIP CAPABILITIES & TEAM BUILDING SKILLS",
    bullets: [
        "Demonstrates leadership capacity, is able to supervise subordinates and shows appropriate subordination to superior",
        "Demonstrates professionalism in relating with peers by responding promptly",
        "Creates a feeling that we are all part of the same team and holds regular review meetings",
        "Gives prompt recognition to people who do good; encourages and motivates others",
        "Coaches people to develop their strengths and uses these effectively"
    ]
}, {
    title: "5. EFFECTIVENESS OF COMMUNICATION & CO-OPERATION",
    bullets: [
        "Keeps peers, superiors and subordinates aware of work progress as necessary",
        "Uses the appropriate verbal and written communications in all circumstances and responds to mails and phone calls within reasonable time.",
        "Interacts well with others willing to discuss people's ideas and suggestions and understanding the feelings and views of others on important issues.",
        "Extends the needed co-operations required by others, provides needed and relevant information on time"
    ]
}, {
    title: "6. STRENGTHS & WEAKNESSES",
    bullets: [
        "Employee identified strengths:",
        "Identified strategies to enhance identified strengths",
        "Employee identified weaknesses.",
        "Identified strategies to mitigate these weaknesses"
    ]
}];

let isHRLoggedIn = false;
let currentView = 'main';
let currentReviewId = null;
let reviews = [];
let customKPAs = {};
let assignedTasks = [];
let systemSettings = {};
let currentEditingKPA = null;
let pendingRoleChange = null;
let currentAuthenticatedRole = 'staff';

let sigStaffPad, sigPeerPad, sigHodPad;

const roleEl = document.getElementById('role');
const deptSel = document.getElementById('departmentSelect');
const filterDept = document.getElementById('filterDept');
const objectivesArea = document.getElementById('objectivesArea');
const trainingBody = document.getElementById('trainingBody');
const suggestionsText = document.getElementById('suggestionsText');
const statusMsg = document.getElementById('statusMsg');
const dashboard = document.getElementById('hodDashboard');
const dashboardBody = document.getElementById('dashboardBody');
const findEmail = document.getElementById('findEmail');

const staffNameEl = document.getElementById('staffName');
const EmailEl = document.getElementById('Email');
const jobTitleEl = document.getElementById('jobTitle');
const periodFromEl = document.getElementById('periodFrom');
const periodToEl = document.getElementById('periodTo');

function updateJobTitles() {
    const department = deptSel.value;
    jobTitleEl.innerHTML = '<option value="">-- Select Job Title --</option>';

    if (department && departmentData[department] && departmentData[department].jobTitles) {
        const jobTitles = departmentData[department].jobTitles;
        jobTitles.forEach(title => {
            const option = document.createElement('option');
            option.value = title;
            option.textContent = title;
            jobTitleEl.appendChild(option);
        });
    }

    renderObjectives();
    checkHRTaskNotifications();
}

function init() {
    loadStoredData();
    initSignaturePads();
    setupEventListeners();
    renderObjectives();
    applyRole();
    renderDashboard();
    applyHRSystemSettings();
    checkHRTaskNotifications();

    // Check HOD notifications
    checkHODNotifications();

    updateStatus('Ready – create or load a review. Use "Find by Email." to open a saved review.');
    updateTaskJobTitles();
    updateKPAJobTitles();

    // Check if we should auto-fill from task link
    checkAutoFillParams();
}

function loadStoredData() {
    try {
        const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.reviews) || '[]');
        reviews = Array.isArray(raw) ? raw : [];
        customKPAs = JSON.parse(localStorage.getItem(STORAGE_KEYS.kpas) || '{}');
        assignedTasks = JSON.parse(localStorage.getItem(STORAGE_KEYS.tasks) || '[]');
        systemSettings = JSON.parse(localStorage.getItem(STORAGE_KEYS.settings) || '{}');

        // Load HOD emails
        loadHODEmails();
    } catch (e) {
        console.error('Error loading stored data:', e);
        reviews = [];
        customKPAs = {};
        assignedTasks = [];
        systemSettings = {};
    }
}

function loadHRInitialData() {
    loadTasksTable();
    loadReviewsTable();
    loadHODEmailConfig(); // Load HOD email configuration UI

    if (systemSettings.defaultPeriodFrom) {
        document.getElementById('defaultPeriodFrom').value = systemSettings.defaultPeriodFrom;
    }
    if (systemSettings.defaultPeriodTo) {
        document.getElementById('defaultPeriodTo').value = systemSettings.defaultPeriodTo;
    }
    if (systemSettings.reviewDeadline) {
        document.getElementById('reviewDeadline').value = systemSettings.reviewDeadline;
    }
    document.getElementById('emailNotifications').checked = systemSettings.emailNotifications || false;
    document.getElementById('allowSelfRating').checked = systemSettings.allowSelfRating !== false;
}

function initSignaturePads() {
    const sigStaffCanvas = document.getElementById('sigStaff');
    const sigPeerCanvas = document.getElementById('sigPeer');
    const sigHodCanvas = document.getElementById('sigHod');

    sigStaffPad = new SignaturePad(sigStaffCanvas);
    sigPeerPad = new SignaturePad(sigPeerCanvas);
    sigHodPad = new SignaturePad(sigHodCanvas);
}

function setupEventListeners() {
    roleEl.addEventListener('change', handleRoleChange);
    deptSel.addEventListener('change', () => {
        renderObjectives();
        checkHRTaskNotifications();
    });
    filterDept.addEventListener('change', () => renderDashboard());


    document.getElementById('saveBtn').addEventListener('click', () => saveReview());
    document.getElementById('submitHodBtn').addEventListener('click', () => submitToHod());
    document.getElementById('markCompletedBtn').addEventListener('click', () => markCompleted());
    document.getElementById('exportBtn').addEventListener('click', () => {
        if (currentReviewId) exportPDF(currentReviewId);
        else alert('Open or save a review first.');
    });
    document.getElementById('deleteBtn').addEventListener('click', () => deleteCurrent());
    document.getElementById('newBtn').addEventListener('click', () => newReview());
    document.getElementById('loadBtn').addEventListener('click', () => findByEmail());
    document.getElementById('addTraining').addEventListener('click', () => addTrainingRow());
    document.getElementById('taskDepartment').addEventListener('change', updateTaskJobTitles);
    document.getElementById('kpaDepartment').addEventListener('change', updateKPAJobTitles);
    document.getElementById('kpaJobTitle').addEventListener('change', loadDepartmentKPAs);
    document.getElementById('kpaFormDepartment').addEventListener('change', updateKPAFormJobTitles);

    document.getElementById('clearStaff').addEventListener('click', () => {
        sigStaffPad.clear();
    });
    document.getElementById('clearPeer').addEventListener('click', () => {
        sigPeerPad.clear();
    });
    document.getElementById('clearHod').addEventListener('click', () => {
        sigHodPad.clear();
    });

    document.getElementById('hrLoginForm').addEventListener('submit', handleHRLogin);
    document.getElementById('kpaForm').addEventListener('submit', handleKPASubmit);
    document.getElementById('taskForm').addEventListener('submit', handleTaskSubmit);

    window.addEventListener('beforeunload', () => {
        saveToStorage();
    });

}

function showMainSystem() {
    document.getElementById('mainSystem').classList.remove('hidden');
    document.getElementById('hrAdminInterface').classList.add('hidden');
    document.getElementById('hrLoginScreen').classList.add('hidden');
    currentView = 'main';
}

function showHRLogin() {
    document.getElementById('mainSystem').classList.add('hidden');
    document.getElementById('hrAdminInterface').classList.add('hidden');
    document.getElementById('hrLoginScreen').classList.remove('hidden');
    currentView = 'hrLogin';
}

function showHRAdmin() {
    document.getElementById('mainSystem').classList.add('hidden');
    document.getElementById('hrAdminInterface').classList.remove('hidden');
    document.getElementById('hrLoginScreen').classList.add('hidden');
    currentView = 'hrAdmin';
    loadHRInitialData();
}

function handleHRLogin(e) {
    e.preventDefault();
    const username = document.getElementById('hrUsername').value;
    const password = document.getElementById('hrPassword').value;

    if (username === HR_CREDENTIALS.username && password === HR_CREDENTIALS.password) {
        isHRLoggedIn = true;
        showHRAdmin();
        showAlert('Welcome to HR Admin Panel', 'success');
    } else {
        document.getElementById('hrLoginError').classList.remove('hidden');
    }
}

function logoutHR() {
    isHRLoggedIn = false;
    document.getElementById('hrUsername').value = '';
    document.getElementById('hrPassword').value = '';
    document.getElementById('hrLoginError').classList.add('hidden');
    showMainSystem();
}

function showHRTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');

    if (tabId === 'review-overview') {
        loadReviewsTable();
    } else if (tabId === 'task-assignment') {
        loadTasksTable();
    }
}

function handleRoleChange() {
    const newRole = roleEl.value;

    if ((newRole === 'hod' || newRole === 'hr') && currentAuthenticatedRole !== newRole) {
        pendingRoleChange = newRole;
        document.getElementById('roleAuthPrompt').classList.remove('hidden');
        document.getElementById('rolePassword').value = '';
        document.getElementById('roleAuthError').style.display = 'none';
        return;
    }

    currentAuthenticatedRole = newRole;
    applyRole();
    renderDashboard();
}

function verifyRoleAccess() {
    const password = document.getElementById('rolePassword').value;
    const targetRole = pendingRoleChange;

    if (ROLE_PASSWORDS[targetRole] && password === ROLE_PASSWORDS[targetRole]) {
        currentAuthenticatedRole = targetRole;
        document.getElementById('roleAuthPrompt').classList.add('hidden');
        document.getElementById('rolePassword').value = '';
        document.getElementById('roleAuthError').style.display = 'none';
        pendingRoleChange = null;
        applyRole();
        renderDashboard();
        updateStatus(`Access granted: ${targetRole.toUpperCase()} role activated`);
    } else {
        document.getElementById('roleAuthError').style.display = 'block';
    }
}

function cancelRoleChange() {
    roleEl.value = currentAuthenticatedRole;
    document.getElementById('roleAuthPrompt').classList.add('hidden');
    document.getElementById('rolePassword').value = '';
    document.getElementById('roleAuthError').style.display = 'none';
    pendingRoleChange = null;
}

function loadDepartmentData(department) {
    const defaultData = departmentData[department] || departmentData.DEFAULT;
    let objectives = [...(defaultData.objectives || [])];
    let kpas = [...(defaultData.kpas || [])];

    if (customKPAs[department]) {
        const customKPATitles = customKPAs[department].map(kpa => kpa.title);
        kpas = [...kpas, ...customKPATitles];
    }

    const deptTasks = assignedTasks.filter(task =>
        task.department === department &&
        task.type === 'objective' &&
        task.status === 'assigned'
    );

    if (deptTasks.length > 0) {
        const taskObjectives = deptTasks.map(task => task.title);
        objectives = [...objectives, ...taskObjectives];
    }

    return {
        objectives,
        kpas
    };
}

function renderObjectives() {
    const dept = deptSel.value || 'DEFAULT';
    const deptData = loadDepartmentData(dept);
    const objectives = deptData.objectives;

    let html = `<table id="objTable" class="table"><thead><tr>
<th>Targets / Objectives</th>
<th>Time Frame (Period)</th>
<th class="col-staff">Self Rating</th>
<th class="col-peer">Peer Rating</th>
<th class="col-hod">HOD Rating</th>
<th class="col-staff">Staff Comment</th>
<th class="col-hod">HOD Comment</th>
</tr></thead><tbody>`;

    objectives.forEach((o, i) => {
        html += `<tr data-idx="${i}">
  <td class="obj-text">${escapeHtml(o)}</td>
  <td><input type="text" class="obj-period form-control" data-idx="${i}" placeholder="e.g. Jan - Mar 2025"></td>
  <td class="col-staff"><input type="number" min="1" max="5" class="obj-self form-control" data-idx="${i}"></td>
  <td class="col-peer"><input type="number" min="1" max="5" class="obj-peer form-control" data-idx="${i}"></td>
  <td class="col-hod"><input type="number" min="1" max="5" class="obj-hod form-control" data-idx="${i}"></td>
  <td class="col-staff"><textarea class="obj-staffComment form-control" data-idx="${i}"></textarea></td>
  <td class="col-hod"><textarea class="obj-hodComment form-control" data-idx="${i}"></textarea></td>
</tr>`;
    });
    html += `</tbody></table>`;
    objectivesArea.innerHTML = html;
    applyRole();

    if (currentReviewId) fillObjectivesFromReview();
}

function checkHRTaskNotifications() {
    const currentDept = deptSel.value;
    const currentEmail = EmailEl.value;
    const currentJobTitle = jobTitleEl.value;

    if (!currentDept) return;

    const relevantTasks = assignedTasks.filter(task => {
        // Check if task matches current user's department
        if (task.department !== currentDept) return false;

        // Check if task is still active
        if (task.status !== 'assigned') return false;
        if (new Date(task.deadline) < new Date()) return false;

        // Check if task is assigned to current user as staff OR peer
        const isStaffAssignment = task.staffEmail === currentEmail;
        const isPeerAssignment = task.peerEmail === currentEmail;

        return isStaffAssignment || isPeerAssignment;
    });

    const notificationBanner = document.getElementById('notificationBanner');
    const notificationContent = document.getElementById('notificationContent');

    if (relevantTasks.length > 0) {
        const taskList = relevantTasks.map(task => {
            const role = task.staffEmail === currentEmail ? 'Self-Assessment' : 'Peer Assessment';
            return `• ${task.title} - ${role} - Due: ${task.deadline}`;
        }).join('<br>');

        notificationContent.innerHTML = taskList;
        notificationBanner.classList.add('show');
    } else {
        notificationBanner.classList.remove('show');
    }
}

function applyHRSystemSettings() {
    if (systemSettings.defaultPeriodFrom && !periodFromEl.value) {
        periodFromEl.value = systemSettings.defaultPeriodFrom;
    }
    if (systemSettings.defaultPeriodTo && !periodToEl.value) {
        periodToEl.value = systemSettings.defaultPeriodTo;
    }

    if (systemSettings.reviewDeadline) {
        const deadline = new Date(systemSettings.reviewDeadline);
        const now = new Date();
        const daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));

        if (daysLeft <= 7 && daysLeft > 0) {
            updateStatus(`Warning: Review deadline in ${daysLeft} days (${systemSettings.reviewDeadline})`);
        } else if (daysLeft <= 0) {
            updateStatus(`Alert: Review deadline has passed (${systemSettings.reviewDeadline})`);
        }
    }
}

function applyRole() {
    const role = roleEl.value;

    const staffCols = document.querySelectorAll('.col-staff');
    const peerCols = document.querySelectorAll('.col-peer');
    const hodCols = document.querySelectorAll('.col-hod');
    const hodNotificationBanner = document.getElementById('hodNotificationBanner');
    if (role === 'hod') {
        checkHODNotifications();
    } else {
        hodNotificationBanner.style.display = 'none';
    }
    staffCols.forEach(e => e.classList.add('hidden'));
    peerCols.forEach(e => e.classList.add('hidden'));
    hodCols.forEach(e => e.classList.add('hidden'));

    if (role === 'staff') {
        staffCols.forEach(e => e.classList.remove('hidden'));
    } else if (role === 'peer') {
        peerCols.forEach(e => e.classList.remove('hidden'));
    } else if (role === 'hod') {
        staffCols.forEach(e => e.classList.remove('hidden'));
        peerCols.forEach(e => e.classList.remove('hidden'));
        hodCols.forEach(e => e.classList.remove('hidden'));
    } else if (role === 'hr') {
        staffCols.forEach(e => e.classList.remove('hidden'));
        peerCols.forEach(e => e.classList.remove('hidden'));
        hodCols.forEach(e => e.classList.remove('hidden'));
    }

    if (role === 'hr') {
        document.querySelectorAll('input, textarea, select, button').forEach(el => {
            if (el.id === 'role' || el.id === 'filterDept' || el.id === 'newBtn' ||
                el.id === 'loadBtn' || el.id === 'findEmail' || el.id === 'hrAdminBtn' ||
                el.id === 'rolePassword') return;
            el.disabled = true;
        });
    } else {
        document.querySelectorAll('input, textarea, select, button').forEach(el => {
            el.disabled = false;
        });

        if (systemSettings.allowSelfRating === false && role === 'staff') {
            document.querySelectorAll('.col-staff input, .col-staff textarea').forEach(el => {
                el.disabled = true;
            });
        }
    }

    if (role === 'hod' || role === 'hr') {
        dashboard.style.display = 'block';
    } else {
        dashboard.style.display = 'none';
    }

}

function saveReview() {
    const role = roleEl.value;
    const EmailVal = (EmailEl.value || '').trim();
    const staffNameVal = (staffNameEl.value || '').trim();

    if (!EmailVal || !staffNameVal) {
        if (!confirm('Staff Name or Email. missing. Continue saving?')) return;
    }

    let review = null;
    if (currentReviewId) {
        review = reviews.find(r => r.id === currentReviewId) || null;
    }

    if (!review) {
        review = {
            id: 'R' + Date.now(),
            staffName: staffNameVal || '',
            Email: EmailVal || '',
            jobTitle: jobTitleEl.value || '',
            department: deptSel.value || '',
            periodFrom: periodFromEl.value || '',
            periodTo: periodToEl.value || '',
            objectives: [],
            training: [],
            suggestions: '',
            signatures: {
                staff: null,
                peer: null,
                hod: null
            },
            status: 'Draft',
            lastUpdated: new Date().toISOString()
        };
        reviews.push(review);
        currentReviewId = review.id;
    }

    if (role === 'staff' || role === 'hod') {
        review.staffName = staffNameEl.value;
        review.Email = EmailEl.value;
        review.jobTitle = jobTitleEl.value;
        review.department = deptSel.value;
        review.periodFrom = periodFromEl.value;
        review.periodTo = periodToEl.value;
    }

    const objRows = document.querySelectorAll('#objTable tbody tr');
    if (objRows.length) {
        review.objectives = review.objectives || [];
        for (let i = 0; i < objRows.length; i++) {
            const row = objRows[i];
            const text = row.querySelector('.obj-text') ? row.querySelector('.obj-text').textContent.trim() : '';
            const periodVal = row.querySelector('.obj-period') ? row.querySelector('.obj-period').value : '';
            const selfVal = row.querySelector('.obj-self') ? row.querySelector('.obj-self').value : '';
            const peerVal = row.querySelector('.obj-peer') ? row.querySelector('.obj-peer').value : '';
            const hodVal = row.querySelector('.obj-hod') ? row.querySelector('.obj-hod').value : '';
            const staffComment = row.querySelector('.obj-staffComment') ? row.querySelector('.obj-staffComment').value : '';
            const hodComment = row.querySelector('.obj-hodComment') ? row.querySelector('.obj-hodComment').value : '';

            review.objectives[i] = review.objectives[i] || {
                text
            };
            review.objectives[i].text = text || review.objectives[i].text || '';

            if (role === 'staff' || role === 'hod') review.objectives[i].period = periodVal;
            if (role === 'staff') {
                review.objectives[i].selfRating = selfVal;
                review.objectives[i].staffComment = staffComment;
            }
            if (role === 'peer') {
                review.objectives[i].peerRating = peerVal;
            }
            if (role === 'hod') {
                review.objectives[i].hodRating = hodVal;
                review.objectives[i].hodComment = hodComment;
            }
        }
    }

    const tnNeeds = document.querySelectorAll('.tn-need');
    const tnActivities = document.querySelectorAll('.tn-activity');
    const trainingArr = [];
    for (let i = 0; i < tnNeeds.length; i++) {
        trainingArr.push({
            need: tnNeeds[i].value || '',
            activity: (tnActivities[i] ? tnActivities[i].value : '') || ''
        });
    }
    if (role === 'staff' || role === 'hod') review.training = trainingArr;

    if (role === 'staff' || role === 'hod') review.suggestions = suggestionsText.value || '';

    if (role === 'staff' && !sigStaffPad.isEmpty()) {
        review.signatures.staff = sigStaffPad.toDataURL();
    } else if (role === 'peer' && !sigPeerPad.isEmpty()) {
        review.signatures.peer = sigPeerPad.toDataURL();
    } else if (role === 'hod' && !sigHodPad.isEmpty()) {
        review.signatures.hod = sigHodPad.toDataURL();
    }

    review.lastUpdated = new Date().toISOString();
    if (review.status === 'Draft' && role === 'staff') review.status = 'Pending Peer';
    if (review.status === 'Pending Peer' && role === 'peer') review.status = 'Pending HOD';

    saveToStorage();
    updateStatus(`Saved (${role}). Review ID: ${currentReviewId}`);
    renderDashboard();
}

function submitToHod() {
    if (!currentReviewId) {
        alert('Open or Save a review first.');
        return;
    }
    const review = reviews.find(r => r.id === currentReviewId);
    if (!review) {
        alert('No review found');
        return;
    }

    const role = roleEl.value;
    if (role === 'staff') {
        review.status = 'Pending Peer';

        // Send email notification to HOD when staff submits self-assessment
        sendStaffToHODNotification(review);
    } else if (role === 'peer') {
        review.status = 'Pending HOD';

        // Send email notification to HOD when peer submits
        sendPeerToHODNotification(review);
    } else if (role === 'hod') {
        review.status = 'Pending HOD';
    }

    review.lastUpdated = new Date().toISOString();
    saveToStorage();
    renderDashboard();

    if (role === 'staff') {
        updateStatus('Self-assessment submitted – HOD has been notified via email.');
    } else if (role === 'peer') {
        updateStatus('Peer assessment submitted – HOD has been notified via email.');
    } else {
        updateStatus('Submitted – HOD will be notified.');
    }

    clearFormAfterSubmit();
}

// Function to send email notification to HOD when Staff submits
function sendStaffToHODNotification(review) {
    const hodEmail = getHODEmail(review.department);
    const subject = `Staff Self-Assessment Submitted - ${review.staffName}`;
    const reviewLink = generateReviewLink(review.id);

    const body = `
Dear HOD,

A staff member has completed their self-assessment and it's ready for your review:

STAFF: ${review.staffName}
STAFF EMAIL: ${review.staffEmail || review.Email}
DEPARTMENT: ${review.department}
JOB TITLE: ${review.jobTitle}
REVIEW PERIOD: ${review.periodFrom} to ${review.periodTo}
SUBMITTED BY: Staff (Self-Assessment)
SUBMISSION DATE: ${new Date().toLocaleDateString()}
STATUS: Awaiting Peer Review

The staff has completed their self-assessment portion. The review is now:
✅ Staff Self-Assessment Completed
⏳ Awaiting Peer Assessment
⏳ Awaiting HOD Assessment

Click the link below to preview the staff's self-assessment:
${reviewLink}

The review will proceed to peer assessment before coming to you for final review.

Best regards,
G.M.C Performance Management System
`.trim();

    const mailtoLink = `mailto:${hodEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    // Store notification for HOD
    storeHODNotification(review, 'Staff');
}

// Function to send email notification to HOD when Peer submits
function sendPeerToHODNotification(review) {
    const hodEmail = getHODEmail(review.department);
    const subject = `Peer Assessment Completed - ${review.staffName}`;
    const reviewLink = generateReviewLink(review.id);

    const body = `
Dear HOD,

A peer assessment has been completed and the review is ready for your final assessment:

STAFF: ${review.staffName}
STAFF EMAIL: ${review.staffEmail || review.Email}
${review.peerEmail ? `PEER EMAIL: ${review.peerEmail}` : ''}
DEPARTMENT: ${review.department}
JOB TITLE: ${review.jobTitle}
REVIEW PERIOD: ${review.periodFrom} to ${review.periodTo}
SUBMITTED BY: Peer Reviewer
SUBMISSION DATE: ${new Date().toLocaleDateString()}
STATUS: Ready for HOD Assessment

The performance review process is now complete and awaiting your:
✅ Staff Self-Assessment Completed
✅ Peer Assessment Completed
⏳ Awaiting HOD Final Assessment

Click the link below to access the review and provide your final assessment:
${reviewLink}

Please log in to the Performance Management System with your HOD credentials to complete your part.

Best regards,
G.M.C Performance Management System
`.trim();

const mailtoLink = `mailto:${hodEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.open(mailtoLink, '_blank');

// Store notification for HOD
storeHODNotification(review, 'Peer');
}
// Function to send email notification to HOD when Peer submits
function sendPeerToHODNotification(review) {
const subject = `Peer Assessment Completed - ${review.staffName}`;
const reviewLink = generateReviewLink(review.id);

const body = `
Dear HOD,

A peer assessment has been completed and the review is ready for your final assessment:

STAFF: ${review.staffName}
STAFF EMAIL: ${review.staffEmail || review.Email}
${review.peerEmail ? `PEER EMAIL: ${review.peerEmail}` : ''}
DEPARTMENT: ${review.department}
JOB TITLE: ${review.jobTitle}
REVIEW PERIOD: ${review.periodFrom} to ${review.periodTo}
SUBMITTED BY: Peer Reviewer
SUBMISSION DATE: ${new Date().toLocaleDateString()}
STATUS: Ready for HOD Assessment

The performance review process is now complete and awaiting your:
✅ Staff Self-Assessment Completed
✅ Peer Assessment Completed
⏳ Awaiting HOD Final Assessment

Click the link below to access the review and provide your final assessment:
${reviewLink}

Please log in to the Performance Management System with your HOD credentials to complete your part.

Best regards,
G.M.C Performance Management System
`.trim();

const mailtoLink = `mailto:hod@yourcompany.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.open(mailtoLink, '_blank');

// Store notification for HOD
storeHODNotification(review, 'Peer');
}

// Function to send email notification to HOD
function sendHODNotification(review) {
const subject = `Performance Review Ready for HOD Assessment - ${review.staffName}`;
const reviewLink = generateReviewLink(review.id);

const body = `
Dear HOD,

A performance review has been submitted and is ready for your assessment:

STAFF: ${review.staffName}
EMAIL: ${review.Email}
DEPARTMENT: ${review.department}
JOB TITLE: ${review.jobTitle}
REVIEW PERIOD: ${review.periodFrom} to ${review.periodFrom}
SUBMITTED BY: Peer Reviewer
SUBMISSION DATE: ${new Date().toLocaleDateString()}

The peer review has been completed and the review is now awaiting your:
1. HOD Ratings and Comments
2. Final Assessment
3. Mark as Completed

Click the link below to access the review directly:
${reviewLink}

Please log in to the Performance Management System with your HOD credentials to complete your part of the review.

Best regards,
G.M.C Performance Management System
`.trim();

// For now, we'll use mailto: - you can replace this with EmailJS or other service later
const mailtoLink = `mailto:hod@yourcompany.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// Open email client (in real implementation, this would be automated)
window.open(mailtoLink, '_blank');

// Also store notification for HOD to see in the system
storeHODNotification(review);
}

// Generate direct link to the review
function generateReviewLink(reviewId) {
const baseUrl = window.location.href.split('?')[0];
return `${baseUrl}#review-${reviewId}`;
}

// Store HOD notification in system
// Store HOD notification in system for both Staff and Peer submissions
function storeHODNotification(review, submittedBy) {
const notifications = JSON.parse(localStorage.getItem('HOD_NOTIFICATIONS') || '[]');
notifications.push({
id: Date.now(),
reviewId: review.id,
staffName: review.staffName,
staffEmail: review.staffEmail || review.Email,
department: review.department,
submittedBy: submittedBy,
timestamp: new Date().toISOString(),
read: false,
status: submittedBy === 'Staff' ? 'Awaiting Peer Review' : 'Ready for HOD Assessment'
});
localStorage.setItem('HOD_NOTIFICATIONS', JSON.stringify(notifications));
}
function markCompleted() {
if (!currentReviewId) { 
alert('Open a review first.'); 
return; 
}
const review = reviews.find(r => r.id === currentReviewId);
if (!review) { 
alert('No review found'); 
return; 
}

if (currentAuthenticatedRole !== 'hod') { 
alert('Only HOD can mark reviews as completed. Please authenticate as HOD first.'); 
return; 
}

// Show completion confirmation dialog
if (!confirm('Mark this review as completed? This will:\n• Finalize all ratings\n• Lock the review from further edits\n• Send completion notification to HR')) {
return;
}

review.status = 'Completed';
review.lastUpdated = new Date().toISOString();
review.completedBy = 'HOD';
review.completionDate = new Date().toISOString();
review.hodEmail = getHODEmail(review.department); // Store which HOD completed it

// Calculate final scores
calculateFinalScores(review);

saveToStorage();
renderDashboard();
updateStatus('Review marked Completed. HR has been notified.');

// Send completion notifications
sendHRCompletionNotification(review);
sendStaffCompletionNotification(review);

clearFormAfterSubmit();
}

// Function to calculate final scores for the review
function calculateFinalScores(review) {
let sectionATotal = 0;
let sectionBTotal = 0;
let sectionACount = 0;
let sectionBCount = 0;

// Calculate Section A scores (HOD ratings)
if (review.objectives && review.objectives.length > 0) {
review.objectives.forEach(obj => {
if (obj.hodRating && !isNaN(parseFloat(obj.hodRating))) {
sectionATotal += parseFloat(obj.hodRating);
sectionACount++;
}
});
}

// Calculate Section B scores (HOD ratings in detailed areas)
if (review.detailed && review.detailed.length > 0) {
review.detailed.forEach(item => {
if (item.hodRating && !isNaN(parseFloat(item.hodRating))) {
sectionBTotal += parseFloat(item.hodRating);
sectionBCount++;
}
});
}

// Calculate averages (60% for Section A, 40% for Section B)
const sectionAAverage = sectionACount > 0 ? sectionATotal / sectionACount : 0;
const sectionBAverage = sectionBCount > 0 ? sectionBTotal / sectionBCount : 0;

const finalScore = (sectionAAverage * 0.6) + (sectionBAverage * 0.4);

review.scores = {
sectionA: {
average: Math.round(sectionAAverage * 100) / 100,
totalItems: sectionACount
},
sectionB: {
average: Math.round(sectionBAverage * 100) / 100,
totalItems: sectionBCount
},
finalScore: Math.round(finalScore * 100) / 100,
calculatedAt: new Date().toISOString()
};

return review.scores;
}

// Enhanced function to notify HR when HOD marks review as completed
function sendHRCompletionNotification(review) {
if (!HR_CONFIG.notifyHROnCompletion) {
console.log('HR notifications disabled');
return;
}

const scores = review.scores || calculateFinalScores(review);
const subject = `✅ PERFORMANCE REVIEW COMPLETED - ${review.staffName} - ${review.department}`;

const body = `
🏢 PERFORMANCE REVIEW COMPLETION NOTIFICATION

Dear HR Team,

A performance review has been completed and finalized by the HOD. Below are the complete details:

📋 REVIEW SUMMARY:
• Staff Name: ${review.staffName}
• Staff Email: ${review.Email}
• Department: ${review.department}
• Job Title: ${review.jobTitle}
• Review Period: ${review.periodFrom} to ${review.periodTo}
• Completed By: HOD (${review.hodEmail || getHODEmail(review.department)})
• Completion Date: ${new Date().toLocaleDateString()}
• Final Status: ✅ COMPLETED

📊 PERFORMANCE SCORES:
• Section A Average (60% weight): ${scores.sectionA.average}/5
• Section B Average (40% weight): ${scores.sectionB.average}/5
• FINAL OVERALL SCORE: ${scores.finalScore}/5

👥 REVIEW PARTICIPATION:
${getReviewParticipationSummary(review)}

📝 KEY ASSESSMENT HIGHLIGHTS:
${getAssessmentHighlights(review)}

🏁 NEXT STEPS REQUIRED:
1. HR to archive this completed review
2. Update employee performance records
3. Schedule feedback session if needed
4. Process any training requirements identified

Best regards,
G.M.C Performance Management System
Automated Completion Notification
`.trim();

const hrEmail = HR_CONFIG.hrEmail || 'hr.department@company.com';
const mailtoLink = `mailto:${hrEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// Open email client for HR notification
setTimeout(() => {
window.open(mailtoLink, '_blank');
}, 1000);

// Also store HR notification in system
storeHRNotification(review);
}

// Function to get review participation summary
function getReviewParticipationSummary(review) {
let summary = [];

// Check staff participation
const staffCompleted = review.signatures && review.signatures.staff ? '✅ Completed' : '❌ Not Completed';
summary.push(`• Staff Self-Assessment: ${staffCompleted}`);

// Check peer participation
const peerCompleted = review.signatures && review.signatures.peer ? '✅ Completed' : '❌ Not Completed';
summary.push(`• Peer Assessment: ${peerCompleted}`);

// Check HOD participation
const hodCompleted = review.signatures && review.signatures.hod ? '✅ Completed' : '❌ Not Completed';
summary.push(`• HOD Assessment: ${hodCompleted}`);

return summary.join('\n');
}

// Function to get assessment highlights
function getAssessmentHighlights(review) {
let highlights = [];

// Get top objectives
if (review.objectives && review.objectives.length > 0) {
const topObjectives = review.objectives
.filter(obj => obj.hodRating && obj.hodRating >= 4)
.slice(0, 3);

if (topObjectives.length > 0) {
highlights.push('🎯 TOP PERFORMING OBJECTIVES:');
topObjectives.forEach(obj => {
highlights.push(`• ${obj.text} (Rating: ${obj.hodRating}/5)`);
});
}
}

// Get training needs
if (review.training && review.training.length > 0) {
const trainingNeeds = review.training.filter(t => t.need && t.need.trim() !== '');
if (trainingNeeds.length > 0) {
highlights.push('\n📚 IDENTIFIED TRAINING NEEDS:');
trainingNeeds.forEach((t, index) => {
if (index < 3) { // Limit to top 3
  highlights.push(`• ${t.need} → ${t.activity || 'No activity specified'}`);
}
});
}
}

// Get staff suggestions
if (review.suggestions && review.suggestions.trim() !== '') {
highlights.push('\n💡 STAFF SUGGESTIONS:');
highlights.push(review.suggestions.substring(0, 200) + (review.suggestions.length > 200 ? '...' : ''));
}

return highlights.length > 0 ? highlights.join('\n') : 'No specific highlights captured.';
}

// Store HR notification in system
function storeHRNotification(review) {
const notifications = JSON.parse(localStorage.getItem('HR_NOTIFICATIONS') || '[]');
notifications.push({
id: Date.now(),
reviewId: review.id,
staffName: review.staffName,
staffEmail: review.Email,
department: review.department,
hodEmail: review.hodEmail || getHODEmail(review.department),
completionDate: new Date().toISOString(),
finalScore: review.scores ? review.scores.finalScore : 'N/A',
read: false,
type: 'review_completed'
});

// Keep only last 100 notifications
const recentNotifications = notifications.slice(-100);
localStorage.setItem('HR_NOTIFICATIONS', JSON.stringify(recentNotifications));
}

function clearFormAfterSubmit() {
currentReviewId = null;
staffNameEl.value = '';
EmailEl.value = '';
deptSel.value = '';
jobTitleEl.innerHTML = '<option value="">-- Select Job Title --</option>';
periodFromEl.value = '';
periodToEl.value = '';
suggestionsText.value = '';
renderObjectives(); 
trainingBody.innerHTML = `<tr><td><textarea class="tn-need form-control"></textarea></td><td><textarea class="tn-activity form-control"></textarea></td></tr>`;
sigStaffPad.clear(); 
sigPeerPad.clear(); 
sigHodPad.clear();
updateStatus('Form cleared. Review has been submitted/completed and saved.');
}

function deleteCurrent() {
if (!currentReviewId) { 
alert('Open a review first.'); 
return; 
}
if (!confirm('Delete this review permanently from local storage?')) return;
reviews = reviews.filter(r => r.id !== currentReviewId);
currentReviewId = null;
saveToStorage();
renderDashboard();
newReview();
updateStatus('Deleted.');
}

function newReview() {
currentReviewId = null;
staffNameEl.value = '';
EmailEl.value = '';
deptSel.value = '';
jobTitleEl.innerHTML = '<option value="">-- Select Job Title --</option>';
periodFromEl.value = '';
periodToEl.value = '';
suggestionsText.value = '';
renderObjectives(); 
trainingBody.innerHTML = `<tr><td><textarea class="tn-need form-control"></textarea></td><td><textarea class="tn-activity form-control"></textarea></td></tr>`;
sigStaffPad.clear(); 
sigPeerPad.clear(); 
sigHodPad.clear();
updateStatus('New empty review. Fill and Save as Draft.');
}

function findByEmail() {
const id = (findEmail.value || '').trim();
if (!id) { 
alert('Enter Email. to find'); 
return; 
}
const found = reviews.find(r => r.Email === id);
if (!found) { 
alert('No review found for that Email. in local storage.'); 
return; 
}
loadReview(found.id);
updateStatus(`Loaded review for ${found.staffName} (${found.Email}).`);
}

function addTrainingRow() {
const tr = document.createElement('tr');
tr.innerHTML = `<td><textarea class="tn-need form-control"></textarea></td><td><textarea class="tn-activity form-control"></textarea></td>`;
trainingBody.appendChild(tr);
}

function renderDashboard() {
const role = roleEl.value;
if (role !== 'hod' && role !== 'hr') { 
dashboard.style.display = 'none'; 
return; 
}
dashboard.style.display = 'block';
dashboardBody.innerHTML = '';
const filter = filterDept.value || 'ALL';
const rows = reviews.filter(r => (filter === 'ALL' ? true : (r.department === filter)));

if (rows.length === 0) {
dashboardBody.innerHTML = `<tr><td colspan="6" class="small-note">No reviews found for selected filter.</td></tr>`;
return;
}

dashboardBody.innerHTML = rows.map(r => {
const last = r.lastUpdated ? new Date(r.lastUpdated).toLocaleString() : '-';
const statusBadge = {
  'Draft': 'badge-warning',
  'Pending Peer': 'badge-primary',
  'Pending HOD': 'badge-primary',
  'Completed': 'badge-success'
}[r.status] || 'badge-primary';

return `<tr>
  <td>${escapeHtml(r.staffName)}</td>
  <td>${escapeHtml(r.Email || '')}</td>
  <td>${escapeHtml(r.department || '')}</td>
  <td><span class="badge ${statusBadge}">${escapeHtml(r.status || '')}</span></td>
  <td>${last}</td>
  <td>
    <button class="btn btn-ghost btn-sm" onclick="openReview('${r.id}')">Open</button>
    <button class="btn btn-ghost btn-sm" onclick="exportPDF('${r.id}')">Export PDF</button>
    <button class="btn btn-danger btn-sm" onclick="deleteReview('${r.id}')">Delete</button>
  </td>
</tr>`;
}).join('');
}

function loadReview(id) {
const r = reviews.find(x => x.id === id);
if (!r) { 
alert('Review not found'); 
return; 
}
currentReviewId = id;

staffNameEl.value = r.staffName || '';
EmailEl.value = r.Email || '';
deptSel.value = r.department || '';
if (currentAuthenticatedRole === 'hod') {
markNotificationAsRead(id);
updateJobTitles();
}
jobTitleEl.value = r.jobTitle || '';
periodFromEl.value = r.periodFrom || '';
periodToEl.value = r.periodTo || '';

renderObjectives(); 

trainingBody.innerHTML = '';
if (r.training && r.training.length) {
r.training.forEach(t => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td><textarea class="tn-need form-control">${escapeHtmlAttr(t.need || '')}</textarea></td><td><textarea class="tn-activity form-control">${escapeHtmlAttr(t.activity || '')}</textarea></td>`;
  trainingBody.appendChild(tr);
});
} else {
trainingBody.innerHTML = `<tr><td><textarea class="tn-need form-control"></textarea></td><td><textarea class="tn-activity form-control"></textarea></td></tr>`;
}

suggestionsText.value = r.suggestions || '';

function loadSigToPad(dataUrl, pad, canvas) {
pad.clear();
if (dataUrl) {
  const img = new Image();
  img.onload = () => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = dataUrl;
}
}

loadSigToPad(r.signatures && r.signatures.staff, sigStaffPad, document.getElementById('sigStaff'));
loadSigToPad(r.signatures && r.signatures.peer, sigPeerPad, document.getElementById('sigPeer'));
loadSigToPad(r.signatures && r.signatures.hod, sigHodPad, document.getElementById('sigHod'));

fillObjectivesFromReview();

updateStatus(`Loaded review ${r.staffName} (${r.Email}). Status: ${r.status || 'Draft'}`);
renderDashboard();
}

function fillObjectivesFromReview() {
if (!currentReviewId) return;
const r = reviews.find(x => x.id === currentReviewId);
if (!r || !r.objectives) return;

const rows = document.querySelectorAll('#objTable tbody tr');
rows.forEach((tr, i) => {
const obj = r.objectives[i] || {};
const periodEl = tr.querySelector('.obj-period');
const selfEl = tr.querySelector('.obj-self');
const peerEl = tr.querySelector('.obj-peer');
const hodEl = tr.querySelector('.obj-hod');
const staffCommentEl = tr.querySelector('.obj-staffComment');
const hodCommentEl = tr.querySelector('.obj-hodComment');

if (periodEl) periodEl.value = obj.period || '';
if (selfEl) selfEl.value = obj.selfRating || '';
if (peerEl) peerEl.value = obj.peerRating || '';
if (hodEl) hodEl.value = obj.hodRating || '';
if (staffCommentEl) staffCommentEl.value = obj.staffComment || '';
if (hodCommentEl) hodCommentEl.value = obj.hodComment || '';
});
}

function loadHRInitialData() {
loadTasksTable();
loadReviewsTable();

if (systemSettings.defaultPeriodFrom) {
document.getElementById('defaultPeriodFrom').value = systemSettings.defaultPeriodFrom;
}
if (systemSettings.defaultPeriodTo) {
document.getElementById('defaultPeriodTo').value = systemSettings.defaultPeriodTo;
}
if (systemSettings.reviewDeadline) {
document.getElementById('reviewDeadline').value = systemSettings.reviewDeadline;
}
document.getElementById('emailNotifications').checked = systemSettings.emailNotifications || false;
document.getElementById('allowSelfRating').checked = systemSettings.allowSelfRating !== false;
}

function loadDepartmentKPAs() {
const department = document.getElementById('kpaDepartment').value;
const kpaList = document.getElementById('kpaList');

if (!department) {
kpaList.innerHTML = '<p class="small-note">Select a department to view and manage KPAs</p>';
return;
}

const deptKPAs = customKPAs[department] || [];
let html = '';

if (deptKPAs.length === 0) {
html = '<p class="small-note">No custom KPAs defined for this department. Add some using the form above.</p>';
} else {
deptKPAs.forEach((kpa, index) => {
  html += `
    <div class="kpa-item">
      <div class="flex flex-between">
        <strong>${escapeHtml(kpa.title)}</strong>
        <div>
          <button class="btn btn-ghost btn-sm" onclick="editKPA('${department}', ${index})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteKPA('${department}', ${index})">Delete</button>
        </div>
      </div>
      ${kpa.description ? `<p class="small-note">${escapeHtml(kpa.description)}</p>` : ''}
      ${kpa.bullets && kpa.bullets.length ? `
        <ul class="kpa-bullets">
          ${kpa.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `;
});
}

kpaList.innerHTML = html;
}

function showAddKPAForm() {
const department = document.getElementById('kpaDepartment').value;
if (!department) {
showAlert('Please select a department first', 'warning');
return;
}

document.getElementById('kpaFormCard').classList.remove('hidden');
document.getElementById('kpaFormTitle').textContent = 'Add New KPA';
document.getElementById('kpaForm').reset();
currentEditingKPA = null;
}

function hideKPAForm() {
document.getElementById('kpaFormCard').classList.add('hidden');
document.getElementById('kpaForm').reset();
currentEditingKPA = null;
}

function editKPA(department, index) {
const kpa = customKPAs[department][index];
document.getElementById('kpaFormCard').classList.remove('hidden');
document.getElementById('kpaFormTitle').textContent = 'Edit KPA';
document.getElementById('kpaTitle').value = kpa.title;
document.getElementById('kpaDescription').value = kpa.description || '';
document.getElementById('kpaBullets').value = (kpa.bullets || []).join('\n');

currentEditingKPA = { department, index };
}

function deleteKPA(department, index) {
if (!confirm('Are you sure you want to delete this KPA?')) return;

customKPAs[department].splice(index, 1);
if (customKPAs[department].length === 0) {
delete customKPAs[department];
}

saveKPAs();
loadDepartmentKPAs();
showAlert('KPA deleted successfully', 'success');
}

function handleKPASubmit(e) {
e.preventDefault();
const department = document.getElementById('kpaDepartment').value;
const title = document.getElementById('kpaTitle').value.trim();
const description = document.getElementById('kpaDescription').value.trim();
const bullets = document.getElementById('kpaBullets').value
.split('\n')
.map(b => b.trim())
.filter(b => b.length > 0);

const kpaData = { title, description, bullets };

if (!customKPAs[department]) {
customKPAs[department] = [];
}

if (currentEditingKPA) {
customKPAs[department][currentEditingKPA.index] = kpaData;
showAlert('KPA updated successfully', 'success');
} else {
customKPAs[department].push(kpaData);
showAlert('KPA added successfully', 'success');
}

saveKPAs();
loadDepartmentKPAs();
hideKPAForm();
}

function saveKPAs() {
try {
localStorage.setItem(STORAGE_KEYS.kpas, JSON.stringify(customKPAs));
} catch (e) {
console.error('Error saving KPAs:', e);
showAlert('Error saving KPAs', 'danger');
}
}

function loadTasksTable() {
const tbody = document.getElementById('tasksTableBody');
if (assignedTasks.length === 0) {
tbody.innerHTML = '<tr><td colspan="10" class="small-note">No tasks assigned yet</td></tr>';
return;
}

tbody.innerHTML = assignedTasks.map(task => {
const priorityBadge = {
low: 'badge-primary',
medium: 'badge-warning', 
high: 'badge-danger',
urgent: 'badge-danger'
}[task.priority];

return `
<tr>
<td>${escapeHtml(task.title)}</td>
<td>${escapeHtml(task.department)}</td>
<td>${escapeHtml(task.jobTitle || 'Any')}</td>
<td>${escapeHtml(task.staffEmail)}</td>
<td>${escapeHtml(task.peerEmail || 'Not assigned')}</td>
<td>${escapeHtml(task.type)}</td>
<td><span class="badge ${priorityBadge}">${task.priority.toUpperCase()}</span></td>
<td>${task.deadline}</td>
<td><span class="badge badge-primary">${task.status.toUpperCase()}</span></td>
<td>
  <button class="btn btn-ghost btn-sm" onclick="resendTaskEmails(${task.id})" title="Resend emails">↻</button>
  <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Delete</button>
</td>
</tr>
`;
}).join('');
}

// Function to resend emails
function resendTaskEmails(taskId) {
const task = assignedTasks.find(t => t.id === taskId);
if (task) {
sendTaskEmails(task);
showAlert('Emails resent to both staff and peer', 'success');
}
}

function deleteTask(taskId) {
if (!confirm('Are you sure you want to delete this task?')) return;

assignedTasks = assignedTasks.filter(task => task.id !== taskId);
saveTasks();
loadTasksTable();
showAlert('Task deleted successfully', 'success');
}

function saveTasks() {
try {
localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(assignedTasks));
} catch (e) {
console.error('Error saving tasks:', e);
showAlert('Error saving tasks', 'danger');
}
}

function loadReviewsTable() {
try {
const tbody = document.getElementById('reviewsTableBody');

if (reviews.length === 0) {
  tbody.innerHTML = '<tr><td colspan="6" class="small-note">No reviews found</td></tr>';
  return;
}

displayReviews(reviews);
} catch (e) {
console.error('Error loading reviews:', e);
showAlert('Error loading reviews', 'danger');
}
}

function displayReviews(reviewList) {
const tbody = document.getElementById('reviewsTableBody');
const departmentFilter = document.getElementById('reviewFilter')?.value || 'ALL';
const statusFilter = document.getElementById('statusFilter')?.value || 'ALL';

let filteredReviews = reviewList.filter(review => {
const deptMatch = departmentFilter === 'ALL' || review.department === departmentFilter;
const statusMatch = statusFilter === 'ALL' || review.status === statusFilter;
return deptMatch && statusMatch;
});

if (filteredReviews.length === 0) {
tbody.innerHTML = '<tr><td colspan="6" class="small-note">No reviews match the current filters</td></tr>';
return;
}

tbody.innerHTML = filteredReviews.map(review => {
const statusBadge = {
  'Draft': 'badge-warning',
  'Pending Peer': 'badge-primary',
  'Pending HOD': 'badge-primary',
  'Completed': 'badge-success'
}[review.status] || 'badge-primary';

const lastUpdated = review.lastUpdated ? 
  new Date(review.lastUpdated).toLocaleDateString() : 'N/A';

return `
  <tr>
    <td>${escapeHtml(review.staffName || '')}</td>
    <td>${escapeHtml(review.Email || '')}</td>
    <td>${escapeHtml(review.department || '')}</td>
    <td><span class="badge ${statusBadge}">${escapeHtml(review.status || 'Draft')}</span></td>
    <td>${lastUpdated}</td>
    <td>
      <button class="btn btn-ghost btn-sm" onclick="viewReview('${review.id}')">
        View Only
      </button>
    </td>
  </tr>
`;
}).join('');
}

function filterReviews() {
loadReviewsTable();
}

function viewReview(reviewId) {
showAlert('Opening review in main system...', 'success');
showMainSystem();
loadReview(reviewId);
}

function saveSystemSettings() {
systemSettings = {
defaultPeriodFrom: document.getElementById('defaultPeriodFrom').value,
defaultPeriodTo: document.getElementById('defaultPeriodTo').value,
reviewDeadline: document.getElementById('reviewDeadline').value,
emailNotifications: document.getElementById('emailNotifications').checked,
allowSelfRating: document.getElementById('allowSelfRating').checked,
lastUpdated: new Date().toISOString()
};
HR_CONFIG.hrEmail = systemSettings.hrEmail;
HR_CONFIG.notifyHROnCompletion = systemSettings.notifyHROnCompletion;

try {
localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(systemSettings));
showAlert('System settings saved successfully', 'success');
applyHRSystemSettings();
} catch (e) {
console.error('Error saving settings:', e);
showAlert('Error saving system settings', 'danger');
}

}
function loadHRInitialData() {
loadTasksTable();
loadReviewsTable();
loadHODEmailConfig();

// Load HR settings
if (systemSettings.defaultPeriodFrom) {
document.getElementById('defaultPeriodFrom').value = systemSettings.defaultPeriodFrom;
}
if (systemSettings.defaultPeriodTo) {
document.getElementById('defaultPeriodTo').value = systemSettings.defaultPeriodTo;
}
if (systemSettings.reviewDeadline) {
document.getElementById('reviewDeadline').value = systemSettings.reviewDeadline;
}
document.getElementById('emailNotifications').checked = systemSettings.emailNotifications !== false;
document.getElementById('allowSelfRating').checked = systemSettings.allowSelfRating !== false;

// Load HR email settings
document.getElementById('hrEmail').value = systemSettings.hrEmail || 'hr.department@company.com';
document.getElementById('notifyHROnCompletion').checked = systemSettings.notifyHROnCompletion !== false;

// Update HR config
HR_CONFIG.hrEmail = systemSettings.hrEmail || 'hr.department@company.com';
HR_CONFIG.notifyHROnCompletion = systemSettings.notifyHROnCompletion !== false;
}
async function exportPDF(id) {
const r = reviews.find(x => x.id === id);
if (!r) { 
alert('Review not found'); 
return; 
}

const { jsPDF } = window.jspdf;
const doc = new jsPDF({ unit: 'pt', format: 'a4' });
const margin = 40;
let y = 40;

doc.setFontSize(16);
doc.text('G.M.C Annual Performance Review', margin, y);
y += 26;
doc.setFontSize(11);
doc.text(`Staff Name: ${r.staffName || ''}`, margin, y); y += 16;
doc.text(`Email.: ${r.Email || ''}`, margin, y); y += 16;
doc.text(`Job Title: ${r.jobTitle || ''}`, margin, y); y += 16;
doc.text(`Department: ${r.department || ''}`, margin, y); y += 16;
doc.text(`Appraisal Period: ${r.periodFrom || ''} to ${r.periodTo || ''}`, margin, y); y += 22;

doc.setFontSize(13); 
doc.text('Section B - Targets / Objectives', margin, y); 
y += 16;
doc.setFontSize(10);

if (r.objectives && r.objectives.length) {
for (let i = 0; i < r.objectives.length; i++) {
  const o = r.objectives[i];
  const text = `${i+1}. ${o.text || ''}`;
  const wrapped = doc.splitTextToSize(text, 480);
  doc.text(wrapped, margin, y); 
  y += wrapped.length * 12;
  doc.text(`Period: ${o.period || ''}`, margin+10, y); 
  y += 12;
  doc.text(`Self Rating: ${o.selfRating || ''}  Peer Rating: ${o.peerRating || ''}  HOD Rating: ${o.hodRating || ''}`, margin+10, y); 
  y += 12;
  if (o.staffComment) { 
    const wrappedC = doc.splitTextToSize('Staff Comment: ' + o.staffComment, 480); 
    doc.text(wrappedC, margin+10, y); 
    y += wrappedC.length*12; 
  }
  if (o.hodComment) { 
    const wrappedH = doc.splitTextToSize('HOD Comment: ' + o.hodComment, 480); 
    doc.text(wrappedH, margin+10, y); 
    y += wrappedH.length*12; 
  }
  y += 6;
  if (y > 720) { 
    doc.addPage(); 
    y = 40; 
  }
}
} else {
doc.text('(No objectives recorded)', margin, y); 
y += 16;
}

doc.save(`${(r.staffName||'review').replace(/\s+/g,'_')}_Review.pdf`);
updateStatus('Exported PDF for ' + (r.staffName || 'unknown'));
}

function saveToStorage() {
try {
localStorage.setItem(STORAGE_KEYS.reviews, JSON.stringify(reviews));
} catch (e) {
console.error('Storage error', e);
}
}

function updateStatus(msg) {
statusMsg.textContent = msg;
}

function showAlert(message, type = 'success') {
const alertContainer = document.getElementById('alertContainer');
const alertDiv = document.createElement('div');
alertDiv.className = `alert alert-${type}`;
alertDiv.textContent = message;

alertContainer.appendChild(alertDiv);

setTimeout(() => {
alertDiv.remove();
}, 5000);
}

function escapeHtml(text) {
if (!text && text !== 0) return '';
const div = document.createElement('div');
div.textContent = text;
return div.innerHTML;
}

function escapeHtmlAttr(s) {
if (!s && s !== 0) return '';
return String(s).replace(/"/g, '&quot;');
}

window.openReview = loadReview;
window.deleteReview = function(id) {
if (!confirm('Delete this review permanently?')) return;
reviews = reviews.filter(r => r.id !== id);
if (currentReviewId === id) currentReviewId = null;
saveToStorage(); 
renderDashboard(); 
newReview(); 
updateStatus('Deleted review');
};
window.exportPDF = exportPDF;
window.verifyRoleAccess = verifyRoleAccess;
window.cancelRoleChange = cancelRoleChange;
window.showHRTab = showHRTab;
window.loadDepartmentKPAs = loadDepartmentKPAs;
window.showAddKPAForm = showAddKPAForm;
window.hideKPAForm = hideKPAForm;
window.editKPA = editKPA;
window.deleteKPA = deleteKPA;
window.deleteTask = deleteTask;
window.filterReviews = filterReviews;
window.viewReview = viewReview;
window.saveSystemSettings = saveSystemSettings;
window.showMainSystem = showMainSystem;
window.logoutHR = logoutHR;
window.updateJobTitles = updateJobTitles;

document.addEventListener('DOMContentLoaded', init);
// Add this function to update job titles when department changes in task assignment
function updateTaskJobTitles() {
const department = document.getElementById('taskDepartment').value;
const jobTitleSelect = document.getElementById('taskJobTitle');

jobTitleSelect.innerHTML = '<option value="">-- Any Job Title --</option>';

if (department && departmentData[department] && departmentData[department].jobTitles) {
const jobTitles = departmentData[department].jobTitles;
jobTitles.forEach(title => {
const option = document.createElement('option');
option.value = title;
option.textContent = title;
jobTitleSelect.appendChild(option);
});
}
}

function handleTaskSubmit(e) {
e.preventDefault();
const staffEmail = document.getElementById('taskStaffEmail').value.trim();
const peerEmail = document.getElementById('taskPeerEmail').value.trim();
const department = document.getElementById('taskDepartment').value;

// Validate staff email
if (!staffEmail) {
showAlert('Staff email is required', 'warning');
return;
}

if (!isValidEmail(staffEmail)) {
showAlert('Please enter a valid staff email address', 'warning');
return;
}

// Validate peer email if provided
if (peerEmail && !isValidEmail(peerEmail)) {
showAlert('Please enter a valid peer email address', 'warning');
return;
}

// Get HOD email for this department
const hodEmail = getHODEmail(department);

const task = {
id: Date.now(),
title: document.getElementById('taskTitle').value,
description: document.getElementById('taskDescription').value,
department: department,
jobTitle: document.getElementById('taskJobTitle').value,
staffEmail: staffEmail,
peerEmail: peerEmail,
hodEmail: hodEmail, // Store HOD email with task
type: document.getElementById('taskType').value,
priority: document.getElementById('taskPriority').value,
deadline: document.getElementById('taskDeadline').value,
status: 'assigned',
createdAt: new Date().toISOString(),
createdBy: 'HR Admin',
taskCode: generateTaskCode()
};

assignedTasks.push(task);

if (saveTasks()) {
loadTasksTable();
sendTaskEmails(task);
e.target.reset();

// Show appropriate success message
if (peerEmail) {
showAlert('Task assigned and emails sent to both staff and peer', 'success');
} else {
showAlert('Task assigned and email sent to staff (no peer assigned)', 'success');
}
}
}
// Generate unique task code to link staff and peer assessments
function generateTaskCode() {
return 'T' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
}

// Update the loadTasksTable function to show email and job title
function loadTasksTable() {
const tbody = document.getElementById('tasksTableBody');
if (assignedTasks.length === 0) {
tbody.innerHTML = '<tr><td colspan="9" class="small-note">No tasks assigned yet</td></tr>';
return;
}

tbody.innerHTML = assignedTasks.map(task => {
const priorityBadge = {
low: 'badge-primary',
medium: 'badge-warning', 
high: 'badge-danger',
urgent: 'badge-danger'
}[task.priority];

return `
<tr>
<td>${escapeHtml(task.title)}</td>
<td>${escapeHtml(task.department)}</td>
<td>${escapeHtml(task.jobTitle || 'Any')}</td>
<td>${escapeHtml(task.email || 'All')}</td>
<td>${escapeHtml(task.type)}</td>
<td><span class="badge ${priorityBadge}">${task.priority.toUpperCase()}</span></td>
<td>${task.deadline}</td>
<td><span class="badge badge-primary">${task.status.toUpperCase()}</span></td>
<td>
  <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Delete</button>
</td>
</tr>
`;
}).join('');
}

// Update the checkHRTaskNotifications function to consider email and job title
function checkHRTaskNotifications() {
const currentDept = deptSel.value;
const currentEmail = EmailEl.value;
const currentJobTitle = jobTitleEl.value;

if (!currentDept) return;

const relevantTasks = assignedTasks.filter(task => {
// Check if task matches current user's department
if (task.department !== currentDept) return false;

// Check if task is still active
if (task.status !== 'assigned') return false;
if (new Date(task.deadline) < new Date()) return false;

// Check if task is specifically assigned to this email
if (task.email && task.email !== currentEmail) return false;

// Check if task is assigned to specific job title
if (task.jobTitle && task.jobTitle !== currentJobTitle) return false;

return true;
});

const notificationBanner = document.getElementById('notificationBanner');
const notificationContent = document.getElementById('notificationContent');

if (relevantTasks.length > 0) {
const taskList = relevantTasks.map(task => {
let assignmentInfo = '';
if (task.email) {
assignmentInfo = `(Assigned specifically to you)`;
} else if (task.jobTitle) {
assignmentInfo = `(Assigned to ${task.jobTitle} roles)`;
} else {
assignmentInfo = `(Assigned to all ${task.department} staff)`;
}
return `• ${task.title} - Due: ${task.deadline} ${assignmentInfo}`;
}).join('<br>');

notificationContent.innerHTML = taskList;
notificationBanner.classList.add('show');
} else {
notificationBanner.classList.remove('show');
}
}

// Update the loadDepartmentData function to consider email-specific tasks
function loadDepartmentData(department) {
const defaultData = departmentData[department] || departmentData.DEFAULT;
let objectives = [...(defaultData.objectives || [])];
let kpas = [...(defaultData.kpas || [])];

// Add custom KPAs
if (customKPAs[department]) {
const customKPATitles = customKPAs[department].map(kpa => kpa.title);
kpas = [...kpas, ...customKPATitles];
}

// Get current user info for task filtering
const currentEmail = EmailEl.value;
const currentJobTitle = jobTitleEl.value;

// Filter tasks for this specific user
const userTasks = assignedTasks.filter(task => {
if (task.department !== department) return false;
if (task.status !== 'assigned') return false;
if (task.type !== 'objective') return false;

// If task has specific email, check if it matches current user
if (task.email && task.email !== currentEmail) return false;

// If task has specific job title, check if it matches current user
if (task.jobTitle && task.jobTitle !== currentJobTitle) return false;

return true;
});

// Add task objectives
if (userTasks.length > 0) {
const taskObjectives = userTasks.map(task => task.title);
objectives = [...objectives, ...taskObjectives];
}

return { objectives, kpas };
}
// Add this function to send task assignments via email
function sendTaskEmail(task) {
const subject = `New Task Assignment: ${task.title}`;
const body = `
Task: ${task.title}
Description: ${task.description}
Department: ${task.department}
${task.jobTitle ? `Job Title: ${task.jobTitle}` : ''}
Priority: ${task.priority.toUpperCase()}
Deadline: ${task.deadline}

Please log in to the Performance Management System to complete this task:
${window.location.href}

This task has been automatically added to your review objectives.
`.trim();

const mailtoLink = `mailto:${task.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// Open email client
window.open(mailtoLink, '_blank');
}
function initEmailService() {
emailjs.init("acHDMB-WiQXGM-DEi");
}

// Advanced email sending function
function sendTaskEmailAdvanced(task) {
const templateParams = {
to_email: task.email,
task_title: task.title,
task_description: task.description,
task_department: task.department,
task_job_title: task.jobTitle || 'All Staff',
task_priority: task.priority,
task_deadline: task.deadline,
system_url: window.location.href,
hr_contact: 'hr@yourcompany.com'
};

emailjs.send('service_x3rpx1q', 'template_tflcedl', templateParams)
.then(function(response) {
console.log('Email sent successfully:', response);
showAlert('Task assigned and email sent to ' + task.email, 'success');
}, function(error) {
console.error('Email failed:', error);
showAlert('Task assigned but email failed to send', 'warning');
});
}
// Generate a direct link that auto-fills the review with task
function generateTaskLink(task) {
const baseUrl = window.location.href.split('?')[0];
const params = new URLSearchParams({
task: task.id,
department: task.department,
autoFill: 'true'
});

return `${baseUrl}?${params.toString()}`;
}

function checkAutoFillParams() {
const urlParams = new URLSearchParams(window.location.search);
const taskId = urlParams.get('task');
const role = urlParams.get('role');
const code = urlParams.get('code');
const autoFill = urlParams.get('autoFill');

console.log('Auto-fill params:', { taskId, role, code, autoFill });

if (taskId && role && code && autoFill) {
const task = assignedTasks.find(t => t.id == taskId && t.taskCode === code);
if (task) {
console.log('Task found, applying role:', role);

// Force-set the role and authenticate
roleEl.value = role;
currentAuthenticatedRole = role;

// Auto-fill department
deptSel.value = task.department;
updateJobTitles();

// Apply STRICT role-based privacy
applyStrictRoleBasedPrivacy(role, task);

// Show appropriate notification
const roleName = role === 'staff' ? 'Self-Assessment' : 'Peer Assessment';
showAlert(`🔒 ${roleName} Mode: ${task.title}`, 'info');

updateStatus(`Auto-filled for ${role} assessment: ${task.title}`);

// Clear URL parameters to prevent re-triggering
window.history.replaceState({}, document.title, window.location.pathname);
} else {
console.error('Task not found or code invalid');
showAlert('Invalid task link. Please contact HR.', 'danger');
}
}
}

// STRICT Role-Based Privacy Function
function applyStrictRoleBasedPrivacy(role, task) {
console.log('Applying strict privacy for role:', role);

const staffCols = document.querySelectorAll('.col-staff');
const peerCols = document.querySelectorAll('.col-peer');
const hodCols = document.querySelectorAll('.col-hod');

// Hide ALL columns first
staffCols.forEach(e => e.style.display = 'none');
peerCols.forEach(e => e.style.display = 'none');
hodCols.forEach(e => e.style.display = 'none');

// Disable role switching
roleEl.disabled = true;
document.getElementById('hrAdminBtn').style.display = 'none';

if (role === 'staff') {
// Staff can ONLY see and edit staff columns
staffCols.forEach(e => e.style.display = 'table-cell');
updateStatus('🔒 SELF-ASSESSMENT MODE: You can only see and edit your own ratings');

// Hide peer and HOD sections completely
document.querySelectorAll('.col-peer, .col-hod').forEach(el => {
el.closest('tr')?.style.display === 'none';
});

} else if (role === 'peer') {
// Peer can ONLY see and edit peer columns  
peerCols.forEach(e => e.style.display = 'table-cell');
updateStatus('🔒 PEER ASSESSMENT MODE: You can only provide peer ratings');

// Hide staff and HOD sections completely
document.querySelectorAll('.col-staff, .col-hod').forEach(el => {
el.closest('tr')?.style.display === 'none';
});
}

// Also hide signature pads they shouldn't use
if (role === 'staff') {
document.getElementById('sigPeer').closest('div').style.display = 'none';
document.getElementById('sigHod').closest('div').style.display = 'none';
} else if (role === 'peer') {
document.getElementById('sigStaff').closest('div').style.display = 'none'; 
document.getElementById('sigHod').closest('div').style.display = 'none';
}
}
// Apply role-based privacy controls
function applyRoleBasedPrivacy(role) {
const staffCols = document.querySelectorAll('.col-staff');
const peerCols = document.querySelectorAll('.col-peer');
const hodCols = document.querySelectorAll('.col-hod');

// Hide all columns first
staffCols.forEach(e => e.classList.add('hidden'));
peerCols.forEach(e => e.classList.add('hidden'));
hodCols.forEach(e => e.classList.add('hidden'));

// Show only relevant columns based on role
if (role === 'staff') {
staffCols.forEach(e => e.classList.remove('hidden'));
updateStatus('Self-assessment mode: You can only see and edit your own ratings and comments');
} else if (role === 'peer') {
peerCols.forEach(e => e.classList.remove('hidden'));
updateStatus('Peer assessment mode: You can only provide peer ratings');
}

// Disable role switching when accessed via task link
roleEl.disabled = true;
}
function sendTaskEmail(task) {
const taskLink = generateTaskLink(task);

const subject = `New Task Assignment: ${task.title}`;
const body = `
Dear Staff,

You have been assigned a new task in the Performance Management System:

TASK: ${task.title}
DESCRIPTION: ${task.description}
DEPARTMENT: ${task.department}
${task.jobTitle ? `JOB TITLE: ${task.jobTitle}` : ''}
PRIORITY: ${task.priority.toUpperCase()}
DEADLINE: ${task.deadline}

Click the link below to access the system and complete this task:
${taskLink}

This task will automatically appear in your performance review objectives.

Best regards,
HR Department
`.trim();

const mailtoLink = `mailto:${task.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.open(mailtoLink, '_blank');
}
function init() {
loadStoredData();
initSignaturePads();
setupEventListeners();
renderObjectives();
applyRole();
renderDashboard();
applyHRSystemSettings();
checkHRTaskNotifications();
updateStatus('Ready – create or load a review. Use "Find by Email." to open a saved review.');
updateTaskJobTitles();

// Check if we should auto-fill from task link
checkAutoFillParams();
}
// Update KPA job titles when department changes
function updateKPAJobTitles() {
const department = document.getElementById('kpaDepartment').value;
const jobTitleSelect = document.getElementById('kpaJobTitle');

jobTitleSelect.innerHTML = '<option value="">-- Any Job Title --</option>';

if (department && departmentData[department] && departmentData[department].jobTitles) {
const jobTitles = departmentData[department].jobTitles;
jobTitles.forEach(title => {
const option = document.createElement('option');
option.value = title;
option.textContent = title;
jobTitleSelect.appendChild(option);
});
}

loadDepartmentKPAs();
}

// Update KPA form job titles when department changes
function updateKPAFormJobTitles() {
const department = document.getElementById('kpaFormDepartment').value;
const jobTitleSelect = document.getElementById('kpaFormJobTitle');

jobTitleSelect.innerHTML = '<option value="">-- Any Job Title --</option>';

if (department && departmentData[department] && departmentData[department].jobTitles) {
const jobTitles = departmentData[department].jobTitles;
jobTitles.forEach(title => {
const option = document.createElement('option');
option.value = title;
option.textContent = title;
jobTitleSelect.appendChild(option);
});
}
}

// Update the loadDepartmentKPAs function to include job title filtering
function loadDepartmentKPAs() {
const department = document.getElementById('kpaDepartment').value;
const jobTitle = document.getElementById('kpaJobTitle').value;
const kpaList = document.getElementById('kpaList');

if (!department) {
kpaList.innerHTML = '<p class="small-note">Select a department to view and manage KPAs</p>';
return;
}

// Get KPAs for this department and job title
let deptKPAs = customKPAs[department] || [];

// Filter by job title if specified
if (jobTitle) {
deptKPAs = deptKPAs.filter(kpa => kpa.jobTitle === jobTitle || !kpa.jobTitle);
}

let html = '';

if (deptKPAs.length === 0) {
html = '<p class="small-note">No custom KPAs defined for this department' + (jobTitle ? ` and job title "${jobTitle}"` : '') + '. Add some using the form above.</p>';
} else {
deptKPAs.forEach((kpa, index) => {
html += `
<div class="kpa-item">
  <div class="flex flex-between">
    <div>
      <strong>${escapeHtml(kpa.title)}</strong>
      ${kpa.jobTitle ? `<span class="badge badge-primary" style="margin-left: 8px;">${escapeHtml(kpa.jobTitle)}</span>` : ''}
    </div>
    <div>
      <button class="btn btn-ghost btn-sm" onclick="editKPA('${department}', ${index})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="deleteKPA('${department}', ${index})">Delete</button>
    </div>
  </div>
  ${kpa.description ? `<p class="small-note">${escapeHtml(kpa.description)}</p>` : ''}
  ${kpa.bullets && kpa.bullets.length ? `
    <ul class="kpa-bullets">
      ${kpa.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join('')}
    </ul>
  ` : ''}
</div>
`;
});
}

kpaList.innerHTML = html;
}

// Update the showAddKPAForm function
function showAddKPAForm() {
const department = document.getElementById('kpaDepartment').value;
const jobTitle = document.getElementById('kpaJobTitle').value;

if (!department) {
showAlert('Please select a department first', 'warning');
return;
}

document.getElementById('kpaFormCard').classList.remove('hidden');
document.getElementById('kpaFormTitle').textContent = 'Add New KPA';
document.getElementById('kpaForm').reset();

// Set form department and job title
document.getElementById('kpaFormDepartment').value = department;
updateKPAFormJobTitles();

// Pre-select job title if one was selected in filter
if (jobTitle) {
document.getElementById('kpaFormJobTitle').value = jobTitle;
}

currentEditingKPA = null;
}

// Update the editKPA function
function editKPA(department, index) {
const kpa = customKPAs[department][index];
document.getElementById('kpaFormCard').classList.remove('hidden');
document.getElementById('kpaFormTitle').textContent = 'Edit KPA';
document.getElementById('kpaTitle').value = kpa.title;
document.getElementById('kpaDescription').value = kpa.description || '';
document.getElementById('kpaBullets').value = (kpa.bullets || []).join('\n');
document.getElementById('kpaFormDepartment').value = department;

updateKPAFormJobTitles();

if (kpa.jobTitle) {
document.getElementById('kpaFormJobTitle').value = kpa.jobTitle;
}

currentEditingKPA = { department, index };
}

// Update the handleKPASubmit function to include job title
function handleKPASubmit(e) {
e.preventDefault();
const department = document.getElementById('kpaFormDepartment').value;
const title = document.getElementById('kpaTitle').value.trim();
const description = document.getElementById('kpaDescription').value.trim();
const jobTitle = document.getElementById('kpaFormJobTitle').value;
const bullets = document.getElementById('kpaBullets').value
.split('\n')
.map(b => b.trim())
.filter(b => b.length > 0);

const kpaData = { 
title, 
description, 
jobTitle: jobTitle || null, // Store null if no job title selected
bullets 
};

if (!customKPAs[department]) {
customKPAs[department] = [];
}

if (currentEditingKPA) {
customKPAs[department][currentEditingKPA.index] = kpaData;
showAlert('KPA updated successfully', 'success');
} else {
customKPAs[department].push(kpaData);
showAlert('KPA added successfully', 'success');
}

saveKPAs();
loadDepartmentKPAs();
hideKPAForm();
}

// Check and display HOD notifications
function checkHODNotifications() {
if (currentAuthenticatedRole !== 'hod') return;

const notifications = JSON.parse(localStorage.getItem('HOD_NOTIFICATIONS') || '[]');
const unreadNotifications = notifications.filter(n => !n.read);

const notificationBanner = document.getElementById('hodNotificationBanner');
const notificationContent = document.getElementById('hodNotificationContent');

if (unreadNotifications.length > 0) {
const notificationList = unreadNotifications.map(notification => {
const typeIcon = notification.submittedBy === 'Staff' ? '👤' : '👥';
const statusText = notification.submittedBy === 'Staff' ? 'Self-Assessment Complete' : 'Peer Assessment Complete';
return `${typeIcon} ${notification.staffName} (${notification.department}) - ${statusText} - ${new Date(notification.timestamp).toLocaleDateString()}`;
}).join('<br>');

notificationContent.innerHTML = notificationList;
notificationBanner.classList.remove('hidden');
notificationBanner.style.display = 'block';
} else {
notificationBanner.classList.add('hidden');
notificationBanner.style.display = 'none';
}
}
// Clear HOD notifications
function clearHODNotifications() {
const notifications = JSON.parse(localStorage.getItem('HOD_NOTIFICATIONS') || '[]');
const updatedNotifications = notifications.map(n => ({ ...n, read: true }));
localStorage.setItem('HOD_NOTIFICATIONS', JSON.stringify(updatedNotifications));
checkHODNotifications();
showAlert('Notifications cleared', 'success');
}

// Mark notification as read when HOD opens the review
function markNotificationAsRead(reviewId) {
const notifications = JSON.parse(localStorage.getItem('HOD_NOTIFICATIONS') || '[]');
const updatedNotifications = notifications.map(n => 
n.reviewId === reviewId ? { ...n, read: true } : n
);
localStorage.setItem('HOD_NOTIFICATIONS', JSON.stringify(updatedNotifications));
checkHODNotifications();
}

function sendTaskEmails(task) {
console.log('Sending combined email for task:', task);

// Send ONE email with both links
sendCombinedTaskEmail(task);
}

function sendCombinedTaskEmail(task) {
const staffLink = generateStaffTaskLink(task);
const peerLink = generatePeerTaskLink(task);

const subject = `📋 Task Assignment: ${task.title} - Staff & Peer Links`;
const body = `
TASK ASSIGNMENT: ${task.title}

📝 TASK DETAILS:
• Description: ${task.description}
• Department: ${task.department}
• Priority: ${task.priority.toUpperCase()}
• Deadline: ${task.deadline}
• Task Code: ${task.taskCode}

🔗 ASSESSMENT LINKS:

👤 STAFF SELF-ASSESSMENT LINK:
For: ${task.staffEmail}
Link: ${staffLink}

Instructions: Self-rating and self-comments only
Privacy: Confidential self-assessment

👥 PEER ASSESSMENT LINK:
For: ${task.peerEmail || 'Peer Reviewer'}
Link: ${peerLink}

Instructions: Peer rating and feedback only  
Privacy: Confidential peer assessment

⚠️ IMPORTANT:
• Distribute the appropriate links to each person
• Staff should NOT receive the peer link
• Peer should NOT receive the staff link
• Links include automatic role-based privacy

Best regards,
HR Department
G.M.C Performance Management System
`.trim();

// Send to HR to distribute
const mailtoLink = `mailto:hr@yourcompany.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// Open email client
const emailWindow = window.open(mailtoLink, '_blank');

if (emailWindow) {
console.log('Email client opened successfully');
showAlert('📧 Email with both assessment links generated. Please send appropriate links to staff and peer.', 'success');
} else {
// Fallback: show links on screen
showLinksOnScreen(task, staffLink, peerLink);
}
}

// Fallback function if popup blocked
function showLinksOnScreen(task, staffLink, peerLink) {
const linksHTML = `
<div class="alert alert-info">
<h4>📋 Task Assignment Links for: ${task.title}</h4>
<p><strong>Staff Link (send to ${task.staffEmail}):</strong></p>
<input type="text" value="${staffLink}" readonly class="form-control" style="margin-bottom: 10px;">
<button class="btn btn-sm btn-primary" onclick="copyToClipboard('${staffLink}')">Copy Staff Link</button>

<p style="margin-top: 15px;"><strong>Peer Link (send to ${task.peerEmail || 'peer reviewer'}):</strong></p>
<input type="text" value="${peerLink}" readonly class="form-control" style="margin-bottom: 10px;">
<button class="btn btn-sm btn-primary" onclick="copyToClipboard('${peerLink}')">Copy Peer Link</button>

<p style="margin-top: 15px; font-size: 12px; color: #666;">
🔒 Each link has built-in privacy restrictions. Send the correct link to each person.
</p>
</div>
`;

// Show in a modal or directly on page
const alertContainer = document.getElementById('alertContainer');
alertContainer.innerHTML = linksHTML;

showAlert('Popup blocked! Links displayed below. Copy and send manually.', 'warning');
}

// Copy to clipboard function
function copyToClipboard(text) {
navigator.clipboard.writeText(text).then(() => {
showAlert('Link copied to clipboard!', 'success');
}).catch(() => {
// Fallback for older browsers
const textArea = document.createElement('textarea');
textArea.value = text;
document.body.appendChild(textArea);
textArea.select();
document.execCommand('copy');
document.body.removeChild(textArea);
showAlert('Link copied to clipboard!', 'success');
});
}
// Email validation function
function isValidEmail(email) {
if (!email) return false;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}
// Send email to Staff with self-assessment link
function sendTaskEmails(task) {
// Send to Staff first with a delay
if (task.staffEmail && isValidEmail(task.staffEmail)) {
setTimeout(() => {
sendStaffTaskEmail(task);
}, 1000); // 1 second delay
} else {
console.warn('Invalid or missing staff email:', task.staffEmail);
}

// Send to Peer with a longer delay to avoid popup blocking
if (task.peerEmail && isValidEmail(task.peerEmail)) {
setTimeout(() => {
sendPeerTaskEmail(task);
}, 3000); // 3 second delay
} else {
console.warn('Invalid or missing peer email:', task.peerEmail);
showAlert('Peer email is missing or invalid. Task assigned but peer notification not sent.', 'warning');
}
}

// Add email validation function
function isValidEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

// Also update your task assignment form validation
function handleTaskSubmit(e) {
e.preventDefault();
const staffEmail = document.getElementById('taskStaffEmail').value.trim();
const peerEmail = document.getElementById('taskPeerEmail').value.trim();

if (!staffEmail) {
showAlert('Staff email is required', 'warning');
return;
}

if (!isValidEmail(staffEmail)) {
showAlert('Please enter a valid staff email address', 'warning');
return;
}

if (peerEmail && !isValidEmail(peerEmail)) {
showAlert('Please enter a valid peer email address', 'warning');
return;
}

const task = {
id: Date.now(),
title: document.getElementById('taskTitle').value,
description: document.getElementById('taskDescription').value,
department: document.getElementById('taskDepartment').value,
jobTitle: document.getElementById('taskJobTitle').value,
staffEmail: staffEmail,
peerEmail: peerEmail,
type: document.getElementById('taskType').value,
priority: document.getElementById('taskPriority').value,
deadline: document.getElementById('taskDeadline').value,
status: 'assigned',
createdAt: new Date().toISOString(),
createdBy: 'HR Admin',
taskCode: generateTaskCode()
};

assignedTasks.push(task);

if (saveTasks()) {
loadTasksTable();
sendTaskEmails(task);
e.target.reset();

// Show appropriate success message
if (peerEmail) {
showAlert('Task assigned and emails sent to both staff and peer', 'success');
} else {
showAlert('Task assigned and email sent to staff (no peer assigned)', 'success');
}
}
}

// Send email to Peer with peer-assessment link
function sendPeerTaskEmail(task) {
const peerLink = generatePeerTaskLink(task);

const subject = `Peer Assessment Request - ${task.title}`;
const body = `
Dear Colleague,

You have been requested to provide a peer assessment for a performance task:

TASK: ${task.title}
DESCRIPTION: ${task.description}
DEPARTMENT: ${task.department}
PRIORITY: ${task.priority.toUpperCase()}
DEADLINE: ${task.deadline}
TASK CODE: ${task.taskCode}

🔒 **PRIVACY NOTE**: This is a confidential peer assessment. Your responses will be kept confidential and the staff member will not see your individual ratings or comments.

Click the link below to complete the peer assessment:
${peerLink}

Your objective feedback is valuable for the performance review process.

Best regards,
HR Department
G.M.C Performance Management System
`.trim();

const mailtoLink = `mailto:${task.peerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.open(mailtoLink, '_blank');
}

// Generate STAFF-specific task link
function generateStaffTaskLink(task) {
const baseUrl = window.location.href.split('?')[0];
const params = new URLSearchParams({
task: task.id,
role: 'staff',  // This is correct for staff
code: task.taskCode,
dept: task.department,
autoFill: 'true'
});
return `${baseUrl}?${params.toString()}#staff-review`;
}

// Generate PEER-specific task link (FIXED)
function generatePeerTaskLink(task) {
const baseUrl = window.location.href.split('?')[0];
const params = new URLSearchParams({
task: task.id,
role: 'peer',  // This should be 'peer' not 'staff'
code: task.taskCode,
dept: task.department,
autoFill: 'true'
});
return `${baseUrl}?${params.toString()}#peer-review`;
}
function saveTasks() {
try {
localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(assignedTasks));
return true;
} catch (e) {
console.error('Error saving tasks:', e);
showAlert('Error saving tasks to storage', 'danger');
return false;
}
}
// Send email to Staff with self-assessment link
function sendStaffTaskEmail(task) {
const staffLink = generateStaffTaskLink(task);

const subject = `🔒 CONFIDENTIAL: Self-Assessment Required - ${task.title}`;
const body = `
Dear ${task.staffEmail.split('@')[0]},

🔒 **PRIVACY NOTICE**: This self-assessment link is for your eyes only. Your responses will remain confidential.

TASK: ${task.title}
DESCRIPTION: ${task.description}
DEPARTMENT: ${task.department}
PRIORITY: ${task.priority.toUpperCase()}
DEADLINE: ${task.deadline}

📋 YOUR ROLE: SELF-ASSESSMENT
- Rate your own performance
- Provide self-comments
- Sign with your digital signature

🔗 YOUR PERSONAL LINK:
${staffLink}

⚠️ IMPORTANT: 
- Complete your self-assessment honestly
- Your peer reviewer will assess separately
- Your HOD will see both assessments

Best regards,
HR Department
G.M.C Performance Management System
`.trim();

const mailtoLink = `mailto:${task.staffEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.open(mailtoLink, '_blank');
console.log('Staff email opened for:', task.staffEmail);
}

// Send email to Peer with peer-assessment link
function sendPeerTaskEmail(task) {
const peerLink = generatePeerTaskLink(task);  // This now uses the CORRECT peer link

const subject = `🔒 CONFIDENTIAL: Peer Assessment Request - ${task.title}`;
const body = `
Dear Colleague,

🔒 **PRIVACY NOTICE**: Your peer assessment is confidential. The staff member will not see your individual responses.

TASK: ${task.title}
DESCRIPTION: ${task.description}
DEPARTMENT: ${task.department} 
PRIORITY: ${task.priority.toUpperCase()}
DEADLINE: ${task.deadline}

📋 YOUR ROLE: PEER ASSESSMENT
- Provide objective peer ratings
- Give constructive peer feedback
- Sign with your digital signature

🔗 YOUR PEER ASSESSMENT LINK:
${peerLink}

⚠️ IMPORTANT:
- Provide honest, objective feedback
- Focus on observable behaviors
- Your assessment is confidential
- Staff cannot see your individual ratings

Best regards,
HR Department  
G.M.C Performance Management System
`.trim();

const mailtoLink = `mailto:${task.peerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.open(mailtoLink, '_blank');
console.log('Peer email opened for:', task.peerEmail);
}
function debugTaskEmails() {
const tasks = assignedTasks;
console.log('All assigned tasks:', tasks);

if (tasks.length > 0) {
const latestTask = tasks[tasks.length - 1];
console.log('Latest task details:', latestTask);
console.log('Staff link:', generateStaffTaskLink(latestTask));
console.log('Peer link:', generatePeerTaskLink(latestTask));
}
}
const HOD_EMAILS = {
"MINE OPERATION": "mine.operation.hod@company.com",
"MINE PLANNING AND ENGINEERING": "mine.planning.hod@company.com",
"PORT OPERATION": "port.operation.hod@company.com",
"SECURITY": "security.hod@company.com",
"SUPPLY CHAIN": "supply.chain.hod@company.com",
"ASSAY LAB": "assay.lab.hod@company.com",
"ASSET MANAGEMENT": "asset.management.hod@company.com",
"CARBONATE PLANT": "carbonate.plant.hod@company.com",
"CIVIL": "civil.hod@company.com",
"COMMUNITY RELATIONS": "community.relations.hod@company.com",
"ELECTRIC SHOP": "electric.shop.hod@company.com",
"ENVIRONMENT": "environment.hod@company.com",
"FINANCE": "finance.hod@company.com",
"GEOLOGY & SURVEY": "geology.survey.hod@company.com",
"HD/EME": "hd.eme.hod@company.com",
"HEALTH & SAFETY": "health.safety.hod@company.com",
"HOSPITAL": "hospital.hod@company.com",
"HUMAN CAPITAL": "human.capital.hod@company.com",
"I.T.": "it.hod@company.com",
"LIGHT DUTY": "light.duty.hod@company.com",
"MECHANICAL WORKSHOP": "mechanical.workshop.hod@company.com",
"METALLURGY": "metallurgy.hod@company.com"
};
const HR_CONFIG = {
hrEmail: "hr.department@company.com", // Default HR email
notifyHROnCompletion: true
};
// Function to load HOD email configuration UI
function loadHODEmailConfig() {
const container = document.getElementById('hodEmailConfig');
let html = '';

Object.keys(departmentData).forEach(dept => {
if (dept !== 'DEFAULT') {
const currentEmail = HOD_EMAILS[dept] || '';
html += `
<div class="form-group" style="margin-bottom: 15px; padding: 10px; border-left: 3px solid var(--primary);">
  <label for="hodEmail_${dept}">${dept}</label>
  <input type="email" id="hodEmail_${dept}" class="form-control" 
         value="${escapeHtmlAttr(currentEmail)}" 
         placeholder="Enter HOD email for ${dept}">
</div>
`;
}
});

container.innerHTML = html;
}

// Function to save HOD emails
function saveHODEmails() {
Object.keys(departmentData).forEach(dept => {
if (dept !== 'DEFAULT') {
const emailInput = document.getElementById(`hodEmail_${dept}`);
if (emailInput) {
HOD_EMAILS[dept] = emailInput.value.trim();
}
}
});

// Save to localStorage
try {
localStorage.setItem('HOD_EMAILS_CONFIG', JSON.stringify(HOD_EMAILS));
showAlert('HOD emails saved successfully', 'success');
} catch (e) {
console.error('Error saving HOD emails:', e);
showAlert('Error saving HOD emails', 'danger');
}
}

// Function to load HOD emails from storage
function loadHODEmails() {
try {
const stored = JSON.parse(localStorage.getItem('HOD_EMAILS_CONFIG') || '{}');
Object.assign(HOD_EMAILS, stored);
} catch (e) {
console.error('Error loading HOD emails:', e);
}
}

// Function to get HOD email for a department
function getHODEmail(department) {
return HOD_EMAILS[department] || 'default.hod@company.com'; // Fallback email
}
// Function to notify staff when their review is completed
function sendStaffCompletionNotification(review) {
if (!systemSettings.emailNotifications) {
return;
}

const subject = `Your Performance Review has been Completed - ${review.staffName}`;
const scores = review.scores || {};

const body = `
Dear ${review.staffName},

Your performance review for the period ${review.periodFrom} to ${review.periodTo} has been completed by your HOD.

📊 REVIEW COMPLETION SUMMARY:
• Department: ${review.department}
• Job Title: ${review.jobTitle}
• Review Period: ${review.periodFrom} to ${review.periodTo}
• Completed On: ${new Date().toLocaleDateString()}
• Final Status: Completed

${scores.finalScore ? `• Your Overall Performance Score: ${scores.finalScore}/5` : ''}

NEXT STEPS:
1. Your HOD may schedule a feedback session with you
2. HR will update your performance records
3. Any identified training needs will be processed

Thank you for your participation in the performance review process.

Best regards,
HR Department
G.M.C Performance Management System
`.trim();

const staffEmail = review.Email || review.staffEmail;
if (staffEmail && isValidEmail(staffEmail)) {
const mailtoLink = `mailto:${staffEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// Open email client for staff notification
setTimeout(() => {
window.open(mailtoLink, '_blank');
}, 2000);
}
}
// Function to load HR notifications
function loadHRNotifications() {
const notifications = JSON.parse(localStorage.getItem('HR_NOTIFICATIONS') || '[]');
const container = document.getElementById('hrNotificationsList');
const badge = document.getElementById('hrNotificationBadge');

const unreadCount = notifications.filter(n => !n.read).length;

// Update badge
if (unreadCount > 0) {
badge.textContent = unreadCount;
badge.style.display = 'inline';
} else {
badge.style.display = 'none';
}

if (notifications.length === 0) {
container.innerHTML = '<p class="small-note">No notifications</p>';
return;
}

// Display notifications (newest first)
const sortedNotifications = notifications.sort((a, b) => new Date(b.completionDate) - new Date(a.completionDate));

container.innerHTML = sortedNotifications.map(notification => {
const readClass = notification.read ? '' : 'hod-notification-item';
return `
<div class="${readClass}" style="margin-bottom: 10px; padding: 12px; border-radius: 6px; border-left: 4px solid var(--success);">
<div class="flex flex-between">
  <strong>✅ Review Completed - ${notification.staffName}</strong>
  <span class="small-note">${new Date(notification.completionDate).toLocaleDateString()}</span>
</div>
<div class="small-note">
  Department: ${notification.department} | 
  HOD: ${notification.hodEmail} |
  Score: ${notification.finalScore}/5
</div>
<div style="margin-top: 8px;">
  <button class="btn btn-ghost btn-sm" onclick="viewReview('${notification.reviewId}')">View Review</button>
  <button class="btn btn-ghost btn-sm" onclick="markHRNotificationRead(${notification.id})">Mark Read</button>
</div>
</div>
`;
}).join('');
}

// Function to mark HR notification as read
function markHRNotificationRead(notificationId) {
const notifications = JSON.parse(localStorage.getItem('HR_NOTIFICATIONS') || '[]');
const updatedNotifications = notifications.map(n => 
n.id === notificationId ? { ...n, read: true } : n
);
localStorage.setItem('HR_NOTIFICATIONS', JSON.stringify(updatedNotifications));
loadHRNotifications();
}

// Function to mark all HR notifications as read
function markAllHRNotificationsRead() {
const notifications = JSON.parse(localStorage.getItem('HR_NOTIFICATIONS') || '[]');
const updatedNotifications = notifications.map(n => ({ ...n, read: true }));
localStorage.setItem('HR_NOTIFICATIONS', JSON.stringify(updatedNotifications));
loadHRNotifications();
showAlert('All notifications marked as read', 'success');
}

// Function to clear all HR notifications
function clearAllHRNotifications() {
if (confirm('Clear all HR notifications?')) {
localStorage.setItem('HR_NOTIFICATIONS', JSON.stringify([]));
loadHRNotifications();
showAlert('All notifications cleared', 'success');
}
}

// Update the showHRTab function to load notifications
function showHRTab(tabId) {
document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));

document.getElementById(tabId).classList.add('active');
event.target.classList.add('active');

if (tabId === 'review-overview') {
loadReviewsTable();
} else if (tabId === 'task-assignment') {
loadTasksTable();
} else if (tabId === 'hr-notifications') {
loadHRNotifications();
}
}
// Add these missing function declarations at the top level
function showHRLogin() {
document.getElementById('mainSystem').classList.add('hidden');
document.getElementById('hrAdminInterface').classList.add('hidden');
document.getElementById('hrLoginScreen').classList.remove('hidden');
currentView = 'hrLogin';
}

function showHRAdmin() {
document.getElementById('mainSystem').classList.add('hidden');
document.getElementById('hrAdminInterface').classList.remove('hidden');
document.getElementById('hrLoginScreen').classList.add('hidden');
currentView = 'hrAdmin';
loadHRInitialData();
}
// Add email validation function
function isValidEmail(email) {
if (!email) return false;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

departmentData["HUMAN CAPITAL"].detailedKPAs = {
"HEAD HUMAN CAPITAL": [
{
title: "Strategic HR Leadership",
description: "Development and implementation of HR strategies aligned with business objectives",
bullets: [
"Develops and implements HR strategies that support organizational goals",
"Provides strategic direction for human capital management",
"Ensures HR initiatives align with business objectives",
"Leads organizational development and change management initiatives"
]
},
{
title: "Talent Management & Succession Planning",
description: "Oversight of talent acquisition, development, and retention strategies",
bullets: [
"Oversees talent acquisition and retention strategies",
"Implements effective succession planning processes",
"Develops leadership pipeline and talent bench strength",
"Monitors employee engagement and satisfaction metrics"
]
},
{
title: "HR Compliance & Risk Management",
description: "Ensuring compliance with labor laws and mitigating HR-related risks",
bullets: [
"Ensures compliance with labor laws and regulations",
"Manages HR-related risks and mitigates potential issues",
"Oversees employee relations and conflict resolution",
"Maintains ethical standards in HR practices"
]
}
],
"BENEFITS & PAYROLL SUPERINTENDENT": [
{
title: "Compensation & Benefits Administration",
description: "Management of employee compensation, benefits programs, and payroll processing",
bullets: [
"Administers employee compensation and benefits programs",
"Ensures accurate and timely payroll processing",
"Manages benefits enrollment and communication",
"Conducts compensation benchmarking and analysis"
]
},
{
title: "Payroll Compliance & Accuracy",
description: "Ensuring payroll compliance with regulations and maintaining accuracy",
bullets: [
"Ensures payroll compliance with statutory requirements",
"Maintains payroll records and documentation",
"Processes payroll adjustments and corrections",
"Reconciles payroll accounts and resolves discrepancies"
]
}
],
"EMPLOYEE WELFARE & PROJECTS COORDINATOR": [
{
title: "Employee Welfare Programs",
description: "Development and implementation of employee welfare initiatives",
bullets: [
"Develops and implements employee welfare programs",
"Coordinates employee assistance and support services",
"Organizes employee engagement activities and events",
"Addresses employee welfare concerns and issues"
]
},
{
title: "HR Project Management",
description: "Management of HR projects and initiatives",
bullets: [
"Manages HR projects from initiation to completion",
"Coordinates cross-functional HR initiatives",
"Monitors project timelines and deliverables",
"Evaluates project outcomes and effectiveness"
]
}
],
"LEARNING AND DEVELOPMENT COORDINATOR": [
{
title: "Training Program Development",
description: "Design and implementation of learning and development programs",
bullets: [
"Designs and implements training and development programs",
"Identifies organizational training needs",
"Develops training materials and resources",
"Evaluates training effectiveness and ROI"
]
},
{
title: "Learning Delivery & Facilitation",
description: "Delivery of training programs and facilitation of learning activities",
bullets: [
"Facilitates training sessions and workshops",
"Coordinates external training providers",
"Manages learning management system",
"Tracks employee training participation and completion"
]
}
],
"EMPLOYEE ADMIN & INDUSTRIAL RELATIONS COORDINATOR": [
{
title: "Employee Administration",
description: "Management of employee records and administrative processes",
bullets: [
"Manages employee records and documentation",
"Processes employee onboarding and offboarding",
"Administers employee contracts and agreements",
"Maintains HR information systems"
]
},
{
title: "Industrial Relations Management",
description: "Management of employee relations and labor compliance",
bullets: [
"Manages employee relations and grievance procedures",
"Ensures compliance with labor relations regulations",
"Facilitates communication between management and employees",
"Participates in collective bargaining processes"
]
}
],
"ESTATE ADMIN COORDINATOR": [
{
title: "Estate Administration",
description: "Management of company housing and estate facilities",
bullets: [
"Manages company housing and accommodation facilities",
"Coordinates estate maintenance and repairs",
"Administers housing allocation and assignments",
"Maintains estate records and documentation"
]
},
{
title: "Facility Management Coordination",
description: "Coordination of estate services and facility management",
bullets: [
"Coordinates estate services and utilities",
"Manages estate security and access control",
"Oversees cleaning and maintenance services",
"Handles estate-related inquiries and issues"
]
}
],
"EXECUTIVE ASSISTANT / LOGISTICS & SUPPLY CO-ORDINATOR": [
{
title: "Executive Support",
description: "Providing administrative support to executives",
bullets: [
"Provides administrative support to senior executives",
"Manages executive calendars and appointments",
"Coordinates executive travel and logistics",
"Prepares reports and presentations for executives"
]
},
{
title: "Logistics & Supply Coordination",
description: "Coordination of logistics and supply chain activities",
bullets: [
"Coordinates logistics and supply chain activities",
"Manages inventory and supply requisitions",
"Liaises with vendors and service providers",
"Tracks logistics performance and costs"
]
}
],
"HR SYSTEMS & ANALYTICS COORDINATOR": [
{
title: "HR Systems Management",
description: "Management and optimization of HR information systems",
bullets: [
"Manages HR information systems and databases",
"Ensures data integrity and system security",
"Provides system training and support to users",
"Implements system upgrades and enhancements"
]
},
{
title: "HR Analytics & Reporting",
description: "Analysis of HR data and generation of insights",
bullets: [
"Analyzes HR data and generates insights",
"Prepares HR metrics and dashboard reports",
"Supports data-driven HR decision making",
"Identifies trends and patterns in HR data"
]
}
],
"PERSONAL ASSISTANT TO THE MANAGING DIRECTOR": [
{
title: "Executive Assistance",
description: "Providing comprehensive support to the Managing Director",
bullets: [
"Provides comprehensive support to the Managing Director",
"Manages MD's calendar, appointments, and correspondence",
"Coordinates MD's travel and meeting arrangements",
"Handles confidential information with discretion"
]
},
{
title: "Communication & Liaison",
description: "Facilitating communication and acting as a liaison",
bullets: [
"Acts as liaison between MD and internal/external stakeholders",
"Drafts communications and correspondence on behalf of MD",
"Facilitates smooth information flow to and from MD's office",
"Represents MD in meetings when required"
]
}
],
"PERSONNEL OFFICE ASSISTANT": [
{
title: "Personnel Administration",
description: "Supporting personnel administration and record keeping",
bullets: [
"Supports personnel administration processes",
"Maintains employee records and files",
"Processes personnel documentation and forms",
"Assists with HR database management"
]
},
{
title: "Office Support Services",
description: "Providing general office support and assistance",
bullets: [
"Provides general office support and assistance",
"Handles HR department inquiries and requests",
"Supports HR events and activities",
"Manages office supplies and equipment"
]
}
],
"ESTATE OFFICER": [
{
title: "Estate Management",
description: "Management of company estate properties and facilities",
bullets: [
"Manages company estate properties and facilities",
"Coordinates estate maintenance and improvement projects",
"Conducts regular estate inspections and assessments",
"Addresses estate-related issues and concerns"
]
},
{
title: "Tenant & Resident Relations",
description: "Management of relationships with estate residents",
bullets: [
"Manages relationships with estate residents",
"Addresses resident complaints and requests",
"Enforces estate rules and regulations",
"Coordinates community activities within the estate"
]
}
],
"LV DRIVER": [
{
title: "Vehicle Operation & Safety",
description: "Safe operation of light vehicles and compliance with regulations",
bullets: [
"Operates light vehicles safely and efficiently",
"Complies with traffic laws and company driving policies",
"Performs pre-trip vehicle inspections",
"Maintains clean and well-presented vehicles"
]
},
{
title: "Transport Coordination",
description: "Coordination of transportation and logistics",
bullets: [
"Coordinates transportation schedules and routes",
"Ensures timely arrival at destinations",
"Assists with loading and unloading of items",
"Maintains accurate trip records and logs"
]
}
],
"LEARNING AND DEVELOPMENT OFFICER": [
{
title: "Training Delivery",
description: "Delivery of training programs and learning activities",
bullets: [
"Delivers training programs and learning activities",
"Facilitates learning sessions and workshops",
"Provides one-on-one coaching and support",
"Evaluates participant learning and development"
]
},
{
title: "Training Coordination",
description: "Coordination of training logistics and administration",
bullets: [
"Coordinates training logistics and scheduling",
"Manages training materials and resources",
"Tracks training participation and completion",
"Supports training needs assessment processes"
]
}
]
};

// Add this function to render detailed assessments
function renderDetailedAssessments() {
const dept = deptSel.value;
const jobTitle = jobTitleEl.value;
const detailedSection = document.getElementById('detailedAssessmentSection');

// Only show for Human Capital department
if (dept === 'HUMAN CAPITAL' && jobTitle) {
detailedSection.style.display = 'block';

const deptData = departmentData[dept];
const jobKPAs = deptData.detailedKPAs ? deptData.detailedKPAs[jobTitle] : [];

let html = `<table id="detailedTable" class="table"><thead><tr>
<th>Key Performance Areas</th>
<th>Time Frame</th>
<th class="col-staff">Self Rating</th>
<th class="col-peer">Peer Rating</th>
<th class="col-hod">HOD Rating</th>
<th class="col-staff">Staff Comment</th>
<th class="col-hod">HOD Comment</th>
</tr></thead><tbody>`;

if (jobKPAs && jobKPAs.length > 0) {
jobKPAs.forEach((kpa, i) => {
html += `<tr data-idx="${i}" data-type="detailed">
  <td class="kpa-text">
    <strong>${escapeHtml(kpa.title)}</strong>
    ${kpa.description ? `<br><span class="small-note">${escapeHtml(kpa.description)}</span>` : ''}
    ${kpa.bullets && kpa.bullets.length ? `
      <ul class="kpa-bullets">
        ${kpa.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join('')}
      </ul>
    ` : ''}
  </td>
  <td><input type="text" class="kpa-period form-control" data-idx="${i}" placeholder="e.g. Q1 2025"></td>
  <td class="col-staff"><input type="number" min="1" max="5" class="kpa-self form-control" data-idx="${i}"></td>
  <td class="col-peer"><input type="number" min="1" max="5" class="kpa-peer form-control" data-idx="${i}"></td>
  <td class="col-hod"><input type="number" min="1" max="5" class="kpa-hod form-control" data-idx="${i}"></td>
  <td class="col-staff"><textarea class="kpa-staffComment form-control" data-idx="${i}"></textarea></td>
  <td class="col-hod"><textarea class="kpa-hodComment form-control" data-idx="${i}"></textarea></td>
</tr>`;
});
} else {
html += `<tr><td colspan="7" class="small-note">No detailed KPAs defined for this job title</td></tr>`;
}

html += `</tbody></table>`;
document.getElementById('detailedAssessmentArea').innerHTML = html;
applyRole();

if (currentReviewId) fillDetailedAssessmentsFromReview();
} else {
detailedSection.style.display = 'none';
}
}

// Add this function to fill detailed assessments from saved review
function fillDetailedAssessmentsFromReview() {
if (!currentReviewId) return;
const r = reviews.find(x => x.id === currentReviewId);
if (!r || !r.detailedAssessments) return;

const rows = document.querySelectorAll('#detailedTable tbody tr');
rows.forEach((tr, i) => {
const assessment = r.detailedAssessments[i] || {};
const periodEl = tr.querySelector('.kpa-period');
const selfEl = tr.querySelector('.kpa-self');
const peerEl = tr.querySelector('.kpa-peer');
const hodEl = tr.querySelector('.kpa-hod');
const staffCommentEl = tr.querySelector('.kpa-staffComment');
const hodCommentEl = tr.querySelector('.kpa-hodComment');

if (periodEl) periodEl.value = assessment.period || '';
if (selfEl) selfEl.value = assessment.selfRating || '';
if (peerEl) peerEl.value = assessment.peerRating || '';
if (hodEl) hodEl.value = assessment.hodRating || '';
if (staffCommentEl) staffCommentEl.value = assessment.staffComment || '';
if (hodCommentEl) hodCommentEl.value = assessment.hodComment || '';
});
}

// Update the updateJobTitles function to include detailed assessments
function updateJobTitles() {
const department = deptSel.value;
jobTitleEl.innerHTML = '<option value="">-- Select Job Title --</option>';

if (department && departmentData[department] && departmentData[department].jobTitles) {
const jobTitles = departmentData[department].jobTitles;
jobTitles.forEach(title => {
const option = document.createElement('option');
option.value = title;
option.textContent = title;
jobTitleEl.appendChild(option);
});
}

renderObjectives();
renderDetailedAssessments(); // Add this line
checkHRTaskNotifications();
}

// Update the saveReview function to include detailed assessments
function saveReview() {
const role = roleEl.value;
const EmailVal = (EmailEl.value || '').trim();
const staffNameVal = (staffNameEl.value || '').trim();

if (!EmailVal || !staffNameVal) {
if (!confirm('Staff Name or Email. missing. Continue saving?')) return;
}

let review = null;
if (currentReviewId) {
review = reviews.find(r => r.id === currentReviewId) || null;
}

if (!review) {
review = {
id: 'R' + Date.now(),
staffName: staffNameVal || '',
Email: EmailVal || '',
jobTitle: jobTitleEl.value || '',
department: deptSel.value || '',
periodFrom: periodFromEl.value || '',
periodTo: periodToEl.value || '',
objectives: [],
detailedAssessments: [], // Add this line
training: [],
suggestions: '',
signatures: { staff: null, peer: null, hod: null },
status: 'Draft',
lastUpdated: new Date().toISOString()
};
reviews.push(review);
currentReviewId = review.id;
}

if (role === 'staff' || role === 'hod') {
review.staffName = staffNameEl.value;
review.Email = EmailEl.value;
review.jobTitle = jobTitleEl.value;
review.department = deptSel.value;
review.periodFrom = periodFromEl.value;
review.periodTo = periodToEl.value;
}

// Save objectives (existing code)
const objRows = document.querySelectorAll('#objTable tbody tr');
if (objRows.length) {
review.objectives = review.objectives || [];
for (let i = 0; i < objRows.length; i++) {
// ... existing objectives code ...
}
}

// Save detailed assessments (new code)
const detailedRows = document.querySelectorAll('#detailedTable tbody tr');
if (detailedRows.length) {
review.detailedAssessments = review.detailedAssessments || [];
for (let i = 0; i < detailedRows.length; i++) {
const row = detailedRows[i];
const kpaTitle = row.querySelector('.kpa-text strong') ? 
row.querySelector('.kpa-text strong').textContent.trim() : '';
const periodVal = row.querySelector('.kpa-period') ? row.querySelector('.kpa-period').value : '';
const selfVal = row.querySelector('.kpa-self') ? row.querySelector('.kpa-self').value : '';
const peerVal = row.querySelector('.kpa-peer') ? row.querySelector('.kpa-peer').value : '';
const hodVal = row.querySelector('.kpa-hod') ? row.querySelector('.kpa-hod').value : '';
const staffComment = row.querySelector('.kpa-staffComment') ? row.querySelector('.kpa-staffComment').value : '';
const hodComment = row.querySelector('.kpa-hodComment') ? row.querySelector('.kpa-hodComment').value : '';

review.detailedAssessments[i] = review.detailedAssessments[i] || { kpaTitle };
review.detailedAssessments[i].kpaTitle = kpaTitle || review.detailedAssessments[i].kpaTitle || '';

if (role === 'staff' || role === 'hod') review.detailedAssessments[i].period = periodVal;
if (role === 'staff') { 
review.detailedAssessments[i].selfRating = selfVal; 
review.detailedAssessments[i].staffComment = staffComment; 
}
if (role === 'peer') { 
review.detailedAssessments[i].peerRating = peerVal; 
}
if (role === 'hod') { 
review.detailedAssessments[i].hodRating = hodVal; 
review.detailedAssessments[i].hodComment = hodComment; 
}
}
}

// Rest of existing saveReview function...
}

// Update the loadReview function to include detailed assessments
function loadReview(id) {
const r = reviews.find(x => x.id === id);
if (!r) { 
alert('Review not found'); 
return; 
}

currentReviewId = id;

// Existing load code...

// Add detailed assessments loading
renderDetailedAssessments();

// Rest of existing loadReview function...
}

// Update the newReview function to hide detailed section
function newReview() {
currentReviewId = null;
staffNameEl.value = '';
EmailEl.value = '';
deptSel.value = '';
jobTitleEl.innerHTML = '<option value="">-- Select Job Title --</option>';
periodFromEl.value = '';
periodToEl.value = '';
suggestionsText.value = '';
renderObjectives(); 
renderDetailedAssessments(); // Add this line
trainingBody.innerHTML = `<tr><td><textarea class="tn-need form-control"></textarea></td><td><textarea class="tn-activity form-control"></textarea></td></tr>`;
sigStaffPad.clear(); 
sigPeerPad.clear(); 
sigHodPad.clear();
updateStatus('New empty review. Fill and Save as Draft.');
}