# Md. Mahim Khan — 3D Naval Architecture & Offshore Engineering Portfolio (`itsmahim.dev`)

A full-stack **Node.js** web application and **Three.js (WebGL) Interactive 3D Hydrodynamic Digital Twin** built for **Md. Mahim Khan**, 4th-Year B.Sc. Student in Naval Architecture & Offshore Engineering at **Bangladesh Maritime University (BMU)**.

## 1. Profile Assessment & Academic Theme ("Abyssal Hydrodynamic & Digital Twin CAD")

- **Academic Discipline**: B.Sc. in Naval Architecture & Offshore Engineering (4th Year, 2nd Semester · 3.5+ Years of Engineering Study) at Bangladesh Maritime University.
- **Core Pillars**:
  1. **01 Ship Design & Modeling**: AutoCAD, Rhinoceros, MAXSURF, SolidWorks, ANSYS (Lines Plan, General Arrangement, 3D Hull Visualization).
  2. **02 Engineering Analysis**: ANSYS, FEA, MAXSURF (Finite Element Structural Analysis, Stability Calculations, CFD Hydrodynamics).
  3. **03 Programming & Automation**: C++, Python, MATLAB, Node.js (Engineering calculation automation & 5 live web applications).
- **Visual & Interactive Theme**:
  - **Digital Towing Tank Palette**: Abyssal Navy (`#030811`), Hydrodynamic Streamline Cyan (`#22D3EE`), RINA Classification Emerald (`#10B981`), and Von Mises Stress Amber (`#F59E0B`).
  - **Interactive 3D Digital Twin**: Real-time WebGL viewport featuring 3 selectable 3D engineering models (**2000 DWT RINA Inland Oil Tanker**, **AUV CFD Body**, and **Hull Structural FEA Framing**), 3 analysis shaders (**CAD + Stations**, **FEA Stress Contour**, **CFD Streamlines**), camera presets (**Isometric**, **Profile Plan**, **Body Plan**, **GA Plan**), and live naval architecture telemetry sliders (**Speed**, **Sea State**, **Draft**).

## 2. Project Structure

```text
itsmahim-naval-portfolio/
├── package.json                 # Node.js metadata and scripts
├── server.js                    # Zero-dependency Node.js HTTP & REST API server
├── test-server.js               # Automated verification test suite
├── README.md                    # Documentation and deployment guide
└── public/
    ├── index.html               # 3D Interactive Portfolio Web Application
    ├── css/styles.css           # Custom CAD & Glassmorphism styles
    ├── js/app.js                # Three.js r128 3D Hull Simulator & UI Controller
    ├── data/profile.json        # Complete profile data from https://www.itsmahim.dev/
    └── assets/images/           # Custom 3D CAD, FEA & CFD project visualizations
        ├── tanker-2000dwt.jpg
        ├── hull-fea.jpg
        └── hull-cfd.jpg
```

## 3. Running the Node.js Website Locally

### Prerequisites
- **Node.js** `>= 16.0.0`

### Quick Start
```bash
# 1. Unzip the archive
unzip itsmahim-naval-portfolio.zip
cd itsmahim-naval-portfolio

# 2. Start the Node.js server (runs immediately without external dependencies)
npm start
# Or directly:
node server.js
```

Open **`http://localhost:3000`** in your browser.

### REST API Endpoints
- `GET /api/profile` — Returns the structured JSON profile, education, competencies, vessel projects, 5 web apps, publications, and certifications.
- `GET /api/hydrodynamics?loa=74.27&lwl=73.5&beam=12&draft=3.5&speed=12&seaState=1.2` — Computes live ITTC-1957 hull resistance, Froude number (`Fn`), displacement (`Δ`), wetted surface area (`S`), effective power (`Pe`), and transverse metacentric height (`GMt`).
- `POST /api/contact` — Accepts JSON `{ name, email, subject, message }` for collaboration inquiries.
