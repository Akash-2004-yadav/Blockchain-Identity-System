# start-all.ps1
$ErrorActionPreference = "Stop"

Write-Host "`nStarting Blockchain Identity System..."

# 1) Switch to backend
Set-Location ".\Back"

# Build backend
Write-Host "Building backend..."
npx tsc

# Start backend in background
Write-Host "Launching backend on http://localhost:5000 ..."
Start-Process powershell -WindowStyle Minimized -ArgumentList "npm run dev-api"

# Wait 3 seconds for backend to boot
Start-Sleep -Seconds 3

# 2) Switch to frontend
Set-Location "..\Front\next-version"

Write-Host "Launching frontend on http://localhost:3000 ..."
Start-Process powershell -WindowStyle Minimized -ArgumentList "npm run dev"

# Wait 2 seconds then open browser
Start-Sleep -Seconds 2
Start-Process "http://localhost:3000"

Write-Host "`nSystem started successfully - Frontend + Backend are running."
