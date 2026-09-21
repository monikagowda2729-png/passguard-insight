# PassGuard Pro

Build a modern, premium, highly interactive cybersecurity web application called:

"PASSGUARD"
Password Strength Analyzer
SkillCraft Technology Cybersecurity Internship — Task 03

PROJECT GOAL:
Create a professional password strength assessment tool that evaluates a password based on:
1. Password length
2. Uppercase letters
3. Lowercase letters
4. Numbers
5. Special characters

The application should visually communicate cybersecurity, privacy, and password hygiene. It must feel like a polished real-world security product rather than a simple student project.

TECH STACK:
- React
- TypeScript
- Vite
- Tailwind CSS
- Modern component-based architecture
- Use Lucide icons or another clean icon library
- Fully responsive for desktop, tablet, and mobile

IMPORTANT:
This is a client-side password strength checker. NEVER send, store, log, or transmit passwords to a server. Keep password processing entirely in the browser.

DESIGN DIRECTION:
Create a futuristic cybersecurity/SOC-inspired interface with:
- Dark navy/near-black background
- Electric cyan/blue accent colors
- Subtle gradients
- Glassmorphism cards
- Soft glowing borders
- Clean typography
- Subtle animated background elements resembling a digital security grid
- Professional spacing and hierarchy
- Smooth hover and transition effects
- Avoid excessive animations or clutter

HERO SECTION:
Create a visually impressive hero section with:

PASSGUARD
"Know Your Password. Strengthen Your Security."

Subtitle:
"Analyze your password strength instantly with a private, client-side security assessment."

Include a small badge:
"SKILLCRAFT TECHNOLOGY • CYBERSECURITY INTERNSHIP • TASK 03"

Add a security/shield illustration or abstract cybersecurity visual.

MAIN PASSWORD ANALYZER:
Create a large centered glassmorphism card.

Heading:
"Password Strength Analyzer"

Include:
- Password input field
- Lock icon
- Show/hide password button
- Clear/reset button
- A tasteful privacy indicator saying:
  "100% Client-Side • Your password never leaves this browser."

As the user types, analyze the password in real time.

PASSWORD REQUIREMENT CHECKLIST:
Display five requirements as interactive checklist items:

✓ At least 8 characters
✓ Uppercase letter
✓ Lowercase letter
✓ Number
✓ Special character

Each requirement should dynamically change between:
- Unmet state
- Met state

Use smooth visual transitions and appropriate icons.

STRENGTH METER:
Create a large, visually impressive password strength meter.

Show:
"Password Strength"

Possible levels:
- Very Weak
- Weak
- Medium
- Strong
- Very Strong

Display a progress bar that changes according to the password score.

Show a numerical score such as:
"Strength Score: 4/5"

Use visual states rather than relying only on color, so the interface remains accessible.

SCORING LOGIC:
Evaluate the password using the five required criteria:

+1 if length is at least 8
+1 if uppercase exists
+1 if lowercase exists
+1 if number exists
+1 if special character exists

Strength mapping:
0–1 = Very Weak
2 = Weak
3 = Medium
4 = Strong
5 = Very Strong

Also provide a small informational note:
"Longer, unique passwords are generally harder to guess."

PASSWORD FEEDBACK:
Below the meter, dynamically display useful feedback based on missing criteria.

Examples:
- "Add uppercase letters to improve your password."
- "Add numbers for additional complexity."
- "Add a special character such as !, @, #, or $."
- "Your password meets all basic complexity requirements."

Do not reveal or display the actual password anywhere except inside the password input field.

SECURITY INSIGHTS SECTION:
Create a section titled:

"Why Password Strength Matters"

Include 3 elegant cards:

1. 🔐 Length Matters
Explain that longer passwords generally provide more resistance to guessing.

2. 🧩 Complexity
Explain the value of combining different character types.

3. 🛡️ Privacy First
Explain that this tool evaluates the password locally in the browser and does not transmit it.

LIVE SECURITY CHECK:
Add a small status panel beneath the analyzer:

"SECURITY STATUS"

Show:
- Password entered / Not entered
- Requirements satisfied: X/5
- Strength: current strength
- Processing: "Local Browser"

Make this panel look like a professional security console.

EDUCATIONAL SECTION:
Create a section called:

"How Password Strength Is Evaluated"

Explain the five criteria visually:
Length → Uppercase → Lowercase → Numbers → Special Characters

Use a simple horizontal or vertical step visualization.

Add another section:

"Password Best Practices"

Include:
- Use long passwords
- Avoid predictable information
- Avoid reusing passwords
- Use unique passwords for important accounts
- Consider using a reputable password manager

DO NOT claim that this simple checker can determine whether a password is absolutely secure.

PRIVACY NOTICE:
Add a prominent but tasteful notice:

"Your privacy matters."
"This tool performs password analysis locally in your browser. Passwords are not uploaded, stored, or transmitted."

FOOTER:
Create a professional footer:

PASSGUARD
"Know Your Password. Strengthen Your Security."

"Built for SkillCraft Technology Cybersecurity Internship — Task 03"

Include:
React • TypeScript • Vite • Client-Side Security

Add:
"© 2026 PassGuard"

INTERACTIONS:
Add polished micro-interactions:
- Smooth password strength meter animation
- Checklist transitions
- Button hover effects
- Card hover glow
- Password visibility toggle
- Clear password button
- Responsive layout transitions

ACCESSIBILITY:
- Proper labels for inputs
- Keyboard accessible controls
- Visible focus states
- Good contrast
- Do not rely only on color to communicate password strength
- Use aria labels where appropriate

RESPONSIVENESS:
The application must look excellent on:
- Desktop
- Laptop
- Tablet
- Mobile

IMPORTANT UX:
The password checker should work immediately as the user types without requiring a submit button.

Do not add authentication, databases, accounts, external APIs, analytics, or backend password storage.

FINAL RESULT:
The final application should look like a polished cybersecurity SaaS/product landing page combined with an interactive password security dashboard.

Make the visual quality impressive enough for:
- Internship evaluation
- GitHub portfolio
- LinkedIn project showcase
- Screenshots and demo videos

Prioritize a clean, premium, futuristic cybersecurity aesthetic with excellent spacing, typography, animations, and usability.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://passguard-insight.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/88fc918c-3130-470c-8896-d41ef176160d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
