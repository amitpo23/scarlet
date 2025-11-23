# Contributing to Scarlet Hotel Website

Thank you for your interest in contributing to the Scarlet Hotel website! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and professional environment. We expect all contributors to:

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the project
- Show empathy towards other community members

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **pnpm** (v8.0.0 or higher)
- **Git**

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/scarlet.git
   cd scarlet
   ```

3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/amitpo23/scarlet.git
   ```

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

## Development Workflow

1. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes** thoroughly:
   ```bash
   pnpm type-check
   pnpm lint
   ```

4. **Commit your changes** using conventional commits

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Avoid `any` types - use proper typing
- Use interfaces for object shapes
- Export types that are used in multiple files

### React

- Use functional components with hooks
- Keep components small and focused
- Use meaningful component and variable names
- Avoid inline styles - use Tailwind classes
- Extract reusable logic into custom hooks

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use semantic color names from the theme
- Maintain consistent spacing using Tailwind scale

### File Organization

```
client/src/
├── components/     # Reusable components
│   ├── ui/        # shadcn/ui components
│   └── *.tsx      # Feature components
├── contexts/      # React contexts
├── pages/         # Page components
├── hooks/         # Custom hooks (if needed)
└── lib/           # Utility functions
```

### Naming Conventions

- **Components**: PascalCase (e.g., `BookingModal.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useLanguage`)
- **Utilities**: camelCase (e.g., `formatDate`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `APP_TITLE`)

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring without changing functionality
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates

### Examples

```bash
feat(booking): add date range validation
fix(navigation): resolve mobile menu z-index issue
docs(readme): update installation instructions
style(home): format code with prettier
refactor(chatbot): extract FAQ responses to separate file
```

## Pull Request Process

1. **Update documentation** if you're changing functionality

2. **Ensure all tests pass** and there are no linting errors:
   ```bash
   pnpm type-check
   pnpm lint
   ```

3. **Update the README.md** if you're adding new features

4. **Fill out the PR template** completely:
   - Description of changes
   - Related issue numbers
   - Screenshots (for UI changes)
   - Testing performed

5. **Request review** from maintainers

6. **Address review feedback** promptly

7. **Squash commits** if requested before merging

### PR Title Format

Use the same format as commit messages:

```
feat(booking): add payment integration
fix(mobile): resolve navigation overflow
```

## Reporting Bugs

### Before Submitting

- Check if the bug has already been reported
- Verify the bug exists in the latest version
- Collect relevant information (browser, OS, steps to reproduce)

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14.0]
- Device: [e.g., iPhone 15, Desktop]

**Additional context**
Any other relevant information.
```

## Suggesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Other solutions or features you've considered.

**Additional context**
Mockups, examples, or references.
```

## Internationalization (i18n)

When adding new text content:

1. Use the `t()` function from `LanguageContext`
2. Provide both Hebrew and English translations
3. Keep translations concise and natural
4. Test in both languages and RTL/LTR modes

Example:
```tsx
const { t } = useLanguage();

<h1>{t("כותרת בעברית", "English Heading")}</h1>
```

## Accessibility

All contributions must maintain WCAG 2.1 AA compliance:

- Use semantic HTML elements
- Provide `aria-label` for icon buttons
- Ensure keyboard navigation works
- Maintain sufficient color contrast
- Test with screen readers when possible

## Questions?

If you have questions about contributing:

- Open a GitHub Discussion
- Contact the maintainers
- Check existing issues and PRs

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for contributing to Scarlet Hotel! 🎉**
