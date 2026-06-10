$workspaceRoot = "c:\Users\ADMIN\Desktop\websit photomat"
$minGitZip = Join-Path $workspaceRoot "mingit.zip"
$minGitDir = Join-Path $workspaceRoot "mingit"
$gitExe = Join-Path $minGitDir "cmd\git.exe"

# Add MinGit to path temporarily for this session
$env:PATH = "$minGitDir\cmd;$env:PATH"

# Verify Git works
$gitVersion = & git --version
Write-Host "Git Version: $gitVersion"

# Configure Git locally to prevent commit failure due to missing identity
& git config --global user.name "utkarsh207543"
& git config --global user.email "utkarsh207543@users.noreply.github.com"
& git config --global credential.helper wincred

# Step 2: Initialize Git in the workspace root
cd $workspaceRoot

if (-not (Test-Path ".git")) {
    Write-Host "Initializing new Git repository..."
    & git init -b main
} else {
    Write-Host "Git repository already initialized."
}

# Ensure we have the correct remote URL
Write-Host "Setting remote origin..."
$remotes = & git remote
if ($remotes -contains "origin") {
    & git remote remove origin
}
& git remote add origin https://github.com/utkarsh207543/photomat.git

# Step 3: Add files and commit
Write-Host "Adding files to staging..."
& git add .

Write-Host "Creating commit..."
# Check if there are changes to commit
$status = & git status --porcelain
if ($status) {
    & git commit -m "Deploy website source and assets via MinGit"
} else {
    Write-Host "No changes to commit."
}

# Step 4: Push to GitHub
Write-Host "Pushing code to GitHub main branch..."
Write-Host "Note: If you see credential prompts, please complete them or check Windows Credential Manager."
& git push -u origin main -f

Write-Host "DEPLOYMENT SCRIPT RUN COMPLETED SUCCESSFULLY!"
