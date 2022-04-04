import './typography-story.scss'

const mdcTypoClass = 'mdc-typography--'

const TypographyGroup = ({title, list}) => (
  <section className="typo-group">
    <h2 className={`typo-group__title ${mdcTypoClass}headline3`}>{title}</h2>
    <div className="typo-group__fonts">
      {list.map((item, index) => (
        <div className="font-item" key={`font-item-${index}`}>
          {item.title}
          <p>{item.font}<br/>{item.size}</p>
        </div>
      ))}        
    </div>
  </section>
)

const TypographyStory = () => {
  const typoHeaders = [
    {
      title: <h1 className={`${mdcTypoClass}headline1`}>Header 1 - H1</h1>,
      font: 'Roboto - Medium',
      size: '36px',
    },
    {
      title: <h2 className={`${mdcTypoClass}headline2`}>Header 2 - h2</h2>,
      font: 'Roboto - Medium',
      size: '36pt | 40pts',
    },
    {
      title: <h3 className={`${mdcTypoClass}headline3`}>Header 3 - h3</h3>,
      font: 'Roboto - Medium',
      size: '36pt | 40pts',
    },
    {
      title: <h4 className={`${mdcTypoClass}headline4`}>Header 4 - h4</h4>,
      font: 'Roboto - Medium',
      size: '36pt | 40pts',
    },
    {
      title: <h5 className={`${mdcTypoClass}headline5`}>Header 5 - h5</h5>,
      font: 'Roboto - Medium',
      size: '36pt | 40pts',
    },
  ]

  const typoNavigation = [
    {
      title: <span className={`${mdcTypoClass}subtitle1`}>Default Tab</span>,
      font: 'Roboto - Light',
      size: '14pt | 16pt'
    },
    {
      title: <span className={`${mdcTypoClass}subtitle2`}>Selected Tab</span>,
      font: 'Roboto - Medium',
      size: '14pt | 16pt'
    },
  ]

  const typoContent = [
    {
      title: <p className={`${mdcTypoClass}body1`}>Default Tab</p>,
      font: 'Roboto - Light',
      size: '14pt | 16pt'
    },
  ]


  return (
    <main className="typography-story">
      <h1 className="colors-story__title mdc-typography--headline3">
        TYPOGRAPHY
      </h1>
  
    <div className="typography-story__content">
      <div className="content__column">
        <TypographyGroup title="Headers" list={typoHeaders} />
        <TypographyGroup title="Navigation" list={typoNavigation} />
      </div>
      <div className="content__column">
        <TypographyGroup title="Content" list={typoContent} />
        
      </div>
    </div>
    
  
    </main>
  )
}

export default {
  title: 'Styles',
  component: TypographyStory,
  parameters: {
    options: {
      showPanel: false
    }
  }
}

export const Typography = TypographyStory.bind({})