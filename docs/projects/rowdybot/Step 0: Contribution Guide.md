---
sidebar_position: 1
---

## 👨‍💻 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Follow these steps to contribute to the project with a new feature or bug fix:

### Step 1: Create a New Branch
Before starting your work, ensure you're on the `main` branch and that it's up to date.

```sh
git checkout main
git pull origin main
```

Create a new branch for your feature or bug fix. Follow a naming convention like `feature/<feature-name>` or `bugfix/<bug-name>`.

```sh
git checkout -b feature/my-new-feature
# or
git checkout -b bugfix/my-bug-fix
```

### Step 2: Make Your Changes
Implement your feature or fix the bug in your branch. Commit your changes using clear, concise, and conventional commit messages following the guidelines at [conventionalcommits.org](https://www.conventionalcommits.org).

```sh
git add .
git commit -m "feat: add my new feature"
# or
git commit -m "fix: correct a bug"
```

Optionally, if you assigned yourself an issue, you can automatically create and link a branch using the GitHub UI. Click on the "Create a branch" button and select the option to create a new branch for the issue.

### Step 3: Push Your Changes
Push your changes to the repository.

```sh
git push origin feature/my-new-feature
# or
git push origin bugfix/my-bug-fix
```

#### Style Guide
- Use clear, concise, and conventional commit messages. Commit messages should follow this specification https://www.conventionalcommits.org/en/v1.0.0/
- Follow the best software development practices and write clean, maintainable code.
- For ReactJS, follow this style guide: <https://dev.to/abrahamlawson/react-style-guide-24pp>. Except use indendantation of 4 spaces instead of 2.

### Step 4: Create a Pull Request
Go to the GitHub repository page and click on the "Pull request" button. Select your branch and provide a detailed description of your changes. Explain why your changes should be merged into the main branch.

### Step 5: Review and Merge
Wait for the project maintainers to review your pull request. They may request changes. Once your pull request is approved, a project maintainer will merge it into the main branch.

Thank you for your contribution!