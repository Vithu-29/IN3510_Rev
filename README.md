---

# **Wireless Networks Revision Dashboard (IN 3510)**

A comprehensive, interactive **single-page web application** designed to help students revise key concepts from the **Mobile & Wireless Networks** modules. This dashboard consolidates past paper questions (2019, 2022, 2025) and enriches them with interactive calculators, visualizations, and definitions..

---

## 🚀 **Project Overview**

The *Wireless Networks Revision Dashboard* acts as a dynamic study companion for the University of Moratuwa’s Mobile and Wireless Networks courses.
Instead of static notes, students can simulate network behaviors, calculate real system metrics, and explore explanations directly derived from the lecture materials.

---

## 🎯 **Key Features**

### **🔁 Multi-Year Context Switching**

Instantly toggle between exam contexts:

* **January 2025**
* **November 2022**
* **July 2019**

---

### **🧮 Interactive Calculators**

#### **AMPS Capacity Calculator**

* Computes number of channels using Total Bandwidth and Guard Bands.

#### **GSM Timing Calculator**

* Calculates:

  * Bit duration
  * Time slot duration
  * Frame duration

#### **Frequency Reuse Calculator**

* Computes:

  * Cluster size **N**
  * Reuse ratio **Q**
    Based on shift parameters **i** and **j**

---

### **📊 Visual Simulations**

#### **CDMA Solver**

A functional **Walsh Code encoder/decoder visualizer** with step-by-step output.

#### **Mobile IP Animation**

Illustrates:

1. Home Agent communication
2. Foreign Agent discovery
3. Registration
4. Handoff process

---

## 🛠️ **Technical Architecture**

Although shipped as a **single HTML file** for easy distribution, the internal structure follows professional, maintainable architecture principles.

### **🧩 Tech Stack**

* **HTML5**
* **Vanilla JavaScript (ES6+)**
* **Tailwind CSS (CDN)**
* **Phosphor Icons**
* **Chart.js**

---

## 📐 **Internal Code Structure**

### **1. DataStore**

* Maintains all past questions, slide references, formulas, and definitions.
* Structured as hierarchical JSON.

### **2. Logic**

* Pure functions independent from UI.
* Examples:

  * `calculateAMPS()`
  * `calculateCDMA()`
  * `calculateReuseRatio()`

### **3. Renderers**

* Generates UI components:

  * Definition blocks
  * Hierarchy diagrams
  * Lists and slide references

### **4. Features**

* Binds logic + rendering.
* Connects UI buttons to calculators and visualizations.

### **5. UI Module**

* Manages:

  * Sidebar navigation
  * Global state
  * Routing between exam years and questions

---

## 🎨 **Design System**

### **Color Palette**

Warm professional tones:

* **Teal 600 (#0d9488)** — primary actions
* **Stone-50** — soft paper-like background

### **Typography**

* **Inter** — main UI font
* **JetBrains Mono** — formulas, code blocks

---

Developed exclusively for **education and revision**.

----
