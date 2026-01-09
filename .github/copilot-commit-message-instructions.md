# Commit Message Instructions

Follow the Conventional Commits specification for all commit messages.

## Format

```
<type>(<scope>): <subject>

<body>
```

## Types

- **feat**: A new feature or solution
- **fix**: A bug fix or correction
- **docs**: Documentation changes (README, comments, etc.)
- **refactor**: Code refactoring without changing functionality
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates

## Scope (optional)

Use the problem name or category:
- `two-sum`
- `easy`
- `medium`
- `hard`

## Guidelines

- **Subject**: Use imperative mood ("add" not "added"), max 50 chars, no period
- **Body**: Optional, explain WHAT and WHY (not HOW), wrap at 72 chars
- Keep it clear and concise
- Each commit should represent one logical change

## Examples

```
feat(two-sum): implement hash map solution

Use hash map approach for O(n) time complexity
```

```
refactor(two-sum): optimize space complexity

Remove unnecessary array creation
```

```
docs: update README with project description
```
