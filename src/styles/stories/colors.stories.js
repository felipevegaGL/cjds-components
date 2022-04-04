import './colors-story.scss'

const ColorGroup = ({label, list}) => (
  <section className="color-group">
    <div
      className="color-title"
      style={{color: list[0].code}}
    >
      <div
        className="color-title__bullet"
      >
      </div>
      <h2 className="color-title__title mdc-typography--headline6">
        {label}
      </h2>      
    </div>
    <div className="color-group__table mdc-data-table">
      <div className="mdc-data-table__table-container">
        <table className="mdc-data-table__table">
          <thead>
            <tr className="mdc-data-table__header-row">
              <th className="mdc-data-table__header-cell">
                Color
              </th>
              <th className="mdc-data-table__header-cell">
                Hex Code
              </th>
              <th className="mdc-data-table__header-cell">
                Sass Code
              </th>
            </tr>
          </thead>
          <tbody className="mdc-data-table__content">
            {list.map((item, index) => (
              <tr className="mdc-data-table__row" key={`color-item-${index}`}>
                <td className="mdc-data-table__cell">
                  <div className="color-item__bullet" style={{backgroundColor: item.code}}></div>
                </td>
                <td className="mdc-data-table__cell">{item.code}</td>
                <td className="mdc-data-table__cell">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

const ColorsStory = () => {
  const colorNavy = [
    {code: '#192A4c', name: '$cj-navy-1'},
    {code: '#25304c', name: '$cj-navy-2'},
    {code: '#25327b', name: '$cj-navy-3'},
    {code: '#151e33', name: '$cj-navy-4'},
  ]

  const colorGray = [
    {code: '#a0a7b5', name: '$cj-gray-1'},
    {code: '#fdfdfd', name: '$cj-gray-light-1'},
    {code: '#eeeff2', name: '$cj-gray-light-2'},
    {code: '#f4f6f9', name: '$cj-gray-light-3'},
    {code: '#d3d8e1', name: '$cj-gray-light-4'},
  ]

  const colorAqua = [
    {code: '#10aab1', name: '$cj-aqua-1'},
    {code: '#25b4bb', name: '$cj-aqua-2'},
    {code: '#a9dadd', name: '$cj-aqua-3'},
    {code: '#0d8c92', name: '$cj-aqua-4'},
    {code: '#0a7075', name: '$cj-aqua-5'},
  ]

  const colorAmber = [
    {code: '#ff980e', name: '$cj-amber-1'},
    {code: '#fef3dd', name: '$cj-amber-2'},
  ]

  const colorRed = [
    {code: '#cd1a1a', name: '$cj-red-1'},
    {code: '#ff3545', name: '$cj-red-2'},
    {code: '#ffebeb', name: '$cj-red-3'},
  ]

  const colorGreen = [
    {code: '#52c41a', name: '$cj-green-1'},
    {code: '#ebfde2', name: '$cj-green-2'},
    {code: '#e2f1ff', name: '$cj-green-3'},
  ]

  const colorBlue = [
    {code: '#0049ff', name: '$cj-blue-1'},
    {code: '#2f74fe', name: '$cj-blue-2'},
    {code: '#e2f1ff', name: '$cj-blue-3'},
  ]

  const colorBlackAndWhite = [
    {code: '#000000', name: '$cj-black'},
    {code: '#ffffff', name: '$cj-white'},
  ]

  return (
    <main className="colors-story">
      <h1 className="colors-story__title mdc-typography--headline3">
        COLORS
      </h1>

      <ColorGroup label="Navy" list={colorNavy} />
      <ColorGroup label="Gray" list={colorGray} />  
      <ColorGroup label="Aqua" list={colorAqua} />
      <ColorGroup label="Amber" list={colorAmber} />
      <ColorGroup label="Green" list={colorGreen} />
      <ColorGroup label="Bright Blue" list={colorBlue} />
      <ColorGroup label="Black and White" list={colorBlackAndWhite} />
  
    </main>
  )
}

export default {
  title: 'Styles',
  component: ColorsStory,
  parameters: {
    options: {
      showPanel: false
    }
  }
}

export const Colors = ColorsStory.bind({})