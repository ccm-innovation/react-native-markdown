const styles = {
  blockQuote: {
    flexDirection: 'row',
    marginLeft: 5,
    marginBottom: 10,
    paddingLeft: 10,
    borderLeftColor: '#777',
    borderLeftWidth: 3,
    borderStyle: 'solid'
  },
  blockQuoteSectionBar: {
    width: 3,
    height: null,
    backgroundColor: '#DDDDDD',
    marginRight: 15,
  },
  codeBlock: {
    fontFamily: 'Courier',
    // fontWeight: '500',
    backgroundColor: '#e5e5e5',
    padding: 10,
    marginBottom: 10
  },
  del: {
    containerBackgroundColor: '#222222',
  },
  emph: {
    fontStyle: 'italic',
  },
  heading: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  heading1: {
    fontSize: 32,
    fontWeight: '200',
  },
  heading2: {
    fontSize: 24,
    fontWeight: '200',
  },
  heading3: {
    fontSize: 18,
    fontWeight: '200',
  },
  heading4: {
    fontSize: 16,
    fontWeight: '200',
  },
  heading5: {
    fontSize: 13,
    fontWeight: '200',
  },
  heading6: {
    fontSize: 11,
    fontWeight: '200',
  },
  hr: {
    backgroundColor: '#cccccc',
    height: 1,
  },
  image: {
    width: 320,
    height: 320,
  },
  inlineCode: {
    backgroundColor: '#eeeeee',
    borderColor: '#dddddd',
    borderRadius: 3,
    borderWidth: 1,
    fontFamily: 'Courier',
    fontWeight: 'bold',
  },
  link: {
    textDecorationLine: 'underline',
  },
  list: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  listItem: {
    flex: 1,
    marginBottom: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  listItemNumber: {
    fontWeight: 'bold',
  },
  mailTo: {
    textDecorationLine: 'underline',
  },
  paragraph: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  listItemText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#222222',
  },
  strong: {
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: '#222222',
    borderRadius: 3,
  },
  tableHeader: {
    backgroundColor: '#222222',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tableHeaderCell: {
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 5,
  },
  tableRow: {
    borderBottomWidth: 1,
    borderColor: '#222222',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tableRowLast: {
    borderColor: 'transparent',
  },
  tableRowCell: {
    padding: 5,
  },
  text: {
    color: '#222222',
  },
  underline: {
    textDecorationLine: 'underline'
  },
  video: {
    width: 300,
    height: 300,
  }
}

export default styles
