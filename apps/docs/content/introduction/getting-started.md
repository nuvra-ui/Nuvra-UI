# Getting Started

## Installation
To get started, install the package using your preferred package manager:

> [!WARNING]
> Make sure you have a fully functional React project set up, and that TailwindCSS is properly integrated into your project for the setup to work
> correctly.

::: code-group
```sh [npm]
npm install @nuvra-ui/react @nuvra-ui/theme
```

```sh [yarn]
yarn add @nuvra-ui/react @nuvra-ui/theme
```

```sh [pnpm]
pnpm add @nuvra-ui/react @nuvra-ui/theme
```

```sh [bun]
bun add @nuvra-ui/react @nuvra-ui/theme
```
:::

Next, import the Nuvra-UI theme package into your CSS file and include the `@source` directive (ensure the path to node_modules is correct for your project structure):
```css {4,6}
/* src/index.css */
@import "tailwindcss";

@import "@nuvra-ui/theme/styles.css";

@source "../node_modules/@nuvra-ui/react"; 
...
```

## Usage
To start using components, simply import them from the `@nuvra-ui/react` package.

### Your First Component
Here is a quick example of how to use the `Button` component in your project:
``` tsx
// MyComponent.tsx
import { Button } from "@nuvra-ui/react";

export default function MyComponent() {
  return (
    <div className="flex gap-4 p-4">
      <Button>Click me</Button>
      <Button className="bg-green-200">Hello World</Button>
    </div>
  );
}
```

### Component Overview:
You can find a complete list of all available components in our (Component Gallery)[/].
