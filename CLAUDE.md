# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React website project built with Vite, featuring a simple responsive layout with Korean content. The project uses React 19 with a minimal setup focused on a single-page application with static content sections.

## Development Commands

- `npm run dev` - Start development server on port 3000 with HMR (Hot Module Replacement)
- `npm run build` - Build for production (output in `dist/` folder)
- `npm run preview` - Preview production build locally
- **No test or lint commands** - Project does not have testing or linting configured

**Requirements**: Node.js 20.19+ or 22.12+

## Architecture

- **Entry Point**: `src/main.jsx` - React application bootstrap with StrictMode
- **Main Component**: `src/App.jsx` - Single monolithic component containing header, main content sections, and footer
- **Styling**: Component-specific CSS files (`App.css`, `index.css`) with responsive design
- **Build Tool**: Vite with React plugin configured for port 3000

The application follows a simple single-component architecture with no routing or state management. All content is static and rendered in sections (home, about, contact) within the main App component.

## Project Structure

```
src/
├── main.jsx          # Application entry point - renders App into #root
├── App.jsx           # Main application component (Header + Main sections + Footer)
├── App.css           # Component-specific styles with responsive breakpoints
└── index.css         # Global styles and CSS resets
```

**Current Implementation Notes:**
- Single monolithic component in App.jsx containing all page sections (home, about, contact)
- No routing library - all sections rendered on single page
- No state management - entirely static content
- Responsive design with 768px breakpoint (mobile-first approach)

## Code Style Guidelines

- **No Emojis**: Do not use emojis in code, comments, commit messages, or any technical documentation
- **Clean Commits**: Write clear, professional commit messages without emojis or decorative characters
- **Professional Tone**: Maintain a professional tone in all code-related content
- **Language**: Korean content in UI, English in code and documentation

## Deployment Environment

### Oracle Cloud Infrastructure (OCI)

**Server Configuration:**
- Region: ap-chuncheon-1 (Seoul)
- Instance Name: ubuntu-main
- Shape: VM.Standard.A1.Flex (4 OCPU / 24GB RAM / 4Gbps Network)
- OS: Ubuntu 24.04 LTS (aarch64, ARM-based)
- Public IP: 158.179.166.133
- Private IP: 10.0.0.224
- User: ubuntu

**SSH Access:**
```bash
ssh -i ~/Downloads/oracle/ssh-key-2025-10-05.key ubuntu@158.179.166.133
```
SSH Key Path: `/home/seonggyu/Downloads/oracle/ssh-key-2025-10-05.key` (permissions: 400)

**Network Configuration:**
- VCN: vnc-main
- CIDR: 10.0.0.0/16
- Public Subnet: public-subnet-vnc-main (10.0.0.0/24)
- Internet Gateway: Enabled
- Security Rules: TCP ports 22 (SSH), 80 (HTTP), 443 (HTTPS) open to internet (0.0.0.0/0)