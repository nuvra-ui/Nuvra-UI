import nextra from "nextra";

const withNextra = nextra({
  // ... Add Nextra-specific options here
});

export default withNextra({
  // ... Add regular Next.js options here
  output: "standalone",
});
