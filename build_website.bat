@echo off
title Build Static Website
cd /d "%~dp0"

echo ===================================================
echo   Preparing Assets and Building Website
echo ===================================================
echo.

echo [1/2] Copying assets...
mkdir "%~dp0\photonics-workshop-website\public\brochure" >nul 2>&1
mkdir "%~dp0\photonics-workshop-website\public\images\patrons" >nul 2>&1

if exist "%~dp0\Brochure PHOTOMAT 2026 Updated.pdf" (
    copy "%~dp0\Brochure PHOTOMAT 2026 Updated.pdf" "%~dp0\photonics-workshop-website\public\brochure\PHOTOMAT-2026.pdf" /Y >nul
    echo   + Brochure PDF copied.
)
if exist "%~dp0\Dr BHVS Narayana Murthy.jpg" (
    copy "%~dp0\Dr BHVS Narayana Murthy.jpg" "%~dp0\photonics-workshop-website\public\images\patrons\murthy.jpg" /Y >nul
    echo   + Dr. Murthy photo copied.
)
if exist "%~dp0\Dr Jagannath Nayak drdo chess director.jpg" (
    copy "%~dp0\Dr Jagannath Nayak drdo chess director.jpg" "%~dp0\photonics-workshop-website\public\images\patrons\nayak.jpg" /Y >nul
    echo   + Dr. Nayak photo copied.
)

echo [2/2] Building Next.js website (this may take a minute)...
cd "%~dp0\photonics-workshop-website"
call npm run build

# Create .nojekyll file to prevent GitHub from ignoring _next folder
echo. > "%~dp0\photonics-workshop-website\out\.nojekyll"

echo.
echo ===================================================
echo   BUILD COMPLETE!
echo ===================================================
echo.
echo Your static files are ready in:
echo %~dp0\photonics-workshop-website\out
echo.
pause
