# Md. Mahim Khan — 3D Naval Architecture & Offshore Engineering Portfolio (`itsmahim.dev`)

A **Three.js (WebGL) Interactive 3D Hydrodynamic Digital Twin** portfolio built for **Md. Mahim Khan**, 4th-Year B.Sc. Student in Naval Architecture & Offshore Engineering at **Bangladesh Maritime University (BMU)**.

## 1. Profile Assessment & Academic Theme ("Abyssal Hydrodynamic & Digital Twin CAD")

- **Academic Discipline**: B.Sc. in Naval Architecture & Offshore Engineering (4th Year, 2nd Semester · 3.5+ Years of Engineering Study) at Bangladesh Maritime University.
- **Core Pillars**:
  1. **01 Ship Design & Modeling**: AutoCAD, Rhinoceros, MAXSURF, SolidWorks, ANSYS (Lines Plan, General Arrangement, 3D Hull Visualization).
  2. **02 Engineering Analysis**: ANSYS, FEA, MAXSURF (Finite Element Structural Analysis, Stability Calculations, CFD Hydrodynamics).
  3. **03 Programming & Automation**: C++, Python, MATLAB, and web application development.
- **Visual & Interactive Theme**:
  - **Digital Towing Tank Palette**: Abyssal Navy (`#030811`), Hydrodynamic Streamline Cyan (`#22D3EE`), RINA Classification Emerald (`#10B981`), and Von Mises Stress Amber (`#F59E0B`).
  - **Interactive 3D Digital Twin**: Real-time WebGL viewport featuring 3 selectable 3D engineering models (**2000 DWT RINA Inland Oil Tanker**, **AUV CFD Body**, and **Hull Structural FEA Framing**), 3 analysis shaders (**CAD + Stations**, **FEA Stress Contour**, **CFD Streamlines**), camera presets (**Isometric**, **Profile Plan**, **Body Plan**, **GA Plan**), and live naval architecture telemetry sliders (**Speed**, **Sea State**, **Draft**).

## 2. Project Structure

```text
itsmahim-naval-portfolio/
├── .github/workflows/           # GitHub Pages deployment workflow
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

## 3. GitHub Pages Deployment

Every push to `main` deploys the static portfolio in `public/` through the
included GitHub Actions workflow. After enabling GitHub Pages for the
repository with **Settings → Pages → Source: GitHub Actions**, the site is
available at:

`https://d3v1lxd.github.io/Portfolio/`

The site is a static frontend and does not require a build step.
