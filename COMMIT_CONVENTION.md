# Convention de Commit

Ce projet utilise la convention [Conventional Commits](https://www.conventionalcommits.org/).

## Format

```
<type>(<scope>): <description>

[corps optionnel]

[pied optionnel]
```

## Types

- **feat**: nouvelle fonctionnalité
- **fix**: correction de bug
- **docs**: modification de documentation
- **style**: changements de formatage, pas de changement de code
- **refactor**: refactoring de code sans changement de fonctionnalité
- **perf**: amélioration de performance
- **test**: ajout ou modification de tests
- **build**: changements dans le système de build
- **ci**: changements dans les fichiers de configuration CI
- **chore**: tâches de maintenance
- **revert**: annulation d'un commit précédent

## Scopes suggérés

- **home**: page d'accueil
- **about**: page à propos
- **works**: pages et composants des réalisations
- **contact**: page de contact
- **components**: composants génériques
- **ui**: composants d'interface utilisateur
- **animations**: animations et transitions
- **i18n**: internationalisation
- **seo**: optimisation SEO
- **config**: configuration (ESLint, TypeScript, etc.)

## Exemples

```bash
feat(home): add hero animation
fix(contact): resolve form validation bug
docs(readme): update installation instructions
style(components): format code with prettier
refactor(about): simplify timeline component
perf(images): optimize loading with lazy loading
test(utils): add unit tests for helpers
build(deps): update nuxt to v3.14
ci(github): add ESLint check workflow
chore(eslint): disable no-console for dev
```

## Hooks Git

- **pre-commit**: Vérifie le linting (ESLint) et le formatage (Prettier)
- **commit-msg**: Valide le format du message de commit

Les commits qui ne respectent pas la convention seront rejetés.
