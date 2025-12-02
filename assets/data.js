// Data module: exam data and comparison data
// Aligned with Lectures 1-11 content
window.examData = {
    '2025': {
        meta: { title: "January 2025 (IN 3510)", questions: ['Q1', 'Q2', 'Q3'] },
        Q1: {
            title: "Fundamentals & Architecture", subsections: ['Q1a', 'Q1b', 'Q1c', 'Q1d'], content: {
                Q1a: {
                    type: 'definitions', title: "Explain Following Terms", items: [
                        { term: "Modulation", definition: "The process of adding information (e.g., voice) to a carrier electromagnetic (radio) signal by varying its properties.", icon: "ph-wave-sine" }, // Lecture 2
                        { term: "Multipath Fading", definition: "Signal interference caused by multiple copies of the signal arriving at the receiver with different delays due to reflection, causing constructive and destructive interference.", icon: "ph-arrows-split" }, // Lecture 2 & 6
                        { term: "Frequency Selective Fading", definition: "A type of multipath fading where the bandwidth of the signal is wider than the coherence bandwidth of the channel, causing specific frequency components to be attenuated differently.", icon: "ph-chart-bar" } // Lecture 6
                    ]
                },
                Q1b: { type: 'list', title: "Zigbee Characteristics (Q1b) [Lecture 9]", items: ["Low power consumption (battery life: years)", "Low data rate (20-250 kbps)", "Supports large networks (>64,000 nodes)", "Mesh, Star, and Cluster Tree topologies", "Based on IEEE 802.15.4 standard", "Device types: Coordinator, FFD, RFD"] },
                Q1c: { type: 'mobile_ip_flow', title: "Mobile IP Handover (Q1c) [Lecture 10]", note: "Diagram should show: 1. MN moves to Foreign Network. 2. FA advertises COA. 3. MN requests registration via FA to HA. 4. HA updates binding (Home IP -> COA). 5. HA tunnels packets to FA." },
                Q1d: { type: 'comparison_table', title: "Wi-Fi vs. Bluetooth (Q1d)", comparison: 'wifi_bt' },
            }
        },
        Q2: {
            title: "System Analysis & Cellular", subsections: ['Q2a', 'Q2b', 'Q2c', 'Q2d'], content: {
                Q2a: { type: 'calculator', title: "AMPS Channel Calculation (Q2a) [Lecture 5]", calculator: 'amps', bw_mhz: 16.474, guard_khz: 12, ch_bw_khz: 35, expected: 470 }, // Formula: (Bt - 2*Bguard) / Bch
                Q2b: { type: 'calculation_text', title: "GSM Channels (Q2b) [Lecture 5]", text: "Formula: $N = \\frac{m \\times (B_{tot} - 2B_{guard})}{B_{ch}}$. For GSM: $m=8$ (time slots), $B_{ch}=200$ kHz. If Total Spectrum $B_{tot}$ is given (e.g., 25MHz), calculate N. Example from slides: 25MHz yields 1000 simultaneous users." },
                Q2c: { type: 'calculator', title: "GSM Frame Timing (Q2c) [Lecture 5]", calculator: 'gsm', bits_per_slot: 156.25, slots_per_frame: 8, data_rate_kbps: 270.833 },
                Q2d: { type: 'cellular_hierarchy', title: "Cellular Hierarchy Structure (Q2d) [Lecture 7]", i: 'MSC (Mobile Switching Center) - Switching & Routing', ii: 'RNC/BSC (Radio Network Controller) - Resource Control' },
            }
        },
        Q3: {
            title: "W-CDMA, CDMA & Issues", subsections: ['Q3a', 'Q3b', 'Q3c', 'Q3d'], content: {
                Q3a: { type: 'comparison_table', title: "W-CDMA vs. CDMA (Q3a)", comparison: 'wcdma_cdma' },
                Q3b: { type: 'list', title: "Bluetooth Advantages (Q3b)", items: ["Robustness and dependability (used in billions of devices)", "Low implementation cost", "Low power consumption (especially BLE)", "Massive market penetration", "Ad-hoc networking (Piconet/Scatternet)"] },
                Q3c: { type: 'list', title: "Mobile IP Issues (Q3c) [Lecture 10]", items: ["Triangular Routing (Inefficient path CN->HA->MN)", "Security (Authentication with FA)", "Firewalls (Ingress filtering blocks reverse tunnel)", "QoS (Tunneling complicates resource reservation)"] },
                Q3d: { type: 'cdma_solver', title: "CDMA Chip Code Solver (Q3d) [Lecture 4]", codeA: [1, -1, 1, -1], codeB: [-1, 1, 1, -1], codeC: [-1, -1, 1, 1], dataA: [1, 0, 1, 0], dataB: [1, 1, 0, 1], dataC: [1, 0, 1, 1] },
            }
        },
    },
    '2022': {
        meta: { title: "November 2022 (IN 4500)", questions: ['Q1', 'Q2', 'Q3', 'Q4'] },
        Q1: {
            title: "CSMA/CA & IP", subsections: ['Q1a', 'Q1b', 'Q1c', 'Q1d'], content: {
                Q1a: { type: 'explanation', title: "Hidden Terminal Problem (Q1a) [Lecture 10]", text: "Occurs when A and C want to communicate with B, but A and C cannot hear each other. If both transmit to B simultaneously, collision occurs at B. Solved using MACA (RTS/CTS handshake)." },
                Q1b: { type: 'comparison_table', title: "Wireless vs. Wired Networks (Q1b) [Lecture 1]", comparison: 'wired_wireless' },
                Q1c: { type: 'mobile_ip_flow', title: "Mobile IP Registration (Q1c) [Lecture 10]", note: "1. Agent Advertisement (HA/FA broadcast). 2. Mobile Node receives COA. 3. Registration Request sent to HA. 4. Registration Reply (Auth granted)." },
                Q1d: { type: 'explanation', title: "CSMA/CD vs. CSMA/CA (Q1d) [Lecture 11]", text: "CSMA/CD (Collision Detection) is used in wired LANs; it stops transmission upon collision. CSMA/CA (Collision Avoidance) is used in WLANs because collision detection is unreliable (near-far problem/hidden terminal). CA uses RTS/CTS to reserve the channel *before* sending data." },
            }
        },
        Q2: {
            title: "Definitions & CDMA", subsections: ['Q2a', 'Q2b', 'Q2c'], content: {
                Q2a: { type: 'list', title: "Zigbee Device Types (Q2a) [Lecture 9]", items: ["Zigbee Coordinator (ZC): Root of network, stores security keys, one per network.", "Full Function Device (FFD): Router, can relay data, mains powered.", "Reduced Function Device (RFD): End node/Sensor, cannot relay, sleep mode supported."] },
                Q2b: {
                    type: 'definitions', items: [
                        { term: "Modulation", definition: "Adding information (e.g. voice) to a carrier electromagnetic signal.", icon: "ph-wave-sine" },
                        { term: "Multipath Fading", definition: "Constructive and destructive interference of multiple signal paths from transmitter to receiver.", icon: "ph-arrows-split" },
                        { term: "Frequency Selective Fading", definition: "Multipath fading affecting specific frequency components of the signal (Signal BW > Coherence BW).", icon: "ph-chart-bar" },
                        { term: "Flat Fading", definition: "Multipath fading where all frequency components are affected equally (Signal BW < Coherence BW).", icon: "ph-chart-line" }
                    ]
                },
                Q2c: { type: 'cdma_solver', title: "CDMA Chip Code Solver (Q2c)", codeA: [-1, 1, -1, 1], codeB: [-1, -1, 1, 1], codeC: [-1, 1, 1, -1], dataA: [1, 1, 0], dataB: [1, 0, 1], dataC: [0, 0, 1] },
            }
        },
        Q3: {
            title: "5G, AMPS & Mobile IPv6", subsections: ['Q3a', 'Q3b', 'Q3c', 'Q3d'], content: {
                Q3a: { type: 'list', title: "B5G/6G Improvements (Q3a) [Lecture 8]", items: ["Speed: 100 Gbps to 1 Tbps", "Latency: As low as 0.1 ms", "Density: 100 devices per cubic meter", "Ultra-low power consumption", "Extended coverage via satellite"] },
                Q3b: { type: 'calculator', title: "AMPS Channel Calculation (Q3b)", calculator: 'amps', bw_mhz: 20.736, guard_khz: 18, ch_bw_khz: 45, expected: 460 },
                Q3c: { type: 'list', title: "Mobile IPv6 Advantages (Q3c) [Lecture 10]", items: ["No separate Foreign Agent (FA) needed.", "CoA via address auto-configuration.", "Route Optimization (MN sends CoA directly to CN, bypassing HA for data).", "Integrated security (IPsec)."] },
                Q3d: { type: 'calculator', title: "GSM Frame Timing (Q3d)", calculator: 'gsm', bits_per_slot: 156.25, slots_per_frame: 8, data_rate_kbps: 270.833 },
            }
        },
        Q4: {
            title: "Cellular & Comparison", subsections: ['Q4a', 'Q4b', 'Q4c', 'Q4d'], content: {
                Q4a: { type: 'explanation', title: "Frequency Reuse (Q4a) [Lecture 7]", text: "The practice of using the same frequency band in different cells within a network, provided they are separated by a sufficient reuse distance (D) to minimize interference. Cluster size N determines the pattern. $D/R = \\sqrt{3N}$.", diagram: true },
                Q4b: { type: 'calculation_text', title: "FDMA Cellular System Analysis (Q4b) [Lecture 7]", text: "Given: N=12, Total Channels (M)=900. i) Reuse Ratio Q = $\\sqrt{3N} = \\sqrt{36} = 6$. ii) Channels per cell $k = M/N = 900/12 = 75$. iii) Total capacity = $k \\times \\text{number of cells}$." },
                Q4c: { type: 'list', title: "Mote Components (Q4c) [Lecture 9]", items: ["Sensing Unit (Sensors + ADC)", "Processing Unit (Microcontroller + Memory)", "Transceiver (RF or Optical)", "Power Unit (Battery/Solar)"] },
                Q4d: { type: 'comparison_table', title: "Zigbee vs. Bluetooth (Q4d)", comparison: 'zigbee_bt_short' },
            }
        },
    },
    '2019': {
        meta: { title: "July 2019 (IN 4500)", questions: ['Q1', 'Q2', 'Q3', 'Q4'] },
        Q1: {
            title: "CSMA/CA & Definitions", subsections: ['Q1a', 'Q1b', 'Q1c', 'Q1d'], content: {
                Q1a: {
                    type: 'definitions', items: [
                        { term: "Modulation", definition: "Adding information to a carrier signal.", icon: "ph-wave-sine" },
                        { term: "Multipath Fading", definition: "Interference from multiple signal paths causing fluctuations.", icon: "ph-arrows-split" },
                        { term: "Frequency Selective Fading", definition: "Fading affecting specific frequencies (Wideband systems).", icon: "ph-chart-bar" },
                        { term: "Flat Fading", definition: "Fading affecting all frequencies equally (Narrowband systems).", icon: "ph-chart-line" }
                    ]
                },
                Q1b: { type: 'cellular_hierarchy', title: "3G/UMTS Hierarchy (Q1b) [Lecture 7]", i: 'Node B (Base Station)', ii: 'RNC (Radio Network Controller) - Controls Node Bs' },
                Q1c: { type: 'mobile_ip_flow', title: "Mobile IP Registration (Q1c) [Lecture 10]", note: "1. MN gets CoA from FA. 2. MN registers with HA via FA. 3. HA creates tunnel. 4. HA sends reply." },
                Q1d: { type: 'explanation', title: "CSMA/CD vs. CSMA/CA (Q1d)", text: "CSMA/CD (Wired): Detects collision, jams signal, random backoff. CSMA/CA (Wireless): Avoids collision using IFS wait times and RTS/CTS handshake because collisions cannot be easily detected at the sender." },
            }
        },
        Q2: {
            title: "AMPS, GSM & Mobility", subsections: ['Q2a', 'Q2b', 'Q2c', 'Q2d'], content: {
                Q2a: { type: 'list', title: "MME Functions (Q2a) [Lecture 8]", items: ["NAS Signaling & Security", "Idle state mobility handling", "Gateway Selection (S-GW, P-GW)", "Authentication & Authorization", "Roaming support"] },
                Q2b: { type: 'calculator', title: "AMPS Channel Calculation (Q2b)", calculator: 'amps', bw_mhz: 27.1, guard_khz: 20, ch_bw_khz: 60, expected: 451 },
                Q2c: { type: 'list', title: "CDMA Advantages (Q2c) [Lecture 4]", items: ["Frequency reuse factor of 1 (Universal Reuse)", "Soft Handoff capability", " resistance to multipath fading (Rake receiver)", " inherent security (Spread Spectrum)"] },
                Q2d: { type: 'calculator', title: "GSM Frame Timing (Q2d)", calculator: 'gsm', bits_per_slot: 156.25, slots_per_frame: 8, data_rate_kbps: 270.833 },
            }
        },
        Q3: {
            title: "Frequency Reuse & Comparison", subsections: ['Q3a', 'Q3b', 'Q3c', 'Q3d'], content: {
                Q3a: { type: 'explanation', title: "Frequency Reuse (Q3a) [Lecture 7]", text: "Assigning the same frequency channels to different cells separated by distance D to reuse spectrum. Limited by Co-channel interference. Cluster size N = i^2 + ij + j^2.", diagram: true },
                Q3b: { type: 'calculation_text', title: "FDMA Analysis (Q3b)", text: "Given N=12, Channels=900. i) Q = sqrt(3*12) = 6. ii) Channels/cell = 900/12 = 75." },
                Q3c: { type: 'list', title: "Mote Components (Q3c) [Lecture 9]", items: ["Sensing Unit", "Processing Unit (Storage/CPU)", "Transceiver Unit", "Power Unit"] },
                Q3d: { type: 'comparison_table', title: "Wi-Fi vs. Bluetooth (Q3d)", comparison: 'wifi_bt' },
            }
        },
        Q4: {
            title: "CDMA & 5G", subsections: ['Q4a', 'Q4b', 'Q4c', 'Q4d'], content: {
                Q4a: { type: 'list', title: "CDMA Disadvantages (Q4a) [Lecture 4/6]", items: ["Near-Far Problem (requires precise power control)", "Complex signal regeneration/hardware", "Soft Capacity (quality degrades as users increase)", "Large bandwidth requirement"] },
                Q4b: { type: 'list', title: "4G/LTE Features (Q4b) [Lecture 8]", items: ["All-IP Network", "OFDM (Downlink) / SC-FDMA (Uplink)", "Speeds: 100 Mbps (moving) - 1 Gbps (stationary)", "Simplified architecture (eNodeB, MME, GW)"] },
                Q4c: { type: 'list', title: "B5G/6G Objectives (Q4c) [Lecture 8]", items: ["100 Gbps - 1 Tbps speed", "0.1 ms Latency", "Ultra-Reliability", "Massive IoT density"] },
                Q4d: { type: 'cdma_solver', title: "CDMA Chip Code Solver (Q4d)", codeA: [-1, 1, -1, 1], codeB: [-1, -1, 1, 1], codeC: [-1, 1, 1, -1], dataA: [1, 0, 0], dataB: [1, 1, 0], dataC: [1, 0, 1] },
            }
        },
    },
};

window.comparisonData = {
    'wifi_bt': {
        aspects: ['Data Rate', 'Range', 'Max Nodes', 'Power', 'Application'],
        wifi: ['High (300 Mbps+)', 'Medium (190m)', '2007+', 'High consumption', 'LAN, Internet, Video'],
        bt: ['Low (1-3 Mbps)', 'Short (10m)', '7 (active)', 'Low (BLE is excellent)', 'Cable replacement, Audio']
    },
    'wcdma_cdma': {
        aspects: ['Bandwidth', 'Chip Rate', 'Data Rate', 'Synchronization'],
        wcdma: ['5 MHz (Wide)', '3.84 Mcps', 'Up to 2 Mbps', 'Asynchronous (No GPS needed)'],
        cdma: ['1.25 MHz (Narrow)', '1.2288 Mcps', '14.4 - 115 kbps', 'Synchronous (GPS required)']
    },
    'wired_wireless': {
        aspects: ['Bandwidth', 'Reliability', 'Interference', 'Security', 'Mobility'],
        wired: ['High', 'High/Stable', 'Low', 'Physical access needed', 'None'],
        wireless: ['Low', 'Variable/Unstable', 'High (Hidden terminal)', 'Encryption needed', 'High']
    },
    'zigbee_bt5': {
        aspects: ['Power Profile', 'Max Nodes', 'Range', 'Topology', 'Data Rate'],
        zigbee: ['Years (Very Low)', '> 64,000', '70m - 300m', 'Mesh', '250 Kbps'],
        bt5: ['Days-Months', '7 (Piconet)', '10m (typ)', 'Star/Piconet', '1-2 Mbps']
    },
    'zigbee_bt_short': {
        aspects: ['Power', 'Complexity', 'Nodes', 'Range'],
        zigbee: ['Years', 'Simple', '64000+', '70-300m'],
        bt: ['Days-Months', 'Complex', '7', '10m']
    }
};