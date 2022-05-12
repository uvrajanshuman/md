import {
    faBold,
    faItalic,
    faStrikethrough,
    faQuoteLeft,
    faListUl,
    faListOl,
    faListCheck,
    faTable,
    faLink,
    faImage,
    faCode,
    faMinus,
    faFaceSmileBeam,
    faCopyright,
    faHeading,
    faSun,
    faMoon,
    faX
  } from '@fortawesome/free-solid-svg-icons'

  const iconBold = faBold;
  const iconItalic = faItalic;
  const iconStrikethrough = faStrikethrough;
  const iconHorizontalRule = faMinus;
  const iconHeading = faHeading;
  const iconListUl = faListUl;
  const iconListOl = faListOl;
  const iconCheckList = faListCheck;
  const iconBlockQuote = faQuoteLeft;
  const iconTable = faTable;
  const iconLink = faLink;
  const iconImage = faImage;
  const iconCode = faCode;
  const iconHtmlEntity = faCopyright;
  const iconEmoji = faFaceSmileBeam;
  const iconSun = faSun;
  const iconMoon = faMoon;
  const iconCancel = faX

export interface DecoratorTemplate {
    title: string,
    placeHolder?: string,
    markdown: (placeHolder?: string) => string
}

export const DecoratorTemplateMap: { [key: string]: DecoratorTemplate } = {
    heading1: {
        title: 'Heading1',
        placeHolder: 'Heading 1',
        markdown: (placeholder?: string) => `# ${placeholder}`
    },
    heading2: {
        title: 'Heading 2',
        placeHolder: 'Heading level 2',
        markdown: (placeHolder?: string) => `##${placeHolder}##`
    },
    heading3: {
        title: 'Heading 3',
        placeHolder: 'Heading level 3',
        markdown: (placeHolder?: string) => `###${placeHolder}###`
    },
    heading4: {
        title: 'Heading 4',
        placeHolder: 'Heading level 4',
        markdown: (placeHolder?: string) => `####${placeHolder}####`
    },
    heading5: {
        title: 'Heading 5',
        placeHolder: 'Heading level 5',
        markdown: (placeHolder?: string) => `#####${placeHolder}#####`
    },
    heading6: {
        title: 'Heading 6',
        placeHolder: 'Heading level 6',
        markdown: (placeHolder?: string) => `######${placeHolder}######`
    },
    bold: {
        title: 'bold',
        placeHolder: 'Bold text',
        markdown: (placeHolder?: string) => `**${placeHolder}**`
    },
    italic: {
        title: 'Italic',
        placeHolder: 'Italic text',
        markdown: (placeHolder?: string) => `*${placeHolder}*`
    },
    strikethrough: {
        title: 'Strikethrough',
        placeHolder: 'Striked text',
        markdown: (placeHolder?: string) => `~~${placeHolder}~~`
    },
    horizontalRule: {
        title: 'horizontalRule',
        markdown: () => `----`
    },
    unorderedList: {
        title: 'UnorderedList',
        placeHolder: 'First Item',
        markdown: (placeHolder?: string) => `- ${placeHolder}##`
    },
    orderedList: {
        title: 'OrderedList',
        placeHolder: 'First Item',
        markdown: (placeHolder?: string) => `1. ${placeHolder}##`
    },
    checkList: {
        title: 'CheckList',
        placeHolder: 'First Item',
        markdown: (placeHolder?: string) => `- [x] ${placeHolder} \n - [ ] Another item`
    },
    blockQuote: {
        title: 'BlockQuote',
        placeHolder: 'Block Quote',
        markdown: (placeHolder?: string) => `> ${placeHolder}`
    },
    table: {
        title: 'Table',
        placeHolder: '',
        markdown: (placeHolder?: string) => `|${placeHolder}|  |\n|--|--|\n|  |  |`
    },
    link: {
        title: 'Link',
        placeHolder: 'www.google.com',
        markdown: (placeHolder?: string) => `[enter link description here](${placeHolder})`
    },
    image: {
        title: 'Image',
        placeHolder: 'www.google.com',
        markdown: (placeHolder?: string) => `![enter image description here](${placeHolder})`
    },
    code: {
        title: 'Code',
        markdown: () => `\`\`\`javascript\nconst language = 'javascript';\'\'\'`
    },
    htmlEntity: {
        title: 'HtmlEntity',
        placeHolder: '&forall;',
        markdown: (placeHolder?: string) => `${placeHolder}`
    },
    emoji: {
        title: 'Emoji',
        placeHolder: ':heart:',
        markdown: (placeHolder?: string) => `:${placeHolder}:`
    },
}

export const OPERATORS = [
   {
        title: 'heading',
        subtitle: 'Heading',
        icon: iconHeading,
        headings: [{
            title: 'heading1',
            subtitle: 'Heading 1',
            icon: 'H1'
        },
        {
            title: 'heading2',
            subtitle: 'Heading 2',
            icon: 'H2'
        },
        {
            title: 'heading3',
            subtitle: 'Heading 3',
            icon: 'H3'
        },
        {
            title: 'heading4',
            subtitle: 'Heading 4',
            icon: 'H4'
        },
        {
            title: 'heading5',
            subtitle: 'Heading 5',
            icon: 'H5'
        },
        {
            title: 'heading6',
            subtitle: 'Heading 6',
            icon: 'H6'
        }]
    },
    {
        title: 'bold',
        subtitle: 'Bold',
        icon: iconBold
    },
    {
        title: 'italic',
        subtitle: 'Italic',
        icon: iconItalic
    },
    {
        title: 'strikethrough',
        subtitle: 'Strikethrough',
        icon: iconStrikethrough
    },
    {
        title: 'horizontalRule',
        subtitle: 'Horizontal Rule',
        icon: iconHorizontalRule
    },
    {
        title: 'unorderedList',
        subtitle: 'Unordered List',
        icon: iconListUl
    },
    {
        title: 'orderedList',
        subtitle: 'Ordered List',
        icon: iconListOl
    },
    {
        title: 'checkList',
        subtitle: 'Check List',
        icon: iconCheckList
    },
    {
        title: 'blockquote',
        subtitle: 'Blockquote',
        icon: iconBlockQuote
    },
    {
        title: 'table',
        subtitle: 'Table',
        icon: iconTable
    },
    {
        title: 'link',
        subtitle: 'Link',
        icon: iconLink
    },
    {
        title: 'image',
        subtitle: 'Image',
        icon: iconImage
    },
    {
        title: 'code',
        subtitle: 'Code',
        icon: iconCode
    },
    {
        title: 'htmlEntity',
        subtitle: 'Html Entity',
        icon: iconHtmlEntity
    },
    {
        title: 'emoji',
        subtitle: 'Emoji',
        icon: iconEmoji
    }
]