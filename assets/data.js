// Data module: exam data and comparison data
// Expose as globals so the non-module app script can use them
window.examData = {
    '2025': {
        meta: { title: "January 2025 (IN 3510)", questions: ['Q1', 'Q2', 'Q3'] },
        Q1: {
            title: "Fundamentals & Architecture", subsections: ['Q1a', 'Q1b', 'Q1c', 'Q1d'], content: {
                Q1a: {
                    type: 'definitions', title: "Explain Following Terms", items: [
                        { term: "Modulation", definition: "The process of varying one or more properties of a periodic waveform, called the carrier signal, with a modulating signal that contains information to be transmitted.", icon: "ph-wave-sine" },
                        { term: "Multipath Fading", definition: "A form of radio signal interference caused by the signal reaching the receiving antenna by two or more paths. Causes constructive and destructive interference.", icon: "ph-arrows-split" },
                        { term: "Frequency Selective Fading", definition: "A radio propagation anomaly where the coherence bandwidth of the channel is smaller than the bandwidth of the signal. Different frequency components of the signal experience different fading magnitudes.", icon: "ph-chart-bar" }
                    ]
                },
                Q1b: { type: 'list', title: "Zigbee Characteristics (Q1b)", items: ["Low Power Consumption", "Low Data Rate", "Short Range", "Mesh Networking Capability", "Based on IEEE 802.15.4", "Used for IoT/Home Automation"] },
                Q1c: { type: 'mobile_ip_flow', title: "Mobile IP Handover (Q1c)", note: "Show how CN continues to communicate with MN after FA change." },
                Q1d: { type: 'comparison_table', title: "Wi-Fi vs. Bluetooth (Q1d)", comparison: 'wifi_bt' },
            }
        },
        Q2: {
            title: "System Analysis & Cellular", subsections: ['Q2a', 'Q2b', 'Q2c', 'Q2d'], content: {
                Q2a: { type: 'calculator', title: "AMPS Channel Calculation (Q2a)", calculator: 'amps', bw_mhz: 16.474, guard_khz: 12, ch_bw_khz: 35, expected: 470 },
                Q2b: { type: 'calculation_text', title: "GSM Channels (Q2b)", text: "Given total spectrum of 37.53 MHz for TDMA/FDD and 8 users per channel. Channels = Total BW / (2 * Channel BW). Without channel BW provided, the number cannot be definitively calculated, but this tests understanding of FDD/TDMA allocation." },
                Q2c: { type: 'calculator', title: "GSM Frame Timing (Q2c)", calculator: 'gsm', bits_per_slot: 156.25, slots_per_frame: 8, data_rate_kbps: 270.833 },
                Q2d: { type: 'cellular_hierarchy', title: "Cellular Hierarchy Structure (Q2d)", i: 'MSC (Mobile Switching Center)', ii: 'BSC (Base Station Controller)' },
            }
        },
        Q3: {
            title: "W-CDMA, CDMA & Issues", subsections: ['Q3a', 'Q3b', 'Q3c', 'Q3d'], content: {
                Q3a: { type: 'comparison_table', title: "W-CDMA vs. CDMA (Q3a)", comparison: 'wcdma_cdma' },
                Q3b: { type: 'list', title: "Bluetooth Advantages (Q3b)", items: ["Low power consumption (especially BLE)", "Low cost and small size", "Automatic device discovery (simple connection)", "Ubiquity (standardized across devices)"] },
                Q3c: { type: 'list', title: "Mobile Networking Research Issues (Q3c)", items: ["Security and Privacy", "Quality of Service (QoS) Guarantees", "Power Consumption/Energy Efficiency", "Seamless Mobility Management"] },
                Q3d: { type: 'cdma_solver', title: "CDMA Chip Code Solver (Q3d)", codeA: [1, -1, 1, -1], codeB: [-1, 1, 1, -1], codeC: [-1, -1, 1, 1], dataA: [1, 0, 1, 0], dataB: [1, 1, 0, 1], dataC: [1, 0, 1, 1] },
            }
        },
    },
    '2022': {
        meta: { title: "November 2022 (IN 4500)", questions: ['Q1', 'Q2', 'Q3', 'Q4'] },
        Q1: {
            title: "CSMA/CA & IP", subsections: ['Q1a', 'Q1b', 'Q1c', 'Q1d'], content: {
                Q1a: { type: 'explanation', title: "Hidden Node Problem (Q1a)", text: "The Hidden Node Problem occurs when a node (A) can communicate with a central access point (B), but not with another node (C) also communicating with B. This leads to C transmitting while A is transmitting, causing collisions at B, despite A and C believing the channel is clear. Solved by mechanisms like RTS/CTS." },
                Q1b: { type: 'comparison_table', title: "Wireless vs. Wired Networks (Q1b)", comparison: 'wired_wireless' },
                Q1c: { type: 'mobile_ip_flow', title: "Mobile IP Registration Steps (Q1c)", note: "Briefly explain the four steps (Agent Discovery, Registration, Tunneling) using a diagram." },
                Q1d: { type: 'explanation', title: "CSMA/CD vs. CSMA/CA (Q1d)", text: "CSMA/CD is unsuitable for WLANs because: 1) Detecting collision while transmitting is difficult due to low received signal power at the sender (far-near problem/power constraints). 2) Hidden Node problem prevents all collisions from being detected. CSMA/CA uses RTS/CTS handshake to reserve the channel before transmitting." },
            }
        },
        Q2: {
            title: "Definitions & CDMA", subsections: ['Q2a', 'Q2b', 'Q2c'], content: {
                Q2a: { type: 'list', title: "Zigbee Device Types (Q2a)", items: ["Coordinator (NC) - Starts network, stores security keys, bridge to other networks.", "Router (ZR) - Extends range, passes data between devices.", "End Device (ZED) - Simple, battery-powered, only talks to router/coordinator, sleeps most of the time."] },
                Q2b: {
                    type: 'definitions', items: [
                        { term: "Modulation", definition: "The process of varying one or more properties of a periodic waveform, called the carrier signal, with a modulating signal that contains information to be transmitted.", icon: "ph-wave-sine" },
                        { term: "Multipath Fading", definition: "A form of radio signal interference caused by the signal reaching the receiving antenna by two or more paths. Causes constructive and destructive interference.", icon: "ph-arrows-split" },
                        { term: "Frequency Selective Fading", definition: "Coherence bandwidth is smaller than the signal bandwidth, causing different frequencies to fade differently.", icon: "ph-chart-bar" },
                        { term: "Flat Fading", definition: "Coherence bandwidth is larger than the signal bandwidth, causing all frequency components to fade equally.", icon: "ph-chart-line" }
                    ]
                },
                Q2c: { type: 'cdma_solver', title: "CDMA Chip Code Solver (Q2c)", codeA: [-1, 1, -1, 1], codeB: [-1, -1, 1, 1], codeC: [-1, 1, 1, -1], dataA: [1, 1, 0], dataB: [1, 0, 1], dataC: [0, 0, 1] },
            }
        },
        Q3: {
            title: "5G, AMPS & Mobile IPv6", subsections: ['Q3a', 'Q3b', 'Q3c', 'Q3d'], content: {
                Q3a: { type: 'list', title: "5G Application Areas (Q3a)", items: ["Enhanced Mobile Broadband (eMBB): Faster speeds/capacity.", "Massive Machine Type Communication (mMTC): Massive IoT connectivity.", "Ultra-Reliable Low Latency Communication (URLLC): Autonomous vehicles, remote surgery.", "Fixed Wireless Access: High-speed residential broadband."] },
                Q3b: { type: 'calculator', title: "AMPS Channel Calculation (Q3b)", calculator: 'amps', bw_mhz: 20.736, guard_khz: 18, ch_bw_khz: 45, expected: 460 },
                Q3c: { type: 'list', title: "Mobile IPv6 Improvements (Q3c)", items: ["No Foreign Agent: Uses Neighbor Discovery Protocol for local registration.", "Route Optimization: Uses Binding Update directly to CN, avoiding Triangle Routing.", "Built-in Security: Uses IPsec for all signaling messages (BU/BA)."] },
                Q3d: { type: 'calculator', title: "GSM Frame Timing (Q3d)", calculator: 'gsm', bits_per_slot: 156.25, slots_per_frame: 8, data_rate_kbps: 270.833 },
            }
        },
        Q4: {
            title: "Cellular & Comparison", subsections: ['Q4a', 'Q4b', 'Q4c', 'Q4d'], content: {
                Q4a: { type: 'explanation', title: "Frequency Reuse (Q4a)", text: "Frequency Reuse is the technique of using the same frequency channels in different cell clusters that are geographically separated by a sufficient distance (the reuse distance, D). This allows for spectral efficiency while managing co-channel interference. The reuse factor N determines the size of the cluster.", diagram: true },
                Q4b: { type: 'calculation_text', title: "FDMA Cellular System Analysis (Q4b)", text: "Given: 120 cities, N=12, 900 overall channels. i) Co-channel Reuse Ratio (Q): $Q = \\sqrt{3N} = \\sqrt{3 \\times 12} = \\sqrt{36} = 6$. ii) Channels per cell: $C_{cell} = C_{total} / N = 900 / 12 = 75$ channels. iii) Channels available: 900 (Total two-way channels)." },
                Q4c: { type: 'list', title: "Mote Components (Q4c)", items: ["Microcontroller Unit (MCU): Processing and control.", "Transceiver: Wireless communication.", "Sensors: Data acquisition (e.g., temperature).", "Power Unit: Battery/energy source."] },
                Q4d: { type: 'comparison_table', title: "Zigbee vs. Bluetooth 5 (Q4d)", comparison: 'zigbee_bt5' },
            }
        },
    },
    '2019': {
        meta: { title: "July 2019 (IN 4500)", questions: ['Q1', 'Q2', 'Q3', 'Q4'] },
        Q1: {
            title: "CSMA/CA & Definitions", subsections: ['Q1a', 'Q1b', 'Q1c', 'Q1d'], content: {
                Q1a: {
                    type: 'definitions', items: [
                        { term: "Modulation", definition: "The process of varying one or more properties of a periodic waveform, called the carrier signal, with a modulating signal that contains information to be transmitted.", icon: "ph-wave-sine" },
                        { term: "Multipath Fading", definition: "A form of radio signal interference caused by the signal reaching the receiving antenna by two or more paths. Causes constructive and destructive interference.", icon: "ph-arrows-split" },
                        { term: "Frequency Selective Fading", definition: "Coherence bandwidth is smaller than the signal bandwidth, causing different frequencies to fade differently.", icon: "ph-chart-bar" },
                        { term: "Flat Fading", definition: "Coherence bandwidth is larger than the signal bandwidth, causing all frequency components to fade equally.", icon: "ph-chart-line" }
                    ]
                },
                Q1b: { type: 'cellular_hierarchy', title: "Cellular Hierarchy Structure (Q1b)", i: 'MSC (Mobile Switching Center)', ii: 'BSC (Base Station Controller)' },
                Q1c: { type: 'mobile_ip_flow', title: "Mobile IP Registration Steps (Q1c)", note: "Briefly explain the four steps (Agent Discovery, Registration, Tunneling) using a diagram." },
                Q1d: { type: 'explanation', title: "CSMA/CD vs. CSMA/CA (Q1d)", text: "CSMA/CD is unsuitable for WLANs due to the Hidden Node problem and inability to detect collisions reliably over radio. CSMA/CA uses RTS/CTS (Request to Send / Clear to Send) to reserve the channel, preventing collisions before transmission starts." },
            }
        },
        Q2: {
            title: "AMPS, GSM & Mobility", subsections: ['Q2a', 'Q2b', 'Q2c', 'Q2d'], content: {
                Q2a: { type: 'list', title: "MME Functions (Q2a)", items: ["Mobility Management (tracking, handover)", "Session Management (bearer establishment)", "Security Functions (authentication, key management)", "Paging (locating UE)", "Gateway selection"] },
                Q2b: { type: 'calculator', title: "AMPS Channel Calculation (Q2b)", calculator: 'amps', bw_mhz: 27.1, guard_khz: 20, ch_bw_khz: 60, expected: 451 },
                Q2c: { type: 'list', title: "CDMA Advantages over TDMA (Q2c)", items: ["Increased Capacity (soft handoff, frequency reuse of 1)", "Soft Handoff (fewer dropped calls)", "Better Security (signal spread below noise floor)", "No need for precise frequency planning"] },
                Q2d: { type: 'calculator', title: "GSM Frame Timing (Q2d)", calculator: 'gsm', bits_per_slot: 156.25, slots_per_frame: 8, data_rate_kbps: 270.833 },
            }
        },
        Q3: {
            title: "Frequency Reuse & Comparison", subsections: ['Q3a', 'Q3b', 'Q3c', 'Q3d'], content: {
                Q3a: { type: 'explanation', title: "Frequency Reuse (Q3a)", text: "Frequency Reuse is the technique of using the same frequency channels in different cell clusters that are geographically separated by a sufficient distance (the reuse distance, D). This allows for spectral efficiency while managing co-channel interference. The reuse factor N determines the size of the cluster.", diagram: true },
                Q3b: { type: 'calculation_text', title: "FDMA Cellular System Analysis (Q3b)", text: "Given: 120 cites, N=12, 900 overall channels. i) Co-channel Reuse Ratio (Q): $Q = \\sqrt{3N} = \\sqrt{3 \\times 12} = \\sqrt{36} = 6$. ii) Channels per cell: $C_{cell} = C_{total} / N = 900 / 12 = 75$ channels. iii) Channels available: 900 (Total two-way channels)." },
                Q3c: { type: 'list', title: "Mote Components (Q3c)", items: ["Microcontroller Unit (MCU): Processing and control.", "Transceiver: Wireless communication.", "Sensors: Data acquisition (e.g., temperature).", "Power Unit: Battery/energy source."] },
                Q3d: { type: 'comparison_table', title: "Wi-Fi vs. Bluetooth (Q3d)", comparison: 'wifi_bt' },
            }
        },
        Q4: {
            title: "CDMA & 5G", subsections: ['Q4a', 'Q4b', 'Q4c', 'Q4d'], content: {
                Q4a: { type: 'list', title: "CDMA Disadvantages (Q4a)", items: ["Near-Far Problem: Requires tight power control, otherwise close user overwhelms far user.", "Higher Complexity: Requires more complex signal processing.", "Soft Capacity Limit: Adding users gradually degrades quality for all, hard to manage."] },
                Q4b: { type: 'list', title: "5G Application Areas (Q4b)", items: ["Enhanced Mobile Broadband (eMBB): Faster speeds/capacity.", "Massive Machine Type Communication (mMTC): Massive IoT connectivity.", "Ultra-Reliable Low Latency Communication (URLLC): Autonomous vehicles, remote surgery."] },
                Q4c: { type: 'list', title: "5G Objectives (Q4c)", items: ["Higher Data Rates (up to 10 Gbps)", "Reduced Latency (below 1ms)", "Massive Connectivity (1 million devices/km²)", "Improved Energy Efficiency"] },
                Q4d: { type: 'cdma_solver', title: "CDMA Chip Code Solver (Q4d)", codeA: [-1, 1, -1, 1], codeB: [-1, -1, 1, 1], codeC: [-1, 1, 1, -1], dataA: [1, 0, 0], dataB: [1, 1, 0], dataC: [1, 0, 1] },
            }
        },
    },
};

window.comparisonData = {
    'wifi_bt': {
        aspects: ['Data Rate', 'Max Users', 'Power', 'Application'],
        wifi: ['High (Mbps to Gbps)', 'High (tens to hundreds)', 'High consumption', 'LAN, Internet Access'],
        bt: ['Low (1-3 Mbps)', 'Limited (7 active in piconet)', 'Very Low (Low Energy)', 'PAN, Peripherals, Audio']
    },
    'wcdma_cdma': {
        aspects: ['Bandwidth', 'Data Rate', 'Standard'],
        wcdma: ['5 MHz (Wide)', 'Higher (up to 2 Mbps+)', '3G (UMTS)'],
        cdma: ['1.25 MHz (Narrow)', 'Lower (14.4 - 115 kbps)', '2G/2.5G (IS-95)']
    },
    'wired_wireless': {
        aspects: ['Reliability', 'Mobility', 'Security'],
        wired: ['High, stable', 'Very Low/None', 'High (physical access required)'],
        wireless: ['Low, prone to fading/interference', 'High (user freedom)', 'Low (eavesdropping risk)']
    },
    'zigbee_bt5': {
        aspects: ['Range', 'Data Rate', 'Max Nodes', 'Topology'],
        zigbee: ['Medium (10-100m)', 'Very Low (250 kbps)', 'High (up to 65k)', 'Mesh'],
        bt5: ['Varies (Short to Long)', 'Medium (1-2 Mbps)', 'Limited (Piconet)', 'Point-to-Multipoint']
    }
};
