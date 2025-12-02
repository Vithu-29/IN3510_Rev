// Main application logic
// Assumes `window.examData` and `window.comparisonData` are already available (loaded via data.js)

const state = {
    currentYear: '2025',
    currentQuestion: 'meta',
    mobileIpStep: 0,
    chartInstances: {},
};

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

function loadLecture(file, btnId) {
    const container = document.getElementById('app-content');

    // 1. Update Button Styles
    document.querySelectorAll('.lecture-btn').forEach(btn => {
        // Reset all buttons
        btn.classList.remove('bg-brand-600', 'text-white', 'border-brand-600');
        btn.classList.add('bg-stone-50', 'text-stone-600', 'border-stone-200');
    });

    // Highlight clicked button
    const activeBtn = document.querySelector(`button[data-id="${btnId}"]`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-stone-50', 'text-stone-600', 'border-stone-200');
        activeBtn.classList.add('bg-brand-600', 'text-white', 'border-brand-600');
    }

    // 2. Load Content
    if (file) {
        // Load the HTML file into an iframe for perfect style isolation
        container.innerHTML = `<iframe src="${file}" class="w-full h-full border-none" title="Lecture Content"></iframe>`;
    } else {
        // Placeholder for unlinked lectures
        container.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-stone-400 p-8">
                        <i class="ph ph-lock-key text-3xl mb-3"></i>
                        <p class="text-sm font-medium">Lecture ${btnId} content is not yet linked.</p>
                    </div>`;
    }

    // Close sidebar on mobile
    if (window.innerWidth < 768) {
        toggleSidebar();
    }
}

function changeYear(year) {
    state.currentYear = year;
    state.currentQuestion = 'meta';
    updateSidebarNav();
    router('meta');
    const mobileHeader = document.getElementById('mobile-header-title');
    if (mobileHeader) mobileHeader.innerText = `${examData[year].meta.title.split(' ')[0]} / ${year}`;

    // Scroll to top when changing year
    const appContent = document.getElementById('app-content');
    if (appContent) appContent.scrollTop = 0;
}

function router(questionId) {
    if (questionId === 'meta') {
        state.currentQuestion = 'meta';
        renderMeta(document.getElementById('app-content'));
    } else {
        state.currentQuestion = questionId;
        renderQuestion(document.getElementById('app-content'), questionId);
    }

    // Update active nav item
    document.querySelectorAll('.nav-item, .nav-item-sub').forEach(el => el.classList.remove('active'));
    const activeNav = document.getElementById(`nav-q-${questionId}`);
    if (activeNav) activeNav.classList.add('active');

    if (window.innerWidth < 768) toggleSidebar();

    // Scroll to top when navigating
    const appContent = document.getElementById('app-content');
    if (appContent) appContent.scrollTop = 0;
}

function updateSidebarNav() {
    const container = document.getElementById('question-nav-container');
    const currentPaper = examData[state.currentYear];

    let html = `
        <button onclick="router('meta')" id="nav-q-meta" class="nav-item w-full text-left px-6 py-3 text-sm text-stone-600 hover:bg-stone-50 transition-colors flex items-center gap-3">
            <i class="ph ph-chalkboard-simple text-lg"></i> Paper Overview
        </button>
        <div class="px-6 pt-4 pb-2 text-xs font-semibold text-stone-400 uppercase tracking-wider">Questions</div>
    `;

    html += currentPaper.meta.questions.map(q => `
        <button onclick="router('${q}')" id="nav-q-${q}" class="nav-item nav-item-sub w-full text-left pl-10 pr-6 py-2 text-sm text-stone-600 hover:bg-stone-50 transition-colors flex items-center gap-3">
            <i class="ph ph-caret-right text-xs"></i> ${q} - ${currentPaper[q].title}
        </button>
    `).join('');

    container.innerHTML = html;

    // Remove active class from all nav items
    document.querySelectorAll('.nav-item, .nav-item-sub').forEach(el => el.classList.remove('active'));

    // Add active class to current item
    const activeNav = document.getElementById(`nav-q-${state.currentQuestion}`);
    if (activeNav) activeNav.classList.add('active');
}

// Renderers
function renderMeta(container) {
    const data = examData[state.currentYear];
    const is2025 = state.currentYear === '2025';

    container.innerHTML = `
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div class="bg-gradient-to-r from-teal-700 to-slate-800 text-white rounded-2xl p-8 shadow-lg">
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="text-3xl font-bold mb-2">${data.meta.title}</h2>
                        <p class="opacity-90">Examination Paper Overview</p>
                    </div>
                    <i class="ph ph-file-text text-4xl opacity-50"></i>
                </div>
                <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div class="bg-white/10 p-3 rounded backdrop-blur-sm">
                        <span class="block opacity-70">Duration</span>
                        <span class="font-bold text-lg">3 Hours</span>
                    </div>
                    <div class="bg-white/10 p-3 rounded backdrop-blur-sm">
                        <span class="block opacity-70">Total Marks</span>
                        <span class="font-bold text-lg">${is2025 ? '100 (70 for Essay)' : '100'}</span>
                    </div>
                    <div class="bg-white/10 p-3 rounded backdrop-blur-sm">
                        <span class="block opacity-70">Assessment Weight</span>
                        <span class="font-bold text-lg">${is2025 ? '60%' : '70%'}</span>
                    </div>
                    <div class="bg-white/10 p-3 rounded backdrop-blur-sm">
                        <span class="block opacity-70">Questions</span>
                        <span class="font-bold text-lg">${data.meta.questions.length} Compulsory</span>
                    </div>
                </div>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                <h3 class="font-bold text-lg mb-4 text-stone-700 border-b pb-2">Paper Structure</h3>
                <p class="text-sm text-stone-600 mb-4">
                    Use the Questions panel on the left to navigate to the detailed analysis of each part of the exam paper.
                </p>
                <ul class="space-y-3 text-sm">
                    ${data.meta.questions.map(q => `
                        <li class="flex justify-between items-center bg-stone-50 p-3 rounded hover:bg-teal-50 cursor-pointer" onclick="router('${q}')">
                            <span class="flex items-center gap-2 font-semibold text-stone-700">${q} - ${data[q].title}</span>
                            <span class="text-xs text-teal-600">Explore <i class="ph ph-arrow-right ml-1"></i></span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

function renderQuestion(container, qId) {
    const qData = examData[state.currentYear][qId];

    container.innerHTML = `
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 class="text-3xl font-bold text-stone-800 border-b pb-2 mb-6">${qId}: ${qData.title}</h2>
            <p class="text-sm text-stone-500 mb-8">This section presents the sub-questions and interactive elements related to ${qId} from the ${examData[state.currentYear].meta.title} paper.</p>

            <div class="space-y-10">
                ${qData.subsections.map(subId => {
        const subData = qData.content[subId];
        if (!subData) return '';

        let contentHTML = '';
        if (subData.type === 'definitions') {
            contentHTML = renderDefinitions(subData);
        } else if (subData.type === 'list') {
            contentHTML = renderList(subData);
        } else if (subData.type === 'comparison_table') {
            contentHTML = renderComparisonTable(subData);
        } else if (subData.type === 'calculator') {
            contentHTML = renderCalculator(subData);
        } else if (subData.type === 'cdma_solver') {
            contentHTML = renderCDMASolver(subData, subId);
        } else if (subData.type === 'mobile_ip_flow') {
            contentHTML = renderMobileIpFlow(subData);
        } else if (subData.type === 'cellular_hierarchy') {
            contentHTML = renderCellularHierarchy(subData);
        } else if (subData.type === 'explanation' || subData.type === 'calculation_text') {
            contentHTML = `<p class="text-stone-700">${subData.text}</p>`;
            if (subData.diagram) contentHTML += `<div class="mt-4 p-4 bg-teal-50 rounded-lg text-teal-800 text-sm">
                                        <i class="ph ph-image-square text-lg mr-2"></i> ${subData.title} requires a diagram.
                                    </div>`;
        }

        return `
                        <div class="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                            <h4 class="font-bold text-lg text-teal-700 mb-4">${subId}: ${subData.title || subData.term || 'Sub-Question'}</h4>
                            ${contentHTML}
                        </div>
                    `;
    }).join('')}
            </div>
        </div>
    `;

    // After DOM update, initialize charts and visualizations
    setTimeout(() => {
        if (qData.subsections.some(subId => qData.content[subId].type === 'comparison_table')) {
            initComparisonCharts();
        }
        if (qData.subsections.some(subId => qData.content[subId].type === 'cdma_solver')) {
            const cdmaId = qData.subsections.find(subId => qData.content[subId].type === 'cdma_solver');
            if (cdmaId) {
                const subData = qData.content[cdmaId];
                const solverId = `cdma-${cdmaId}`;
                renderBits(`${solverId}-viz-user-a`, subData.dataA);
                renderBits(`${solverId}-viz-user-b`, subData.dataB);
                renderBits(`${solverId}-viz-user-c`, subData.dataC);
            }
        }
    }, 0);
}

function renderDefinitions(data) {
    return `<div class="space-y-3">${data.items.map(def => `
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-3 shadow-inner cursor-pointer group hover:shadow-md transition-shadow" onclick="this.classList.toggle('bg-stone-100')">
            <div class="flex items-start gap-3">
                <div class="mt-1 w-8 h-8 rounded bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <i class="ph ${def.icon}"></i>
                </div>
                <div>
                    <h5 class="font-bold text-stone-700 group-hover:text-teal-700 transition-colors">${def.term}</h5>
                    <p class="text-sm text-stone-600 mt-1">${def.definition}</p>
                </div>
            </div>
        </div>
    `).join('')}</div>`;
}

function renderList(data) {
    return `<p class="text-sm text-stone-500 mb-4">${data.title}</p>
             <ul class="space-y-2">${data.items.map(item => `
                <li class="flex items-center gap-3 text-sm text-stone-700 p-2 rounded bg-stone-50 hover:bg-stone-100">
                    <i class="ph ph-check-circle text-teal-500"></i>
                    ${item}
                </li>
            `).join('')}</ul>`;
}

function renderComparisonTable(data) {
    const compData = comparisonData[data.comparison];
    if (!compData) return '<p class="text-red-500">Comparison data not found.</p>';

    const label1 = data.comparison.split('_')[0].toUpperCase();
    const label2 = data.comparison.split('_')[1].toUpperCase();

    let chartHtml = '';
    if (data.comparison === 'wifi_bt') {
        chartHtml = `
            <div class="p-6 border-r border-stone-100">
                <div class="chart-container">
                    <canvas id="compChart-${data.comparison}"></canvas>
                </div>
                <p class="text-xs text-center text-stone-400 mt-2 italic">* Conceptual comparison values (1-10 scale)</p>
            </div>
        `;
    }

    return `
        <div class="${data.comparison === 'wifi_bt' ? 'grid md:grid-cols-2' : ''}">
            ${chartHtml}
            <div class="p-6 ${data.comparison === 'wifi_bt' ? '' : 'col-span-2'}">
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left border-collapse">
                        <thead class="text-xs text-stone-500 uppercase bg-stone-50 border-b border-stone-200">
                            <tr>
                                <th class="px-4 py-3">Aspect</th>
                                <th class="px-4 py-3 text-blue-600">${label1}</th>
                                <th class="px-4 py-3 text-indigo-600">${label2}</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-stone-100">
                            ${compData.aspects.map((aspect, i) => `
                                <tr class="hover:bg-stone-50">
                                    <td class="px-4 py-3 font-medium text-stone-700">${aspect}</td>
                                    <td class="px-4 py-3 text-stone-600">${compData[label1.toLowerCase()][i]}</td>
                                    <td class="px-4 py-3 text-stone-600">${compData[label2.toLowerCase()][i]}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function renderCalculator(data) {
    let formula = '';
    let result = 0;
    let inputFields = '';
    let resultDisplay = '';

    if (data.calculator === 'amps') {
        const bw_khz = data.bw_mhz * 1000;
        const guard_total = data.guard_khz * 2;
        result = Math.floor((bw_khz - guard_total) / data.ch_bw_khz);
        formula = `(Total BW - 2 * Guard Band) / Channel BW = (${bw_khz} - ${guard_total}) / ${data.ch_bw_khz} = ${result} Channels`;

        inputFields = `
             <div class="flex-1 space-y-2 w-full">
                 <label class="text-xs font-bold text-stone-500 uppercase">Total BW (MHz)</label>
                 <input type="number" value="${data.bw_mhz}" class="w-full p-2 border border-stone-300 rounded bg-stone-50" disabled>
             </div>
             <div class="flex-1 space-y-2 w-full">
                 <label class="text-xs font-bold text-stone-500 uppercase">Guard (kHz)</label>
                 <input type="number" value="${data.guard_khz}" class="w-full p-2 border border-stone-300 rounded bg-stone-50" disabled>
             </div>
             <div class="flex-1 space-y-2 w-full">
                 <label class="text-xs font-bold text-stone-500 uppercase">Channel BW (kHz)</label>
                 <input type="number" value="${data.ch_bw_khz}" class="w-full p-2 border border-stone-300 rounded bg-stone-50" disabled>
             </div>
         `;
        resultDisplay = `<div class="p-3 bg-stone-800 text-white rounded font-mono font-bold text-xl min-w-[100px] text-center">${result}</div>`;

    } else if (data.calculator === 'gsm') {
        const bitRate = data.data_rate_kbps * 1000; // bps
        const t_bit = 1 / bitRate; // seconds
        const t_slot = t_bit * data.bits_per_slot;
        const t_frame = t_slot * data.slots_per_frame;
        const t_wait = t_frame - t_slot;

        const formatTime = (t, unit) => {
            if (unit === 'us') return (t * 1e6).toFixed(3) + ' µs';
            if (unit === 'ms') return (t * 1e3).toFixed(3) + ' ms';
        };

        formula = `1/Data Rate = 1/270833 bps = ${formatTime(t_bit, 'us')} per bit. Slot: ${data.bits_per_slot} bits. Frame: ${data.slots_per_frame} slots.`;

        inputFields = `
            <div class="p-4 bg-stone-50 rounded border border-stone-200 col-span-2">
                <div class="text-xs text-stone-500 uppercase font-bold mb-2">Parameters</div>
                <div class="flex justify-between text-sm py-1 border-b border-stone-200">
                    <span>Bits per Slot</span> <span class="font-mono font-bold">${data.bits_per_slot} bits</span>
                </div>
                <div class="flex justify-between text-sm py-1 border-b border-stone-200">
                    <span>Frame Slots</span> <span class="font-mono font-bold">${data.slots_per_frame}</span>
                </div>
                <div class="flex justify-between text-sm py-1">
                    <span>Data Rate</span> <span class="font-mono font-bold">${data.data_rate_kbps} kbps</span>
                </div>
            </div>
            <button onclick="document.getElementById('gsm-results-${data.slots_per_frame}').classList.toggle('hidden')" class="w-full py-2 border-2 border-teal-600 text-teal-700 font-bold rounded hover:bg-teal-50 col-span-2">Calculate Durations</button>
        `;

        resultDisplay = `
            <div id="gsm-results-${data.slots_per_frame}" class="hidden flex flex-col justify-center space-y-3 col-span-2">
                <div class="flex justify-between items-center p-2 bg-teal-50 rounded text-teal-800">
                    <span class="text-sm">Bit Duration:</span>
                    <span class="font-mono font-bold">${formatTime(t_bit, 'us')}</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-teal-50 rounded text-teal-800">
                    <span class="text-sm">Slot Duration:</span>
                    <span class="font-mono font-bold">${formatTime(t_slot, 'ms')}</span>
                </div>
                <div class="flex justify-between items-center p-2 bg-teal-50 rounded text-teal-800">
                    <span class="text-sm">Frame Duration:</span>
                    <span class="font-mono font-bold">${formatTime(t_frame, 'ms')}</span>
                </div>
                 <div class="flex justify-between items-center p-2 bg-teal-50 rounded text-teal-800">
                    <span class="text-sm">Wait Time (Q2d/Q3d.iv):</span>
                    <span class="font-mono font-bold">${formatTime(t_wait, 'ms')}</span>
                </div>
            </div>
        `;
    }

    return `
         <div class="flex flex-col md:flex-row gap-6 items-end">
             ${data.calculator === 'amps' ? inputFields : ''}
             ${data.calculator === 'amps' ? resultDisplay : ''}
         </div>
         <div class="grid md:grid-cols-2 gap-8 mt-4">
             ${data.calculator === 'gsm' ? inputFields : ''}
             ${data.calculator === 'gsm' ? resultDisplay : ''}
         </div>
         <p class="text-xs text-stone-400 mt-2">Formula: ${formula}</p>
     `;
}

function renderCDMASolver(data, id) {
    const userA = data.codeA;
    const userB = data.codeB;
    const userC = data.codeC;
    const bitA = data.dataA;
    const bitB = data.dataB;
    const bitC = data.dataC;

    const bitLength = bitA.length;
    const codeLength = userA.length;
    const solverId = `cdma-${id}`;

    return `
         <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- User A Input -->
            <div class="bg-blue-50 p-4 rounded border border-blue-100">
                <h4 class="font-bold text-blue-800 mb-2">User A (${bitLength} bits)</h4>
                <div class="text-xs text-blue-600 mb-1">Code: [${userA.join(', ')}]</div>
                <div class="text-xs text-blue-600 mb-2">Data: ${bitA.join(' ')}</div>
                <div class="flex gap-1 overflow-x-auto p-2 bg-white rounded shadow-inner" id="${solverId}-viz-user-a"></div>
            </div>
            <!-- User B Input -->
            <div class="bg-orange-50 p-4 rounded border border-orange-100">
                <h4 class="font-bold text-orange-800 mb-2">User B (${bitLength} bits)</h4>
                <div class="text-xs text-orange-600 mb-1">Code: [${userB.join(', ')}]</div>
                <div class="text-xs text-orange-600 mb-2">Data: ${bitB.join(' ')}</div>
                <div class="flex gap-1 overflow-x-auto p-2 bg-white rounded shadow-inner" id="${solverId}-viz-user-b"></div>
            </div>
            <!-- User C Input -->
            <div class="bg-green-50 p-4 rounded border border-green-100">
                <h4 class="font-bold text-green-800 mb-2">User C (${bitLength} bits)</h4>
                <div class="text-xs text-green-600 mb-1">Code: [${userC.join(', ')}]</div>
                <div class="text-xs text-green-600 mb-2">Data: ${bitC.join(' ')}</div>
                <div class="flex gap-1 overflow-x-auto p-2 bg-white rounded shadow-inner" id="${solverId}-viz-user-c"></div>
            </div>
        </div>

        <div class="flex flex-col items-center gap-4">
            <button onclick="calculateCDMA('${solverId}', ${bitLength}, ${codeLength})" class="bg-stone-800 text-white px-6 py-2 rounded-lg hover:bg-stone-700 transition-colors shadow-lg shadow-stone-200 font-semibold flex items-center gap-2">
                <i class="ph ph-function"></i> Compute Summed Signal & Extract
            </button>

            <div id="${solverId}-results" class="w-full hidden space-y-4">
                <div class="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                    <h5 class="font-bold text-stone-700 text-sm mb-2">Summed Signal (Transmitted)</h5>
                    <p class="font-mono text-sm tracking-widest break-all" id="${solverId}-sum-display"></p>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="p-3 bg-blue-50 border border-blue-100 rounded text-center">
                        <div class="text-xs text-blue-500 uppercase font-bold">Extracted A (Result)</div>
                        <div class="font-mono font-bold text-blue-900 text-lg" id="${solverId}-res-a"></div>
                    </div>
                    <div class="p-3 bg-orange-50 border border-orange-100 rounded text-center">
                        <div class="text-xs text-orange-500 uppercase font-bold">Extracted B (Result)</div>
                        <div class="font-mono font-bold text-orange-900 text-lg" id="${solverId}-res-b"></div>
                    </div>
                    <div class="p-3 bg-green-50 border border-green-100 rounded text-center">
                        <div class="text-xs text-green-500 uppercase font-bold">Extracted C (Result)</div>
                        <div class="font-mono font-bold text-green-900 text-lg" id="${solverId}-res-c"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderMobileIpFlow(data) {
    return `
        <div class="flex justify-between items-center mb-6">
            <p class="text-sm text-stone-500">${data.note}</p>
            <div class="flex gap-2">
                <button onclick="nextMobileIpStep()" class="px-3 py-1 bg-teal-600 text-white text-sm rounded hover:bg-teal-700">Next Step</button>
                <button onclick="resetMobileIp()" class="px-3 py-1 bg-stone-200 text-stone-600 text-sm rounded hover:bg-stone-300">Reset</button>
            </div>
        </div>

        <div class="relative h-64 bg-stone-50 rounded-lg border border-stone-200 overflow-hidden" id="mip-canvas">
            <div class="absolute inset-y-0 left-0 w-1/3 bg-blue-50 border-r border-blue-100 flex items-end p-2 text-xs text-blue-400 font-bold">Home Network</div>
            <div class="absolute inset-y-0 left-1/3 w-1/3 bg-orange-50 border-r border-orange-100 flex items-end p-2 text-xs text-orange-400 font-bold">Foreign Network (Old)</div>
            <div class="absolute inset-y-0 right-0 w-1/3 bg-green-50 flex items-end p-2 text-xs text-green-400 font-bold">Foreign Network (New)</div>

            <div class="absolute top-10 left-[10%] w-12 h-12 bg-blue-500 rounded text-white flex items-center justify-center text-xs font-bold shadow-md">HA</div>
            <div class="absolute top-10 left-[45%] w-12 h-12 bg-orange-500 rounded text-white flex items-center justify-center text-xs font-bold shadow-md">FAold</div>
            <div class="absolute top-10 left-[80%] w-12 h-12 bg-green-500 rounded text-white flex items-center justify-center text-xs font-bold shadow-md">FAnew</div>
            <div class="absolute top-40 left-[5%] w-12 h-12 bg-stone-700 rounded text-white flex items-center justify-center text-xs font-bold shadow-md">CN</div>

            <div id="mn-node" class="absolute top-40 left-[45%] w-10 h-10 bg-teal-600 rounded-full border-2 border-white text-white flex items-center justify-center text-[10px] font-bold shadow-xl transition-all duration-1000 z-10">MN</div>

            <div id="mip-status" class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-xs font-semibold shadow-sm border border-stone-200">MN is at Old Foreign Agent</div>
        </div>
    `;
}

function renderCellularHierarchy(data) {
    return `
        <p class="text-sm text-stone-500 mb-4">Identify the core components of the cellular network hierarchy (Q1b/Q2d).</p>

        <div class="flex flex-col items-center justify-center space-y-4">
            <div class="w-48 p-3 bg-stone-800 text-white text-center rounded shadow-lg">
                <span class="font-mono font-bold">PSTN / ISDN</span>
            </div>
            <div class="h-8 w-0.5 bg-stone-300"></div>
            <div class="w-48 p-3 bg-teal-600 text-white text-center rounded shadow-lg border-2 border-teal-400">
                <span class="font-bold">Component (i) is: ${data.i}</span>
            </div>
            <div class="h-8 w-0.5 bg-stone-300"></div>
            <div class="w-32 p-3 bg-teal-500 text-white text-center rounded shadow border-2 border-teal-300">
                <span class="font-bold">Component (ii) is: ${data.ii}</span>
            </div>
            <div class="flex gap-20">
                <div class="h-8 w-0.5 bg-stone-300 -rotate-12 origin-bottom"></div>
                <div class="h-8 w-0.5 bg-stone-300 rotate-12 origin-bottom"></div>
            </div>
            <div class="flex gap-4">
                <div class="w-24 h-24 bg-teal-50 border-2 border-teal-500 text-teal-700 flex flex-col items-center justify-center rounded-full text-xs text-center font-bold">Base Station</div>
                <div class="w-24 h-24 bg-teal-50 border-2 border-teal-500 text-teal-700 flex flex-col items-center justify-center rounded-full text-xs text-center font-bold">Base Station</div>
            </div>
        </div>
    `;
}

// Chart initialization
function initComparisonCharts() {
    Object.values(state.chartInstances || {}).forEach(chart => chart.destroy());
    state.chartInstances = {};

    const ctx = document.getElementById('compChart-wifi_bt');
    if (ctx) {
        const newChart = new Chart(ctx.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['Data Rate', 'Range', 'Power Consumption', 'Cost', 'Complexity'],
                datasets: [{
                    label: 'Wi-Fi',
                    data: [9, 8, 9, 7, 8],
                    fill: true,
                    backgroundColor: 'rgba(37, 99, 235, 0.2)',
                    borderColor: 'rgb(37, 99, 235)',
                    pointBackgroundColor: 'rgb(37, 99, 235)',
                }, {
                    label: 'Bluetooth',
                    data: [3, 2, 2, 3, 4],
                    fill: true,
                    backgroundColor: 'rgba(79, 70, 229, 0.2)',
                    borderColor: 'rgb(79, 70, 229)',
                    pointBackgroundColor: 'rgb(79, 70, 229)',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: { line: { borderWidth: 2 } },
                scales: { r: { suggestedMin: 0, suggestedMax: 10, ticks: { display: false } } }
            }
        });
        state.chartInstances['wifi_bt'] = newChart;
    }
}

// Mobile IP animation logic
function nextMobileIpStep() {
    const mn = document.getElementById('mn-node');
    const status = document.getElementById('mip-status');
    if (!mn || !status) return;

    state.mobileIpStep = (state.mobileIpStep + 1) % 4;

    if (state.mobileIpStep === 1) {
        mn.style.left = '80%';
        status.innerText = "1. MN moves to New FA & discovers Agent";
        status.classList.add('text-teal-600');
    } else if (state.mobileIpStep === 2) {
        mn.classList.add('animate-pulse');
        status.innerText = "2. MN Registers with FA_new -> HA Updates binding";
    } else if (state.mobileIpStep === 3) {
        mn.classList.remove('animate-pulse');
        status.innerText = "3. HA Tunnels packets from CN to FA_new";
    } else {
        resetMobileIp();
    }
}

function resetMobileIp() {
    const mn = document.getElementById('mn-node');
    const status = document.getElementById('mip-status');
    if (!mn || !status) return;

    mn.style.left = '45%';
    mn.classList.remove('animate-pulse');
    status.innerText = "MN is at Old Foreign Agent";
    status.classList.remove('text-teal-600');
    state.mobileIpStep = 0;
}

// CDMA helpers
function renderBits(id, bits) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = bits.map(b =>
        `<div class="h-4 w-4 ${b === 1 ? 'bg-stone-800' : 'bg-stone-200'} rounded-sm shrink-0"></div>`
    ).join('');
}

function calculateCDMA(solverId, bitLength, codeLength) {
    const currentQuestion = examData[state.currentYear][state.currentQuestion];
    const cdmaData = currentQuestion.content[currentQuestion.subsections.find(id => currentQuestion.content[id].type === 'cdma_solver')];

    const codeA = cdmaData.codeA;
    const codeB = cdmaData.codeB;
    const codeC = cdmaData.codeC;

    const bitsA = cdmaData.dataA;
    const bitsB = cdmaData.dataB;
    const bitsC = cdmaData.dataC;

    const bipolar = (bit) => bit === 1 ? 1 : -1;

    let summedSignal = [];

    for (let i = 0; i < bitLength; i++) {
        const valA = bipolar(bitsA[i]);
        const valB = bipolar(bitsB[i]);
        const valC = bipolar(bitsC[i]);

        for (let j = 0; j < codeLength; j++) {
            let sum = (valA * codeA[j]) + (valB * codeB[j]) + (valC * codeC[j]);
            summedSignal.push(sum);
        }
    }

    const sumEl = document.getElementById(`${solverId}-sum-display`);
    if (sumEl) sumEl.innerText = `[${summedSignal.join(', ')}]`;
    const resultsEl = document.getElementById(`${solverId}-results`);
    if (resultsEl) resultsEl.classList.remove('hidden');

    const decode = (code) => {
        let result = [];
        for (let i = 0; i < bitLength; i++) {
            let chunk = summedSignal.slice(i * codeLength, (i + 1) * codeLength);
            let correlation = 0;
            for (let k = 0; k < codeLength; k++) correlation += chunk[k] * code[k];

            let bit_val = correlation / codeLength;
            let bit = bit_val === 1 ? 1 : (bit_val === -1 ? 0 : 'E');
            result.push(bit);
        }
        return result.join('');
    }

    const resA = document.getElementById(`${solverId}-res-a`);
    const resB = document.getElementById(`${solverId}-res-b`);
    const resC = document.getElementById(`${solverId}-res-c`);
    if (resA) resA.innerText = decode(codeA);
    if (resB) resB.innerText = decode(codeB);
    if (resC) resC.innerText = decode(codeC);
}

// Initialize app on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const initialYear = '2025';
    const yearSelect = document.getElementById('year-select');
    if (yearSelect) yearSelect.value = initialYear;
    changeYear(initialYear);
});
