# Alliance One — Hybrid MicroMouse Challenge

> **Build Today. Automate Tomorrow.**

An interactive 3D web application and showcase for the **Alliance One MicroMouse Challenge**, featuring 3D robotics simulation, event overview, rules, and registration details.

[![Live Site](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://bharadwajn10.github.io/hybridmicromousechallenge/)

---

## 🚀 Live Demo

The website is hosted on GitHub Pages:  
👉 **[https://bharadwajn10.github.io/hybridmicromousechallenge/](https://bharadwajn10.github.io/hybridmicromousechallenge/)**

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Three.js** + **@react-three/fiber** + **@react-three/drei** (Interactive 3D Simulation)
- **Tailwind CSS** (Modern UI styling & responsive design)
- **Vite** (Build tool & development server)
- **GitHub Actions** (Automated CI/CD deployment to GitHub Pages)

---

## 💻 Local Development

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bharadwajn10/hybridmicromousechallenge.git
   cd hybridmicromousechallenge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local dev server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173/hybridmicromousechallenge/
   ```

### Building for Production

To build the static distribution bundle:

```bash
npm run build
```

The output will be placed in the `dist/` directory, optimized and ready for static hosting.

---

## 🚀 Deployment

The project uses GitHub Actions (`.github/workflows/deploy.yml`) to automatically build and deploy to GitHub Pages whenever changes are pushed to the `main` branch.

To enable GitHub Pages deployment in your repository:
1. Go to **Settings** → **Pages** on GitHub.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push to `main` to trigger the automated deployment pipeline.
