const baseURL = 'demo.once-ui.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'light',        // dark | light
    neutral:     'slate',        // sand | gray | slate
    brand:       'custom',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'custom',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'color',    // color | contrast
    solidStyle:  'plastic',        // flat | plastic
    border:      'rounded',     // rounded | playful | conservative
    surface:     'filled', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Once UI - Your Personalized Design System for Next.js',
    description: 'An open-source design system and component library for Next.js that emphasizes easy styling and accessibility in UI development.'
}


// default open graph data
const og = {
    title: 'Once UI for Next.js',
    description: 'We let designers code and developers design.',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: 'Ajťák pro školy',
    description: 'Na IT už ani nepomyslíte',
    email: 'vaclav@ajtakproskoly.cz'
}

// social links
const social = {
    twitter: 'https://www.twitter.com/_onceui',
    linkedin: 'https://www.linkedin.com/company/once-ui/',
    discord: 'https://discord.com/invite/5EyAQ4eNdS'
}

export { baseURL, style, meta, og, schema, social };
