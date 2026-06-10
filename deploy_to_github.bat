@echo off
title GitHub Pages Auto-Deployer
cd /d "%~dp0"

echo ===================================================
echo   GitHub Pages Auto-Deploy Setup
echo ===================================================
echo.
echo Make sure you have created a public repository named "photomat" 
echo on your GitHub account (https://github.com/new).
echo.
set repo_url=https://github.com/utkarsh207543/photomat.git
echo Target Repository: %repo_url%
echo.

echo.
echo [1/4] Preparing folders and copying assets...
mkdir "%~dp0\photonics-workshop-website\public\brochure" >nul 2>&1
mkdir "%~dp0\photonics-workshop-website\public\images\patrons" >nul 2>&1

if exist "%~dp0\Brochure PHOTOMAT 2026.pdf" (
    copy "%~dp0\Brochure PHOTOMAT 2026.pdf" "%~dp0\photonics-workshop-website\public\brochure\PHOTOMAT-2026.pdf" /Y >nul
    echo   + Brochure PDF copied successfully.
) else (
    echo   [WARNING] Brochure PHOTOMAT 2026.pdf not found in root.
)

if exist "%~dp0\Dr BHVS Narayana Murthy.jpg" (
    copy "%~dp0\Dr BHVS Narayana Murthy.jpg" "%~dp0\photonics-workshop-website\public\images\patrons\murthy.jpg" /Y >nul
    echo   + Dr. Murthy photo copied successfully.
)

if exist "%~dp0\Dr Jagannath Nayak drdo chess director.jpg" (
    copy "%~dp0\Dr Jagannath Nayak drdo chess director.jpg" "%~dp0\photonics-workshop-website\public\images\patrons\nayak.jpg" /Y >nul
    echo   + Dr. Nayak photo copied successfully.
)

echo.
echo [2/4] Initializing local Git repository...
cd "%~dp0\photonics-workshop-website"
git init
git add .
git commit -m "Configure GitHub Pages deployment"

echo.
echo [3/4] Linking local repository to GitHub...
git remote remove origin >nul 2>&1
git remote add origin %repo_url%
git branch -M main

echo.
echo [4/4] Pushing code to GitHub...
echo (If prompted, please log into your GitHub account in the pop-up window)
git push -u origin main -f

echo.
echo ===================================================
echo   SUCCESS! Code pushed.
echo ===================================================
echo.
echo Next steps:
echo 1. Go to your GitHub repository in your browser.
echo 2. Click "Settings" at the top.
echo 3. Click "Pages" on the left menu.
echo 4. Under "Build and deployment" -> "Source", select "GitHub Actions".
echo.
pause
