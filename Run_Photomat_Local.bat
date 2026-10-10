@echo off
setlocal
title PHOTOMAT 2026 - Local Preview

set "BASE_DIR=%~dp0"
set "PROJECT_DIR=%BASE_DIR%photomat\photonics-workshop-website"

if not exist "%PROJECT_DIR%\package.json" set "PROJECT_DIR=%BASE_DIR%photonics-workshop-website"
if not exist "%PROJECT_DIR%\package.json" if exist "%BASE_DIR%package.json" set "PROJECT_DIR=%BASE_DIR%"

if not exist "%PROJECT_DIR%\package.json" (
    echo ERROR: Could not find the website project.
    echo Keep this BAT file beside the extracted photomat folder.
    echo Expected: photomat\photonics-workshop-website\package.json
    pause
    exit /b 1
)

where node >nul 2>nul
if errorlevel 1 (
    echo ERROR: Node.js is not installed or is not on PATH.
    echo Install Node.js 20.9 or newer, then run this file again.
    pause
    exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
    echo ERROR: npm is not available. Reinstall Node.js with npm included.
    pause
    exit /b 1
)

node -e "const [major,minor]=process.versions.node.split('.').map(Number); process.exit(major>20 || (major===20 && minor>=9) ? 0 : 1)"
if errorlevel 1 (
    echo ERROR: This project requires Node.js 20.9 or newer.
    echo Upgrade Node.js, then run this file again.
    pause
    exit /b 1
)

pushd "%PROJECT_DIR%"
if errorlevel 1 (
    echo ERROR: Could not open the project folder.
    pause
    exit /b 1
)

if not exist "node_modules\.bin\next.cmd" (
    echo Installing website dependencies. Internet access is required on first run...
    call npm ci
    if errorlevel 1 (
        echo ERROR: Dependency installation failed. Check your internet connection and try again.
        popd
        pause
        exit /b 1
    )
)

echo.
echo Starting PHOTOMAT 2026 at http://localhost:3000
 echo Keep this window open while checking the website.
start "" cmd /c "ping 127.0.0.1 -n 6 >nul ^& start http://localhost:3000"
call npm run dev
set "RUN_EXIT_CODE=%ERRORLEVEL%"
popd

echo.
echo The local server has stopped.
pause
exit /b %RUN_EXIT_CODE%
