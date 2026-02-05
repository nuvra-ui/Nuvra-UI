<div align="center">

<img src="https://raw.githubusercontent.com/nuvra-ui/Nuvra-UI/refs/heads/main/apps/docs/content/public/NuvraUIBannerSmall.svg" alt="Nuvra-UI Banner"/>

Build flexible, unstyled components - your design, your way.

[Website](https://nuvra-ui.com) | [Documentation](https://docs.nuvra-ui.com)

</div>

## Installation
```sh
pnpm install @nuvra-ui/react @nuvra-ui/theme
```
More installation methods in the [Docs](https://docs.nuvra-ui.com/introduction/getting-started.html).

Then import the Nuvra-UI theme package in your CSS file:
```css
/* src/index.css */
@import "tailwindcss";

@import "@nuvra-ui/theme/styles.css";

...
```

## Usage
Here is a quick example of how to use the Button component in your project:
```tsx
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

## Component Overview
You can find a complete list of all available components in our [Component Gallery](https://docs.nuvra-ui.com/components/component-gallery.html)
