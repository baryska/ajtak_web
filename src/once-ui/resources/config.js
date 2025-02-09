const baseURL = 'ajtakproskoly.cz'

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
    title: 'Ajťák pro vaši školu',
    description: 'Abyste vy už nemuseli.',
    icons: {
        icon: '/favicon.ico',
    },
}


// default open graph data
const og = {
    title: 'Ajťák pro vaši školu',
    description: 'Na IT už ani nepomyslíte',
    type: 'website'
}

// default schema data
const schema = {
    logo: '/src/app/favicon.ico',
    type: 'Organization',
    name: 'Ajťák pro školy',
    description: 'Na IT už ani nepomyslíte',
    email: 'vaclav@ajtakproskoly.cz'
}

// social links
const social = {
    twitter: '',
    linkedin: '',
    discord: ''
}

export { baseURL, style, meta, og, schema, social };
